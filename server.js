// النسخة المحسنة:
const express = require('express');
const path = require('path'); // أضف هذا
const app = express();
const PORT = process.env.PORT || 3000; // تحسين

// خدمة الملفات الثابتة بشكل أفضل
app.use(express.static(path.join(__dirname)));

// API أساسي
app.get('/api/status', (req, res) => {
    res.json({
        company: "NOVATECH FOUNDER HOLDINGS",
        domain: "novaapp.tech", 
        status: "IMPERIAL_ACTIVE",
        code: "TB-2024-LEGEND",
        timestamp: new Date().toISOString()
    });
});

// صفحة الرئيسية
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🏛️ Imperial Server running: http://localhost:${PORT}`);
    console.log(`🌐 API: http://localhost:${PORT}/api/status`);
});
