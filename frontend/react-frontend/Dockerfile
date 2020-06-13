FROM node:12.16.2-alpine

MAINTAINER Sergeev Alexey <sega21rus98@mail.ru>

ENV HOME=/home/frontend

WORKDIR $HOME

COPY package.json $HOME/package.json
RUN npm install --only=prod

COPY . $HOME

RUN npm run build