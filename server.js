const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Statikus fájlok kiszolgálása
app.use(express.static(path.join(__dirname)));

// Főoldal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint a számológép funkcionalitásához (opcionális)
app.use(express.json());

app.post('/api/calculate', (req, res) => {
    const { num1, num2, operation } = req.body;
    
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: 'Érvénytelen számok' });
    }
    
    let result;
    
    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                return res.status(400).json({ error: 'Nullával nem lehet osztani!' });
            }
            result = num1 / num2;
            break;
        default:
            return res.status(400).json({ error: 'Érvénytelen művelet' });
    }
    
    result = Math.round(result * 100) / 100;
    res.json({ result });
});

app.listen(PORT, () => {
    console.log(`Szerver fut a http://localhost:${PORT} címen`);
});

module.exports = app;