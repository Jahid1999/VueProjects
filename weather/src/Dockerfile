FROM node:latest

# install simple http server for serving static content
RUN npm install -g http-server

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . /app

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package.json ./

# install project dependencies
RUN npm install

RUN npm install @vue/cli@3.7.0 -g

# start app
CMD ["npm", "run", "serve"]