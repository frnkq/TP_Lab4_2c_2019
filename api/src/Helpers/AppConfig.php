<?php 
namespace Helpers;

class AppConfig
{
    public static $illuminateDb = [
        'driver' => 'mysql',
        'host' => 'localhost',
        'database' => 'tp_php',
        'username' => 'root',
        'password' => '',
        'charset' => 'utf8',
        'collation' => 'utf8_unicode_ci',
        'prefix' => ''
    ];

    public static $tables = [
        'mesas' => "mesas",
        'empleados' => "empleados",
        'users' => "users"
    ];

    public static $estadosMesa = [
        'disponible' => "Disponible",
        'clienteEsperando' => "Cliente esperando pedido",
        'clienteComiendo' => "Cliente comiendo",
        'clientePagando' => "Cliente pagando",
        'cerrada' => "Cerrada",
    ];

    public static $estadosPedido = [
        'nuevo' => "Nuevo",
        'enPreparacion' => "En preparacion",
        'sirviendo' => "Sirviendo productos",
        'listoParaServir' => "Listo para servir",
        'entregado' => "Entregado a la mesa",
        'pagando' => "Pagado",
        'cerrado' => "Cerrado",
        'cancelado' => "Cancelado",
    ];

    public static $imagesDirectories = [
        'mesas' => 'public/img/mesas',
        'mesasBkp' => 'archive/img/mesas',
        'empleados' => 'public/img/empleados',
        'empleadosBkp' => 'archive/img/empleados'
];

    public static $imageConstraints = [
        'size' => '500000', //0,5mb
        'types' => [
            'image/jpeg', 'image/jpeg', 'image/png'
        ],
        'extensions' => [
            '.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'
        ]
    ];

    public static $empleadosRoles = [
        "socio" => "Socio",
        "mozo" => "Mozo",
        "bartender" => "Bartender", //vino
        "cervecero" => "Cervecero",
        "cocinero" => "Cocinero" //cocina y postres (candybar)
      ];

    public static $categoriasProducto = [
        'cocina' => "Cocina",
        'bar' => "Bar",
        'cerveza' => "Cerveza",
        'postre' => "Postre"
    ];

}
