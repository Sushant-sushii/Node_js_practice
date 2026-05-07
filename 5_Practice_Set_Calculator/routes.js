const sum = require('./sum').sumHandler;
const routing = (req, res) => {


    if (req.url.toLowerCase() === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calculator Home</title>
    <style>
        :root {
            color-scheme: dark;
            --bg: #11080a;
            --panel: #1f1413;
            --text: #f2e7e5;
            --muted: #c5abad;
            --accent: #ee6661;
            --accent-strong: #ff7b72;
            --border: rgba(255, 255, 255, 0.08);
            --shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            min-height: 100vh;
            font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            background: radial-gradient(circle at top, rgba(238, 102, 97, 0.18), transparent 32%),
                linear-gradient(180deg, #1b0f11 0%, #090405 100%);
            color: var(--text);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
        }

        .card {
            width: min(560px, 100%);
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.02));
            border: 1px solid var(--border);
            border-radius: 28px;
            box-shadow: var(--shadow);
            backdrop-filter: blur(18px);
            padding: 3rem;
        }

        .eyebrow {
            display: inline-flex;
            padding: 0.35rem 0.9rem;
            background: rgba(238, 102, 97, 0.12);
            color: var(--accent-strong);
            border-radius: 999px;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            font-size: 0.75rem;
            margin-bottom: 1.25rem;
        }

        h1 {
            font-size: clamp(2.5rem, 3vw, 3.4rem);
            line-height: 1.02;
            letter-spacing: -0.04em;
            margin-bottom: 1rem;
        }

        p {
            color: var(--muted);
            font-size: 1rem;
            line-height: 1.75;
            margin-bottom: 2rem;
        }

        .actions {
            display: flex;
            align-items: center;
            gap: 1rem;
            flex-wrap: wrap;
        }

        .button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 1rem 1.5rem;
            border-radius: 999px;
            border: none;
            background: linear-gradient(135deg, rgba(238, 102, 97, 0.96), rgba(182, 63, 59, 0.95));
            color: #fff;
            font-size: 1rem;
            font-weight: 700;
            text-decoration: none;
            transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
        }

        .button:hover {
            transform: translateY(-1px);
            filter: brightness(1.05);
            box-shadow: 0 18px 30px rgba(238, 102, 97, 0.25);
        }

        .subtext {
            color: var(--muted);
            font-size: 0.95rem;
        }
    </style>
</head>
<body>
    <main class="card">
        <span class="eyebrow">Calculator</span>
        <h1>Welcome to your sleek calculator.</h1>
        <p>Minimal dark mode interface with a warm red accent. Tap the button below to access the calculator and start running numbers.</p>
        <div class="actions">
            <a href="/calculator" class="button">Open Calculator</a>
            <span class="subtext">Dark mode ready, clean layout, fast access.</span>
        </div>
    </main>
</body>
</html>`);
        return;
    }

    else if (req.url.toLowerCase() === '/calculator') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calculator</title>
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

        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            min-height: 100vh;
            font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            background: radial-gradient(circle at top, rgba(238, 102, 97, 0.16), transparent 34%),
                linear-gradient(180deg, #140b0a 0%, #090405 100%);
            color: var(--text);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
        }

        .panel {
            width: min(540px, 100%);
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
            border: 1px solid var(--border);
            border-radius: 28px;
            box-shadow: var(--shadow);
            backdrop-filter: blur(18px);
            padding: 2.5rem;
        }

        .brand {
            display: inline-flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 1rem;
        }

        .dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: var(--accent);
            box-shadow: 0 0 18px rgba(238, 102, 97, 0.35);
        }

        h1 {
            margin: 0 0 1rem;
            font-size: clamp(2rem, 3vw, 2.8rem);
            letter-spacing: -0.04em;
        }

        p {
            margin: 0 0 2rem;
            color: var(--muted);
            line-height: 1.75;
        }

        form {
            display: grid;
            gap: 1rem;
        }

        .field {
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
        }

        label {
            color: var(--muted);
            font-size: 0.95rem;
        }

        input {
            width: 100%;
            padding: 1rem 1.1rem;
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            background: rgba(255, 255, 255, 0.04);
            color: var(--text);
            font-size: 1rem;
            outline: none;
        }

        input:focus {
            border-color: rgba(238, 102, 97, 0.7);
            box-shadow: 0 0 0 4px rgba(238, 102, 97, 0.12);
        }

        .button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 1rem 1.5rem;
            border: none;
            border-radius: 16px;
            background: linear-gradient(135deg, rgba(238, 102, 97, 0.96), rgba(182, 63, 59, 0.95));
            color: #fff;
            font-weight: 700;
            font-size: 1rem;
            cursor: pointer;
            transition: transform 0.2s ease, filter 0.2s ease;
        }

        .button:hover {
            filter: brightness(1.05);
            transform: translateY(-1px);
        }

        .back {
            margin-top: 1rem;
            display: inline-block;
            color: var(--accent);
            text-decoration: none;
            font-size: 0.95rem;
        }
    </style>
</head>
<body>
    <section class="panel">
        <div class="brand">
            <span class="dot"></span>
            <span>Dark Calculator</span>
        </div>
        <h1>Enter numbers to calculate</h1>
        <p>Two fields, one action. Click calculate to continue to the result page.</p>
        <form action="/calculate-result" method="POST">
            <div class="field">
                <label for="value1">First number</label>
                <input id="value1" name="value1" type="number" step="any" placeholder="0" required />
            </div>
            <div class="field">
                <label for="value2">Second number</label>
                <input id="value2" name="value2" type="number" step="any" placeholder="0" required />
            </div>
            <button type="submit" class="button">Calculate</button>
        </form>
        <a href="/" class="back">Back to home</a>
    </section>
</body>
</html>`);
        res.end();
        return;
    }
    else if (req.url.toLowerCase() === '/calculate-result' && req.method === 'POST') {
       sum(req, res);
    }
    else{
         res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Page Not Found</h1>');
    }
}
module.exports = routing;
