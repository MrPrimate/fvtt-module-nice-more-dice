var fs = require('fs');
console.log(JSON.parse(fs.readFileSync('./nice-more-dice/package.json', 'utf8')).version);
