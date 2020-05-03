<?php

namespace App\Controller;

use App\Auth\JwtAuthenticator;
use App\JsonResponse;
use App\UserNotFoundException;
use App\Users;
use Exception;
use Psr\Http\Message\ServerRequestInterface;

final class CreateUser
{
    private $authenticator;
    private $users;

    public function __construct(JwtAuthenticator $authenticator, Users $users)
    {
        $this->authenticator = $authenticator;
        $this->users = $users;
    }

    public function __invoke(ServerRequestInterface $request)
    {
        $user = json_decode((string) $request->getBody(), true);
        $name = $user['name'] ?? '';
        $email = $user['email'] ?? '';
        $password = $user['password'] ?? '';

        if (empty($name) || empty($email) || empty($password)) {
            return JsonResponse::badRequest("Missing required parameters");
        }

        return $this->users->create($name, $email, $password)
            ->then(
                function () use ($email, $password) {
                    return $this->authenticator->authenticate($email, $password)
                        ->then(
                            function (string $token) {
                                if (empty($token)) {
                                    throw new UserNotFoundException();
                                }
                                return JsonResponse::ok(['token' => $token]);
                            },
                        );
                },
                function (Exception $error) {
                    return JsonResponse::badRequest($error->getMessage());
                }
            );
    }
}
