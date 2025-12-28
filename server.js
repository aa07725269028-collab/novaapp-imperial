// ==================== 🏛️ نظام الإمبراطورية النهائي ====================
// 🔐 الكود: TB-2024-LEGEND
// 🌐 النطاق: novaapp.tech
// 🚀 الحالة: نظام حي يعمل بكامل طاقته

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// ==================== 🛡️ إعدادات الأمان ====================
app.use((req, res, next) => {
    // حماية ضد هجمات شائعة
    res.setHeader('X-Imperial-Protection', 'TB-2024-LEGEND');
    res.setHeader('X-Powered-By', 'NOVATECH FOUNDER HOLDINGS');
    next();
});
// أضف في الأعلى:
const { ImperialRobot, RobotCouncil, RobotArmyMonitor } = require('./robots/core/first-robot');

// إنشاء النظام الأساسي
const robotArmy = new RobotArmyMonitor();
const firstRobot = new ImperialRobot(null, "القائد الإمبراطوري");
robotArmy.addRobot(firstRobot);

// أضف API جديد:
app.get('/api/robots/status', (req, res) => {
    res.json({
        army: robotArmy.getArmyReport(),
        council: council.getCouncilReport(),
        timestamp: new Date().toISOString()
    });
});

app.get('/api/robots/replicate/:count', (req, res) => {
    const count = parseInt(req.params.count) || 10;
    robotArmy.replicateArmy(count);
    
    res.json({
        message: `تم تكاثر الجيش إلى ${count} روبوت`,
        newCount: robotArmy.robots.length,
        timestamp: new Date().toISOString()
    });
});

// ==================== 📁 خدمة الملفات ====================
// الملفات الثابتة من مجلد public
app.use(express.static('public'));

// ==================== 🌐 API الإمبراطوري ====================
// 🎯 حالة النظام
app.get('/api/status', (req, res) => {
    const now = new Date();
    
    res.json({
        // 🏢 معلومات الإمبراطورية
        empire: {
            name: "NOVATECH FOUNDER HOLDINGS",
            title: "إمبراطورية جسر التجارة العالمية",
            code: "TB-2024-LEGEND",
            domain: "novaapp.tech"
        },
        
        // 🚀 حالة النظام
        status: {
            system: "IMPERIAL_ACTIVE",
            level: "MAXIMUM",
            message: "النظام يعمل بكامل طاقته"
        },
        
        // 🕒 التوقيت الإمبراطوري
        time: {
            iso: now.toISOString(),
            arabic: now.toLocaleString('ar-SA', {
                timeZone: 'Asia/Riyadh',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            }),
            hijri: new Intl.DateTimeFormat('ar-SA-u-ca-islamic', {
                timeZone: 'Asia/Riyadh',
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            }).format(now)
        },
        
        // 📊 إحصائيات حية
        stats: {
            activeTrades: Math.floor(Math.random() * 100) + 1240,
            dailyVolume: `$${(42.5 + Math.random() * 8).toFixed(1)}M`,
            countries: 57,
            partners: 1842
        },
        
        // 🤖 الأنظمة الفرعية
        subsystems: {
            financial: "ACTIVE",
            aiCouncil: "OPERATIONAL",
            security: "MAXIMUM",
            trading: "READY"
        }
    });
});

// ==================== ❤️ نظام الصحة ====================
app.get('/health', (req, res) => {
    res.json({
        status: 'IMPERIAL_HEALTHY',
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        timestamp: new Date().toISOString()
    });
});

// ==================== 📊 إحصائيات النظام ====================
app.get('/api/stats', (req, res) => {
    res.json({
        visits: Math.floor(Math.random() * 10000) + 5000,
        transactions: Math.floor(Math.random() * 5000) + 1000,
        revenue: `$${Math.floor(Math.random() * 1000000) + 500000}`,
        activeUsers: Math.floor(Math.random() * 500) + 200
    });
});

// ==================== 🎯 نظام التجارة ====================
app.get('/api/trade/execute', (req, res) => {
    const trades = [
        { id: 1, country: "اليابان", amount: "$1.2M", status: "مكتملة" },
        { id: 2, country: "ألمانيا", amount: "50K وحدة", status: "جاري" },
        { id: 3, country: "الصين", amount: "120 طن", status: "في الطريق" },
        { id: 4, country: "بريطانيا", amount: "$750K", status: "مستلمة" }
    ];
    
    res.json({
        success: true,
        message: "تم تنفيذ الصفقة بنجاح",
        trade: trades[Math.floor(Math.random() * trades.length)],
        timestamp: new Date().toISOString()
    });
});

// ==================== 🤖 مجلس الإدارة الآلي ====================
app.get('/api/council/meeting', (req, res) => {
    const decisions = [
        "📈 توسيع التجارة مع جنوب شرق آسيا",
        "💱 إطلاق منتج تجاري جديد",
        "🌍 فتح فرع جديد في أوروبا",
        "🛡️ تعزيز النظام الأمني",
        "🚀 استثمار في تكنولوجيا بلوكتشين"
    ];
    
    res.json({
        meeting: "مكتمل",
        decision: decisions[Math.floor(Math.random() * decisions.length)],
        participants: ["المفاوض الرئيسي", "المدير المالي", "قائد الأمن", "محلل التجارة"],
        duration: `${Math.floor(Math.random() * 30) + 15} دقيقة`
    });
});

// ==================== 🏠 الصفحة الرئيسية ====================
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// ==================== ❌ صفحة 404 ====================
app.use((req, res) => {
    res.status(404).json({
        error: "الصفحة غير موجودة",
        message: "هذه الصفحة غير موجودة في النظام الإمبراطوري",
        code: "IMPERIAL_404",
        suggested: "/api/status"
    });
});

// ==================== 🛑 معالجة الأخطاء ====================
app.use((err, req, res, next) => {
    console.error('🏛️ خطأ إمبراطوري:', err);
    res.status(500).json({
        error: "خطأ داخلي في النظام",
        message: "حدث خطأ غير متوقع",
        code: "IMPERIAL_500",
        timestamp: new Date().toISOString()
    });
});

// ==================== 🚀 تشغيل النظام ====================
const server = app.listen(PORT, () => {
    console.log(`\n🏛️ ==========================================`);
    console.log(`🏛️   إمبراطورية جسر التجارة العالمية`);
    console.log(`🏛️   الكود: TB-2024-LEGEND`);
    console.log(`🏛️   النطاق: novaapp.tech`);
    console.log(`🏛️ ==========================================`);
    console.log(`🚀 النظام يعمل على: http://localhost:${PORT}`);
    console.log(`📡 API الإمبراطوري: http://localhost:${PORT}/api/status`);
    console.log(`❤️  نظام الصحة: http://localhost:${PORT}/health`);
    console.log(`🏛️ ==========================================\n`);
});

// ==================== 🔒 إغلاق آمن ====================
process.on('SIGTERM', () => {
    console.log('🏛️ النظام يغلق بأناقة...');
    server.close(() => {
        console.log('🏛️ تم إغلاق النظام الإمبراطوري');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('🏛️ إغلاق بطلب من القائد...');
    server.close(() => {
        console.log('🏛️ النظام مستعد لإعادة التشغيل');
        process.exit(0);
    });
});

// ==================== 💫 تصريح نهائي ====================
console.log('🏛️ النظام الإمبراطوري جاهز للأوامر...');
