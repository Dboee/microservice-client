# Build stage
FROM node:19.6.0-alpine as build
WORKDIR /app
COPY package.json .
RUN npm install --omit=dev

# Final stage
FROM node:19.6.0-alpine
WORKDIR /app
COPY --from=build /app/node_modules node_modules
COPY . .
# Specify the command to run when the container starts
CMD ["npm", "run", "start"]