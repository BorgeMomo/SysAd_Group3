FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    apache2 \
    mariadb-server \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

COPY index.html /var/www/html/index.html

EXPOSE 80 3306

CMD ["bash", "-c", "service mariadb start && apachectl -D FOREGROUND"]
