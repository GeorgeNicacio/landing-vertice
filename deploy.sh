#!/usr/bin/env bash
set -e

# Variáveis
DIR="$(cd "$(dirname "$0")" && pwd)"
CONTAINER=vertice-landing
IMAGE=vertice-landing
HOST_PORT=5552      # porta externa
CONTAINER_PORT=5552  # porta exposta no Dockerfile

cd "$DIR"

echo "🛠️  Building Docker image..."
docker build -t $IMAGE .

echo "🚨  Stopping old container (if exists)..."
docker stop $CONTAINER 2>/dev/null || true
docker rm   $CONTAINER 2>/dev/null || true

echo "🚀  Starting new container..."
docker run -d \
  --name $CONTAINER \
  -p $HOST_PORT:$CONTAINER_PORT \
  --restart unless-stopped \
  $IMAGE

echo "✅  Deployment complete. App available on port $HOST_PORT."
