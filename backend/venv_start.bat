echo off
pushd %~dp0
if not exist venv c:\python368\python.exe -m venv venv
if errorlevel 1 goto ending
call venv\Scripts\activate
if errorlevel 1 goto ending
python -m pip install --upgrade -r medicine_centre\requirements.txt --retries 2 --timeout 5
if errorlevel 1 goto ending
python medicine_centre\manage.py migrate
if errorlevel 1 goto ending
:ending
popd
