function calcula() {
   if (document.getElementById('result')) {
      document.getElementById('result').remove();
   }
   var v_total = Number.parseFloat(document.getElementById("valor_total").value);
   var h_t = Number.parseInt(document.getElementById("h_trabalhadas").value);
   var d_t = Number.parseInt(document.getElementById("d_trabalhados").value);
   var d_f = Number.parseInt(document.getElementById("d_ferias").value);
   let total = (v_total / (d_t *4* h_t)) + ((d_f * d_t * h_t));
   let containerDiv = document.getElementById("calcula");
   let result = document.createElement('h2');
   if (isNaN(v_total)||isNaN(h_t)||isNaN(d_t)||isNaN(d_f)) {
      result.innerHTML="Dados faltando ou incorretos";
   } else {
      result.innerHTML="valor da hora =R$"+total;
   }
   result.id='result'
   containerDiv.appendChild(result);
   
}
