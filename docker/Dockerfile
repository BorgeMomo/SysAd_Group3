FROM httpd:2.4

# Copy frontend website files to Apache document root
COPY frontend/site/ /usr/local/apache2/htdocs/

# Copy each member folder into lowercase paths inside Apache's web root
COPY ALVAREZ/ /usr/local/apache2/htdocs/files/alvarez/
COPY MOMO/ /usr/local/apache2/htdocs/files/momo/
COPY QUE/ /usr/local/apache2/htdocs/files/que/
COPY TADALAN/ /usr/local/apache2/htdocs/files/tadalan/

EXPOSE 80