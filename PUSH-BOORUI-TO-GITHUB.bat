@echo off
setlocal
cd /d "%~dp0"

set "GIT=%~dp0tools\git-7zr\cmd\git.exe"
set "DEPLOY_GIT=%~dp0.deploy-git"
set "WORKTREE=%~dp0"
set "REMOTE_URL=https://github.com/joanne10-maker/BOORUI-.git"

if not exist "%GIT%" (
  echo Git tool was not found at:
  echo %GIT%
  pause
  exit /b 1
)

echo BOORUI GitHub push helper
echo.
echo Target repository:
echo %REMOTE_URL%
echo.

if not exist "%DEPLOY_GIT%\HEAD" (
  "%GIT%" --git-dir="%DEPLOY_GIT%" --work-tree="%WORKTREE%" init -b main
  if errorlevel 1 (
    echo.
    echo Failed to initialize deploy git database.
    pause
    exit /b 1
  )
)

"%GIT%" --git-dir="%DEPLOY_GIT%" --work-tree="%WORKTREE%" config user.name "BOORUI Site Builder"
"%GIT%" --git-dir="%DEPLOY_GIT%" --work-tree="%WORKTREE%" config user.email "joannexiaoxiao@gmail.com"
"%GIT%" --git-dir="%DEPLOY_GIT%" --work-tree="%WORKTREE%" add -A

"%GIT%" --git-dir="%DEPLOY_GIT%" --work-tree="%WORKTREE%" diff --cached --quiet
if errorlevel 1 (
  "%GIT%" --git-dir="%DEPLOY_GIT%" --work-tree="%WORKTREE%" commit -m "Update BOORUI website"
) else (
  echo No new file changes to commit.
)

echo.
echo Pushing BOORUI website to GitHub...
echo If GitHub asks you to sign in or authorize, please approve it in the browser window.
echo.

"%GIT%" --git-dir="%DEPLOY_GIT%" --work-tree="%WORKTREE%" -c http.sslBackend=openssl -c http.version=HTTP/1.1 -c credential.helper=manager push "%REMOTE_URL%" refs/heads/main:refs/heads/main

if errorlevel 1 (
  echo.
  echo Push did not complete. Keep this window open and share the message above with Codex.
  echo If the GitHub repo already has different files, the push may need a one-time manual merge or force update.
  pause
  exit /b 1
)

echo.
echo Push complete. BOORUI has been updated on GitHub:
echo https://github.com/joanne10-maker/BOORUI-
pause
