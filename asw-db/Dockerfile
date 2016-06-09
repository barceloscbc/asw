FROM ubuntu:latest

MAINTAINER Cleber Barcelos <barcelos.cbc@gmail.com>
LABEL Description="Banco de Dados MySql " Vendor="ASW Puc Minas OF05" Version="1.0"

# Install latest updates
RUN apt-get update 
RUN apt-get upgrade -y
RUN apt-get install -y vim 

# Install mysql client and server
RUN echo "mysql-server mysql-server/root_password password root" | debconf-set-selections && \
	echo "mysql-server mysql-server/root_password_again password root" | debconf-set-selections && \
	apt-get -y install mysql-client mysql-server curl

# Enable remote access (default is localhost only, we change this
# otherwise our database would not be reachable from outside the container)
RUN sed -i -e"s/^bind-address\s*=\s*127.0.0.1/bind-address = 0.0.0.0/" /etc/mysql/my.cnf

#Iniciando o mysql
RUN /etc/init.d/mysql start

# Install database
ADD ./database.sql /var/db/database.sql

# Set Standard settings
ENV user student
ENV password secret
ENV url file:/var/db/database.sql
ENV right WRITE

# Install starting script
ADD ./start-database.sh /usr/local/bin/start-database.sh
RUN sed -i 's/\r//' /usr/local/bin/start-database.sh
RUN chmod +x /usr/local/bin/start-database.sh

EXPOSE 3306

CMD ["/usr/local/bin/start-database.sh"]
