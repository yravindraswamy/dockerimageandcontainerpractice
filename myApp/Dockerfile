#base image
FROM node:alpine
#copying file from host to docker container
COPY ./package.json ./
#workdirectory in docker container
WORKDIR /usr/myapp
COPY ./ ./
#run command for dependencies
RUN npm install
# to run the command
CMD ["npm" ,"run","start"]
