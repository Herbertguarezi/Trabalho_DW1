const cep = document.getElementById("cep");
const rua = document.getElementById("rua");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const uf = document.getElementById("uf");

async function consultaCep(event) {
  const data = await fetch(
    `https://viacep.com.br/ws/${event.target.value}/json/`,
  );
  const json = await data.json();

  console.log(json)
  console.log(json);
  rua.value = json.logradouro;
  bairro.value = json.bairro;
  cidade.value = json.localidade;
  uf.value = json.uf;
}

function teste(event) {
  console.log(event.target.value);
}

cep.addEventListener("focusout", consultaCep);

const assinarGarimpo = document.getElementById("assinarGarimpo");
const assinarColecionador = document.getElementById("assinarColecionador");
const assinarLenda = document.getElementById("assinarLenda");
const experiencia = document.getElementById("experiencia");

function assinarG(event) {
  experiencia.value = "garimpo";
}

function assinarC(event) {
  experiencia.value = "colecionador";
}

function assinarL(event) {
  experiencia.value = "lenda";
}

assinarGarimpo.addEventListener("click", assinarG);
assinarColecionador.addEventListener("click", assinarC);
assinarLenda.addEventListener("click", assinarL);
