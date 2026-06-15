@echo off
setlocal
cd /d "%~dp0"

for %%I in ("%~dp0.") do set "WORKTREE=%%~fI"
set "LOG=%WORKTREE%\github-push-log.txt"
set "GIT=%WORKTREE%\tools\git-7zr\cmd\git.exe"
set "DEPLOY_GIT=%WORKTREE%\.deploy-git"
set "REMOTE_URL=https://github.com/joanne10-maker/BOORUI-.git"

echo [%date% %time%] BOORUI GitHub push started > "%LOG%"
echo Target repository: %REMOTE_URL% >> "%LOG%"

if not exist "%GIT%" (
  echo Git tool was not found at: %GIT% >> "%LOG%"
  type "%LOG%"
  pause
  exit /b 1
)

if not exist "%DEPLOY_GIT%\HEAD" (
  "%GIT%" --git-dir "%DEPLOY_GIT%" --work-tree "%WORKTREE%" init -b main >> "%LOG%" 2>&1
  if errorlevel 1 goto failed
)

"%GIT%" --git-dir "%DEPLOY_GIT%" --work-tree "%WORKTREE%" config user.name "BOORUI Site Builder" >> "%LOG%" 2>&1
"%GIT%" --git-dir "%DEPLOY_GIT%" --work-tree "%WORKTREE%" config user.email "joannexiaoxiao@gmail.com" >> "%LOG%" 2>&1
"%GIT%" --git-dir "%DEPLOY_GIT%" --work-tree "%WORKTREE%" add -A >> "%LOG%" 2>&1

"%GIT%" --git-dir "%DEPLOY_GIT%" --work-tree "%WORKTREE%" diff --cached --quiet >> "%LOG%" 2>&1
if errorlevel 1 (
  "%GIT%" --git-dir "%DEPLOY_GIT%" --work-tree "%WORKTREE%" commit -m "Update BOORUI website" >> "%LOG%" 2>&1
) else (
  echo No new file changes to commit. >> "%LOG%"
)

echo Pushing BOORUI website to GitHub... >> "%LOG%"
"%GIT%" --git-dir "%DEPLOY_GIT%" --work-tree "%WORKTREE%" -c http.sslBackend=openssl -c http.version=HTTP/1.1 -c credential.helper=manager push "%REMOTE_URL%" refs/heads/main:refs/heads/main >> "%LOG%" 2>&1
if errorlevel 1 goto failed

echo Push complete. BOORUI has been updated on GitHub. >> "%LOG%"
echo https://github.com/joanne10-maker/BOORUI- >> "%LOG%"
type "%LOG%"
pause
exit /b 0

:failed
echo Push did not complete. >> "%LOG%"
type "%LOG%"
pause
exit /b 1
