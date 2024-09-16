const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/a*t', (req, res) => {
    res.send('Começa com A e termina com T')
})

app.get('/about', (req, res) => {
    res.send('About, Ituiutaba 16 de Setembro de 2026')
})

app.get('/users/:userID/livros/:livroID', (req, res) => {
    res.send(`Usuário com o ID ${req.params.userID} e livro com o ID ${req.params.livroID}`)
})

app.use('*', (req, res) => {
    res.status(404).send('Página não encontrada')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})