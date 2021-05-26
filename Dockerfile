FROM mhart/alpine-node:14 as base

LABEL version="1.0"

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json
# AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install --production

# Bundle app source
COPY . .

FROM base as production

ENV NODE_PATH=./dist

RUN npm build

EXPOSE 3001

#
CMD [ "node", "dist/server.js" ]
