from typing import Any, Dict, Tuple
from cytoolz import (
    dissoc,
)
from hexbytes import HexBytes
import rlp
from rlp.sedes import (
    big_endian_int,
    Binary,
    CountableList,
    List,
)
from eth_rlp import (
    HashableRLP,
)
from eth_utils.curried import (
    is_0x_prefixed,
)
from rlp.exceptions import DeserializationError, SerializationError
from web3py_ext.transaction.extended_transaction_utils import (
    multisig_account_key_rpc_to_rlp_structure,
    multisig_account_key_rlp_to_rpc_structure,
    is_rpc_structured_role_based_account_key,
    bytes_to_hex_str,
)

class AccountKey(object):
    @classmethod
    def serialize(cls, obj: Any) -> bytes:
        if obj != 0 and 'type' not in obj:
            raise SerializationError('Klaytn accountKey should have type (0-5)', obj)

        if obj == 0:
            return rlp.encode(0)
        elif obj["type"] == AccountKeyLegacy.key_type:
            return AccountKeyLegacy.serialize(obj)
        elif obj["type"] == AccountKeyPublic.key_type:
            return AccountKeyPublic.serialize(obj)
        elif obj["type"] == AccountKeyFail.key_type:
            return AccountKeyFail.serialize(obj)
        elif obj["type"] == AccountKeyWeightedMultisig.key_type:
            return AccountKeyWeightedMultisig.serialize(obj)
        elif obj["type"] == AccountKeyRoleBased.key_type:
            return AccountKeyRoleBased.serialize(obj)
        else:
            raise SerializationError('Invalid accountKey type', obj["type"])

    @classmethod
    def deserialize(cls, serial: bytes) -> Dict[str, Any]:
        if len(serial) == 0:
            raise DeserializationError("Empty rlp encoded data", serial)
        
        t = serial[0]
        if t == AccountKeyLegacy.key_type:
            return AccountKeyLegacy.deserialize(serial)
        elif t == AccountKeyPublic.key_type:
            return AccountKeyPublic.deserialize(serial)
        elif t == AccountKeyFail.key_type:
            return AccountKeyFail.deserialize(serial)
        elif t == AccountKeyWeightedMultisig.key_type:
            return AccountKeyWeightedMultisig.deserialize(serial)
        elif t == AccountKeyRoleBased.key_type:
            return AccountKeyRoleBased.deserialize(serial)
        elif serial == b'\x80':
            return 0
        else:
            raise SerializationError('Invalid accountKey type', t) 

class AccountKeyLegacy(object):
    key_type = 1
    
    @classmethod
    def serialize(cls, obj) -> bytes:
        if 'key' not in obj:
            raise SerializationError('Klaytn accountKeyLegacy: key should have empty list []', obj)
        return rlp.encode(obj['type']) + rlp.encode([])

    @classmethod
    def deserialize(cls, serial) -> Dict[str, Any]:
        key = serial[1:]
        if key != b'\xc0' or len(key) != 1:
            raise SerializationError('Klaytn accountKeyLegacy: rlp decoding error', serial)
        return {
            'type': cls.key_type,
            'key': rlp.decode(key)
        }

class AccountKeyPublic(object):
    key_type = 2

    @classmethod
    def serialize(cls, obj) -> bytes:
        if 'key' not in obj and (len(obj['key']) != 66 or len(obj['key']) != 68):
           raise SerializationError('Klaytn accountKeyPublic has invalid fields', obj)

        if is_0x_prefixed(obj['key']):
            key = bytes.fromhex(obj['key'][2:])
        else:
            key = bytes.fromhex(obj['key'])
        return b'\x02\xa1' + key

    @classmethod
    def deserialize(cls, serial) -> Dict[str, Any]:
        if len(serial) != 35:
           raise SerializationError('Klaytn RLP encoded accountKeyPublic length should 35, but ', len(serial))
        return {
            'type': cls.key_type,
            'key': '0x' + bytes_to_hex_str(serial[2:])
        }

class AccountKeyFail(object):
    key_type = 3

    @classmethod
    def serialize(cls, obj) -> bytes:
        if 'key' not in obj or obj['key'] != []:
            raise SerializationError('Klaytn accountKeyLegacy: key should have empty list []', obj)
        return rlp.encode(obj['type']) + rlp.encode([])

    @classmethod
    def deserialize(cls, serial) -> Dict[str, Any]:
        key = serial[1:]
        if key != b'\xc0' or len(key) != 1:
            raise SerializationError('Klaytn accountKeyFail: rlp decoding error', serial)
        return {
            'type': cls.key_type,
            'key': rlp.decode(key)
        }


class AccountKeyWeightedMultisig(object):
    key_type = 4

    _key_serializer = type(
        "_key_serializer",
        (HashableRLP,),
        {
            "fields": (
                ('threshold', big_endian_int),
                ('keys', CountableList(
                    List(
                        [
                            big_endian_int,
                            Binary.fixed_length(33, allow_empty=False),
                        ],
                    ),
                )),
            ),
        },
    )

    @classmethod
    def serialize(cls, obj) -> bytes:
        obj_without_type = dissoc(obj, 'type')
        rlp_structured = multisig_account_key_rpc_to_rlp_structure(obj_without_type)
        key_serializer = cls._key_serializer.from_dict(rlp_structured)
        return rlp.encode(cls.key_type) + rlp.encode(key_serializer)

    @classmethod
    def deserialize(cls, serial) -> Dict[str, Any]:
        key = rlp.decode(serial[1:], cls._key_serializer).as_dict()
        rpc_key = multisig_account_key_rlp_to_rpc_structure(key)
        return {
            'type':cls.key_type,
            'threshold':rpc_key['threshold'],
            'keys':rpc_key['keys']
        }

class AccountKeyRoleBased(object):
    key_type = 5
    
    @classmethod
    def serialize(cls, obj) -> bytes:
        if 'keys' not in obj:
            raise SerializationError("Invalid RoleBasedAccountKey: there is no keys field")
        if is_rpc_structured_role_based_account_key(obj['keys']):
            encoded_keys = [
                AccountKey.serialize(obj['keys']['roleTransactionKey']), 
                AccountKey.serialize(obj['keys']['roleAccountUpdateKey']), 
                AccountKey.serialize(obj['keys']['roleFeePayerKey'])
            ]
            return rlp.encode(cls.key_type) + rlp.encode(encoded_keys)

    @classmethod
    def deserialize(cls, serial) -> Dict[str, Any]:
        keys = rlp.decode(serial[1:])
        if len(keys) != 3:
            raise DeserializationError("RoleBasedAccountKey should have 3 types of keys but ", len(keys))
        return {
            'type': cls.key_type,
            'keys': {
                'roleTransactionKey' : AccountKey.deserialize(keys[0]),
                'roleAccountUpdateKey' : AccountKey.deserialize(keys[1]),
                'roleFeePayerKey' : AccountKey.deserialize(keys[2]),
            },
        }
