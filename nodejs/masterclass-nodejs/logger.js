//emite eventos!
const EventEmitter = require('events')
//fs - file system (arquivos dos sistema)
const fs = require('fs')
//independente da maquina, ele pega o arquivo no lugar que voce falar
const path = require('path')

const emitter = new EventEmitter()

emitter.on('log', (message) => {
    fs.appendFile(path.join(__dirname,'./log.txt'), message, err => {
        if (err) throw err
    })
})

//call back function - é executada depois de um certo momento (e nesse caso, o momento é depois de escrever no arquivo)

function log(message) {
    emitter.emit('log', message)
}

module.exports = log