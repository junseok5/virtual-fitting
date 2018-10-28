Virtual-fitting
===============
> Virtual fitting is develope mode...

## About
The project is virtual fitting open market relevant graduation project.

## Stack
### Frontend
* React
* React Router
* Redux
* Redux-pender
* Sass

### Backend
* Node.js
* Koa
* MongoDB
* Mongoose
* Jsonwebktoken

## Running on your Machine
These instructions will get you a copy of the project up and running on your local machine for development or testing purposes.

### Prerequisites
* Node.js v8^
* yarn
* MongoDB

### Installation
Clone this project from the github repository.
<pre>
$ git clone https://github.com/junseok5/virtual-fitting
</pre>
Install packages in both backend and frontend directory using following command:
<pre>
$ yarn
</pre>

### Rename .env.bak file
You have to rename **.env.bak** file to **.env** in backend directory. This file contains environment variable for the server.

### Running Backend Development Server
To run the development server, execute following command inside backend directory:
<pre>
$ yarn start:dev
</pre>

### Running Frontend Webpack Development Server
To run the webpack-dev-server for frontend, execute following command inside frontend directory:
<pre>
$ yarn start
</pre>