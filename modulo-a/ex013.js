// var usuarios =[
//     {
//         nome: 'Diego',
//         habilidades: ['Javascript', 'ReactJS', 'Redux']
//     },
//     {
//         nome: 'Gabriel',
//         habilidades: ['VueJS', 'Ruby on Rails', 'Elixir']
//     }
// ]
// console.log(`O usuário ${usuarios[0].nome} tem as habilidades: ${usuarios[0].habilidades}`)
// console.log(`O usuário ${usuarios[1].nome} tem as habilidades: ${usuarios[1].habilidades}`)


function exibeHabilidades(usuarios) {
    for (usuario of usuarios) {
      console.log(
        "O " +
          usuario.nome +
          " possui as habilidades: " +
          usuario.habilidades.join(", ")
      );
    }
  }
  
  var usuarios = [
    {
      nome: "Diego",
      habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
      nome: "Gabriel",
      habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
  ];
  
  exibeHabilidades(usuarios);