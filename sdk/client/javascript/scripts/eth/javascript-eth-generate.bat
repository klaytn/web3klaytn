set "CURRENT_FILE_DIR=%~dp0\..\.."
set "PROJECT_DIR=%~dp0\..\..\..\..\.."

echo %PROJECT_DIR%
echo %CURRENT_FILE_DIR%

cd %CURRENT_FILE_DIR%

mkdir "%CURRENT_FILE_DIR%\openapi\eth"
copy ".openapi-generator-ignore" "%CURRENT_FILE_DIR%\openapi\eth"

call "%PROJECT_DIR%\bin\caver-openapi-generator-cli.bat" generate -c "%CURRENT_FILE_DIR%\scripts\eth\eth-config.yaml"

cd "%CURRENT_FILE_DIR%\openapi\eth"
call yarn install
call yarn link

cd "%CURRENT_FILE_DIR%\opensdk"
call yarn link opensdk-javascript-eth
