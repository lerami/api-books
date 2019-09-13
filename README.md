# Project

## Prerequisites

Make sure that node and npm are installed on your system before continuing.

## Installing

Run the following command to install the dependencies

```
npm i
```

## Run the project

Run the following command to start the server locally

```
npm run serve
```

The server will start by default on port 8000.

## API

When running locally, you can test the api on the following url : localhost:3000/

### Routes

```
GET /books
```
return a json object with the list of all the books

```
GET /books/:id 
```
return a json object for the book id 