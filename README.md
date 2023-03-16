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
### redocly site
[redoc style site](https://henry-will.github.io/klaytn-open-sdk/)
### Swagger UI
[swagger ui for api test](https://henry-will.github.io/klaytn-open-sdk/SwaggerUI/)
### User Guide for Open SDK
[User Guide](UserGuide.md)

#### [api](api/README.md) directory

#### [bin](bin/README.md) directory

#### [codegen](codegen/README.md) directory

#### [sdk](sdk/README.md) directory

#### [site](site/README.md) directory

