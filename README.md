# asw

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