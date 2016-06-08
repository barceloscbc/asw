FROM ubuntu:15.04
MAINTAINER Cleber Barcelos <barcelos.cbc@gmail.com>

LABEL Description="Modelo de maquina com java8 e node" Vendor="ASW Puc Minas OF05 " Version="1.0"

RUN apt-get update && \
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
	apt-get install -y build-essential checkinstall && \
	apt-get install -y libssl-dev && \	
	apt-get install -y curl libcurl3 libcurl3-dev php5-curl && \ 
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh 

RUN bash && \  
 	nvm install 5.0 && \
	nvm use 5.0 && \
	nvm alias default node
 