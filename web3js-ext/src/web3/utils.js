/*
 Modifications copyright 2018 The caver-js Authors
 This file is part of web3.js.

 web3.js is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 web3.js is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with web3.js.  If not, see <http://www.gnu.org/licenses/>.

 This file is derived from web3.js/packages/web3-utils/src/index.js (2019/06/12).
 Modified and improved for the caver-js development.
 */
/**
 * @file utils.js
 * @author Marek Kotewicz <marek@parity.io>
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

const _ = require('lodash')
const ethjsUnit = require('ethjs-unit')
const utils = require('./utils')


const _ = require('lodash')
const BN = require('bn.js')
const BigNumber = require('bignumber.js')
const numberToBN = require('number-to-bn')
const utf8 = require('utf8')

/**
 * Returns value of unit in Wei
 *
 * @ignore
 * @param {string} unit the unit to convert to, default ether
 * @returns {BN} value of the unit (in Wei)
 * @throws error if the unit is not correct:w
 */
const getUnitValue = function(unit) {
    unit = unit ? unit.toLowerCase() : 'ether'
    if (!ethjsUnit.unitMap[unit]) {
        throw new Error(
            `This unit "${unit}" doesn't exist, please use the one of the following units${JSON.stringify(ethjsUnit.unitMap, null, 2)}`
        )
    }
    return unit
}

/**
 * Takes a number of wei and converts it to any other ether unit.
 *
 * Possible units are:
 *   SI Short   SI Full        Effigy       Other
 * - kwei       femtoether     babbage
 * - mwei       picoether      lovelace
 * - gwei       nanoether      shannon      nano
 * - --         microether     szabo        micro
 * - --         milliether     finney       milli
 * - ether      --             --
 * - kether                    --           grand
 * - mether
 * - gether
 * - tether
 *
 * @ignore
 * @param {Number|String} number can be a number, number string or a HEX of a decimal
 * @param {String} unit the unit to convert to, default ether
 * @return {String|Object} When given a BN object it returns one as well, otherwise a number
 */
const fromWei = function(number, unit) {
    unit = getUnitValue(unit)

    if (!utils.isBN(number) && !_.isString(number)) {
        throw new Error('Please pass numbers as strings or BigNumber objects to avoid precision errors.')
    }

    return utils.isBN(number) ? ethjsUnit.fromWei(number, unit) : ethjsUnit.fromWei(number, unit).toString(10)
}

/**
 * Takes a number of a unit and converts it to wei.
 *
 * Possible units are:
 *   SI Short   SI Full        Effigy       Other
 * - kwei       femtoether     babbage
 * - mwei       picoether      lovelace
 * - gwei       nanoether      shannon      nano
 * - --         microether     szabo        micro
 * - --         microether     szabo        micro
 * - --         milliether     finney       milli
 * - ether      --             --
 * - kether                    --           grand
 * - mether
 * - gether
 * - tether
 *
 * @ignore
 * @param {Number|String|BN} number can be a number, number string or a HEX of a decimal
 * @param {String} unit the unit to convert from, default ether
 * @return {String|Object} When given a BN object it returns one as well, otherwise a number
 */
const toWei = function(number, unit) {
    unit = getUnitValue(unit)

    if (!utils.isBN(number) && !_.isString(number)) {
        throw new Error('Please pass numbers as strings or BigNumber objects to avoid precision errors.')
    }

    return utils.isBN(number) ? ethjsUnit.toWei(number, unit) : ethjsUnit.toWei(number, unit).toString(10)
}

// For Klay unit
/**
 * Shows all possible KLAY values and their amount in peb.
 *
 * @example
 * caver.utils.unitMap
 *
 * @alias unitMap
 * @memberof module:utils
 * @inner
 *
 * @type {Map<string,string>}
 */
const unitKlayMap = {
    peb: '1',
    kpeb: '1000',
    Mpeb: '1000000',
    Gpeb: '1000000000',
    Ston: '1000000000',
    ston: '1000000000',
    uKLAY: '1000000000000',
    mKLAY: '1000000000000000',
    KLAY: '1000000000000000000',
    kKLAY: '1000000000000000000000',
    MKLAY: '1000000000000000000000000',
    GKLAY: '1000000000000000000000000000',
    TKLAY: '1000000000000000000000000000000',
}

/**
 * @example
 * { unit: 'peb', pebFactor: 0 }
 *
 * @typedef {object} module:utils.Unit
 * @property {string} unit - The unit string.
 * @property {number} pebFactor - The peb factor.
 */
