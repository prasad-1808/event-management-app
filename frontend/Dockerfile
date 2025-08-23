# Use Node.js Alpine (lightweight)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies only when package.json or lock file changes
COPY package*.json ./

# Install ALL dependencies (including devDependencies for development)
RUN npm install

# Copy source code (but in dev we usually mount this as a volume via docker-compose)
COPY . .

# Expose Vite’s default port
EXPOSE 5173

# Default command
CMD ["npm", "run", "dev"]
