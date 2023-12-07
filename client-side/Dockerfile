# FROM node:18.17.1 
# WORKDIR /user/src/client
# COPY package*.json  .
# RUN npm ci
# COPY . .
# CMD ["npm", "start"]

FROM node:18-alpine
WORKDIR /user/src/client
COPY public/ /user/src/client/public
COPY src/ /user/src/client/src
COPY package.json /user/src/client/
RUN npm install
CMD ["npm", "start"]