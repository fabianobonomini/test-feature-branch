const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Read package.json file
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

app.get('/api/status', (req, res) => {
  // Respond with the name and version from package.json
  res.json({ name: packageJson.name, version: packageJson.version });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
