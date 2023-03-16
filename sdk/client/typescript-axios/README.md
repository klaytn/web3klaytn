# caver-typescript sdk

## Requirements
- download openapi-generator
- check codegen/src/main/kotlin/caver/sdk/KlaytnTypescriptAxiosClientCodegen.kt
- build caver-openapi-generator-cli jar
- check and run caver-openapi-generator-cli

## Setting Node
- Use node version more than v12
```shell
$ brew install nvm
$ nvm use v16.13.1
```

## Make openapi generator source
```shell
$ cd sdk/client/typescript-axios
$ sh typescript-generate.sh
```
## Test
```shell
nvm use v16.xx.x
yarn test
```
## To see files
### .openapi-generator-ignore
### typescript-config.yaml
### template
- template/apiInner.mustache
- template/model.mustache
### Test file
- openapi-test/klay/getRewards.test.ts
