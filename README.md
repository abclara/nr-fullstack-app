# nr-fullstack-app
Aplicação Fullstack Base usando Node JS e Express

18.09 - Levantando um servidor (criamo o Package.json [npm init -y], colocamos o comando start, criamos o index.js, criamos o server [cria o server, coloca uma mensagem, faz o servidor escutar em uma porta], )
|
|----> quando colocamos um h1 dentro do res.end, pra poder alterar, tem que reiniciar o server. Se usar o nodemon reinicia sozinho

Servidor Estático - não muda (tipo um site institucional). É os mesmos arquivos do front, só muda se os arquivos forem alterados.
Servidor Dinâmico - muda (tipo o perfil no facebook). O conteúdo muda.

enviar dados: - Corpo (SEGURO) - {JSON}
              - Parametros - url/ ... id

A aplicação vai rodar por ROTAS

Requisição - é o que o cliente tá pedindo (se ele quer /alunos, /cursos)
Resposta - o que vamos responder ao Cliente

Tem que tratar para poder mandar a resposta de acordo com o cliente quer

EXEMPLO ANTERIOR:

id = req.url.replace("/", "") 
// faz com que se eu alterar o "/numero" no final da URL, vai mudar de acordo com a posição do array. tiramos a / e deixamos só o número

 nomes = ["Ana", "João", "Miguel", "Julia", "Antonia"]
 page = readFileSync("./index.html")
 res.end(page)


!!! trazer o FULLSTACK APP (gestão de Alunos/cursos/disciplinas) para esse projeto