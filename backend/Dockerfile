FROM python:3.6.8-slim

MAINTAINER Sergeev Alexey <sega21rus98@mail.ru>

ENV HOME=/home/backend

WORKDIR $HOME

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip
COPY ./requirements.txt $HOME/requirements.txt
COPY ./prod_requirements.txt $HOME/prod_requirements.txt
RUN pip install -r requirements.txt && \
    pip install -r prod_requirements.txt

RUN apt-get update && apt-get install netcat -y

COPY . $HOME
RUN mkdir $HOME/staticfiles

RUN chmod +x ./entrypoint.sh
ENTRYPOINT ["./entrypoint.sh"]