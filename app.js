

// pegar o input
// Se for Sim, mostra as categorias disponiveis, pergunta qual categoria ela escolhe
// Se não, mostra todos os livros em ordem crescente pela quantidade de páginas

const livros = require('./database')

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? S/N ')

if (entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponíveis')
    console.log('Romance', '/Ficção', '/Auto-ajuda', '/Biografia')

    const entradaCategoria = readline.question('Qual categoria você escolhe:')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
}else{
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Essas são todos os livros disponívis:')
    console.table(livrosOrdenados)

}