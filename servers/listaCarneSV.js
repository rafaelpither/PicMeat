const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'carnes'
});

db.connect(err => {
  if (err) throw err;
  console.log('Conectado ao banco de dados.');
});


// Tabela itens
app.get('/itens', (req, res) => {

  const query = 'SELECT * FROM itens';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/itens/:id', (req, res) => { 
  const { id } = req.params;
  const query = 'SELECT * FROM itens WHERE id = ?';
  db.query(query, [ id ], (err, results) => {
    if (err) throw err;
    if(results.length != 0){
      res.json(results);
    }
    else{
      res.status(404).json({ message: 'Registro não encontrado.' });
    }
  });
});

app.post('/itens', (req, res) => {
  const { nome, peso, preco, img } = req.body;
  const query = 'INSERT INTO itens (nome, preco, peso, img) VALUES (?, ?, ?, ?)';
  db.query(query, [ nome, parseFloat(preco), parseFloat(peso), img ], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.put('/itens', (req, res) => {
  const { id, nome, peso, preco, img } = req.body;
  const query = 'UPDATE itens SET nome = ?, preco = ?, peso = ?, img = ? where id = ?'
  db.query(query, [ nome, parseFloat(preco), parseFloat(peso), img, id ], (err, results) => {
    if(err) throw err;
    res.json(results)
  })
})

app.delete('/itens/:id', (req, res) => {


  const { id } = req.params;
  const query = 'DELETE FROM itens WHERE id = ?';
  
  db.query(query, [id], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao deletar o dado.' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Registro não encontrado.' });
    } else {
      res.json({ message: 'Registro deletado com sucesso.' });
    }
  });
});

//////////////////////////////////////////////////////////////////////////////////

// Tabela usuários
app.get('/usuarios', (req, res) => {
  const query = 'SELECT * FROM usuarios';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/usuarios/:email/:senha', (req, res) => {
  const { email, senha } = req.params;
  const query = 'SELECT nome, sobrenome, adm FROM usuarios WHERE email = ? AND senha = ?';
  db.query(query, [email, senha], (err, results) => {
    if (err) throw err;
    res.json(results);
  })
});

app.post('/usuarios', (req, res) => {
  const { nome, sobrenome, email, senha, adm } = req.body;
  const query = 'INSERT INTO usuarios (nome, sobrenome, email, senha, adm) values (?, ?, ?, ?, ?)';
  db.query(query, [nome, sobrenome, email, senha, adm], (err, results) => {
    if(err) throw err;
    res.json(results);
  })
});

//////////////////////////////////////////////////////////////////////////////////

// Tabela pedidos
app.get('/pedidos', (req, res) => {
  const query = 'SELECT * FROM pedidos';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/pedidos', (req, res) => {
  const { idCompra, nome, qtd, total, pagamento } = req.body;
  const query = 'INSERT INTO pedidos (id_prod, nome_prod, quantidade, total, pagamento) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [ parseInt(idCompra), nome, parseInt(qtd), parseInt(total), pagamento ], (err, results) => {
    if (err) throw err;
    res.json(results)
  })
});

app.listen(3000, () => console.log('Servidor rodando em: \nhttp://localhost:3000/itens \nhttp://localhost:3000/pedidos \nhttp://localhost:3000/usuarios'));
