---
id: guide
title: Guide
sidebar_label: 
description: A litle guide to work with xkeleton laravel boilerplate
keywords:
  - docs
  - xkeleton
  - docker
  - laravel
---

## Guide flow

:::caution

This guide and boilerplate are in current development

:::

This boilerplate haven't any different development things. 

> ***It's just laravel. Simple like that.***

- Access the route
- Validations
- Go to controllers
- Call some data
- Return a view

It's a simple framework flow.

## CrudTrait

Soon i'll be back to talk about the ***abstraction CrudTrait***. For now you can take a look in the file:

``` php
App\Http\Controllers\Admin\PageController.php
```

## Using docker

If you are using Docker to run this boilerplate keep in mind that...

- The docker containers volumes and configs are in */docker* folder

- The DB data keeps in you computer in */docker/dbdata*.
> Each time that you create another project coping and paste this project, remember to delete al files inside that folder but keep .gitignore

- The other tree folders contains the configurations of mysql, nginx and php

... more documentations soon .. 
