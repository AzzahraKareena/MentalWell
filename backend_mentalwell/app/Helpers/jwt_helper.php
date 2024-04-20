<?php

use App\Models\ModelAutentikasiPartisipan;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

function getJWT($autentikasiHeader)
{
    if(is_null($autentikasiHeader)){
        throw new Exception("Otentikasi JWT Gagal");
    }
    return explode(" ",$autentikasiHeader)[1];
}

function validateJWT($encodedToken){
    $key= getenv("JWT_SECRET_KEY");
    $decodedToken = JWT::decode($encodedToken, new Key($key, 'HS256'));
    $modelAutentikasi = new ModelAutentikasiPartisipan();

    $modelAutentikasi->getEmail($decodedToken->email);

}

function createJWT($email){
    $waktuRequest = time();
    $waktuToken = getenv("JWT_TIME_TO_LIVE");
    $waktuExpired = $waktuRequest + $waktuToken;
    $payload = [
        'email_aut'=>$email,
        'iat' => $waktuRequest,
        'exp' => $waktuExpired
    ];
    $key = getenv('JWT_SECRET_KEY');
    $jwt = JWT::encode($payload, $key, 'HS256');
    return $jwt;
}