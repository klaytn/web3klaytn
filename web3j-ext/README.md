# Web3j extension for Klaytn

## Requirements
### Setting Java
- Use java version more than 11
- Visit https://adoptopenjdk.net/ site
- Download OpenJDK 11
### Web3rpc
 - Build [Web3rpc library](https://github.com/klaytn/web3klaytn/blob/dev/web3rpc/README.md) first 


## Install web3j-extension
To install the web3j-extension:
```shell
$ cd web3j-ext
$ sh web3jext-generate.sh
```

To add the Gradle Library to your project:
```shell
repositories {
    mavenLocal()
}

dependencies {
    implementation "foundation.klaytn:web3j-ext:v1.10.0"
    implementation "foundation.klaytn:web3rpc:v1.10.0"
}
````

## Use Web3j extension
For basic web3j usage, you can learn through this [link](https://docs.web3j.io/4.10.0/quickstart/).

### Send Transaction on Baobab network