/**
 * Shows all KLAY units.
 *
 * @example
 * caver.utils.klayUnit
 *
 * @alias klayUnit
 * @memberof module:utils
 * @inner
 *
 * @type {Map<string,module:utils.Unit>}
 */
const KlayUnit = {
    peb: { unit: 'peb', pebFactor: 0 },
    kpeb: { unit: 'kpeb', pebFactor: 3 },
    Mpeb: { unit: 'Mpeb', pebFactor: 6 },
    Gpeb: { unit: 'Gpeb', pebFactor: 9 },
    ston: { unit: 'ston', pebFactor: 9 },
    uKLAY: { unit: 'uKLAY', pebFactor: 12 },
    mKLAY: { unit: 'mKLAY', pebFactor: 15 },
    KLAY: { unit: 'KLAY', pebFactor: 18 },
    kKLAY: { unit: 'kKLAY', pebFactor: 21 },
    MKLAY: { unit: 'MKLAY', pebFactor: 24 },
    GKLAY: { unit: 'GKLAY', pebFactor: 27 },
    TKLAY: { unit: 'TKLAY', pebFactor: 30 },
}

const unitKlayToEthMap = {
    peb: 'wei',
    kpeb: 'kwei',
    Mpeb: 'mwei',
    Gpeb: 'gwei',
    Ston: 'gwei',
    ston: 'gwei',
    uKLAY: 'microether',
    mKLAY: 'milliether',
    KLAY: 'ether',
    kKLAY: 'kether',
    MKLAY: 'mether',
    GKLAY: 'gether',
    TKLAY: 'tether',
}

const getKlayUnitValue = function(u) {
    let unit = u || 'KLAY'

    if (_.isObject(u) && u.unit) unit = u.unit

    if (!unitKlayMap[unit]) {
        throw new Error(
            `This unit "${unit}" doesn't exist, please use the one of the following units${JSON.stringify(unitKlayMap, null, 2)}`
        )
    }

    if (u && u.pebFactor !== undefined && KlayUnit[u.unit].pebFactor !== u.pebFactor) {
        throw new Error(`peb factor does not match with given unit`)
    }

    return unit
}

const fromPeb = function(number, unit) {
    // kaly unit to eth unit
    unit = getKlayUnitValue(unit)
    unit = unitKlayToEthMap[unit]

    unit = getUnitValue(unit)

    if (!utils.isBN(number) && !_.isString(number)) {
        number = tryNumberToString(number)
    }

    return ethjsUnit.fromWei(number, unit)
}

const toPeb = function(number, unit) {
    // kaly unit to eth unit
    unit = getKlayUnitValue(unit)
    unit = unitKlayToEthMap[unit]

    unit = getUnitValue(unit)

    // BigNumber can support decimal points but BN does not support.
    // So if BigNumber type number is came as a parameter,
    // use `toString` function of BigNumber to prevent error while converting BigNumber to BN.
    if (utils.isBigNumber(number)) number = number.toString()
    if (!utils.isBN(number) && !_.isString(number)) {
        number = tryNumberToString(number)
    }

    return utils.isBN(number) ? ethjsUnit.toWei(number, unit) : ethjsUnit.toWei(number, unit).toString(10)
}

/**
 * Converts `peb` amount to specific unit amount.
 * Please note that "peb" is the smallest KLAY unit, and you should always use "peb" as the unit of KLAY.
 * Convert to "KLAY" only for display reasons.
 *
 * @example
 * const result = caver.utils.convertFromPeb('1', 'KLAY') // '0.000000000000000001'
 * const result = caver.utils.convertFromPeb(1, 'KLAY') // '0.000000000000000001'
 * const result = caver.utils.convertFromPeb(1, caver.utils.klayUnit.KLAY) // '0.000000000000000001'
 *
 * @memberof module:utils
 * @inner
 *
 * @param {number|string|BN|BigNumber} amount The value in peb.
 * @param {string|KlayUnit} [unitString] (default, `'KLAY'`) The unit of KLAY to convert your "peb" into. `number` will be divided by one of the following denominators for the unit provided:<br>- `peb`: '1' <br> - `kpeb`: '1000' <br> - `Mpeb`: '1000000' <br> - `Gpeb`: '1000000000' <br> - `Ston`: '1000000000' <br> - `uKLAY`: '1000000000000' <br> - `mKLAY`: '1000000000000000' <br> - `KLAY`: '1000000000000000000' <br> - `kKLAY`: '1000000000000000000000' <br> - `MKLAY`: '1000000000000000000000000' <br> - `GKLAY`: '1000000000000000000000000000' <br>
 * @return {string} The string number.
 */
