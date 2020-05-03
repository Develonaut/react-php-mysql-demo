An exploration in building a RESTful API with ReactPHP, React, MySQL, and JWT for Authentication.

This example is by no means production-ready. The ultimate goal was to help shake the rust off my PHP knowledge, as well as allow me to better help understand using JWTs for authentication.

Thoughts on the exercise:

JWT is really nice to work with and makes it easy to handle and pass around auth tokens. I would like to add a mechanism and an endpoint to keep the token updated as the user is communicating with the API.

Some significant issues would still need addressing, such as sanitizing the user inputs to protect from SQL injections as well as help strengthen different error cases and credential validation. Although the query method in ReactPHP escapes the queries we use, there are still better ways to handle them.

I would like to improve the error messaging relayed from the server. It needs more work, but it wasn't the focus due to spending the majority of my time building the scaffolding of the API itself.

Overall this exercise was a lot of fun and helped me discover some new patterns in the PHP development world as well as rekindle my love for PHP. I still really enjoy working with PHP, and I think pairs well with a React Frontend. Although this flavor of PHP is a bit different, the lessons I've learned should carry over.

Getting Started: 

To run the Frontend, navigate to the client directory within the project and run "npm i" and then "npm start" to start the project.

To run the server, navigate to the server directory, and run the PHP command "php index.php". This will spin up a local PHP server.

Note: 
If you would like to run this project locally, you will need to have a local MySQL instance with a database named "Users".
along with a table named "Users". The connection string used in the project is "root@localhost/users" and doesn't require a password to access. This was done just for ease of testing and development.
