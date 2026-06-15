@echo off
setlocal
cd /d "%~dp0"

set "LOG=%~dp0boorui-upload-result.log"
echo BOORUI upload started > "%LOG%"
echo Time: %DATE% %TIME% >> "%LOG%"
echo. >> "%LOG%"

call "%~dp0PUSH-BOORUI-TO-GITHUB.bat" >> "%LOG%" 2>&1
set "EXITCODE=%ERRORLEVEL%"

echo. >> "%LOG%"
echo Exit code: %EXITCODE% >> "%LOG%"

echo.
echo Upload finished with exit code: %EXITCODE%
echo Result log:
echo %LOG%
echo.
if "%EXITCODE%"=="0" (
  echo SUCCESS: BOORUI has been pushed to GitHub.
) else (
  echo NOT COMPLETE: Please send boorui-upload-result.log to Codex.
)
echo.
pause
exit /b %EXITCODE%
