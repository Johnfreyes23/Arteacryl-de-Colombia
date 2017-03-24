function areaAcrilico(){
  var alto = $("#alto").val();
  var ancho = $("#ancho").val();
  return (alto*ancho)
}
function valorAcrilico(alto , ancho ){
  var tipo = parseInt($("#tipo").val());
  var color= parseInt($("#color").val());
  var area = parseInt(alto*ancho);
  var total =0 ;
  switch (color) {
		case 1:
		switch(tipo){
		case 1:
		if (area<100){
			total= 4000;
		}
		else total= area*8.069 + 8222.9;
		break;
		case 2:
		if (area<100){
			total= 4000;
		}
		else total= area*10.156 + 6887.5;
		break;
		case 3:
		if (area<100){
			total= 4000;
		}
		else total= area*13.288 + 4884.4;
		break;
    case 4:
    if (area<100){
      total= 4000;
    }
    else total= (area*13.288 + 4884.4)+(area*13.288 + 4884.4)*0.417;
    break;
    case 5:
    if (area<100){
      total= 6000;
    }
    else total= (area*13.288 + 4884.4)+(area*13.288 + 4884.4)*0.56;
    break;
		case 6:
		if (area<100){
			total= 6000;
		}
		else total= (area*13.288 + 4884.4)*2.3;
		break;
		case 7:
		if (area<100){
			total= 6000;
		}
		else total= (area*13.288 + 4884.4)*2.7;
		break;



		}
			break;
		case 2:
			switch(tipo){
				case 1:
				if (area<100){
					total= 4000;
				}
				else total= area*8.069 + 8222.9;

				break;

				case 2:
				if (area<100){
					total= 4000;
				}
				else total= area*10.156 + 6887.5;
				break;
				case 3:
				if (area<100){
					total= 4000;
				}
				else total= area*13.288 + 4884.4;
				break;
        case 4:
        if (area<100){
          total= 6000;
        }
        else total= (area*13.288 + 4884.4)+(area*13.288 + 4884.4)*0.417;
        break;
        case 5:
        if (area<100){
          total= 6000;
        }
        else total= (area*13.288 + 4884.4)+(area*13.288 + 4884.4)*0.56;
        break;
				case 6:
				if (area<100){
					total= 6000;
				}
				else total= (area*13.288 + 4884.4)*2.3;
				break;
				case 7:
				if (area<100){
					total= 6000;
				}
				else total= (area*13.288 + 4884.4)*2.7;
				break;

			}
		break;

		case 3:

			switch(tipo){
				case 1:
				if (area<100){
					total= 4000;
				}
				else total= area*10.643 + 8000.9;

				break;

				case 2:
				if (area<100){
				total= 4000;
				}
				else total= area*11.463 + 8841.5;

				break;

				case 3:
				if (area<100){
					total= 4000;
				}
				else total= area*14.288 + 7607.4;

				break;
        case 4:
        if (area<100){
          total= 6000;
        }
        else total= (area*14.288 + 7607.4)+(area*14.288 + 7607.4)*0.417;

        break;
        case 5:
        if (area<100){
          total= 6000;
        }
        else total= (area*14.288 + 7607.4)+(area*14.288 + 7607.4)*0.56;
        break;
				case 6:
				if (area<100){
					total= 6000;
				}
				else total= (area*14.288 + 7607.4)*2.3;
				break;
				case 7:
				if (area<100){
					total= 6000;
				}
				else total= (area*14.288 + 7607.4)*2.7;
				break;


		}
		break;
		case 4:

		break;
	}
  return (parseInt(total));
}
function costoAcrilico(){
  var led = parseInt($("#leds").val())*4500
  var alto = $("#alto").val();
  var ancho = $("#ancho").val();
  var canto =$("#canto").val();
  var manofactura =parseInt($("#obra").val());
  var otros =parseInt($("#otros").val());
  var perimetro = parseInt(2*alto + 2*ancho);
  var cantonera = valorAcrilico(canto , perimetro)*1.3;
  var frente = valorAcrilico($("#ancho").val() ,  $("#alto").val());
  $("#resultado").val(frente + cantonera+led+  manofactura+otros);
}

function disp()
{
  var si =$('#si').is(':checked');
  var no=$('#no').is(':checked');
  var tubo=$('#tubos').is(':checked');
  if(si){$('#leds').css("visibility", "visible");}else if (si!= "FALSE") {
    $('#leds').css("visibility", "hidden");
  }
  if(no){$('#leds').css("visibility", "hidden"); $('#leds').val(0);}

if(tubo){$('#tubo').css("visibility", "visible");}else if (tubo!= "FALSE") {
  $('#tubo').css("visibility", "hidden");
}
}
function valorEstructura(){
  var alto = $("#alto").val();
  var ancho = $("#ancho").val();
  if(alto>ancho){
    var perimetro = parseInt(2*alto + 5*ancho)-1;
  }
  else{
    var perimetro = parseInt(5*alto + 2*ancho)-1;
  }

  var aluminio = parseInt(perimetro/600) + 1;
  return aluminio*54000;
}
function costoCajon(){
  var tubo = parseInt($('#tubo').val())-1;
  var residuo = parseInt(tubo/4) + 1;
  var tubos = parseInt($('#tubo').val())*5000;
  var led = parseInt($("#leds").val())*4500
  var alto = $("#alto").val();
  var ancho = $("#ancho").val();
  var canto =$("#canto").val();
  var manofactura =parseInt($("#obra").val());
  var otros =parseInt($("#otros").val());
  var perimetro = parseInt(2*alto + 2*ancho);
  var cantonera = valorAcrilico(canto , perimetro);
  var frente = valorAcrilico($("#ancho").val() ,  $("#alto").val());
  if($('#tubos').is(':checked')){$("#resultado").val(frente + cantonera+  tubos + balastros + valorEstructura()+  manofactura+otros);}
  if($('#si').is(':checked')){$("#resultado").val(frente + cantonera + led +  valorEstructura()+  manofactura + otros);}

}
function costoPergola(){
  var alto = parseFloat($("#alto2").val()) / 100;
  var ancho = parseFloat($("#ancho2").val())/100;
  var area = alto * ancho ;
  var otros = parseFloat($("#otros2").val());
  var valor ;
  if ($("#6mm").is(':checked')){
    valor = parseInt(area * 190000);;
  }
  else{valor = parseInt(area * 200000);}

  $("#resultado2").val(valor + otros);}
  function costoDomo(){
    var alto = parseFloat($("#alto").val()) / 100;
    var ancho = parseFloat($("#ancho").val())/100;
    var area = alto * ancho ;
    var otros = parseFloat($("#otros").val());
    var valor ;
    if ($("#corre").is(':checked')){
      valor = area * 270000;
    }
    else{valor = area * 230000;}

    $("#resultado").val(parseInt(valor + otros));}
function muestra (){
  $('input:radio[name=si]').click(function(){
      disp();
  });
  $('input:checkbox[name=si]').click(function(){
      disp();
  });
  $('input:checkbox[name=tubo]').click(function(){
      disp();
  });
}

$(document).ready(function () {
  muestra();
});
