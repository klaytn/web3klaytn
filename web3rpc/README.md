# web3rpc

The web3rpc generates codes by language which you want to support.
- It uses Klaytn JSON-RPC call.
- It also makes JSON-RPC API documentation.
- It can call the JSON-RPC post by SwaggerUI.
- You can use JSON-RPC APIs which is generated with OpenAPI generator.

## Setting Node 
- Use node version more than v12
```shell
$ brew install nvm
$ nvm use v16.13.1
```

## Generate web3rpc-openspi-generator-cli library
- Read [README.md](./codegen/README.md)


### Guide for Generate web3rpc 
#### Generate OAS 3.0 specification for SDK namespace
```shell
$ cd rpc-specs
$ sh generate-namespace.sh
```
#### Generate SDK for each language
- ##### Generate SDK for Javascript
```shell
$ cd sdk/client/javascript
$ sh javascript-generate.sh
```
- ##### Generate SDK for Python
```shell
$ cd sdk/client/python
$ sh python-generate.sh
```
- ##### Generate SDK for Java
```shell
$ cd sdk/client/java
$ sh java-generate.sh
```

#### Unittest for each language
 - ##### Javascript:
    ```shell
    $ cd sdk/client/javascript/openapi-test
    ```
    - Run all
    ```shell
    $ yarn test
    ```
    - Run each folder/file
    ```shell
    $ yarn test <folder_path/file_path>
    ```
    - Example
     ```shell
    $ yarn test test/klay/block/KlayBlockNumberApi.test.js
    ```
- ##### Python:
    ```shell
    $ cd sdk/client/python/openapi-test   
    ```
    - Run all
    ```shell
    $ pytest
    ```
    - Run each folder/file
    ```shell
    $ pytest <folder_path/file_path>
    ```
    - Example
     ```shell
    $ pytest block/test_get_block_by_number.py
    ```
- ##### Java:
    ```shell
    $ cd sdk/client/java/openapi-test
    ```
    - Run all
    ```shell
    $ gradle test
    ```
    - Run each folder/file
    ```shell
    $ gradle test --tests <folder_path.*/file_path>
    ```
    - Example
     ```shell
    $ gradle test --tests opensdk.sdk.apis.klay.block.KlayBlockNumberApiTest
    ```
