# EducApp

## Descripción general del proyecto

El proyecto es una "single page application" de tipo "mobile only" en la que los usuarios podrán añadir, modificar y eliminar recursos o ideas referentes al ámbito educativo. Estos recursos podrán ser almacenados por otros usuarios en listas de favoritos, siempre y cuando, se hayan registrado(register) e
iniciado sesión(log in) previamente. Además, los usuarios que así lo deseen, podrán poner a la venta sus propios recursos educativos y comprar
los de otros usuarios(extra).

## Funciones básicas y endpoints.

La aplicación web incluye las 4 funcionalidades básicas del acrónimo CRUD cuyas siglas en inglés se refieren a: "Create, Read, Update and Delete".

Endopoint: /resources, incluye:
[get]/ [get]/:id [get]/query/:key/:value [post]/ [patch]/:id [delete]/:id

Endopoint: /users, incluye:
[post]/register [post]/login [patch]/addFavorites/:id [patch]/deleteFavorites/:id

## Modelo de datos

User:
name: string,
email: string,
password: string,
role: string,
school: string,
grade: string,
resources: Array de Ids,
favorites: Array de Ids,
carts: Array de Ids,
id: string,

Resource:
title: string,
subject: "math" | "reading" | "science" | "writing" | "pe" | "arts",
grade: "kinder" | "first" | "second" | "third" | "fourth" | "fifth" | "sixth",
description: string,
pages: string,
price: number,
format: string,
owner: Id,
id: string,

## Otra información de interés

Ejecuta npm install en la temrinal para descargar las librerias del "package.json".
