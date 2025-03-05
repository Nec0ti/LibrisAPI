#!/bin/bash

echo "Welcome to LibrisAPI automatic installation script!"

echo ""
echo "Installing required dependencies..."
npm install

echo ""
echo "Environment variables are required for the application to work."
echo "Please provide the following information:"
read -p "MongoDB URI: " MONGODB_URI
read -p "JWT Secret Key: " JWT_SECRET

echo ""
echo ".env file is being created..."
echo "MONGODB_URI=$MONGODB_URI" > .env
echo "JWT_SECRET=$JWT_SECRET" >> .env

echo ""
echo "Installation is complete."
echo "You can now start the application by running 'npm start'."