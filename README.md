# Frontend - Tienda Online Bsale

Listar productos que se contengan en la tienda en línea de Bsale.

## Endpoints

### GET Lista de productos

`GET /api/v1/product/list`

Al realizar una petición HTTP, el servicio retornará los producto de la tienda en línea de Bsale.

#### Query Parameters

- **limit** : Limita la cantidad de items de una respuesta JSON, por default es _10_.
- **offset** : Permite el paginado de la lista de productos.
- **search** : Busca un producto por nombre, por default es _null_.
- **order** : Ordena la lista de productos por nombre, por default es _null_.
- **price** : Ordena la lista de productos por precio, por default es _null_.

##### Ejemplos

- `GET /api/v1/product/list?limit=10&offset=0`
- `GET /api/v1/product/list?search=pisco`
- `GET /api/v1/product/list?search=pisco&limit=10&offset=0order=desc`

```json
{
  "msg": "Products fetched successfully",
  "count": 57,
  "limit": 2,
  "offset": 0,
  "products": [
    {
      "id": 5,
      "name": "ENERGETICA MR BIG",
      "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
      "price": 1490,
      "discount": 20,
      "category": 1
    },
    {
      "id": 6,
      "name": "ENERGETICA RED BULL",
      "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
      "price": 1490,
      "discount": 0,
      "category": 1
    }
  ]
}
```

##### Donde:

- **msg**: Mensaje de respuesta.
- **count**: Cantidad de productos.
- **limit**: Limite de productos.
- **offset**: Desplazamiento de productos.
- **products**: Lista de productos.
- **id**: Identificador del producto.
- **name**: Nombre del producto.
- **url_image**: URL de la imagen del producto.
- **price**: Precio del producto.
- **discount**: Porcentaje de descuento del producto.
- **category**: Id de la categoria del producto.

### GET Lista de productos por categoría

`GET /api/v1/product/list/:categoryName`

Al realizar una petición HTTP, el servicio retornará las colecciones de productos correspondientes a la categoría especificada.

#### Query Parameters

- **limit** : Limita la cantidad de items de una respuesta JSON, por default es _10_.
- **offset** : Permite el paginado de la lista de productos por categoría.
- **order** : Ordena la lista de productos por nombre, por default es _null_.
- **price** : Ordena la lista de productos por precio, por default es _null_.

##### Ejemplos:

- `GET /api/v1/product/list/pisco`
- `GET /api/v1/product/list/bebida?limit=10&offset=0`
- `GET /api/v1/product/list/bebida?order=asc&price=desc`

```json
{
  "msg": "Products fetched by category successfully",
  "categoryId": 4,
  "count": 7,
  "limit": 2,
  "offset": 0,
  "products": [
    {
      "id": 37,
      "name": "COCA COLA ZERO DESECHABLE",
      "url_image": "https://dojiw2m9tvv09.cloudfront.net11132product/cocazero9766.jpg",
      "price": 1490,
      "discount": 0,
      "category": "bebida"
    },
    {
      "id": 48,
      "name": "SPRITE 1 1/2 Lts",
      "url_image": "https://dojiw2m9tvv09.cloudfront.net11132product/sprite-lata-33cl5575.jpg",
      "price": 1500,
      "discount": 0,
      "category": "bebida"
    }
  ]
}
```

##### Donde:

- **msg**: Mensaje de respuesta.
- **categoryId**: Identificador de la categoria.
- **count**: Cantidad de productos.
- **limit**: Limite de productos.
- **offset**: Desplazamiento de productos.
- **products**: Lista de productos.
- **id**: Identificador del producto.
- **name**: Nombre del producto.
- **url_image**: URL de la imagen del producto.
- **price**: Precio del producto.
- **discount**: Porcentaje de descuento del producto.
- **category**: Id de la categoria del producto.
