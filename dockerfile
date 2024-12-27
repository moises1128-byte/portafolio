# Use official Node.js image as base
FROM node:18.20.4-alpine AS build

# Set work directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy rest of the application code
COPY . .

# Build the Next.js application
RUN yarn run build

# Use a smaller, production-ready image for the final image
FROM node:18.20.4-alpine AS production

# Set work directory
WORKDIR /app

# Copy only the production build
COPY --from=build /app/.next ./.next

# Install production dependencies
COPY package*.json ./
RUN yarn install --production

# Expose the port
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]