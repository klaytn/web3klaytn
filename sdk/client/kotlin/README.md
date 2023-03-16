# caver-kotlin sdk

## Requirements
- download openapi-generator
- check codegen/src/main/kotlin/caver/kotlin/KlaytnKotlinClientCodegen.kt
- build caver-openapi-generator-cli jar in codegen
- check caver-openapi-generator-cli

## Make openapi generator source
```shell
sh kotlin-generate.sh
```
## Test
```shell
./gradlew :openapi-test:test
```
## To see files
### .openapi-generator-ignore
### kotlin-config.yaml
### template
- template/libraries/jvm-retrofit2/api.mustache
- template/libraries/jvm-retrofit2/bodyParamJavadoc.mustache
- template/libraries/jvm-retrofit2/infrastructure/ResponseExt.kt.mustache
### openapi-test/src/test/kotlin/caver/sdk/apis/KlayApiGetRewardsTest.kt
