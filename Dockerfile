FROM node:19.6.0-alpine
WORKDIR /app
COPY package.json .
RUN npm install --omit=dev
COPY . .
CMD ["npm", "run", "start"]