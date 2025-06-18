# Use a lightweight Node.js base image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy the rest of your backend code into the container
COPY . .

# Expose the port your app runs on (adjust if different)
EXPOSE 5000

# Start the Node.js application
CMD ["npm", "start"]
