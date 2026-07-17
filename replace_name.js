const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  newContent = newContent.replace(/Mega Foundries/g, 'Canada Foundries');
  newContent = newContent.replace(/MEGA FOUNDRIES/g, 'CANADA FOUNDRIES');
  newContent = newContent.replace(/mega foundries/g, 'canada foundries');
  newContent = newContent.replace(/Mega Foundry/g, 'Canada Foundry');
  newContent = newContent.replace(/MEGA FOUNDRY/g, 'CANADA FOUNDRY');
  newContent = newContent.replace(/mega foundry/g, 'canada foundry');

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walk(dir) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      if (!filePath.includes('node_modules') && !filePath.includes('.next') && !filePath.includes('.git')) {
        walk(filePath);
      }
    } else {
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css') || filePath.endsWith('.js') || filePath.endsWith('.json')) {
        replaceInFile(filePath);
      }
    }
  }
}

walk(path.join(__dirname, 'src'));
