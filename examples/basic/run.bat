@echo off
set curr_dir=%cd%
chdir /D "%~dp0"

node ..\..\bin\typedoc --module commonjs --target ES5 --out doc\ src\

chdir /D "%curr_dir%"