# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the Angular application files to the working directory
COPY . .

# Build the Angular application
RUN npm run build --prod

# Expose the port that the app will run on
EXPOSE 80

# Define the command to run your application
CMD ["npm", "start"]
