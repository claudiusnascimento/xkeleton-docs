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

export const Highlight = ({children, color}) => ( <span style={{
    backgroundColor: color,
    borderRadius: '2px',
    color: '#fff',
    padding: '0.5rem',
  }}> {children} </span>);


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
``` bash
sudo docker-compose exec app chmod -R 777 storage/
```
``` bash
sudo docker-compose exec app chmod -R 777 bootstrap/
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

> Open the file <Highlight color="#035040">database/seeds/DatabaseSeeder.php</Highlight> and uncomment the seeds that you want and...

```bash
php artisan db:seed
```
> <Highlight color="#035040">After that is good practice comment the seeds again</Highlight>

## Access the admin
```
http://localhost:8080/admin
```

## Log with credentials

- email: ***admin@admin.com*** 
- pass: ***123456***
