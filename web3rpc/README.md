# Klaytn Open SDK

The open SDK generates codes by language which you want to support.
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

## Generate caver-openapi-generator-cli library
- Read [README.md](./codegen/README.md)


## Check generator config help 
```shell
bin/caver-openapi-generator-cli config-help -g typescript-axios
```

## Document
### Redocly site
[Redocly style site](https://henry-will.github.io/klaytn-open-sdk/)
### Swagger UI
[Swagger ui for api test](https://henry-will.github.io/klaytn-open-sdk/SwaggerUI/)
### User Guide for Open SDK
[User Guide](UserGuide.md)

- #### [api](api/README.md) directory

- #### [bin](bin/README.md) directory

- #### [codegen](codegen/README.md) directory

- #### [sdk](sdk/README.md) directory

- #### [site](site/README.md) directory

### Guide for Generate Open SDK
#### Generate documentation for SDK namespace
```shell
$ cd api/redocly
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

#### Remove query parameter for Redocly Site
```shell
$ cd api/redocly
$ yarn remove_query_param
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

#### Preview and build via Redocly Site
- [Redocly](api/redocly/README.md) Guide