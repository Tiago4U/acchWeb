const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Crianca = Schema({
   nome: {type: String, required: true },
   rg: {type: String, required: tre},
   nomedopai: {type: String, required: true},
   endereco: {type: String, required: true},
   bairro: {type: String, required: true},
   datanasc: {type: String, required: true},
   turma: {type: String, required: true} 
});

module.exports = mongoose.model("Criancas", Crianca)