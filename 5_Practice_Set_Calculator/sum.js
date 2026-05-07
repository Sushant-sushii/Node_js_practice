const sumRequestHandler = (req, res) => {
    const chunks = [];

    req.on('data', (chunk) => {
        chunks.push(chunk);
    });

    req.on('end', () => {
        const body = Buffer.concat(chunks).toString();
        const params = new URLSearchParams(body);
        const value1 = parseFloat(params.get('value1')) || 0;
        const value2 = parseFloat(params.get('value2')) || 0;
        const sum = value1 + value2;

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calculation Result</title>
    <style>
        :root {
            color-scheme: dark;
            --bg: #11080a;
            --panel: #1f1413;
            --text: #f2e7e5;
            --muted: #c5abad;
            --accent: #ee6661;
            --border: rgba(255, 255, 255, 0.08);
            --shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
        }
        body {
            margin: 0;
            min-height: 100vh;
            font-family: Inter, system-ui, sans-serif;
            background: radial-gradient(circle at top, rgba(238, 102, 97, 0.16), transparent 34%),
                linear-gradient(180deg, #140b0a 0%, #090405 100%);
            color: var(--text);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
        }
        .panel {
            width: min(520px, 100%);
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
            border: 1px solid var(--border);
            border-radius: 28px;
            box-shadow: var(--shadow);
            backdrop-filter: blur(18px);
            padding: 2.5rem;
            text-align: center;
        }
        .value {
            font-size: 2.35rem;
            margin: 1rem 0;
            color: var(--accent);
        }
        .back {
            display: inline-block;
            margin-top: 1.5rem;
            padding: 0.95rem 1.4rem;
            border-radius: 999px;
            text-decoration: none;
            background: linear-gradient(135deg, rgba(238, 102, 97, 0.96), rgba(182, 63, 59, 0.95));
            color: white;
            font-weight: 700;
        }
    </style>
</head>
<body>
    <section class="panel">
        <h1>Calculation Result</h1>
        <p class="value">${sum}</p>
        <a href="/calculator" class="back">New Calculation</a>
    </section>
</body>
</html>`);
    });
};

module.exports = { sumRequestHandler };