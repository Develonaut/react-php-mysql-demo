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
        $email = $this->extractEmail($request);
        if ($email === null) {
            return JsonResponse::badRequest("Field 'email' is required");
        }

        return $this->authenticator->authenticate($email)
            ->then(
                function (string $token) {
                    return JsonResponse::ok(['token' => $token]);
                },
                function (UserNotFoundException $error) {
                    return JsonResponse::unauthorized();
                });
    }

    private function extractEmail(ServerRequestInterface $request): ?string
    {
        $params = json_decode((string)$request->getBody(), true);

        return $params['email'] ?? '';
    }
}
