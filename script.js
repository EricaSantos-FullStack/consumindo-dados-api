var consultaCEP = fetch("https://viacep.com.br/ws/01001000/json/ ")
  .then((response) => response.json())
  .then((r) => {
    if (r.erro) {
      throw Error("Esse cep não existe");
    } else console.log(r);
  })
  .catch((erro) => console.log(erro))
  .finally((mensagem) => console.log("Processo concluido"));

console.log(consultaCEP);
