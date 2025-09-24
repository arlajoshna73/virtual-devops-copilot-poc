# Use official Node.js runtime
FROM node:18

WORKDIR /usr/src/app

# Copy root-level package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app code
COPY . .

EXPOSE 80
CMD ["npm", "start"]
