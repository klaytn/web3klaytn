@echo off
set "CURRENT_FILE_DIR=%~dp0"

cd "%CURRENT_FILE_DIR%"
rd /s /q "%CURRENT_FILE_DIR%\openapi"
mkdir "%CURRENT_FILE_DIR%\openapi"

call "%~dp0\scripts\eth\javascript-eth-generate.bat"
call "%~dp0\scripts\klay\javascript-klay-generate.bat"

cd "%~dp0\opensdk"
echo %cd%
call yarn link

cd "%~dp0\openapi-test"
call yarn link opensdk-javascript
