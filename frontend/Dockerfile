# Step 1: Build the React app
FROM node:18-alpine AS build

WORKDIR /app

# Accept build argument
ARG REACT_APP_API_BASE
ENV REACT_APP_API_BASE=$REACT_APP_API_BASE

COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Inject the API base URL into the env file for React build
RUN echo "REACT_APP_API_BASE=$REACT_APP_API_BASE" > .env.production

# Optional: clear cache
RUN rm -rf node_modules/.cache

# Build
RUN npm run build

# Step 2: Serve the build with NGINX
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