const convertFromPeb = function(amount, unitString) {
    const converted = fromPeb(amount, unitString)
    return utils.isBN(converted) ? converted.toString(10) : converted
}

/**
 * Converts any KLAY value into peb.
 * Please note that "peb" is the smallest KLAY unit, and you should always use "peb" as the unit of KLAY.
 *
 * @example
 * const result = caver.utils.convertToPeb('1', 'KLAY') // '1000000000000000000'
 * const result = caver.utils.convertToPeb(1, 'KLAY') // '1000000000000000000'
 * const result = caver.utils.convertToPeb(1, caver.utils.klayUnit.KLAY) // '1000000000000000000'
 *
 * @memberof module:utils
 * @inner
 *
 * @param {number|string|BN|BigNumber} amount the amount to convert
 * @param {string|KlayUnit} [unitString] (default, `'KLAY'`) The unit of KLAY to convert from. `number` will be divided by one of the following denominators for the unit provided:<br>- `peb`: '1' <br> - `kpeb`: '1000' <br> - `Mpeb`: '1000000' <br> - `Gpeb`: '1000000000' <br> - `Ston`: '1000000000' <br> - `uKLAY`: '1000000000000' <br> - `mKLAY`: '1000000000000000' <br> - `KLAY`: '1000000000000000000' <br> - `kKLAY`: '1000000000000000000000' <br> - `MKLAY`: '1000000000000000000000000' <br> - `GKLAY`: '1000000000000000000000000000' <br>
 * @return {string|BN}
 */
const convertToPeb = function(number, unitString) {
    const converted = toPeb(number, unitString)
    return utils.isBN(converted) ? converted.toString(10) : converted
}

function tryNumberToString(number) {
    try {
        return utils.toBN(number).toString(10)
    } catch (e) {
        throw new Error('Please pass numbers as strings or BigNumber objects to avoid precision errors.')
    }
}


const txTypeToString = {
    '0x20': 'ACCOUNT_UPDATE',
    '0x21': 'FEE_DELEGATED_ACCOUNT_UPDATE',
    '0x22': 'FEE_DELEGATED_ACCOUNT_UPDATE_WITH_RATIO',
    '0x08': 'VALUE_TRANSFER',
    '0x10': 'VALUE_TRANSFER_MEMO',
    '0x09': 'FEE_DELEGATED_VALUE_TRANSFER',
    '0x0a': 'FEE_DELEGATED_VALUE_TRANSFER_WITH_RATIO',
    '0x11': 'FEE_DELEGATED_VALUE_TRANSFER_MEMO',
    '0x12': 'FEE_DELEGATED_VALUE_TRANSFER_MEMO_WITH_RATIO',
    '0x28': 'SMART_CONTRACT_DEPLOY',
    '0x29': 'FEE_DELEGATED_SMART_CONTRACT_DEPLOY',
    '0x2a': 'FEE_DELEGATED_SMART_CONTRACT_DEPLOY_WITH_RATIO',
    '0x30': 'SMART_CONTRACT_EXECUTION',
    '0x31': 'FEE_DELEGATED_SMART_CONTRACT_EXECUTION',
    '0x32': 'FEE_DELEGATED_SMART_CONTRACT_EXECUTION_WITH_RATIO',
    '0x38': 'CANCEL',
    '0x39': 'FEE_DELEGATED_CANCEL',
    '0x3a': 'FEE_DELEGATED_CANCEL_WITH_RATIO',
    '0x48': 'CHAIN_DATA_ANCHORING',
}

const HASH_LENGTH = 66

/**
 * Returns `true` if parameter is a BN instance, otherwise `false`.
 *
 * @example
 * const bn = new caver.utils.BN(10)
 * const result = caver.utils.isBN(bn)
 *
 * @memberof module:utils
 * @inner
 *
 * @param {*} bn
 * @return {boolean} `true` if a given value is a `BN.js` instance.
 */
const isBN = function(bn) {
    return BN.isBN(bn)
}

