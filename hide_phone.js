const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  {
    file: 'src/components/Header.tsx',
    replacements: [
      {
        find: />095851 54254<\/a>/g,
        replace: '><Phone className="w-4 h-4" /></a>'
      }
    ]
  },
  {
    file: 'src/components/GoingToDrawer.tsx',
    replacements: [
      {
        find: />095851 54254<\/a>/g,
        replace: '><Phone className="w-4 h-4" /></a>'
      }
    ]
  },
  {
    file: 'src/components/OnlineOrderDrawer.tsx',
    replacements: [
      {
        find: /<span>{RESTAURANT_INFO.phone}<\/span>/g,
        replace: '<span>Call Us</span>'
      },
      {
        find: /\`Or dial: \${RESTAURANT_INFO.phone}\`/g,
        replace: "`Or dial directly`"
      }
    ]
  },
  {
    file: 'src/components/TheRestaurantSection.tsx',
    replacements: [
      {
        find: /<span>{RESTAURANT_INFO.phone}<\/span>/g,
        replace: '<span>Call Us</span>'
      }
    ]
  },
  {
    file: 'src/components/TheRestaurantModal.tsx',
    replacements: [
      {
        find: /Phone: {RESTAURANT_INFO.phone}/g,
        replace: ''
      }
    ]
  },
  {
    file: 'src/components/WaitingForSection.tsx',
    replacements: [
      {
        find: /<span>Call: {RESTAURANT_INFO.phone}<\/span>/g,
        replace: '<span>Call Us</span>'
      }
    ]
  },
  {
    file: 'src/data/restaurantData.ts',
    replacements: [
      {
        find: /Call for Takeaway Orders & Booking: 095851 54254/g,
        replace: 'Call for Takeaway Orders & Booking'
      }
    ]
  },
  {
    file: 'src/pages-old/RestaurantPage.tsx',
    replacements: [
      {
        find: />\s*{RESTAURANT_INFO.phone}\s*<\/a>/g,
        replace: '><Phone className="w-4 h-4 inline mr-2"/>Call Us</a>'
      }
    ]
  },
  {
    file: 'src/pages-old/RegularMenuPage.tsx',
    replacements: [
      {
        find: /Call: <strong>{RESTAURANT_INFO.phone}<\/strong>/g,
        replace: 'Call Us'
      },
      {
        find: /<span>{RESTAURANT_INFO.phone}<\/span>/g,
        replace: '<span>Call Us</span>'
      }
    ]
  },
  {
    file: 'src/pages-old/EventsPage.tsx',
    replacements: [
      {
        find: /<span>Call {RESTAURANT_INFO.phone}<\/span>/g,
        replace: '<span>Call Us</span>'
      },
      {
        find: /call our manager directly at {RESTAURANT_INFO.phone}/g,
        replace: 'call our manager directly'
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
