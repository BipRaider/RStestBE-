# FROM mhart/alpine-node:14 as base

# # Create app directory
# WORKDIR /usr/src/app

# # A wildcard is used to ensure both package.json
# # AND package-lock.json are copied
# COPY package*.json ./

# # Install app dependencies
# RUN npm install --production

# # Bundle app source
# COPY . .

# FROM base as production

# ENV NODE_PATH=./dist

# RUN npm build

# EXPOSE 3001

# #
# CMD [ "node", "dist/server.js" ]


FROM mhart/alpine-node:14 as base

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY ./dist ./dist

CMD [ "npm", "run", "dev" ]
