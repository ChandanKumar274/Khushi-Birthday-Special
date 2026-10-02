@echo off
title Happy Birthday Khushi Website
color 0D
echo ========================================================
echo   HAPPY BIRTHDAY KHUSHI - BEST FRIEND FOREVER WEBSITE
echo ========================================================
echo.
echo Starting the Birthday Celebration Website...
echo Opening in your browser at http://localhost:5173
echo.
timeout /t 2 >nul
start http://localhost:5173
npm run dev
pause
