<?php

namespace App;

use FastRoute\Dispatcher;
use FastRoute\Dispatcher\GroupCountBased;
use FastRoute\RouteCollector;
use LogicException;
use Psr\Http\Message\ServerRequestInterface;
use React\Http\Response;

final class Router
{
    private $dispatcher;

    public function __construct(RouteCollector $routes)
    {
        $this->dispatcher = new GroupCountBased($routes->getData());
    }

    public function __invoke(ServerRequestInterface $request)
    {
        // Allow preflight request to bypass CORS.
        if ($request->getMethod() === "OPTIONS") {
            return new JsonResponse(200);
        }

        $routeInfo = $this->dispatcher->dispatch($request->getMethod(), $request->getUri()->getPath());

        switch ($routeInfo[0]) {
            case Dispatcher::NOT_FOUND:
                return new JsonResponse(404, 'Not found');
            case Dispatcher::METHOD_NOT_ALLOWED:
                return new JsonResponse(405, 'Method not allowed');
            case Dispatcher::FOUND:
                $params = $routeInfo[2];
                return $routeInfo[1]($request, ... array_values($params));
        }

        throw new LogicException('Something wrong with routing');
    }
}
