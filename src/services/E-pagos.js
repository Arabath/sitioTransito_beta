var script = document.createElement("script");
              script.addEventListener("load", function() {
                window.addEventListener("errorEpagos", function(event) {
                  console.error(event.detail.mensaje);
                });
                ePagos.setClavePublica("988083f870919095d2661ae5f59a523e");
                ePagos.setOrganismo(99);
                ePagos.setAmbiente("T");
                ePagos.botonPago({
                  "datosOperacion":{
                    "convenio":"36589",
                    "numero_operacion":"1234",
                    "ok_url":"http://www.su_sitio.com.ar/ok.php",
                    "error_url":" http://www.su_sitio.com.ar/error.php ",
                    "monto_operacion":1500
                  }
                });
              });
              script.src = "https://sandbox.epagos.com.ar/quickstart/epagos.min.js";
              script.async = true;
              document.getElementsByTagName("script")[0].parentNode.appendChild(script)

              //https://www.epagos.com.ar/desarrolladores.php?secc=boton_pago