FROM python:3.6.8-slim

MAINTAINER Sergeev Alexey <sega21rus98@mail.ru>

WORKDIR /home/backend

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip
COPY ./requirements.txt /home/backend/requirements.txt
COPY ./prod_requirements.txt /home/backend/prod_requirements.txt
RUN pip install -r requirements.txt && \
    pip install -r prod_requirements.txt

RUN apt-get update && apt-get install netcat -y

COPY . /home/backend
RUN mkdir /home/backend/static

ENTRYPOINT ["./entrypoint.sh"]