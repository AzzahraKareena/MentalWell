<?php

namespace App\Filters;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Filters\FilterInterface;

use Config\Services;
use Exception;

class FilterJwt implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        $header = $request->getServer('HTTP_AUTHORIZATION');
        try {
            helper('jwt');
            $encodedToken = getJWT($header);
            validateJWT($encodedToken);
        } catch (Exception $e) {
            return Services::response()->setJSON(
                [
                    'error' => $e->getMessage()
                ]
            )->setStatusCode(ResponseInterface::HTTP_UNAUTHORIZED);
        }
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
        // Jika ada logika yang perlu dilakukan setelah verifikasi JWT, letakkan di sini
    }
}
