<!DOCTYPE html>
<html>
    <head>
        <title>Cuentas servicios publicos</title>
        <meta charset="utf-8">
        <!--Talla escitorio-->
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!--CSS Bootstrap 5.2-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    </head>

    <body>
        <!-- Contenido de la pagina -->
        <header>
            <h1 class="text-center text-info m-3">Sacar cuentas de recibos publicos</h1>
        </header>
        <main class="container">
            <!-- Datos recibo-->
            <div class="mt-3">
                <p class="fs-4">Servicio publico</p>
                <select class="form-select py-2 fs-4" aria-label="Default select example" id="selectorRecibo">
                    <option selected>Seleccione el servicio publico</option>
                    <option value="luz">Luz</option>
                    <option value="gas">Gas</option>
                    <option value="agua">Agua</option>
                  </select>
                  <label class="fs-4 my-3" for="valorRecibo">Ingrese el valor</label>
                  <div class="input-group">
                    <input type="text" id="valorRecibo" class="form-control" aria-label="Monto pesos (con tres decimales despues del punto">
                    <span class="input-group-text">$</span>
                  </div>
            </div>
            <!-- Agregar visitante -->
            <div class="accordion my-3" id="accordionVisitante">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="tituloAcordeon">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseVisitante" aria-expanded="false" aria-controls="collapseVisitante">
                      Agregar visitante
                    </button>
                  </h2>
                  <div id="collapseVisitante" class="accordion-collapse collapse" aria-labelledby="tituloAcordeon" data-bs-parent="#accordionVisitante">
                        <div class="accordion-body ">
                            <p class="fs-5">Apartamento del visitante</p>
                            <select class="form-select py-1 fs-5" aria-label="Default select Visitante" id="aptoVisitante">
                                <option selected>Seleccione numero de apto</option>
                                <option value="301">301 (Propietarios)</option>
                                <option value="302">302</option>
                                <option value="201">201</option>
                                <option value="102">202/102</option>
                                <option value="101">101</option>
                                <option value="local">Local</option>
                            </select>
                            <div class="input-group my-3 ">
                                <span class="input-group-text" >Numero de visitantes</span>
                                <input type="number" class="form-control"  aria-label="numerohuesped" aria-describedby="cantVistantes">
                            </div>
                            <div class="input-group my-3">
                                <span class="input-group-text">Numero de dias estancia</span>
                                <input type="number" class="form-control" aria-label="numerodias" id="numDiasVistante">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- boton calculo -->
            <button type="button" class="btn btn-info text-white" onclick="">Calcular</button>
            <!-- Resultado valor del recibo -->
            <div id="contenidoResultado">
            </div>
        </main>

        <!--Script-->
        <script src=""></script>
        <!--Script Bootstrap-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>


    </body>

</html>
