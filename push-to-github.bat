@echo off
title Push Ankana Portfolio to GitHub
echo ====================================================
echo Pushing Ankana Das 3D Portfolio to GitHub (AnkanaDas06)
echo ====================================================
echo.
echo 1. Setting branch to main...
git branch -M main

echo.
echo 2. Linking remote repository...
git remote remove origin 2>nul
git remote add origin https://github.com/AnkanaDas06/ankana-portfolio.git

echo.
echo 3. Pushing code to GitHub...
echo (If a GitHub login window opens, please sign in with your GitHub account)
git push -u origin main

echo.
echo ====================================================
echo Done! Your code is now live on GitHub:
echo https://github.com/AnkanaDas06/ankana-portfolio
echo ====================================================
pause
