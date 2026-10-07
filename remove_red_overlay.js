const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  {
    file: 'src/pages-old/RestaurantPage.tsx',
    replacements: [
      {
        find: /<div className="absolute inset-0 bg-\[#de2b2b\]\/90 mix-blend-multiply" \/>\s*<div className="absolute inset-0 bg-gradient-to-b from-\[#1a1a1a\]\/40 to-transparent" \/>/,
        replace: '<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />'
      }
    ]
  },
  {
    file: 'src/pages-old/EventsPage.tsx',
    replacements: [
      {
        find: /<div className="absolute inset-0 bg-\[#de2b2b\]\/90 mix-blend-multiply" \/>\s*<div className="absolute inset-0 bg-gradient-to-b from-\[#1a1a1a\]\/40 to-transparent" \/>/,
        replace: '<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />'
      }
    ]
  },
  {
    file: 'src/pages-old/RegularMenuPage.tsx',
    replacements: [
      {
        find: /<div className="absolute inset-0 bg-\[#de2b2b\]\/90 mix-blend-multiply" \/>\s*<div className="absolute inset-0 bg-gradient-to-r from-\[#1a1a1a\]\/40 via-transparent to-\[#1a1a1a\]\/30" \/>/,
        replace: '<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />'
      }
    ]
  }
];

filesToUpdate.forEach(({ file, replacements }) => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${file}, not found`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  replacements.forEach(({ find, replace }) => {
    content = content.replace(find, replace);
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
