FROM python:3.7-slim
WORKDIR /backend

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /backend/requirements.txt
RUN pip install -r requirements.txt

RUN apt-get update && apt-get install netcat -y

COPY . /backend

ENTRYPOINT ["/backend/entrypoint.sh"]
