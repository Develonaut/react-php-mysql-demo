<?php

namespace App\Controller;

use App\Auth\JwtAuthenticator;
use App\JsonResponse;
use App\UserNotFoundException;
use Psr\Http\Message\ServerRequestInterface;

final class Login
{
    private $authenticator;

    public function __construct(JwtAuthenticator $authenticator)
    {
        $this->authenticator = $authenticator;
    }

    public function __invoke(ServerRequestInterface $request)
    {
        $params = json_decode((string)$request->getBody(), true);
        $email = $params['email'] ?? '';
        $password = $params['password'] ?? '';

        if (empty($email) || empty($password)) {
            return JsonResponse::badRequest("Missing required fields");
        }

        return $this->authenticator->authenticate($email, $password)
            ->then(
                function (string $token) {
                    if (empty($token)) {
                        return JsonResponse::badRequest("Invalid User Credentials");
                    }
                    return JsonResponse::ok(['token' => $token]);
                },
                function () {
                    return JsonResponse::unauthorized();
                }
            );
    }
}
