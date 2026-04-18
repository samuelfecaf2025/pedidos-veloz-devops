const express = require('express');
const app = express();
app.get('/health', (req, res) => res.json({ service: 'estoque', status: 'ok' }));
app.get('/estoque', (req, res) => res.json({ message: 'Estoque atualizado!' }));
app.listen(3002, () => console.log('Serviço de Estoque rodando'));