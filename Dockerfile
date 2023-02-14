#Here we will use node as the base image.
FROM node:19.6.0-alpine

#create a working directory inside the container.
WORKDIR /app

#copy the package.json file from the host to the container.
COPY package.json .

#install the dependencies.
RUN npm install --omit=dev

#copy the rest of the files from the host to the container.
COPY . .

#use nodemon to run the react application using npm.
CMD ["npm", "run", "start"]
