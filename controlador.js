var app = angular.module("LibrosApp", []);

app.controller("controlador", function ($scope) {
    $scope.nuevoLibro = {};

    $scope.listaLibros = [
        {
            nombre: "Juego de Tronos",
            imagen: "https://images.cdn3.buscalibre.com/fit-in/520x520/1e/bd/1ebdf12d1e1f8f1de83c7fdfe3c2b1a5.jpg",
            sinopsis: "En un mundo ficticio donde el verano y el invierno pueden durar décadas, las casas nobles luchan por el control del Trono de Hierro mientras una fuerza antigua y misteriosa se despierta en el norte.",
            libreria: "Gigamesh"
        },
        {
            nombre: "Yo Robot",
            imagen: "https://images.cdn2.buscalibre.com/fit-in/360x360/f3/6a/f36aef79eb2ba2533b6cfff90dde10ed.jpg",
            sinopsis: "En una sociedad futurista donde los robots están integrados en la vida cotidiana, un investigador de robots debe resolver una serie de incidentes aparentemente relacionados con las Tres Leyes de la Robótica.",
            libreria: "Edhasa"
        },
        {
            nombre: "Cien años de soledad",
            imagen: "https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg",
            sinopsis: "Una saga familiar que abarca varias generaciones en el pueblo ficticio de Macondo, mostrando los eventos surrealistas y mágicos que ocurren a lo largo del tiempo.",
            libreria: "Sudamericana"
        },
        {
            nombre: "El nombre del viento",
            imagen: "https://images.cdn3.buscalibre.com/fit-in/360x360/a7/90/a790dff70defe5c61b66fd73716b6e30.jpg",
            sinopsis: "La historia de Kvothe, un joven prodigio en la magia y la música, que narra sus aventuras y desventuras mientras busca venganza contra los seres que destruyeron a su familia.",
            libreria: "Plaza & Janés"
        },
        {
            nombre: "1984",
            imagen: "https://images.cdn2.buscalibre.com/fit-in/360x360/67/2e/672ee81ffd4909a069d4bbcfeeecfe0e.jpg",
            sinopsis: "Una distopía que muestra un mundo totalitario donde el gobierno controla todos los aspectos de la vida de las personas, incluso sus pensamientos, y un hombre lucha por rebelarse contra el sistema opresivo.",
            libreria: "Debolsillo"
        },
        {
            nombre: "El amor en los tiempos del cólera",
            imagen: "https://images.cdn1.buscalibre.com/fit-in/360x360/82/ee/82ee9d3a78d802d2415db9fec73e1df4.jpg",
            sinopsis: "Una historia de amor épica que sigue la vida de Florentino Ariza y Fermina Daza, quienes se reencuentran en la vejez después de haber estado separados durante décadas, demostrando que el amor puede perdurar a pesar del tiempo y las adversidades.",
            libreria: "Norma"
        }
    ];

    $scope.agregarLibro = function () {
        // Crear una copia del objeto nuevoLibro y agregarlo a listaLibros
        $scope.listaLibros.push(angular.copy($scope.nuevoLibro));
        $scope.nuevoLibro = {};
    };


});