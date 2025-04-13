#!/bin/bash
#
# Deploy script for useragent-one:
#
# - pull updates from github
# - rebuild docker containers with new updates
# - reload nginx
# - run with "--no-pull" to skip pulling from rpeo
#
# Usage:
#
# sudo chmod +x deploy.sh
# - run as sudo!
#
# Examples:
#
# sudo ./deploy.sh
# sudo ./deploy.sh --no-pull

 
set -e  # Exit on error

if [ ! -f .env ]; then
  echo "⚠️  .env file not found! Deploy may fail if required vars are missing."
  read -p "Do you want to continue anyway? [y/N]: " confirm
  if [[ ! "$confirm" =~ ^[Yy]$ ]]; then
    echo "🛑 Exiting deploy."
    exit 1
  fi
fi

SKIP_PULL=false
if [[ "$1" == "--no-pull" ]]; then
  SKIP_PULL=true
fi

sudo -v

echo "Updating app on server..."

if [ "$SKIP_PULL" = false ]; then
  echo -e "\n[1/6] Pulling latest changes..."
  git pull origin master
else
  echo -e "\n[1/6] Skipping git pull (per --no-pull)"
fi

echo -e "\n[2/6] Shutting down containers..."
docker compose down

echo -e "\n[3/6] Pruning old Docker resources from this project..."
docker compose rm -f
docker image prune -f

echo -e "\n[4/6] Rebuilding without cache..."
docker compose build --no-cache

echo -e "\n[5/6] Starting containers..."
docker compose up -d

# echo -e "\n[6/6] Reloading Nginx (sudo)..."
# systemctl reload nginx

echo -e "\n✅ App updated successfully."

