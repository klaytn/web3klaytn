# Klaytn OpenSDK

The OpenSDK generates codes by language which you want to support.
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
- To be updated
### Swagger UI
- To be updated

### User Guide for OpenSDK
[User Guide](UserGuide.md)

#### [api](api/README.md) directory

#### [bin](bin/README.md) directory

#### [codegen](codegen/README.md) directory

#### [sdk](sdk/README.md) directory

#### [site](site/README.md) directory

