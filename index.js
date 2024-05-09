const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 3000;

// Set the view engine to use EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', async (req, res) => {
    try {
        // Post data to the API endpoint
        const response = await axios.post('https://chimpu.xyz/api/post.php', { phonenumber: "9927202775" }, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        // Access the response headers
        const headers = response.headers;
        // Render the headers template with the headers data
        res.render('headers', { headers });
    } catch (error) {
        console.error('Error posting data to the API:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});
