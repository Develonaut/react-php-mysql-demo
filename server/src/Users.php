<?php

namespace App;

use React\MySQL\ConnectionInterface;
use React\MySQL\QueryResult;
use React\Promise\PromiseInterface;

final class Users
{
    private $db;

    public function __construct(ConnectionInterface $db)
    {
        $this->db = $db;
    }

    private function find(string $key, string $value): PromiseInterface
    {
        $query = "SELECT * FROM users WHERE $key = ?";
        return $this->db
            ->query($query, [$value])
            ->then(function (QueryResult $result) {
                if (empty($result->resultRows)) {
                    throw new UserNotFoundException();
                }

                return $result->resultRows[0];
            });
    }

    public function findByUsername(string $name): PromiseInterface
    {
        return $this->find('name', $name);
    }

    public function findByEmail(string $email): PromiseInterface
    {
        return $this->find('email', $email);
    }

    public function findById(string $id): PromiseInterface
    {
        return $this->find('id', $id);
    }

    public function all(): PromiseInterface
    {
        $query = 'SELECT * FROM users ORDER BY id';
        return $this->db
            ->query($query)
            ->then(function (QueryResult $queryResult) {
                return $queryResult->resultRows;
            });
    }

    public function update(string $id, string $newName): PromiseInterface
    {
        return $this->findById($id)
            ->then(function () use ($id, $newName) {
                $this->db->query('UPDATE users SET name = ? WHERE id = ?', [$newName, $id]);
            });
    }

    public function delete(string $id): PromiseInterface
    {
        $query = 'DELETE FROM users WHERE id = ?';
        return $this->db
            ->query($query, [$id])
            ->then(
                function (QueryResult $result) {
                    if ($result->affectedRows === 0) {
                        throw new UserNotFoundException();
                    }
                }
            );
    }

    public function create(string $name, string $email, string $password): PromiseInterface
    {
        $query = 'INSERT INTO users(name, email, password) VALUES (?, ?, ?)';
        return $this->db
            ->query($query, [$name, $email, $password])
            ->then(null, function () {
                throw new UserAlreadyExists();
            });
    }
}
