const fs = require('fs');
const path = require('path');

let totalFiles = 0;
let bgRedCount = 0;
let bgWhiteSilverCount = 0;
let textClassesCount = 0;

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  totalFiles++;
  
  const bgRedMatches = content.match(/bg-\[#D80621\]|bg-red-\d+/g);
  if (bgRedMatches) bgRedCount += bgRedMatches.length;

  const bgWhiteMatches = content.match(/bg-white|bg-\[#ffffff\]|bg-\[#cccccc\]|bg-gray-\d+|bg-slate-\d+|bg-neutral-\d+/g);
  if (bgWhiteMatches) bgWhiteSilverCount += bgWhiteMatches.length;

  const textMatches = content.match(/text-white|text-black|text-gray-\d+|text-slate-\d+|text-neutral-\d+|text-\[#\w+\]|text-red-\d+/g);
  if (textMatches) textClassesCount += textMatches.length;
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
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        analyzeFile(filePath);
      }
    }
  }
}

walk(path.join(__dirname, 'src'));

console.log(`Total TSX/TS files analyzed: ${totalFiles}`);
console.log(`Background Red classes found: ${bgRedCount}`);
console.log(`Background White/Silver classes found: ${bgWhiteSilverCount}`);
console.log(`Text color classes found: ${textClassesCount}`);
