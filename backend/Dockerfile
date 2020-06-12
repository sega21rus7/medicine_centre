FROM python:3.6.8-slim

MAINTAINER Sergeev Alexey <sega21rus98@mail.ru>

WORKDIR /backend

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip
COPY ./requirements.txt /backend/requirements.txt
RUN pip install -r requirements.txt

RUN apt-get update && apt-get install netcat -y

COPY . /backend

ENTRYPOINT ["./entrypoint.sh"]