const express = require('express');
const app = express();
const PORT = 3000;

// خدمة الملفات الثابتة
app.use(express.static(__dirname));

// API أساسي
app.get('/api/status', (req, res) => {
    res.json({
        company: "NOVATECH FOUNDER HOLDINGS",
        domain: "novaapp.tech",
        status: "IMPERIAL_ACTIVE",
        code: "TB-2024-LEGEND"
    });
});

app.listen(PORT, () => {
    console.log(`🏛️ Server running: http://localhost:${PORT}`);
});
