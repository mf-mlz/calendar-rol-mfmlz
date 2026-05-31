import React from "react";

function Reportes() {
  const ingresos = [
    { fecha: "01/02/2026", concepto: "CAJA", cantidad: 7118.0 },
    {
      fecha: "08/02/2026",
      concepto: "SIEMBRA - Hna Tere y Ricardo (Tablaroca)",
      cantidad: 3000.0,
    },
    { fecha: "08/02/2026", concepto: "DIEZMO", cantidad: 3376.0 },
    { fecha: "08/02/2026", concepto: "CAJA", cantidad: 5494.0 },
    { fecha: "15/02/2026", concepto: "DIEZMO", cantidad: 2369.0 },
    { fecha: "15/02/2026", concepto: "CAJA", cantidad: 6672.0 },
    { fecha: "22/02/2026", concepto: "DIEZMO", cantidad: 1120.0 },
    { fecha: "22/02/2026", concepto: "CAJA", cantidad: 7792.0 },
    { fecha: "26/02/2026", concepto: "DIEZMO", cantidad: 380.0 },
    { fecha: "26/02/2026", concepto: "CAJA", cantidad: 8172.0 },
    { fecha: "01/03/2026", concepto: "DIEZMO", cantidad: 905.5 },
    { fecha: "01/03/2026", concepto: "CAJA", cantidad: 905.5 },
    { fecha: "05/03/2026", concepto: "DIEZMO", cantidad: 628.0 },
    { fecha: "05/03/2026", concepto: "CAJA", cantidad: 1403.5 },
    { fecha: "08/03/2026", concepto: "DIEZMO", cantidad: 1170.0 },
    { fecha: "08/03/2026", concepto: "CAJA", cantidad: 2573.5 },
    { fecha: "15/03/2026", concepto: "DIEZMO", cantidad: 3861.0 },
    { fecha: "15/03/2026", concepto: "CAJA", cantidad: 6034.5 },
    { fecha: "22/03/2026", concepto: "DIEZMO", cantidad: 1257.0 },
    { fecha: "22/03/2026", concepto: "CAJA", cantidad: 6741.5 },
    { fecha: "27/03/2026", concepto: "DIEZMO", cantidad: 250.0 },
    { fecha: "29/03/2026", concepto: "DIEZMO", cantidad: 1012.5 },
    { fecha: "29/03/2026", concepto: "CAJA", cantidad: 8004.0 },
    { fecha: "02/04/2026", concepto: "DIEZMO", cantidad: 750.0 },
    { fecha: "02/04/2026", concepto: "CAJA", cantidad: 7839.0 },
    { fecha: "05/04/2026", concepto: "DIEZMO", cantidad: 3549.0 },
    { fecha: "05/04/2026", concepto: "CAJA", cantidad: 11388.0 },
    { fecha: "06/04/2026", concepto: "DIEZMO", cantidad: 640.0 },
    { fecha: "06/04/2026", concepto: "CAJA", cantidad: 12028.0 },
    { fecha: "12/04/2026", concepto: "DIEZMO", cantidad: 855.0 },
    { fecha: "06/04/2026", concepto: "CAJA", cantidad: 4033.0 },
    { fecha: "18/04/2026", concepto: "DIEZMO", cantidad: 250.0 },
    { fecha: "19/04/2026", concepto: "DIEZMO", cantidad: 2157.5 },
    { fecha: "19/04/2026", concepto: "CAJA", cantidad: 6230.5 },
    { fecha: "24/04/2026", concepto: "DIEZMO", cantidad: 250.0 },
    { fecha: "24/04/2026", concepto: "CAJA", cantidad: 6480.5 },
    { fecha: "02/05/2026", concepto: "DIEZMO", cantidad: 250.0 },
    { fecha: "02/05/2026", concepto: "CAJA", cantidad: 5315.5 },
    { fecha: "03/05/2026", concepto: "DIEZMO", cantidad: 3813.0 },
    { fecha: "03/05/2026", concepto: "CAJA", cantidad: 9128.5 },
    { fecha: "07/05/2026", concepto: "DIEZMO", cantidad: 310.0 },
    { fecha: "07/05/2026", concepto: "CAJA", cantidad: 690.5 },
    { fecha: "10/05/2026", concepto: "DIEZMO", cantidad: 1525.0 },
    { fecha: "10/05/2026", concepto: "CAJA", cantidad: 2215.5 },
    { fecha: "11/05/2026", concepto: "DIEZMO", cantidad: 3000.0 },
    { fecha: "11/05/2026", concepto: "CAJA", cantidad: 4590.5 },
    { fecha: "16/05/2026", concepto: "DIEZMO", cantidad: 250.0 },
    { fecha: "16/05/2026", concepto: "CAJA", cantidad: 4340.5 },
    { fecha: "17/05/2026", concepto: "DIEZMO", cantidad: 1330.0 },
    { fecha: "17/05/2026", concepto: "CAJA", cantidad: 5670.5 },
    { fecha: "24/05/2026", concepto: "DIEZMO", cantidad: 2436.0 },
    { fecha: "24/05/2026", concepto: "CAJA", cantidad: 7994.5 },
    { fecha: "30/05/2026", concepto: "DIEZMO", cantidad: 250.0 },
    { fecha: "30/05/2026", concepto: "CAJA", cantidad: 8244.5 },
    { fecha: "30/05/2026", concepto: "CAJA (CIERRE)", cantidad: 8194.5 },
  ];

  const gastos = [
    { fecha: "01/02/2026", concepto: "SE PAGA RENTA", cantidad: 5000.0 },
    {
      fecha: "08/02/2026",
      concepto: "MATERIAL ESCENARIO Y TABLAROCA",
      cantidad: 500.0,
    },
    {
      fecha: "15/02/2026",
      concepto: "TABLAROCA VISA (8/9) + MATERIAL ESCENARIO + TAPIZ NIÑOS SALÓN",
      cantidad: 1191.0,
    },
    {
      fecha: "26/02/2026",
      concepto: "SILLAS + INTERÉS PRÉSTAMO + TABLAROCA",
      cantidad: 825.0,
    },
    {
      fecha: "01/03/2026",
      concepto: "CAPITAL PRÉSTAMO TABLAROCA",
      cantidad: 2500.0,
    },
    { fecha: "01/03/2026", concepto: "SE PAGA RENTA", cantidad: 8500.0 },
    {
      fecha: "01/03/2026",
      concepto: "AROMATIZANTES + PROD. LIMPIEZA",
      cantidad: 130.0,
    },
    {
      fecha: "15/03/2026",
      concepto: "ÚLTIMO PAGO TABLAROCA VISA (9/9)",
      cantidad: 400.0,
    },
    {
      fecha: "15/03/2026",
      concepto: "OFRENDA PASTOR LUIS TIZAYUCA",
      cantidad: 500.0,
    },
    { fecha: "19/03/2026", concepto: "BASURA", cantidad: 50.0 },
    {
      fecha: "29/03/2026",
      concepto: "SILLAS + INTERÉS PRÉSTAMO + TABLAROCA",
      cantidad: 915.0,
    },
    {
      fecha: "04/04/2026",
      concepto: "MATERIAL ANTIFAZES OBRA",
      cantidad: 200.0,
    },
    { fecha: "07/04/2026", concepto: "SE PAGA RENTA", cantidad: 8500.0 },
    { fecha: "09/04/2026", concepto: "FLYERS Y LONA", cantidad: 350.0 },
    {
      fecha: "13/04/2026",
      concepto: "SILICÓN + CUBREPOLVOS + MULTICONTACTO",
      cantidad: 210.0,
    },
    {
      fecha: "01/05/2026",
      concepto: "SILLAS (11/12) + INTERÉS PRÉSTAMO + TABLAROCA",
      cantidad: 915.0,
    },
    {
      fecha: "01/05/2026",
      concepto: "JUGUETES DÍA DEL NIÑO - MERCADO LIBRE (1/2)",
      cantidad: 500.0,
    },
    { fecha: "03/05/2026", concepto: "SE PAGA RENTA", cantidad: 8500.0 },
    { fecha: "06/05/2026", concepto: "LONA Y VINIL", cantidad: 165.0 },
    {
      fecha: "07/05/2026",
      concepto: "MATERIAL FERRETERÍA (CLAVOS, KOLA LOKA, CINTA D. CARA)",
      cantidad: 83.0,
    },
    { fecha: "10/05/2026", concepto: "GALLETAS DÍA MAMÁ", cantidad: 625.0 },
    {
      fecha: "11/05/2026",
      concepto: "JUGUETES DÍA DEL NIÑO - MERCADO LIBRE (2/2)",
      cantidad: 500.0,
    },
    { fecha: "24/05/2026", concepto: "APOYO PASTOR RAÚL", cantidad: 112.0 },
    {
      fecha: "24/05/2026",
      concepto: "APOYO PASTOR RAÚL (RECOLECTA - NO SE TOMA DEL DIEZMO)",
      cantidad: 3000.0,
    },
    { fecha: "30/05/2026", concepto: "BASURA", cantidad: 50.0 },
  ];

  const totalIngresos = ingresos.reduce((acc, i) => acc + i.cantidad, 0);
  const totalGastos = gastos.reduce((acc, g) => acc + g.cantidad, 0);
  const saldo = totalIngresos - totalGastos;

  const fmt = (n) =>
    n.toLocaleString("es-MX", { style: "currency", currency: "MXN" });

  return (
    <div className="container-fluid py-4">
      {/* Encabezado */}
      <div className="row mb-4">
        <div
          className="col-12 text-center"
          style={{
            backgroundColor: "#00b050",
            borderRadius: 8,
            padding: "20px",
          }}
        >
          <h2 className="text-white fw-bold mb-0">
            REPORTE DE GASTOS FEBRERO 2026 – MAYO 2026
          </h2>
        </div>
      </div>

      {/* Resumen */}
      <div className="row mb-4 g-3">
        <div className="col-md-4">
          <div className="card border-success h-100">
            <div
              className="card-body text-center"
              style={{ backgroundColor: "#c6efce" }}
            >
              <h6 className="text-success fw-bold">TOTAL INGRESOS</h6>
              <h4 className="text-success fw-bold">{fmt(totalIngresos)}</h4>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-danger h-100">
            <div
              className="card-body text-center"
              style={{ backgroundColor: "#ffc7ce" }}
            >
              <h6 className="text-danger fw-bold">TOTAL GASTOS</h6>
              <h4 className="text-danger fw-bold">{fmt(totalGastos)}</h4>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card h-100"
            style={{
              border: `2px solid ${saldo >= 0 ? "#00b050" : "#c00000"}`,
            }}
          >
            <div
              className="card-body text-center"
              style={{ backgroundColor: saldo >= 0 ? "#c6efce" : "#ffc7ce" }}
            >
              <h6
                className="fw-bold"
                style={{ color: saldo >= 0 ? "#006100" : "#c00000" }}
              >
                SALDO RESTANTE
              </h6>
              <h4
                className="fw-bold"
                style={{ color: saldo >= 0 ? "#006100" : "#c00000" }}
              >
                {fmt(saldo)}
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Tablas */}
      <div className="row g-4">
        {/* Ingresos */}
        <div className="col-lg-6">
          <div className="card shadow-sm">
            <div
              className="card-header text-white fw-bold text-center"
              style={{ backgroundColor: "#00b050" }}
            >
              INGRESOS
            </div>
            <div
              className="card-body p-0"
              style={{ maxHeight: "500px", overflowY: "auto" }}
            >
              <table className="table table-sm table-striped table-bordered mb-0">
                <thead
                  style={{
                    position: "sticky",
                    top: 0,
                    backgroundColor: "#70ad47",
                    color: "white",
                  }}
                >
                  <tr>
                    <th>Fecha</th>
                    <th>Concepto</th>
                    <th className="text-end">Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  {ingresos.map((item, i) => (
                    <tr key={i}>
                      <td style={{ whiteSpace: "nowrap" }}>{item.fecha}</td>
                      <td>{item.concepto}</td>
                      <td className="text-end">{fmt(item.cantidad)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot
                  style={{
                    backgroundColor: "#70ad47",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  <tr>
                    <td colSpan={2} className="text-end">
                      TOTAL
                    </td>
                    <td className="text-end">{fmt(totalIngresos)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>

        {/* Gastos */}
        <div className="col-lg-6">
          <div className="card shadow-sm">
            <div
              className="card-header text-white fw-bold text-center"
              style={{ backgroundColor: "#c00000" }}
            >
              GASTOS
            </div>
            <div
              className="card-body p-0"
              style={{ maxHeight: "500px", overflowY: "auto" }}
            >
              <table className="table table-sm table-striped table-bordered mb-0">
                <thead
                  style={{
                    position: "sticky",
                    top: 0,
                    backgroundColor: "#e06666",
                    color: "white",
                  }}
                >
                  <tr>
                    <th>Fecha</th>
                    <th>Concepto</th>
                    <th className="text-end">Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  {gastos.map((item, i) => (
                    <tr key={i}>
                      <td style={{ whiteSpace: "nowrap" }}>{item.fecha}</td>
                      <td>{item.concepto}</td>
                      <td className="text-end">{fmt(item.cantidad)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot
                  style={{
                    backgroundColor: "#e06666",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  <tr>
                    <td colSpan={2} className="text-end">
                      TOTAL
                    </td>
                    <td className="text-end">{fmt(totalGastos)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Nota deuda */}
      <div className="row mt-4">
        <div className="col-12">
          <div
            className="alert fw-bold text-center"
            style={{ backgroundColor: "#ffff00", border: "1px solid #bfbfbf" }}
        >
            ⚠️ DEUDA PENDIENTE: $3,250 TABLAROCA
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reportes;
