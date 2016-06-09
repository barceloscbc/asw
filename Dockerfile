FROM ubuntu:15.04
MAINTAINER Cleber Barcelos <barcelos.cbc@gmail.com>

LABEL Description="Modelo de maquina com java8 e node" Vendor="ASW Puc Minas OF05 " Version="1.0"

RUN apt-get update && \
	apt-get install -y iputils-ping &&\
	apt-get install -y iptables && \
	apt-get install -y openssh-server && \
	apt-get install -y vim && \
	apt-get install -y apache2 apache2-doc apache2-utils && \
	#########################################
	## Instalação e configuralção do Java 8
	#########################################
    apt-get install -y  software-properties-common python-software-properties && \
    add-apt-repository ppa:webupd8team/java -y && \
    apt-get update && \
    echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections && \
    apt-get install -y oracle-java8-installer && \
	#########################################
	## Instalação e configuração maven
	#########################################    
    apt-get install -y maven && \
	#########################################
	## Instalação e configuração do NodeJS
	#########################################
	apt-get -y install nodejs && \
	apt-get -y install npm && \
	ln -s /usr/bin/nodejs /usr/bin/node && \
	#########################################
	## Instalação e configuração do MySql
	#########################################
	echo "mysql-server mysql-server/root_password password root" | debconf-set-selections && \
	echo "mysql-server mysql-server/root_password_again password root" | debconf-set-selections && \
	apt-get install -y mysql-server
	
RUN mkdir /var/run/sshd
RUN echo 'root:screencast' | chpasswd
RUN sed -i 's/PermitRootLogin without-password/PermitRootLogin yes/' /etc/ssh/sshd_config

# SSH login fix. Otherwise user is kicked off after login
RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd

ENV NOTVISIBLE "in users profile"
RUN echo "export VISIBLE=now" >> /etc/profile

EXPOSE 22
CMD ["/usr/sbin/sshd", "-D"]