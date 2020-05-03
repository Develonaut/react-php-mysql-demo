<?php

use App\Auth\JwtAuthenticator;
use App\Auth\JwtEncoder;
use App\Auth\Guard;
use App\Controller\CreateUser;
use App\Controller\DeleteUser;
use App\Controller\ListUsers;
use App\Controller\Login;
use App\Controller\UpdateUser;
use App\Controller\ViewUser;
use App\Router;
use App\Users;
use FastRoute\DataGenerator\GroupCountBased;
use FastRoute\RouteCollector;
use FastRoute\RouteParser\Std;
use React\Http\Server;
use React\MySQL\Factory;

require __DIR__ . '/vendor/autoload.php';

const JWT_SECRET = "react-php-mysql-demo";

// Init an instance of ReactPHP's event loop.
$loop = \React\EventLoop\Factory::create();
// Create the main connection instance and registers
// everything attached to the main event loop.
$factory = new Factory($loop);
// Connect to the "users" database.
$db = $factory->createLazyConnection("root@localhost/users");
// Init User's with our db connection.
$users = new Users($db);
// Init our Authenticator with the JwtEncoder and the Users class for Authentication.
$authenticator = new JwtAuthenticator(new JwtEncoder(JWT_SECRET), $users);

// Initialize our collection of routes.
$routes = new RouteCollector(new Std(), new GroupCountBased());
// Add routes related ot user actions.
$routes->post('/login', new Login($authenticator));
$routes->post('/signup', new CreateUser($authenticator, $users));
$routes->get('/users', new ListUsers($users));
$routes->get('/users/{id}', new ViewUser($users));
$routes->put('/users/{id}', new UpdateUser($users));
$routes->delete('/users/{id}', new DeleteUser($users));

// Init the Guard class and pass along the authenticator to use
// in "/users" routes.
$auth = new Guard('/users', $authenticator);

// Init the server with the Auth and Router middleware to handle requests,
$server = new Server([$auth, new Router($routes)]);
// Init a socket with the established event loop.
$socket = new \React\Socket\Server(8000, $loop);
// Instruct server to use the designated socket to process connections
$server->listen($socket);
// Echos any unhandled Exceptions that may occur on the server.
$server->on('error', function (Exception $exception) {
    echo $exception->getMessage() . PHP_EOL;
});

echo 'Listening on ' . str_replace('tcp:', 'http:', $socket->getAddress()) . "\n";

// Run the created event loop.
$loop->run();
