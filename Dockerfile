FROM      ubuntu:15.04
MAINTAINER Cleber Barcelos <barcelos.cbc@gmail.com>

LABEL Description="Modelo de maquina com java8 e node" Vendor="ASW Puc Minas OF05 " Version="1.0"
RUN apt-get update && \
    apt-get install -y  software-properties-common && \
    add-apt-repository ppa:webupd8team/java -y && \
    apt-get update && \
    echo oracle-java7-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections && \
    apt-get install -y oracle-java8-installer && \
    apt-get install -y maven && \\
    curl -sL https://deb.nodesource.com/setup_6.x && \\
    apt-get install -y nodejs

WORKDIR /
    
# Prepare by downloading dependencies
ADD pom.xml /code/pom.xml  
RUN ["mvn", "dependency:resolve"]  
RUN ["mvn", "verify"]

# Adding source, compile and package into a fat jar
#ADD asw4J /code/asw4J
RUN ["mvn", "package"]
