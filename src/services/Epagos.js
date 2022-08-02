import React from 'react'
import $ from "jquery"
import '../Styles/tables.css'
export const Epagos = ({description, totalValue}) => {
    
    var paramsSandbox = {
        id_usuario: "74",
        id_organismo: "23",
        password: "9ba376b2d39065359d7a29dd9dcd98d8",
        hash: "70e1d6f75679f556eba1872b52394bec",
      };

     const urlSANDBOX = "https://sandbox.epagos.com.ar/post.php";

    var detalle_op = [
        {
          id_item: 0,
          desc_item: `${description}`, //referencia donde tiene que traer desc_item desde el checkbox.
          monto_item: `${totalValue}`,
          cantidad_item: 1
        }
      ];

    let codificar = JSON.stringify(detalle_op);
    
    $.ajax({
        url: urlSANDBOX,
        data: paramsSandbox,
        type: "POST",
        dataType: "json",
        success: function (result) {
          document.getElementById("token").value = result.token;
          document.getElementById("codificar").value = codificar;
          console.log(codificar)
          //alert('ok');
        },
        error: function (error) {
          console.log(error);
        },
      });
        

  return (
    <div>
    <form name="pago" method="post" action="https://postsandbox.epagos.com.ar/">
      <input type="hidden" name="version" value="1.0" />
      <input type="hidden" name="operacion" value="op_pago" />
      <input type="hidden" name="id_organismo" value="23" />
      <input type="hidden" name="convenio" value="00023" />
      <input id="token" type="hidden" name="token" value="token" />
      <input type="hidden" name="numero_operacion" value="100000000" />
      <input type="hidden" name="id_moneda_operacion" value="1" />
      <input type="hidden" id="valor" name="monto_operacion" value={detalle_op[0].monto_item} />
      <input type="hidden" id="codificar" name="detalle_operacion" value={detalle_op[0].desc_item} />
      <input type="hidden" name="detalle_operacion_visible" value="1" />
      <input type="hidden" name="ok_url" value="https://postsandbox.epagos.com.ar/tests/ok.php"/>
      <input type="hidden" name="error_url" value="https://postsandbox.epagos.com.ar/tests/error.php"/>
      <br /><input type="submit" className="btn-table-epagos" value="($) Pagar" />
    </form>
    </div>
  )
}
