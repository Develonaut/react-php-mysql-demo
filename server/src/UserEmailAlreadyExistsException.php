<?php

namespace App;

use RuntimeException;

final class UserEmailAlreadyExistsException extends RuntimeException
{
    public function __construct($message = "This email already exists")
    {
        parent::__construct($message);
    }
}
