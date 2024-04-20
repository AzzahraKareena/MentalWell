<?php

namespace App\Models;

use CodeIgniter\Model;
use Exception;

class PartisipanModel extends Model
{
    protected $table            = 'partisipan';
    protected $primaryKey       = 'id_partisipan';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['nama_partisipan', 'email_partisipan', 'password_partisipan', 'usia', 'no_telp', 'created_at'];

    protected $validationRules = [
        'nama_partisipan' => 'required',
        'email_partisipan' => 'required|valid_email',
        'password_partisipan' => 'required',
        'usia' => 'required|numeric',
        'no_telp' => 'required|numeric'
    ];

    protected $validationMessages = [
        'nama_partisipan' => [
            'required' => 'Silahkan masukkan nama'
        ],
        'email_partisipan' => [
            'required' => 'Silahkan masukkan email',
            'valid_email' => 'Masukkan email yang valid'
        ],
        'password_partisipan' => [
            'required' => 'Silahkan masukkan password'
        ],
        'usia' => [
            'required' => 'Silahkan masukkan usia',
            'numeric' => 'Usia harus berupa angka'
        ],
        'no_telp' => [
            'required' => 'Silahkan masukkan nomor telepon',
            'numeric' => 'Nomor telepon harus berupa angka'
        ]
    ];
    
    

    // Dates
    protected $useTimestamps = true;
    protected $dateFormat    = 'datetime';
    protected $createdField  = 'created_at';
    protected $updatedField  = 'updated_at';
    protected $deletedField  = 'deleted_at';

    // Validation
    // protected $validationRules      = [];
    // protected $validationMessages   = [];
    protected $skipValidation       = false;
    protected $cleanValidationRules = true;

    // Callbacks
    protected $allowCallbacks = true;
    protected $beforeInsert   = [];
    protected $afterInsert    = [];
    protected $beforeUpdate   = [];
    protected $afterUpdate    = [];
    protected $beforeFind     = [];
    protected $afterFind      = [];
    protected $beforeDelete   = [];
    protected $afterDelete    = [];
}
