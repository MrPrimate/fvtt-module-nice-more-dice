var fs = require('fs');

const version = JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;

var mod = JSON.parse(fs.readFileSync('./nice-more-dice/module-template.json', 'utf8'));

mod.version = version;
mod.download = `https://github.com/mrprimate/fvtt-module-nice-more-dice/releases/download/${version}/nice-more-dice.zip`;

console.log(JSON.stringify(mod));
