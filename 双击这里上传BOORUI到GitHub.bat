@echo off
chcp 65001 >nul
setlocal
cd /d "%~dp0"

echo ========================================
echo   BOORUI 一键上传到 GitHub
echo ========================================
echo.
echo 仓库地址:
echo https://github.com/joanne10-maker/BOORUI-
echo.
echo 如果弹出 GitHub 登录或授权页面，请点击确认/授权。
echo 我已经把网站文件和上传设置准备好了。
echo.

call "%~dp0START-BOORUI-UPLOAD-LOGGED.bat"

echo.
echo 如果上传成功，请打开:
echo https://github.com/joanne10-maker/BOORUI-
echo.
echo 如果没有成功，请把下面这个文件截图发给 Codex:
echo %~dp0boorui-upload-result.log
echo.
pause
