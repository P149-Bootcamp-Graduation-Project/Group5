# nodejs-skelton

## Docker-compose

```Bash
# docker-compose çalıştırma
docker-compose up -d
# docker container log bakma
docker logs -f <container isim>
# durdurmak için
docker-compose stop
# silmek için
docker-compose stop && docker volume prune && docker rm $(docker ps -a -q)  && docker rmi $(docker images -a -q)
# control etmek
docker images -a && docker ps -a 
```

For runing normal  
```npm run start```

For runing with hot reload   
```npm run dev```
