---
id: docker
title: Instalation (with Docker)
sidebar_label: 
---

## Clone the repo

``` bash
git clone https://github.com/claudiusnascimento/xkeleton.git
```

Enter in project folder

``` bash
cd xkeleton
```

## Up the containers

Now, run the followed code to up the containers.

``` bash
docker-compose up -d
```

## Install project

``` bash
sudo docker-compose exec app composer install
```

## Folder permissions
``` bash
sudo docker-compose exec app chmod -R 777 storage/
sudo docker-compose exec app chmod -R 777 bootstrap/
```

## Copy .env.axample

``` bash
cp .env.example .env
```

## Generate the key

``` bash
sudo docker-compose exec app php artisan key:generate
```

## Accessing the application
```
http://localhost:8080
```

## Run migrations
``` bash
sudo docker-compose exec app php artisan migrate
```

## Seeding

Uncomment in ***Illuminate\Database\Seeder\DatabaseSeeder*** the seeds that you want and...

``` bash
sudo docker-compose exec app php artisan db:seed
```

*After that is good practice comment the seeds again*

## Access the admin
```
http://localhost:8080/admin
```

## Log with credentials

- email: ***admin@admin.com*** 
- pass: ***123456***


### To tests run
``` bash
sudo docker-compose exec app vendor/bin/phpunit
```

## To access the container with 'sudo' permissions run
``` bash
docker exec -u root -t -i app /bin/bash
```

## Down the containers

``` bash
docker-compose down
```