/**
 * Returns `true` if object is a BigNumber instance, otherwise `false`.
 *
 * @example
 * const bigNumber = new caver.utils.BigNumber(10)
 * const result = caver.utils.isBigNumber(bigNumber)
 *
 * @memberof module:utils
 * @inner
 *
 * @param {*} bigNumber
 * @return {boolean} `true` if a given value is a `Bignumber.js` instance.
 */
const isBigNumber = function(bigNumber) {
    return BigNumber.isBigNumber(bigNumber)
}

/**
 * Safely converts any given value (including `Bignumber.js` instances) into a `BN.js` instance, for handling big numbers in JavaScript.
 *
 * @example
 * const result = caver.utils.toBN(num)
 *
 * @memberof module:utils
 * @inner
 *
 * @param {number|string|BN|BigNumber} number The number to convert to a BN.js instance.
 * @return {BN} The {@link https://github.com/indutny/bn.js/|BN.js} instance.
 */
function toBN(number) {
    try {
        return numberToBN.apply(null, arguments)
    } catch (e) {
        throw new Error(`${e} Given value: "${number}"`)
    }
}

/**
 * Converts a negative number into a two's complement.
 *
 * @example
 * const result = caver.utils.toTwosComplement(num)
 *
 * @memberof module:utils
 * @inner
 *
 * @param {number|string|BN|BigNumber} number The number to convert.
 * @return {string} The converted hex string.
 */
const toTwosComplement = function(number) {
    return `0x${toBN(number)
        .toTwos(256)
        .toString(16, 64)}`
}

/**
 * Checks if a given string is a valid Klaytn address.
 * It will also check the checksum if the address has upper and lowercase letters.
 *
 * @example
 * const result = caver.utils.isAddress('0x{address in hex}')
 *
 * @memberof module:utils
 * @inner
 *
 * @param {string} address An address string.
 * @return {boolean} `true` if a given string is a valid Klaytn address.
 */
const isAddress = function(address) {
    // check if it has the basic requirements of an address
    if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
        return false
        // If it's ALL lowercase or ALL upppercase
    }
    if (/^(0x|0X)?[0-9a-f]{40}$/.test(address) || /^(0x|0X)?[0-9A-F]{40}$/.test(address)) {
        return true
        // Otherwise check each case
    }
    return checkAddressChecksum(address)
}

/**
 * Checks the checksum of a given address.
 * Will also return `false` on non-checksum addresses.
 *
 * @example
 * const result = caver.utils.checkAddressChecksum('0x{address in hex}')
 *
 * @memberof module:utils
 * @inner
 *
 * @param {string} address An address string.
 * @return {boolean}
 */
const checkAddressChecksum = function(address) {
    // Check each case
    address = address.replace(/^0x/i, '')
    const addressHash = sha3(address.toLowerCase()).replace(/^0x/i, '')

    for (let i = 0; i < 40; i++) {
        // the nth letter should be uppercase if the nth digit of casemap is 1
        if (
            (parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i]) ||
            (parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i])
        ) {
            return false
        }
    }
    return true
}

/**
 * Adds padding on the left of a string. Useful for adding paddings to HEX strings.
 *
 * @example
 * const result = caver.utils.padLeft('0x3456ff', 20) // '0x000000000000003456ff'
 * const result = caver.utils.padLeft('Hello', 20, 'x') // 'xxxxxxxxxxxxxxxHello'
 *
 * @memberof module:utils
 * @inner
 * @alias padLeft
 *
 * @param {string} string The string to add padding on the left.
 * @param {number} chars The number of characters the total string should have.
 * @param {string} [sign] The character sign to use, defaults to `0`.
 * @returns {string} The padded string.
 */
const leftPad = function(string, chars, sign) {
    const hasPrefix = /^0x/i.test(string) || typeof string === 'number'
    string = string.toString(16).replace(/^0x/i, '')

    const padding = chars - string.length + 1 >= 0 ? chars - string.length + 1 : 0

    return (hasPrefix ? '0x' : '') + new Array(padding).join(sign || '0') + string
}

/**
 * Adds padding on the right of a string, Useful for adding paddings to HEX strings.
 *
 * @example
 * const result = caver.utils.rightPad('0x3456ff', 20) // '0x3456ff00000000000000'
 * const result = caver.utils.rightPad('Hello', 20, 'x') // 'Helloxxxxxxxxxxxxxxx'
 *
 * @memberof module:utils
 * @inner
 * @alias padRight
 *
 * @param {string} string The string to add padding on the right.
 * @param {number} chars The number of characters the total string should have.
 * @param {string} [sign] The character sign to use, defaults to `0`.
 * @returns {string} The padded string.
 */
