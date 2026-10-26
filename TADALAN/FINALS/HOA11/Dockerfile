FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y apache2 mariadb-server && \
    rm -rf /var/lib/apt/lists/*

EXPOSE 80 3306

CMD service mariadb start && apache2ctl -D FOREGROUND
