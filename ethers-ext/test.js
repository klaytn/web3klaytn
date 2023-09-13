const keystore = require("./dist/src/core/keystore")

const v4Multisig = {
    "version": 4,
    "id": "54d86643-64c9-4b17-b220-ee8ac8e37a38",
    "address": "0xea27c011093b3ab28ae932905e058b0eba503490",
    "keyring": [
      {
        "ciphertext": "713589f0bc2049b05da09460a0daa84ebe616fa6c8631a57ea4a2c22128e5889",
        "cipherparams": {
          "iv": "708114437171614deb96a8fc67caf48c"
        },
        "cipher": "aes-128-ctr",
        "kdf": "scrypt",
        "kdfparams": {
          "dklen": 32,
          "salt": "84f2b9b74bc32d3b2582203c9059445af8cd15b2f40eb8e35c2a82dd0da06904",
          "n": 4096,
          "r": 8,
          "p": 1
        },
        "mac": "3a801695ece35aa5613a2920e4a2f40d52c5fac10e836c6a90ca6627d389c9c0"
      },
      {
        "ciphertext": "db7479883998e423b9aeaed224e6e513a7ae6b330d44a3c7a8001ecef501b227",
        "cipherparams": {
          "iv": "c51db43ee7ae7780c6f20b176bd1281f"
        },
        "cipher": "aes-128-ctr",
        "kdf": "scrypt",
        "kdfparams": {
          "dklen": 32,
          "salt": "638066e26ccb00147d07d693ad4363600d76f7681a1a94360d2ae02c32a6105f",
          "n": 4096,
          "r": 8,
          "p": 1
        },
        "mac": "9f768ee8fa8c2f87310ee8e2ed5b96d316ff07a057be86ed4d800bf006bfbea4"
      },
      {
        "ciphertext": "4e001471284bd65303196e33fa4c1cfdc9186b2190030635d540e69d25cd4ffa",
        "cipherparams": {
          "iv": "5cad01c2ffc3e705c6d473bd9d97622e"
        },
        "cipher": "aes-128-ctr",
        "kdf": "scrypt",
        "kdfparams": {
          "dklen": 32,
          "salt": "9983a8774a7eaf22b547db1f948a4e604b7c07e5d7425069432586901ce6b8b7",
          "n": 4096,
          "r": 8,
          "p": 1
        },
        "mac": "5feaee72ba98059cf8021b5fd6d648c80e5b9572f1712ae1f5170397abd10e0d"
      }
    ]
}

function formatToV3(V4Format) {
    //format check like if (V4Format.version != 4)
    return V4Format.keyring.map(keyring => {
        const v3Entry = {
          address: V4Format.address,
          id: V4Format.id,
          version: 3,
          crypto: keyring
        };
        return v3Entry
    });
}

async function main() {
    const keysToDecrypt = formatToV3(v4Multisig)
    keysToDecrypt.map(async key => {
        decryptedAccount = keystore.decryptJsonWallet(JSON.stringify(key), "Hahaa")
        console.log(await decryptedAccount)
    })
}

main()