const rightPad = function(string, chars, sign) {
    const hasPrefix = /^0x/i.test(string) || typeof string === 'number'
    string = string.toString(16).replace(/^0x/i, '')

    const padding = chars - string.length + 1 >= 0 ? chars - string.length + 1 : 0

    return (hasPrefix ? '0x' : '') + string + new Array(padding).join(sign || '0')
}

/**
 * Returns the HEX representation of a given UTF-8 string.
 *
 * @example
 * const result = caver.utils.utf8ToHex('I have 100€') // '0x49206861766520313030e282ac'
 *
 * @memberof module:utils
 * @inner
 *
 * @param {string} str A UTF-8 string to convert to a HEX string.
 * @returns {string} The HEX string.
 */
const utf8ToHex = function(str) {
    str = utf8.encode(str)
    let hex = ''

    // remove \u0000 padding from either side
    str = str.replace(/^(?:\u0000)*/, '')
    str = str
        .split('')
        .reverse()
        .join('')
    str = str.replace(/^(?:\u0000)*/, '')
    str = str
        .split('')
        .reverse()
        .join('')

    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i)
        // if (code !== 0) {
        const n = code.toString(16)
        hex += n.length < 2 ? `0${n}` : n
        // }
    }

    return `0x${hex}`
}

/**
 * Returns the UTF-8 string representation of a given HEX value.
 *
 * @example
 * const result = caver.utils.hexToUtf8('0x49206861766520313030e282ac') // 'I have 100€'
 *
 * @memberof module:utils
 * @inner
 *
 * @param {string} hex A HEX string to convert to a UTF-8 string.
 * @returns {string} The UTF-8 string.
 */
const hexToUtf8 = function(hex) {
    if (!isHexStrict(hex)) {
        throw new Error(`The parameter "${hex}" must be a valid HEX string.`)
    }

    let str = ''
    let code = 0
    hex = hex.replace(/^0x/i, '')

    // remove 00 padding from either side
    hex = hex.replace(/^(?:00)*/, '')
    hex = hex
        .split('')
        .reverse()
        .join('')
    hex = hex.replace(/^(?:00)*/, '')
    hex = hex
        .split('')
        .reverse()
        .join('')

    const l = hex.length

    for (let i = 0; i < l; i += 2) {
        code = parseInt(hex.substr(i, 2), 16)
        // if (code !== 0) {
        str += String.fromCharCode(code)
        // }
    }

    return utf8.decode(str)
}

/**
 * Returns the number representation of a given HEX value.
 * Please note that this function is not useful for big numbers, rather use `caver.utils.toBN`.
 *
 * @example
 * const result = caver.utils.hexToNumber('0xea') // 234
 *
 * @memberof module:utils
 * @inner
 *
 * @param {string} A HEX string to be converted.
 * @return {number} The number representation of a given HEX value.
 */
const hexToNumber = function(value) {
    if (!value) return value

    if (typeof value === 'string' && !isHexStrict(value)) {
        throw new Error(`Given value "${value}" is not a valid hex string.`)
    }

    return toBN(value).toNumber()
}

/**
 * Returns the number representation of a given HEX value as a string.
 *
 * @example
 * const result = caver.utils.hexToNumberString('0xea') // '234'
 *
 * @memberof module:utils
 * @inner
 *
 * @param {string} A HEX string to be converted.
 * @return {string} The number as a string.
 */
const hexToNumberString = function(value) {
    if (!value) return value

    if (_.isString(value) && !isHexStrict(value)) {
        throw new Error(`Given value "${value}" is not a valid hex string.`)
    }

    return toBN(value).toString(10)
}

/**
 * Returns the HEX representation of a given number value.
 *
 * @example
 * const result = caver.utils.numberToHex(234) // '0xea'
 * const result = caver.utils.numberToHex('234')
 * const result = caver.utils.numberToHex(new caver.utils.BN(234))
 * const result = caver.utils.numberToHex(new caver.utils.BigNumber(234))
 *
 * @memberof module:utils
 * @inner
 *
 * @param {string|number|BN|BigNumber} value A number as string or number.
 * @return {string} The HEX value of the given number.
 */
