const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const PORT = 3000;

// Configuração da conexão com o banco de dados
const db = mysql.createConnection({
  host: 'localhost',       // ou o IP do seu servidor de banco de dados
  user: 'Eletrica',     // substitua pelo seu usuário do banco
  password: 'CO14Lu',   // substitua pela sua senha do banco
  database: 'usina'        // nome do banco onde a tabela está
});

// Conectar ao banco de dados
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados.');
});

// Middleware para servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para buscar todos os dados
app.get('/dados', (req, res) => {
  const query = 'SELECT * FROM dados_energia';

  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send('Erro ao buscar dados.');
      console.error(err);
      return;
    }
    res.json(results);
  });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
