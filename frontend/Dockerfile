# Step 1: Build the React app
FROM node:18-alpine AS build

WORKDIR /app

# Accept build argument
ARG REACT_APP_API_BASE
ENV REACT_APP_API_BASE=$REACT_APP_API_BASE

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Inject the API base URL into an .env.production file
RUN echo "REACT_APP_API_BASE=$REACT_APP_API_BASE" > .env.production

# Build the app
RUN npm run build

# Step 2: Serve the build with NGINX
FROM nginx:alpine

# Copy built files to NGINX public directory
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

