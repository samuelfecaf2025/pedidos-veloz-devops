const express = require('express');
const app = express();
app.get('/health', (req, res) => res.json({ service: 'pagamentos', status: 'ok' }));
app.get('/pagamentos', (req, res) => res.json({ message: 'Pagamento processado!' }));
app.listen(3001, () => console.log('Serviço de Pagamentos rodando'));