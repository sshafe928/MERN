const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the HTML file
app.use(express.static(path.join(__dirname, 'public')));

// Handle form submissions
app.post('/submit', (req, res) => {
    const data = req.body;
    const filePath = path.join(__dirname, 'data.json');

    // Read existing data from file
    fs.readFile(filePath, (err, fileData) => {
        let jsonData = [];

        if (!err) {
            jsonData = JSON.parse(fileData);
        }

        // Add new data to existing data
        jsonData.push(data);

        // Write updated data back to file
        fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                res.status(500).json({ success: false });
            } else {
                res.json({ success: true });
            }
        });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});