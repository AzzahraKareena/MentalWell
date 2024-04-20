<?php

namespace App\Controllers;

use App\Models\PartisipanModel;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\HTTP\ResponseInterface; 

class AutentikasiPartisipan extends BaseController
{
    use ResponseTrait;

    public function index()
    {
        $validation = \Config\Services::validation();
        $aturan = [
            'email_partisipan' => [
                'rules' => 'required|valid_email',
                'errors'=>[
                    'required'=>'Silahkan masukkan email',
                    'valid_email'=>'Silahkan masukkan email yang valid'
                ]
            ],
            'password_partisipan' =>[
                'rules' => 'required',
                'errors'=>[
                    'required'=>'Silahkan masukkan password',
                ]
            ]
        ];
        $validation->setRules($aturan);
        if(!$validation->withRequest($this->request)->run()){
            return $this->fail($validation->getErrors(), ResponseInterface::HTTP_BAD_REQUEST);
        }

        $model = new PartisipanModel();
        $email = $this->request->getVar('email_partisipan');
        $password = $this->request->getVar('password_partisipan');

        $data = $model->where('email_partisipan', $email)->first();
        if (!$data || !password_verify($password, $data['password_partisipan'])) {
            return $this->fail("Email atau password tidak sesuai", ResponseInterface::HTTP_UNAUTHORIZED);
        }

        helper('jwt');
        $response = [
            'message' =>'Autentikasi berhasil dilakukan',
            'data' => $data,
            'access_token' => createJWT($email)
        ];
        return $this->respond($response, ResponseInterface::HTTP_OK);
    }
}
