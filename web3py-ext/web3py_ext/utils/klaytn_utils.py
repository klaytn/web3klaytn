import binascii
import json
from eth_utils.curried import (
    is_0x_prefixed,
)

def to_pretty(data):
    return json.dumps(data, indent=2)

def bytes_to_hex_str(bytes: bytes) -> str:
    return binascii.hexlify(bytes).decode('utf-8')

def hex_str_to_bytes(hex: str) -> bytes:
    if is_0x_prefixed(hex):
        return bytes.fromhex(hex[2:])
    else:
        return bytes.fromhex(hex)