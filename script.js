async function buscaEndereco(cep) {
  var mensagemErro = document.getElementById("erro");
  mensagemErro.innerHTML = "";

  try {
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/ `);
    var consultaCEPConvertida = await consultaCEP.json();
    if (consultaCEPConvertida.erro) {
      throw Error("CEP não existe");
    }
    var cidade = document.getElementById("cidade");
    var logradouro = document.getElementById("endereco");
    var bairro = document.getElementById("bairro");
    var estado = document.getElementById("estado");

    cidade.value = consultaCEPConvertida.localidade;
    logradouro.value = consultaCEPConvertida.logradouro;
    bairro.value = consultaCEPConvertida.bairro;
    estado.value = consultaCEPConvertida.uf;

    return consultaCEPConvertida;
  } catch (erro) {
    mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente.</p>`;
  }
}

var cep = document.getElementById("cep");
//focusout para que a requisição seja feita conforme o campo for desmarcado
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
