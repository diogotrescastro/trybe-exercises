//Parte I - Objetos e For/In

//Usando o objeto abaixo, faça os exercícios a seguir:

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
};

//EXERCICIO 1, PARTE I
//Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
// Valor esperado no console: Bem-vinda, Margarida

  console.log("EXERCICIO 1, PARTE I");
  console.log("Bem-vinda, " + info.personagem);
  console.log();

//EXERCICIO 2, PARTE I
//Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console.

/*Valor esperado no console:
{
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };*/

  console.log("EXERCICIO 2, PARTE I");

  info.recorrente = "Sim";

  console.log(info);
  console.log();

//EXERCICIO 3, PARTE I
//Faça um for/in que mostre todas as chaves do objeto.
/*Valor esperado no console:
 personagem
  origem
  nota
  recorrente*/

  console.log("EXERCICIO 3, PARTE I");
  
  for(let properties in info){
    console.log(properties)
  };

  console.log()

  //EXERCICIO 4, PARTE I
  //Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
  /*Valor esperado no console:
    Margarida
  Pato Donald
  Namorada do personagem principal nos quadrinhos do Pato Donald
  Sim*/

  console.log("EXERCICIO 4, PARTE I");

  for(let properties in info){
    console.log(info[properties]);
  }

  console.log()

  //EXERCICIO 5, PARTE I
  //Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".

  /*Valor esperado no console:
  Margarida e Tio Patinhas
  Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
  Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
  Ambos recorrentes // Atenção para essa última linha!*/

  console.log("EXERCICIO 5, PARTE I");

  let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178 on Bear Mountain",
    nota: 'O último MacPatinhas do personagem principal nos quadrinhos do Pato Donald',
    recorrente: "Sim",
  };

  for (let search in info){
    if( info[search] === info.recorrente &&
      info[search] === "Sim" &&
      info2[search] === "Sim"
      ){
        console.log('Ambos recorrentes');
      } else {
        console.log(info[search] + " e "+ info2[search]);
      }
  }