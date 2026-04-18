const express = require('express');
const app = express();
app.get('/health', (req, res) => res.json({ service: 'api-gateway', status: 'ok' }));
app.get('/', (req, res) => res.json({ message: 'Bem-vindo à Pedidos Veloz! Use /pedidos, /pagamentos ou /estoque' }));
app.listen(8080, () => console.log('API Gateway rodando na porta 8080'));