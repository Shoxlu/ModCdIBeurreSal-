@echo off
setlocal enabledelayedexpansion

REM Directory containing .c files
set SRC_DIR=..\..\src\

REM Directory to store .obj files
set OBJ_DIR=..\obj\

REM Output final object file
set OUTPUT_OBJ=..\obj\final.obj

REM Intermediate static library file
set INTERMEDIATE_LIB=combined.lib
REM Create the directory for .obj files if it doesn't exist
if not exist %OBJ_DIR% (
    mkdir %OBJ_DIR%
)

REM Remove any existing .obj files in the obj directory
del /Q %OBJ_DIR%\*.obj

REM Compile each .c/.cpp file to a .obj file
for %%f in (%SRC_DIR%\*.c) do (
    clang -c %%f -o %OBJ_DIR%\%%~nf.obj
    if errorlevel 1 (
        echo Failed to compile %%f
        exit /b 1
    )
)

for %%f in (%SRC_DIR%\*.cpp) do (
    clang++  -I"C:\Jeux casse\Thcrap repo\thcrap\thcrap\src" -I"C:\Jeux casse\Thcrap repo\thcrap\libs\win32_utf8" -I"C:\Jeux casse\Discord SDK\lib\x86" -I"C:\Jeux casse\Thcrap repo\thcrap\libs\external_deps\include" -I"C:\Jeux casse\Thcrap repo\thcrap\thcrap_tsa\src" -I"C:\Jeux casse\Discord SDK\cpp" -D_LDSUPPORT -std=c++20 -m32 -O3 -fno-exceptions -fno-rtti -D_HAS_EXCEPTIONS=0 -fno-builtin-printf "-D_CRTIMP=__declspec(dllimport)" "-D_CRTIMP2=__declspec(dllimport)"  -D_CRT_SECURE_NO_WARNINGS=1 -target i386-pc-windows-msvc -c %%f -o %OBJ_DIR%\%%~nf.obj
    if errorlevel 1 (
        echo Failed to compile %%f
        exit /b 1
    )
)

REM Collect all .obj files into a variable
set OBJ_FILES=
for %%f in (%OBJ_DIR%\*.obj) do (

    set OBJ_FILES=!OBJ_FILES! %%f
)

set DEPS_OBJ_DIR=..\deps_discord\
set DEPS_OBJ=
for %%f in (%DEPS_OBJ_DIR%\*.obj) do (

    set DEPS_OBJ=!DEPS_OBJ! %%f
)

echo %OBJ_FILES%
echo %DEPS_OBJ%

REM Use lib.exe to combine the object files into a single .lib file
tools\ld -m i386pe --oformat pe-i386 --warn-common --allow-multiple-definition  -r %OBJ_FILES% %DEPS_OBJ% -o %OUTPUT_OBJ%

if errorlevel 1 (
    echo Failed to convert library and object files to single object file
    exit /b 1
)

echo Compilation and combining successful.
endlocal

@echo on
coff2binhack.py ../obj/PoBH.json