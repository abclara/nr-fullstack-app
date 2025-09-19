const { readFileSync } = require("fs")
const http = require("http")
const fs = require("fs")


server = http.createServer((req, res)=>{
    console.log(req.url) //diz a rota que tá pedindo

    rota = req.url

    aluno = "Anna"
    curso = "ADS"
    disciplina = "Full-Stack"

    if(rota == "/alunos"){
        page = fs.readFileSync("./pages/alunos.html")
        page = page.toString("utf-8").replace("{{aluno}}", aluno)
    } else if (rota == "/cursos"){ //pega a rota
        page = readFileSync("./pages/cursos.html") // via a rota
        page = page.toString("utf-8").replace("{{curso}}", curso)
    } else if (rota == "/disciplinas"){ 
        page = readFileSync("./pages/disciplinas.html")
        page = page.toString("utf-8").replace("{{disciplinas}}", disciplina)

    } else {
        page = readFileSync("./index.html")
    }

    res.end(page) // respondia

})

server.listen(5000,()=>{
    console.log("Servidor Online na Porta", 5000)
})