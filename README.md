# Projeto Final de Analise de Software Web
### Puc Minas - OF05 
## Executando ambiente via docker
Para realizar o teste no ambiente completo e necessário baixar o ambiente completo, abaixo os passo a passo.

* 1\. Baixar container de banco Mysql
```javascript
$ docker pull of05/aswdb
```
* 2\. Baixar container de serviço Java WS
```javascript
$ docker pull of05/aswws
```
* 3\. Baixar container de aplicação Angular2
```javascript
$ docker pull of05/aswangular2
```
* 4\. Executar container's
```javascript
$  docker run -d --name aswdb -p  6612:3306 of05/aswdb
$  docker run -d --name aswws -p  4567:8080 -e IP_BD=192.168.99.104 -e PORT_BD=6612 of05/aswws
```

## Compilando DockerFile

### Executando
 
 docker run -d --name aswdp -p  6612:3306 of05/aswdb












## Rodando Docker local
Iniciar o docker e na linha de comando executar conforme instruções abaixo.
* docker build -t <oraganização>/<nome repositorio> <diretorio do projeto asw>

```javascript
 #> docker build -t <oraganização>/<nome repositorio> <diretorio do projeto asw>

```
##Apando todas as imagens e containers do docker

#!/bin/bash
# Delete all containers
docker rm $(docker ps -a -q)
# Delete all images
docker rmi $(docker images -q)


## Executar docker external

docker run  --cap-add=NET_ADMIN -i -t --net host of05/asw /bin/bash


docker run -p 3001:3000 -p 23:22

docker build -t of05/asw C:\\Projetos\\fontes\\pucminas\\asw