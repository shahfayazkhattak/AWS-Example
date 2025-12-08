const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// 1. Health Check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy' });
});

// 2. Server Info
app.get('/info', (req, res) => {
    console.log('Info endpoint hit');
    res.json({
        hostname: require('os').hostname(),
        platform: process.platform,
        uptime: process.uptime()
    });
});

// 3. Echo
app.post('/echo', (req, res) => {
    res.json(req.body);
});

// 4. Time
app.get('/time', (req, res) => {
    console.log('Time endpoint hit');
    res.json({ time: new Date().toISOString() });
});

app.use('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/status', (req, res) => {
    console.log('Status endpoint hit');
    res.json({
        status: 'ok', message: 'Server is running', data: {
            headers: req.headers,
            method: req.method,
            url: req.originalUrl,
            query: req.query,
            ip: req.ip
        }
    });
})

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});