const numberToHex = function(value) {
    if (_.isNumber(value)) {
        const bn = toBN(value)
        try {
            bn.toNumber()
        } catch (e) {
            throw new Error(`${e.message}: Number type cannot handle big number. Please use hex string or BigNumber/BN.`)
        }
    }

    if (_.isNull(value) || _.isUndefined(value)) {
        return value
    }

    if (!isFinite(value) && !isHexStrict(value)) {
        throw new Error(`Given input "${value}" is not a number.`)
    }

    const number = toBN(value)
    const result = number.toString(16)

    return number.lt(new BN(0)) ? `-0x${result.substr(1)}` : `0x${result}`
}

/**
 * Returns a HEX string from a byte array.
 *
 * @example
 * const result = caver.utils.bytesToHex([ 72, 101, 108, 108, 111, 33, 36 ]) // '0x48656c6c6f2124'
 *
 * @memberof module:utils
 * @inner
 *
 * @param {Array} bytes A byte array to convert.
 * @return {string} The HEX string.
 */
const bytesToHex = function(bytes) {
    const hex = []
    for (let i = 0; i < bytes.length; i++) {
        // eslint-disable-next-line no-bitwise
        hex.push((bytes[i] >>> 4).toString(16))

        // eslint-disable-next-line no-bitwise
        hex.push((bytes[i] & 0xf).toString(16))
    }
    return `0x${hex.join('')}`
}

/**
 * Returns a byte array from the given HEX string.
 *
 * @example
 * const result = caver.utils.hexToBytes('0x000000ea') // [ 0, 0, 0, 234 ]
 *
 * @memberof module:utils
 * @inner
 *
 * @param {string} hex A HEX string to be converted.
 * @return {Array.<number>} The byte array.
 */
const hexToBytes = function(hex) {
    hex = hex.toString(16)

    if (!isHexStrict(hex)) {
        throw new Error(`Given value "${hex}" is not a valid hex string.`)
    }

    hex = hex.replace(/^0x/i, '')

    const bytes = []
    for (let c = 0; c < hex.length; c += 2) {
        bytes.push(parseInt(hex.substr(c, 2), 16))
    }
    return bytes
}

/**
 * Converts any given value to HEX.
 * The numeric strings will be interpreted as numbers.
 * Text strings will be interpreted as UTF-8 strings.
 *
 * @example
 * const result = caver.utils.toHex('234') // '0xea'
 * const result = caver.utils.toHex(234) // '0xea'
 * const result = caver.utils.toHex(new caver.utils.BN('234')) // '0xea'
 * const result = caver.utils.toHex(new caver.utils.Bignumber('234')) // '0xea'
 * const result = caver.utils.toHex('I have 100€') // '0x49206861766520313030e282ac'
 *
 * @memberof module:utils
 * @inner
 *
 * @param {string|number|BN|BigNumber|Buffer} value The input to convert to HEX.
 * @return {string} The resulting HEX string.
 */
/* eslint-disable complexity */
const toHex = function(value, returnType) {
    if (Buffer.isBuffer(value)) {
        return returnType ? 'buffer' : bufferToHex(value)
    }
    if (isAddress(value)) {
        return returnType ? 'address' : `0x${value.toLowerCase().replace(/^0x/i, '')}`
    }

    if (_.isBoolean(value)) {
        return returnType ? 'bool' : value ? '0x01' : '0x00'
    }

    if (_.isObject(value) && !isBigNumber(value) && !isBN(value)) {
        return returnType ? 'string' : utf8ToHex(JSON.stringify(value))
    }

    // if its a negative number, pass it through numberToHex
    if (_.isString(value)) {
        if (value.indexOf('-0x') === 0 || value.indexOf('-0X') === 0) {
            return returnType ? 'int256' : numberToHex(value)
        }
        if (value.indexOf('0x') === 0 || value.indexOf('0X') === 0) {
            return returnType ? 'bytes' : value
        }
        if (!isFinite(value)) {
            return returnType ? 'string' : utf8ToHex(value)
        }
    }

    return returnType ? (value < 0 ? 'int256' : 'uint256') : numberToHex(value)
}
/* eslint-enable complexity */

/**
 * Converts buffer to 0x-prefixed hex string.
 *
 * @example
 * const result = caver.utils.bufferToHex(Buffer.from('5b9ac8', 'hex')) // '0x5b9ac8'
 *
 * @memberof module:utils
 * @inner
 *
 * @param {Buffer} buf A buffer to convert to hex string.
 * @return {string} The 0x-prefixed hex string.
 */
const bufferToHex = function(buf) {
    buf = toBuffer(buf)
    return `0x${buf.toString('hex')}`
}

