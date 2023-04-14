# Project Title

## Store API

## Description

This is a REST API application that allows users to search,filter,sort Products.

## Used Technologies

In this build I used Node.js, Express.js, Mongodb, Mongoose, Typecript, Nodemon, Morgan, Dotenv.

## Features

Search products by name.
Filter products by various criteria.
Sort products by different fields.
Select specific fields to retrieve.
Paginate and limit results.

## How to install

Download and run npm install.

Then First you need to create .env file in root directory. Create there Variable
MONGO_URI= Here you need to write your MongoDb cluster connect key
exapmle:

```bash
MONGO_URI=mongodb+srv://giorgi:yourClusterPassword@yourClusterName.zi9vxpj.mongodb.net/yourDatabaseName?retryWrites=true&w=majority
```

Then run npm start.

## API Reference

#### Get all products

```http
  GET /api/v1/products
```

#### Searching and Filtering

##### Search by name & featured & company

```http
  GET /api/v1/products?name={name of product that you want to search}
```

```http
  GET /api/v1/products?featured={true or false}
```

```http
  GET /api/v1/products?company={ikea, liddy, caressa, marcos}
```

#### Filters & sort & paginate

##### Sort

Users can sort products in ascending and descending order. write before value + if you want to sort in ascending order and if you want to sort in descending order write - example: ?sort=-name

```http
  GET /api/v1/products?sort={any value of product}
```

##### Numeric filters

Users can filter products by numeric filter: > , >= , = , < , <= ,
exapmle:

```http
/products?numericFilters=price>40,rating>=4
```

##### Paginate

```http
  GET /api/v1/products?page={number of page you want}
```

#### Fields & limit

Users can specify the fields they want to retrieve for each product using the fields query parameter. For example, to retrieve only the name and price fields,
example:

```http
  GET /api/v1/products?fields=name,price
```

##### limit

To limit the number of products returned by the API, users can include the limit parameter in the query string with the desired amount of products.
exapmle:

```http
  GET /api/v1/products?limit=10
```

#### Chaining

To allow for more flexible querying, users can chain multiple query properties together using the & symbol. Here are some examples:

```http
  GET /api/v1/products?featured=false&page=2
```

```http
  GET /api/v1/products?name=high-back bench&rating=4
```

```http
  GET /api/v1/products?fields=name,price&page=2
```
