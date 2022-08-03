const requestURL = 'http://dbpedia.org/sparql?default-graph-uri=http%3A%2F%2Fdbpedia.org&query=select*%7Bdbr%3ALos_Angeles+rdfs%3Alabel+%3Flabel%7D&format=json';

function curlRequestDbPedia($url, $checkIfExists = 0){
  if (!function_exists('curl_init')){die('CURL is not installed!');}
  $ch= curl_init();
  curl_setopt($ch,
      CURLOPT_URL,
      $url);
  curl_setopt($ch,
      CURLOPT_RETURNTRANSFER,
      TRUE);
  $response = curl_exec($ch);
  curl_close($ch);
  $responseJSON = json_decode($response,TRUE);
  return $responseJSON;
}

const getDBPediaData = async () => {
    // la url debe ser la que necesites para traer los datos
    const url = "/api/exmplexd";
    // se espera a que se haga la peticion
    const response = await fetch(url);
    // se convierte la peticon a json y se retorna
    const data = response.json();
    return data;
  };
  
  const fillForm = (data) => {
    const nameImput = document.getElementById("nombre");
    const especieInput = document.getElementById("speciesLabel");
    const descInput = document.getElementById("animalDescription");
    const estudioInput = document.getElementById("estudioLabel");
    const audioInput = document.getElementById("Audio");
    const videoInput = document.getElementById("Video");
  
    // ejemplo (para los demas inputes seria envez de data.name , data.<nombre_de_la_promiedad>)
    nameImput.value = data.name;
  };
  
 // metodo al buscar
const onSubmit = async (event) => {
    event.preventDefault();
    // llamamos al metodo que trae los datos
    const datos = await getDBPediaData();
    // llamamos al metodo que llena la forma
    fillForm(datos);
  };
  
  // ejecutamos el metodo <main> cuando la pagina termine de cargar todo
 //window.onload = main();

