## bin

### install-generator.sh
- Download the required version of openapi-generator-cli
- Currently download 6.2.1, 6.3.0-SNAPSHOT, 7.0.0-SNAPSHOT

### Download openapi-generator-cli
```shell
$ cd bin
$ sh install-generator.sh
```

### libs
- The directory where the caver-openapi-generator-cli.jar file is deployed through `./gradlew clean :deployJar` in codegen.
- caver-openapi-generator-cli.jar inherits CodeGen for each language and contains custom-generated Codegen files
- [Custom Codegen](https://github.com/OpenAPITools/openapi-generator)

### caver-openapi-generator-cli
- Script to run `openapi-generator-cli-6.2.1.jar` file
- -Xms512M, -Xmx1024M options are additionally given to JAVA JVM.
