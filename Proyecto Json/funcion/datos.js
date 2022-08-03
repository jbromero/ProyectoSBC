console.log('correcto');

/*document.querySelector('#buscar').addEventListener('clik', traerDatos);*/

app.use(function (req,res,next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers",".Origin, X-Requested-With, Content-Type, Accept");
    next();
});

route.get('/', function(req,res,next){
    then(response => {
        res.send(response.data.result);
    }).catch(error=> {
        res.send(error.message);
    })
});
var archivo = new XMLHttpRequest();
archivo.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    }else{
        console.log("error")
    }
}
archivo.open('GET', './datos/data.json', true);
archivo.send();

/*window.onload = function (){
    var archivo = new XMLHttpRequest();
    archivo.open('GET', './datos/data.json', true);
    archivo.onload = function (){
        if (this.status == 200) {
            var dato = JSON.parse(archivo.responseText);

            document.getElementById("buscar").onblur = function (){
                var nombre = document.getElementById("buscar").value;
                for (var index = 0; index < dato.length; index++) {
                    if (dato[index].animalLabel == nombre) {
                        document.getElementById("nombre").value = dato[index].animalLabel;
                    }
                }
            };
        }
    };
    archivo.send();
};*/

/*function traerDatos(){
    console.log('dentro de la funcion');
    const doc = new XMLHttpRequest();
    doc.open('GET', './datos/data.json', true);
    doc.send();
    doc.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    }
}*/