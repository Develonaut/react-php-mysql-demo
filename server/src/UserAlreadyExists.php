<?php

namespace App;

use RuntimeException;

final class UserAlreadyExists extends RuntimeException
{
    public function __construct($message = "User Already Exists")
    {
        parent::__construct($message);
    }
}
