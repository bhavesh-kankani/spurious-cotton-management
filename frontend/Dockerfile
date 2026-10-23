FROM node:16-alpine

WORKDIR /app

# Cache dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy application source code
COPY . .

EXPOSE 3000

# Fix potential polling / file-watching issues on Docker
ENV CHOKIDAR_USEPOLLING=true

CMD ["npm", "start"]
