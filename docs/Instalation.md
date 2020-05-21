---
id: instalation
title: Instalation (without Docker)
description: Instalation How To - xkeleton laravel boilerplate
keywords:
  - docs
  - xkeleton
  - docker
  - laravel
sidebar_label: 
---

## Clone the repo

```bash
git clone https://github.com/claudiusnascimento/xkeleton.git
```

Enter in project folder

``` bash
cd xkeleton
```

## Delete the followed docker files and folders (not madatory)

```bash
sudo rm -rf docker
```

```bash
rm  Dockerfile docker-compose.yml
```

## Install project

```bash
composer install
```

## Folder Permissions
```bash
sudo chmod -R 777 storage/
sudo chmod -R 777 bootstrap/
```

## Copy .env.axample
```bash
cp .env.example .env
```

## Generate the key 
```bash
php artisan key:generate
```

## Database

Set correct the database options in .env file for your environment.

*** This step is note necessary if you install with docker ***

## Run migrations 
```bash
php artisan migrate
```

## Seeding 

> Uncomment in ***Illuminate\Database\Seeder\DatabaseSeeder*** the seeds that you want and...

```bash
php artisan db:seed
```
> *After that is good practice comment the seeds again*

## Access the admin
```
http://localhost:8080/admin
```

## Log with credentials

- email: ***admin@admin.com*** 
- pass: ***123456***
