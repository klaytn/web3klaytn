# web3rpc-java sdk

## Requirements
- download openapi-generator
- check codegen/src/main/kotlin/caver/sdk/KlaytnJavaClientCodegen.kt
- build web3rpc-openapi-generator-cli jar
- check and run web3rpc-openapi-generator-cli

## Setting Java
- Use java version more than 11
- Visit https://adoptopenjdk.net/ site
- Download OpenJDK 11

## Make openapi generator source
```shell
$ cd sdk/client/java
$ sh eth-generate.sh
```
## Test
```shell
$ cd sdk/client/java/openapi-test
sh gradlew test
```

## To see files
### .openapi-generator-ignore
### java-config.yaml
### template
- template/libraries/retrofit2/api.mustache
- template/libraries/retrofit2/RequestBodyParams.java.mustache
### Test file
- openapi-test/src/kotlin/caver/sdk/apis/KlayApiGetRewardsTest.kt
