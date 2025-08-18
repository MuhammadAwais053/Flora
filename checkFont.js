const ttfInfo = require('ttfinfo');
const path = require('path');

const fontPath = path.resolve('./assets/fonts/Allura-Regular.ttf');

ttfInfo(fontPath, (err, info) => {
  if (err) throw err;
  console.log(info.names.fullName);
  console.log(info.names.postScriptName);
});
