FROM node:20.11.1

# Create app directory for the container and copy package.json and package-lock.json to the container
WORKDIR /app

COPY package*.json ./

# install depenencies
RUN npm install

# copy all things like src, public, etc. to the container
# We can ignore .next or node_modules by adding .dockerignore file
COPY . .


# we are going to deploy our app to ubuntu so we need to build our app
# this command is very important because in the container if we don't build our app it doen't contain .next folder. .next folder is very important for our app to run in production because it contains all the code that we wrote in react and it shoud be running in production like in Ubuntu

RUN npm run build

# it will not work on production environment, locally if i test the image by creating new container it will actually use the port 3000. On heruko we can set the port then it will be ingnored but locally it will use the port 3000. 

EXPOSE 3000

#for run our nextjs project for production
CMD [ "npm", "run", "start" ]