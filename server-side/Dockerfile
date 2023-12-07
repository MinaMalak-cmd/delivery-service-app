# Create image based on the official Node image from dockerhub
FROM node:18.17.1

# Create app directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package*.json .

# Install dependencies
RUN npm ci

# Get all the code needed to run the app
COPY . .

# Serve the app
CMD ["npm", "start"]