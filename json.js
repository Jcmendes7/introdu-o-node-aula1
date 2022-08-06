let filmes = [{
    nome: "Um Contratempo",
    anoLancamento: 2016,
    genero: "Thriller/Mistério",
    duracao: 106,
    diretor: "Oriol Paulo"
},
{
    nome: "O Poderoso Chefão",
    anoLancamento: 1972,
    genero: "Crime/Drama",
    duracao: 175,
    diretor: " Francis Ford Coppola"
}]

/*JSON(JavaScript Object Notation) -> Usado para trocar dado em diferntes
Sistemas*/
let jsonFilmes = JSON.stringify(filmes)
console.log(jsonFilmes)

let objetoFilmes = JSON.parse(jsonFilmes)
console.log(objetoFilmes)