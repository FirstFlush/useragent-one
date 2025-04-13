#!/bin/bash

# Run as sudo!

# Deploy script for useragent-one.
# - pull updates from github
# - rebuild docker containers with new updates
# - reload nginx

set -e  # Exit on error

echo "Updating app on server..."

echo -e "\n[1/6] Pulling latest changes..."
git pull origin master

echo -e "\n[2/6] Shutting down containers..."
docker compose down

echo -e "\n[3/6] Pruning old Docker resources from this project..."
docker compose rm -f
docker image prune -f

echo -e "\n[4/6] Rebuilding without cache..."
docker compose build --no-cache

echo -e "\n[5/6] Starting containers..."
docker compose up -d

echo -e "\n[6/6] Reloading Nginx (sudo)..."
sudo -v  # ask for sudo password once
sudo systemctl reload nginx

echo -e "\n✅ App updated successfully."