/**
 * This function converts the input to a Buffer.
 * To convert an object into a Buffer using `caver.utils.toBuffer`, the object must implement `toArray` function.
 * For string type input, this function only works with a 0x-prefixed hex string.
 *
 * @example
 * const result = caver.utils.toBuffer(Buffer.alloc(0))
 * const result = caver.utils.toBuffer('0x1234')
 * const result = caver.utils.toBuffer(1)
 * const result = caver.utils.toBuffer([1,2,3])
 * const result = caver.utils.toBuffer(new caver.utils.BN(255))
 * const result = caver.utils.toBuffer(new caver.utils.BigNumber(255))
 * const result = caver.utils.toBuffer({toArray: function() {return [1,2,3,4]}}) // An object that implements `toArray` function
 * const result = caver.utils.toBuffer(null)
 * const result = caver.utils.toBuffer(undefined)
 *
 * @memberof module:utils
 * @inner
 *
 * @param {Buffer|Array.<number>|string|number|BN|BigNumber|object} input The value to be converted to a Buffer.
 * @return {Buffer} The value converted to Buffer type is returned.
 */
const toBuffer = function(input) {
    if (Buffer.isBuffer(input)) return input
    if (input === null || input === undefined) return Buffer.alloc(0)
    if (Array.isArray(input)) return Buffer.from(input)
    if (isBigNumber(input)) input = toBN(input)
    if (isBN(input)) return input.toArrayLike(Buffer)
    if (_.isObject(input)) {
        if (input.toArray && _.isFunction(input.toArray)) return Buffer.from(input.toArray())
        throw new Error('To convert an object to a buffer, the toArray function must be implemented inside the object')
    }

    switch (typeof input) {
        case 'string':
            if (isHexStrict(input)) return Buffer.from(makeEven(input).replace('0x', ''), 'hex')
            throw new Error("Failed to convert string to Buffer. 'toBuffer' function only supports 0x-prefixed hex string")
        case 'number':
            return numberToBuffer(input)
    }
    throw new Error(`Not supported type with ${input}`)
}

/**
 * This function converts a number to a Buffer.
 * The {@link module:utils~toBuffer|caver.utils.toBuffer} has the same behavior as this function when the input is a number.
 *
 * @example
 * const result = caver.utils.numberToBuffer(1)
 * const result = caver.utils.numberToBuffer('2')
 * const result = caver.utils.numberToBuffer('0x3')
 * const result = caver.utils.numberToBuffer(new caver.utils.BN(4))
 * const result = caver.utils.numberToBuffer(new caver.utils.BigNumber(4))
 *
 * @memberof module:utils
 * @inner
 *
 * @param {number|string|BN|BigNumber} num A number to be converted to a Buffer.
 * @return {Buffer}
 */
const numberToBuffer = function(num) {
    return Buffer.from(makeEven(numberToHex(num)).replace('0x', ''), 'hex')
}

/**
 * Checks if a given string is a HEX string.
 * Difference to {@link module:utils~isHex|caver.utils.isHex} is that it expects HEX to be prefixed with `0x`.
 *
 * @example
 * const result = caver.utils.isHexStrict('0xc1912') // true
 * const result = caver.utils.isHexStrict('c1912') // false
 * const result = caver.utils.isHexStrict('Hello') // false
 *
 * @memberof module:utils
 * @inner
 *
 * @param {string} hex The given HEX string.
 * @returns {boolean} `true` if a given string is a HEX string.
 */
const isHexStrict = function(hex) {
    return (_.isString(hex) || _.isNumber(hex)) && /^(-)?0x[0-9a-f]*$/i.test(hex)
}

/**
 * Checks if a given string is a HEX string.
 *
 * @example
 * const result = caver.utils.isHex('0xc1912') // true
 * const result = caver.utils.isHex('c1912') // true
 * const result = caver.utils.isHex('Hello') // false
 *
 * @memberof module:utils
 * @inner
 *
 * @param {string} hex The given HEX string.
 * @returns {boolean} `true` if a given parameter is a HEX string.
 */
const isHex = function(hex) {
    return (_.isString(hex) || _.isNumber(hex)) && /^(-0x|0x)?[0-9a-f]*$/i.test(hex)
}

/**
 * Checks if the given string is a hexadecimal transaction hash with or without prefix 0x
 * @deprecated since version v1.5.0
 * @ignore
 * @method isTxHash
 * @param {String} txHash given hexadecimal transaction hash
 * @return {Boolean}
 */
