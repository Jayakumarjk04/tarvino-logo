const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const img = fs.readFileSync('image.png');
const b64 = img.toString('base64');
const updated = html.replace('src="image.png"', 'src="data:image/png;base64,' + b64 + '"');
fs.writeFileSync('index.html', updated);
console.log('Successfully inlined image!');
