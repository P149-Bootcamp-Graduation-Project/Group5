# Okul Enerji Takip Sistemi

## Tanıtım

Okul enerji takip sistemi (monitoring). Okullarda bulunan sınıfların, ısı dereceleri, hava kaliteleri ve sınıfın ortalama elektrik tüketimini takip edebileceğimiz bir microservice serisiyapılacak.

3 farklı sensor simule edilip saniyelik olarak data üretecek. Üretilen bu data REST API (producer) tarafından okunup kuyruğa eklenecek. Kuyruğa eklenen verilerin işlenmesini yine REST API(consumer) tarafı işleyip veritabanına kaydedecek. Hata oluşması durumunda Mongodb’ye error logları başka bir API ile işlenecek. Son olarak tüm dataları okumak ve error logları takip için bir Reader API geliştirilip sistemin herşeyi o api aracılığı ile analiz ya da monitorize edilebilecek.

- Sistemde 3 farklı veritabanı kullanılacak.
- Tüm Servisler NodeJS ile yazılacak
- Geliştirme ortamı olarak Docker teknolojisi kullanılacak
- Tüm öğrencilere Nodejs Microservice kemik yapısı ile docker dosyaları oluşturuldu ve dağıtıldı.
- Redis ile de kısa süreli cache yapısı kullanılacak
- Proje öğrencilere giriş seviyesinde anlatıldı
- Tüm öğrenciler 6 kişilik gruplarda küme halinde çalışacaklar.
- Her grubun başında bir yönlendirici ve her yönlendiriciye yardımcı olacak bir inavitas çalışanı olacak. Resim 2 de çalışma grupları listelenmiştir.
- Resim 1 de ise projenin ana hatları ve yapısı şema halinde
  gösterilmiştir.

## Mimari

<img src="./img/mimari.png" alt="mimari" width="100%" height="50%" align="mimari" style="margin:10px">

  <img src="./img/os-mimari.png" alt="mimari" width="100%" height="50%" align="os-mimari" style="margin:10px">

## Mikro Servisler

- Random Data Generator
  - Air Sensor
  - Temperature Sensor
  - Electricity Sensor
- Sensor Producer
  - Air Sensor Producer
  - Temperature Sensor Producer
  - Electricity Sensor Producer
- Sensor Consumer
  - Air Sensor Consumer
  - Temperature Sensor Consumer
  - Electricity Sensor Consumer
- Error Log collector
- Core API

## Sensörler & Araçlar

- Isı sensörü
- Hava Kalite Ölçüm
- Elektrik Tüketim Sayacı

## Kullanılacak Teknolojiler

- NodeJS (REST API)
- PostgreSQL (Ana veritabanı)
- Redis (Cache Veritabanı)
- MongoDB (Error Loglama Veritabanı)
- Kafka (Kuyruk Sistemi)
- Docker (Geliştirme Ortamı)

### Bağımlılıklar

- **Go**

```Go
github.com/gorilla/handlers v1.5.1
github.com/gorilla/mux v1.8.0
github.com/joho/godotenv v1.4.0
```

- **Node.js**

```JavaScript
"dotenv": "^10.0.0",
"express": "^4.17.2",
"express-swagger-generator": "^1.1.17",
"jsonwebtoken": "^8.5.1",
"kafka-node": "^5.0.0",
"kafkajs": "^1.15.0",
"mongodb": "^4.2.2",
"morgan": "^1.10.0",
"nodemon": "^2.0.15",
"pg": "^8.7.1",
"redis": "^4.0.1",
"swagger-jsdoc": "^6.1.0",
"swagger-ui-express": "^4.3.0"
"supervisor": "^0.12.0"
```

### Kurulum Gereksinimleri

- Docker
- Docker-compose
- Go
- Node.js

### Docker

```Bash
# Redis
docker-compose up -d
# PostgreSQL
docker run --name postgres -e POSTGRES_PASSWORD=123456 -d -p 5432:5432 postgres
# Mongo
docker run --name mongodb -e MONGO_INITDB_ROOT_USERNAME=AzureDiamond -e MONGO_INITDB_ROOT_PASSWORD=hunter2 -d -p 27017:27017 mongo
# zookeeper
docker run --name zookeeper -p 2181:2181 zookeeper
# kafka
docker run --name kafka -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=192.168.1.2:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.1.2:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka
```

## Başlangıç

- Başlatma

```Bash
# node.js server
npm i && npm start
# data generator
make -f Makefile
```

- Dosya yapısı

```Bash
# reader-API$ tree -d
✖ ✹ ✭main
.
└── app
    ├── adapters
    │   └── database
    ├── controllers
    │   ├── class
    │   ├── error
    │   ├── logAir
    │   ├── logElectricity
    │   ├── logTemperature
    │   ├── school
    │   ├── sensor
    │   └── user
    ├── libs
    │   └── swagger
    ├── models
    │   ├── Class
    │   ├── logAir
    │   ├── logElectricity
    │   ├── logTemperature
    │   ├── school
    │   ├── sensor
    │   └── user
    └── routes
        ├── classRouter
        ├── logAirRouter
        ├── logElecRouter
        ├── logTempRouter
        ├── schoolRouter
        ├── sensorRouter
        └── userRouter

# air-data-generator$ tree -d
✖ ✹ ✭main
.
├── adapters
│   └── config
├── app
│   └── controller
└── internal
    ├── common
    └── entities
```

- Data Generator & Producer & Consumer çıktısı
  <img src="./img/consumer-prducer.png" alt="mimari" width="100%" height="50%" align="kafka" style="margin:10px">

- Non-Cache çıktı süresi
  <img src="./img/non-cache.png" alt="mimari" width="100%" height="50%" align="non-cache" style="margin:10px">

- Cache çıktı süresi
  <img src="./img/cache.png" alt="mimari" width="100%" height="50%" align="cache" style="margin:10px">

- MongoDB ekran görüntüsü

<img src="./img/mongodb.png" alt="mimari" width="100%" height="50%" align="mongodb" style="margin:10px">

- PosgresSQL ekran görüntüsü

<img src="./img/dbs.png" alt="mimari" width="100%" height="50%" style="margin:10px">

- Redis ekran görüntüsü

<img src="./img/redis.png" alt="mimari" width="100%" height="50%" align="redis" style="margin:10px">

- Task Manager ekran görüntüsü

<img src="./img/task-manager.png" alt="mimari" width="100%" height="50%" align="redis" style="margin:10px">

## Yazar

- [@JimySheepman](https://github.com/JimySheepman)
- [@brkybzkrt](https://github.com/brkybzkrt)
- [@mustafadurmaz](https://github.com/mustafadurmaz?tab=repositories)

## Lisans

Bu proje [MIT](https://choosealicense.com/licenses/mit/) lisans kapsamındaır.
