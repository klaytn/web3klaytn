## User customization of language SDKs 
### Add a custom codegen
- if you want to add a kotlin codegen 
- Add custom File
  - src/main/kotlin/web3rpc/client/KlaytnKotlinClientCodegen.kt
- Extend KotlinClientCodegen class 
    ```kotlin
    class KlaytnKotlinClientCodegen : KotlinClientCodegen
    ```
- Add META-INF.services resource
  - Edit src/main/resources/META-INF.services
    ```
    web3rpc.kotlin.KlaytnKotlinClientCodegen
    ```
- Add Test Case
  - Add src/test/kotlin/web3rpc/client/KlaytnKotlinClientCodegenTest.kt 
  - Add Test for ServiceLoader
  ```kotlin
  val loader = ServiceLoader.load(
    CodegenConfig::class.java,
    CodegenConfig::class.java.classLoader
  )
  ```
### deploy
```shell
./gradlew clean :deployJar
./gradlew cleanTest :test
```

## Test
- Using the kotest
- Using Behavior Spec
- locate an index.html and report files in build/reports/test

## Jar file
- Generate jar include a customized code generator class
- This jar file include openapi-generator-cli.jar
- Generate a web3rpc-openapi-generator-cli.jar and locate in bin/libs directory

