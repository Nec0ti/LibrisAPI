@echo off
echo Welcome to LibrisAPI automatic installation script!

echo.
echo Installing required dependencies...
npm install

echo.
echo Environment variables are required for the application to work.
echo Please provide the following information:
set /p MONGODB_URI="MongoDB URI: "
set /p JWT_SECRET="JWT Secret Key: "

echo.
echo .env file is being created...
echo MONGODB_URI=%MONGODB_URI% > .env
echo JWT_SECRET=%JWT_SECRET% >> .env

echo.
echo Installation is complete.
echo You can now start the application by running 'npm start'.

pause