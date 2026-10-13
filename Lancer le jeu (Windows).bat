@echo off
chcp 65001 >nul
title Tennis Club Simulator
cd /d "%~dp0"

rem Cherche Python (lanceur "py" installe par python.org, sinon "python").
set PY=
py --version >nul 2>nul && set PY=py
if not defined PY python --version >nul 2>nul && set PY=python
if not defined PY goto nopython

echo.
echo  Tennis Club Simulator
echo  ---------------------
echo  Le jeu s'ouvre dans ton navigateur : http://localhost:8000
echo  Laisse cette fenetre ouverte pendant que tu joues.
echo  Pour arreter : ferme cette fenetre.
echo.
start "" cmd /c "timeout /t 2 >nul & start http://localhost:8000"
%PY% -m http.server 8000
pause
goto :eof

:nopython
echo.
echo  Python n'est pas installe sur cet ordinateur.
echo  La page de telechargement va s'ouvrir : installe Python en cochant
echo  "Add Python to PATH", puis relance ce fichier.
echo.
start "" https://www.python.org/downloads/
pause
