#!/bin/bash

sed -e "s;192.168.99.104;$IP_BD;g" /code/src/main/resources/application.properties > ./aplication.properties 
mv ./aplication.properties /code/src/main/resources/application.properties 
sed -e "s;6612;$PORT_BD;g" /code/src/main/resources/application.properties > ./aplication.properties 
mv ./aplication.properties /code/src/main/resources/application.properties
mvn package
/usr/lib/jvm/java-8-openjdk-amd64/bin/java -jar /code/target/asw-javaws-1.0.0.jar