const isTxHash = txHash => isValidHash(txHash)

/**
 * Returns `true` if the input is in 32-bytes hash format, otherwise it returns `false`.
 *
 * @example
 * const result = caver.utils.isValidHash('0xe9a11d9ef95fb437f75d07ce768d43e74f158dd54b106e7d3746ce29d545b550') // true
 * const result = caver.utils.isValidHash('e9a11d9ef95fb437f75d07ce768d43e74f158dd54b106e7d3746ce29d545b550') // true
 * const result = caver.utils.isValidHash('0x1') // false
 *
 * @memberof module:utils
 * @inner
 *
 * @param {string} hash The value to be examined that if it is in 32-bytes hash format or not.
 * @return {boolean} `true` means the input is in the format of 32-bytes hash.
 */
const isValidHash = hash => new RegExp(`^(0x|0X)?[0-9a-fA-F]{${HASH_LENGTH - 2}}$`).test(hash)

/**
 * Checks if the given string is a hexadecimal transaction hash that starts with 0x
 * @deprecated since version v1.5.0
 * @ignore
 * @method isTxHashStrict
 * @param {String} txHash given hexadecimal transaction hash
 * @return {Boolean}
 */
const isTxHashStrict = txHash => isValidHashStrict(txHash)

/**
 * Returns `true` if the input is in 0x-prefixed 32-bytes hash format, otherwise it returns `false`.
 * This function only looks at the input and determines if it is in the format of 0x-prefixed 32-bytes hash.
 * Difference to {@link module:utils~isValidHash|caver.utils.isValidHash} is that it expects HEX to be prefixed with 0x.
 *
 * @example
 * const result = caver.utils.isValidHashStrict('0xe9a11d9ef95fb437f75d07ce768d43e74f158dd54b106e7d3746ce29d545b550') // true
 * const result = caver.utils.isValidHashStrict('e9a11d9ef95fb437f75d07ce768d43e74f158dd54b106e7d3746ce29d545b550') // false
 * const result = caver.utils.isValidHashStrict('0x1') // false
 *
 * @memberof module:utils
 * @inner
 *
 * @param {string} hash The value to be examined that if it is in the format of 0x-prefixed 32-bytes hash or not.
 * @return {boolean} `true` means the input is in the format of 0x-prefixed 32-bytes hash.
 */
const isValidHashStrict = hash => new RegExp(`^(0x|0X)[0-9a-fA-F]{${HASH_LENGTH - 2}}$`).test(hash)


/**
 * The util module.
 * @module utils
 *
 * @example
 * caver.utils
 */
module.exports = {
    unitMap: unitKlayMap,
    klayUnit: KlayUnit,
    toWei: toWei,
    fromWei: fromWei,

    // For Klay unit
    unitKlayMap: unitKlayMap,
    toPeb: toPeb,
    fromPeb: fromPeb,
    convertFromPeb: convertFromPeb,
    convertToPeb: convertToPeb,

    BN:  BN,
    isBN:  isBN,
    BigNumber:  BigNumber,
    isBigNumber:  isBigNumber,
    isHex:  isHex,
    isHexStrict:  isHexStrict,
    sha3:  sha3,
    keccak256:  sha3,
    isAddress:  isAddress,
    checkAddressChecksum:  checkAddressChecksum,
    toHex:  toHex,
    toBN:  toBN,

    toBuffer:  toBuffer,
    numberToBuffer:  numberToBuffer,
    bufferToHex:  bufferToHex,

    bytesToHex:  bytesToHex,
    hexToBytes:  hexToBytes,

    hexToNumberString:  hexToNumberString,

    hexToNumber:  hexToNumber,
    toDecimal:  hexToNumber, // alias

    numberToHex:  numberToHex,
    fromDecimal:  numberToHex, // alias

    hexToUtf8:  hexToUtf8,
    hexToString:  hexToUtf8,
    toUtf8:  hexToUtf8,

    utf8ToHex:  utf8ToHex,
    stringToHex:  utf8ToHex,
    fromUtf8:  utf8ToHex,
    padLeft:  leftPad,
    leftPad:  leftPad,
    padRight:  rightPad,
    rightPad:  rightPad,
    toTwosComplement:  toTwosComplement,
    isTxHash:  isTxHash,
    isTxHashStrict:  isTxHashStrict,
    isValidHash:  isValidHash,
    isValidHashStrict:  isValidHashStrict,
}