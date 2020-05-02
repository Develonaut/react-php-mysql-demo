<?php

namespace App;

use RuntimeException;

final class UserEmailAlreadyExists extends RuntimeException
{
    public function __construct($message = "This email is already assigned to a user")
    {
        parent::__construct($message);
    }
}
