FROM node:16.17.0-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm config set legacy-peer-deps true
RUN npm install

# Copy app source code
COPY . .


# Expose port
EXPOSE 3333

# Start app
CMD npm run dev