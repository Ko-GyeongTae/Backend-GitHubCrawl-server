FROM node:14-alpine

# update packages
RUN apk update

# create root application folder
WORKDIR /app

# copy configs to /app folder
COPY package*.json ./
COPY tsconfig.json ./
COPY .env ./
# copy source code to /app/src folder
COPY src /app/src

# check files list
RUN ls -a

RUN apk add nodejs yarn
RUN yarn 

EXPOSE 7777

# CMD [ "node", "./dist/main.js" ]
CMD ["yarn", "start"]