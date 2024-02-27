<!DOCTYPE html>

<html ng-app="LibrosApp">

    <head>
        <meta charset="UTF-8">
        <title>Libros</title>

        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
        <script src="controlador.js"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
              integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <div ng-controller="controlador" class="container">
            <h1 style="text-align: center;" class="my-5">Registro de Libros</h1>

            <form ng-submit="agregarLibro()" class="input-group mb-3">
                <input type="text" ng-model="nuevoLibro.nombre" placeholder="Nombre del libro" required class="form-control mx-2">
                <input type="text" ng-model="nuevoLibro.libreria" placeholder="Libreria" class="form-control mx-2">
                <input type="text" ng-model="nuevoLibro.sinopsis" placeholder="Sinopsis" class="form-control mx-2">
                <input type="url" ng-model="nuevoLibro.imagen" placeholder="URL portada" class="form-control mx-2">

                <button type="submit" class="btn btn-success" id="submit">Añadir Libro</button><br>
            </form>

            <hr>

            <h2 style="text-align: center;" class="my-4">Lista de Libros</h2>


            <div class="contenedor-libros">
                <div ng-repeat="libro in listaLibros">
                    <div class="card m-3" style="width: 18rem;">
                        <img src="{{libro.imagen}}" class="card-img-top" alt="{{libro.nombre}}">
                        <div class="card-body">
                            <h5 class="card-title">{{libro.nombre}}</h5>
                            <p class="card-text">{{libro.sinopsis}}</p>
                            <p class="fw-light fw-bold libreria">{{libro.libreria}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>