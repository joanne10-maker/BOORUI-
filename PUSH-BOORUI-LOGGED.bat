@echo off
setlocal
cd /d "%~dp0"

set "LOG=%~dp0push-boorui.log"
set "GIT=%~dp0tools\git-7zr\cmd\git.exe"
set "GITDIR=%~dp0.codex-git"
set "WORKTREE=%~dp0"

echo BOORUI push started > "%LOG%"
echo Time: %date% %time% >> "%LOG%"
echo. >> "%LOG%"

if not exist "%GIT%" (
  echo Git tool missing: %GIT% >> "%LOG%"
  type "%LOG%"
  pause
  exit /b 1
)

echo Prepared commit: >> "%LOG%"
"%GIT%" --git-dir="%GITDIR%" --work-tree="%WORKTREE%" rev-parse refs/heads/main >> "%LOG%" 2>&1
echo. >> "%LOG%"

echo Pushing to GitHub... >> "%LOG%"
"%GIT%" --git-dir="%GITDIR%" --work-tree="%WORKTREE%" -c http.sslBackend=openssl -c http.version=HTTP/1.1 -c credential.helper=manager push "https://github.com/joanne10-maker/BOORUI-.git" refs/heads/main:refs/heads/main >> "%LOG%" 2>&1
set "RESULT=%ERRORLEVEL%"

echo. >> "%LOG%"
echo Exit code: %RESULT% >> "%LOG%"
type "%LOG%"
pause
exit /b %RESULT%
