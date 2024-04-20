<?php

namespace App\Models;

use CodeIgniter\Model;
use Exception;

class ModelAutentikasiPartisipan extends Model
{
    protected $table      = 'autentikasi_partisipan';
    protected $primaryKey = 'id_aut';
    protected $returnType     = 'array';
    protected $useSoftDeletes = false;

    protected $allowedFields = ['email_aut', 'password_aut']; 

    function getEmail($email){
        $builder = $this->table("autentikasi_partisipan");
        $data = $builder->where("email_aut", $email)->first();
        if (!$data){
            throw new Exception("Data autentikasi tidak ditemukan");
        }
        return $data;
    }
    function checkPassword($email, $password) {
        $userData = $this->getEmail($email);
        if (password_verify($password, $userData['password_aut'])) {
            return true;
        } else {
            return false;
        }
    }
}