FROM node:12.16.2-alpine

ENV HOME=/home/frontend

WORKDIR $HOME

COPY package.json $HOME/package.json
RUN npm install --only=prod

COPY . $HOME

RUN npm run build