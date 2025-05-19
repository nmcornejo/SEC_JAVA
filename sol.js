function ejer6(){
    var x = document.getElementById("inciso").value.toLowerCase();
    var a = 4.5

    if (x=="a") {
    var b = (0.4)*Math.pow(a, 4)+(3.1)*Math.pow(a, 2)-(162.3)*a-(80.7);
    document.getElementById("res").innerHTML=b
    document.getElementById("resultado-container").style.display = "block";
    } else if (x=="b"){
    var c = (Math.pow(a, 3)-23)/Math.cbrt(Math.pow(a,2)+17.5);
    document.getElementById("res").innerHTML=c
    document.getElementById("resultado-container").style.display = "block";
    } else {
        document.getElementById("res").innerHTML="Por favor, introduce a o b";
        document.getElementById("resultado-container").style.display = "block";
    }
}

function ejer7(){
    var x = document.getElementById("inciso7").value.toLowerCase();
    var t = 3.2

    if (x=="a") {
    var d = (1/2)*Math.pow(Math.E,(2*t))-3.81*Math.pow(t,3);
    document.getElementById("res7").innerHTML=d
    document.getElementById("resultado-container7").style.display = "block";
    } else if (x=="b"){
    var e = (6*Math.pow(t,2)+6*t-2)/(Math.pow(t,2)-1);
    document.getElementById("res7").innerHTML=e
    document.getElementById("resultado-container7").style.display = "block";
    } else {
        document.getElementById("res7").innerHTML="Por favor, introduce a o b";
        document.getElementById("resultado-container7").style.display = "block";
    }
}

function ejer8(){
    var xx = document.getElementById("inciso8").value.toLowerCase();
    var x = 6.5
    var y = 3.8

    if (xx=="a") {
    var f = Math.pow((Math.pow(x,2)+Math.pow(y,2)),(2/3))+(x*y)/(y-x);
    document.getElementById("res8").innerHTML=f
    document.getElementById("resultado-container8").style.display = "block";
    } else if (xx=="b"){
    var g = (Math.sqrt(x+y))/Math.pow((x-y),2)+2*Math.pow(x,2)-x*Math.pow(y,2);
    document.getElementById("res8").innerHTML=g
    document.getElementById("resultado-container8").style.display = "block";
    } else {
        document.getElementById("res8").innerHTML="Por favor, introduce a o b";
        document.getElementById("resultado-container8").style.display = "block";
    }
}

function ejer9(){
    var xx = document.getElementById("inciso9").value.toLowerCase();
    var cc = 4.6
    var dd = 1.7
    var aa = cc * Math.pow(dd,2)
    var bb = (cc+aa)/(cc-dd)
    var t = 3.2

    if (xx=="a") {
    var f = Math.pow(Math.E,(dd-bb))+Math.cbrt(cc+aa)-Math.pow(cc*aa,dd);
    document.getElementById("res9").innerHTML=f
    document.getElementById("resultado-container9").style.display = "block";
    } else if (xx=="b"){
    var g = (dd)/(cc)+Math.pow((cc*t)/(bb),2)-Math.pow(cc,dd)-(aa)/(bb);
    document.getElementById("res9").innerHTML=g
    document.getElementById("resultado-container9").style.display = "block";
    } else {
        document.getElementById("res9").innerHTML="Por favor, introduce a o b";
        document.getElementById("resultado-container9").style.display = "block";
    }
}

function ejer10(){
    var x = document.getElementById("inciso10").value.toLowerCase();
    var xx  = Math.PI/10

    if (x=="a") {
    var izq1 = Math.pow(Math.cos(xx),2)-Math.pow(Math.sin(xx),2)
    var der1 = 1-2*Math.pow(Math.sin(xx),2) 
    var h
    if (Math.abs(izq1-der1)< 1e-10) {
        h= "La identidad es correcta";
        } else {
        h= "No es identidad";
        }
    document.getElementById("res10").innerHTML=h
    document.getElementById("resultado-container10").style.display = "block";
    } else if (x=="b"){
    
    var izq2 = (Math.tan(xx))/(Math.sin(xx)-(2*Math.tan(xx)))
    var der2 = 1/(Math.cos(xx)-2) 
    var i
    if (Math.abs(izq2-der2)< 1e-10) {
        i= "Identidad correcta";
        } else {
        i= "No es identidad";
        }

    document.getElementById("res10").innerHTML=i
    document.getElementById("resultado-container10").style.display = "block";
    } else {
        document.getElementById("res10").innerHTML="Por favor, introduce a o b";
        document.getElementById("resultado-container10").style.display = "block";
    }
}