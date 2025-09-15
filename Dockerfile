# Use official Node.js runtime
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY app/package*.json ./
RUN npm install

# Copy rest of the app code
COPY app/ .

# Expose port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
