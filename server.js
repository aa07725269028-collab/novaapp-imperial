const express = require('express');
const app = express();
const PORT = 3000;

// خدمة الملفات الثابتة (من نفس المجلد)
app.use(express.static(__dirname));

// API أساسي
app.get('/api/status', (req, res) => {
    res.json({
        company: "NOVATECH FOUNDER HOLDINGS",
        domain: "novaapp.tech",
        status: "IMPERIAL_ACTIVE",
        code: "TB-2024-LEGEND",
        serverTime: new Date().toISOString()
    });
});

// تأكد من خدمة index.html حتى لو طلبوا /
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
    console.log(`🏛️ Server running: http://localhost:${PORT}`);
    console.log(`📡 API Active: http://localhost:${PORT}/api/status`);
});
