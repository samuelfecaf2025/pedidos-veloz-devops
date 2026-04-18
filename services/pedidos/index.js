const express = require('express');
const app = express();
app.get('/health', (req, res) => res.json({ service: 'pedidos', status: 'ok' }));
app.get('/pedidos', (req, res) => res.json({ message: 'Pedido criado com sucesso!' }));
app.listen(3000, () => console.log('Serviço de Pedidos rodando'));