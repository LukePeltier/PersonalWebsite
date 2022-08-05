FROM python:3-alpine

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY ./src /app

COPY ./config /config

WORKDIR /app
RUN python -m pip install --upgrade pip
RUN pip install pip-tools
RUN pip-sync

WORKDIR /app/LukeWebsite