call java -ea ^
  -Xms512M ^
  -Xmx1024M ^
  -server ^
  -jar %~dp0\libs\caver-openapi-generator-cli.jar %*
