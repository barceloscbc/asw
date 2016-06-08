FROM ubuntu:15.04
MAINTAINER Cleber Barcelos <barcelos.cbc@gmail.com>

LABEL Description="Modelo de maquina com java8 e node" Vendor="ASW Puc Minas OF05 " Version="1.0"

RUN --cap-add=NET_ADMIN && \
	apt-get update && \
	apt-get install iputils-ping &&\
	apt-get install iptables &&\
	#########################################
	## Instala��o e configural��o do Java 8
	#########################################
    apt-get install -y  software-properties-common python-software-properties && \
    add-apt-repository ppa:webupd8team/java -y && \
    apt-get update && \
    echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections && \
    apt-get install -y oracle-java8-installer && \
	#########################################
	## Instala��o e configura��o maven
	#########################################    
    apt-get install -y maven && \
	#########################################
	## Instala��o e configura��o do NodeJS
	#########################################
	apt-get -y install nodejs && \
	apt-get -y install npm && \
	ln -s /usr/bin/nodejs /usr/bin/node && \
	#########################################
	## Instala��o e configura��o do MySql
	#########################################
	echo "mysql-server-5.5 mysql-server/root_password password root" | debconf-set-selections && \
	echo "mysql-server-5.5 mysql-server/root_password_again password root" | debconf-set-selections && \
	apt-get install -y mysql-server
	