const PageFactures = () => {
  return (
    <div id="page-factures">
      <h1 className="text-center text-info m-3">Sacar cuentas de recibos publicos</h1>
      <div className="container">
        {/* Datos recibo */}
        <div className="mt-3">
          <p className="fs-4">Servicio publico</p>
          <select
            className="form-select py-2 fs-4"
            aria-label="Default select example" id="selectorRecibo"
            defaultValue={'luz'}>
            <option>Seleccione el servicio publico</option>
            <option value="luz">Luz</option>
            <option value="gas">Gas</option>
            <option value="agua">Agua</option>
          </select>
          <label className="fs-4 my-3">Ingrese el valor</label>
          <div className="input-group">
            <input type="text" id="valorRecibo" className="form-control" aria-label="Monto pesos (con tres decimales despues del punto" />
            <span className="input-group-text">$</span>
          </div>
        </div>
        {/* Agregar visitante */}
        <div className="accordion my-3" id="accordionVisitante">
          <div className="accordion-item">
            <h2 className="accordion-header" id="tituloAcordeon">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseVisitante" aria-expanded="false" aria-controls="collapseVisitante">
                Agregar visitante
              </button>
            </h2>
            <div id="collapseVisitante" className="accordion-collapse collapse" aria-labelledby="tituloAcordeon" data-bs-parent="#accordionVisitante">
              <div className="accordion-body ">
                <p className="fs-5">Apartamento del visitante</p>
                <select className="form-select py-1 fs-5" aria-label="Default select Visitante" id="aptoVisitante"
                  defaultValue={'101'}>
                    <option>Seleccione numero de apto</option>
                    <option value="301">301 (Propietarios)</option>
                    <option value="302">302</option>
                    <option value="201">201</option>
                    <option value="102">202/102</option>
                    <option value="101">101</option>
                    <option value="local">Local</option>
                </select>
                <div className="input-group my-3 ">
                    <span className="input-group-text" >Numero de visitantes</span>
                    <input type="number" className="form-control"  aria-label="numerohuesped" aria-describedby="cantVistantes" />
                </div>
                <div className="input-group my-3">
                  <span className="input-group-text">Numero de dias estancia</span>
                  <input type="number" className="form-control" aria-label="numerodias" id="numDiasVistante" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Boton de calculo */}
        { /*<button type="button" className="btn btn-info text-white" onclick="">Calcular</button> }
        {/* Resultado valor del recibo */}
        <div id="contenidoResultado"></div>
      </div>
    </div>
  );
}

export { PageFactures };