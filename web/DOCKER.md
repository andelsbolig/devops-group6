# Docker Setup for React Frontend

This directory contains Docker configuration for the React frontend application.

## Files Created

- `Dockerfile` - Production build with nginx
- `Dockerfile.dev` - Development build 
- `docker-compose.yml` - Docker Compose configuration
- `.dockerignore` - Files to exclude from Docker build
- `nginx.conf` - Custom nginx configuration

## Usage

### Development Mode

Run the development server with hot reloading:

```bash
# Using Docker Compose (recommended)
docker-compose up web

# Or build and run manually
docker build -f Dockerfile.dev -t web-dev .
docker run -p 3000:3000 -v "${PWD}/src:/app/src" -v "${PWD}/public:/app/public" web-dev
```

The application will be available at http://localhost:3000

### Production Mode

Build and run the production version:

```bash
# Using Docker Compose
docker-compose --profile prod up web-prod

# Or build and run manually
docker build -t web-prod .
docker run -p 8080:80 web-prod
```

The application will be available at http://localhost:8080

### Building for Deployment

Build the production image for deployment:

```bash
docker build -t your-registry/web:latest .
docker push your-registry/web:latest
```

## Features

- Multi-stage build for optimized production images
- Hot reloading in development mode
- Custom nginx configuration with:
  - React Router support (SPA routing)
  - Static asset caching
  - Security headers
  - Gzip compression
- Volume mounting for development workflow
- Separate dev and prod configurations

## Environment Variables

You can set environment variables in the docker-compose.yml or pass them to docker run:

```bash
docker run -p 3000:3000 -e REACT_APP_API_URL=http://localhost:8080 web-dev
```