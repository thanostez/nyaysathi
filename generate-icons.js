const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const sourceIcon = path.join(publicDir, 'icon-512.png');

async function generateIcons() {
  try {
    console.log('Generating exactly sized PWA icons...');
    
    // Generate 192x192 for Android manifest
    await sharp(sourceIcon)
      .resize(192, 192)
      .toFile(path.join(publicDir, 'icon-192.png'));
    console.log('✅ Created icon-192.png (192x192)');

    // Generate 180x180 for Apple Touch Icon (Standard iOS size)
    await sharp(sourceIcon)
      .resize(180, 180)
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    console.log('✅ Created apple-touch-icon.png (180x180)');

    // Generate a generic fallback splash screen image (optional, mostly for legacy)
    await sharp(sourceIcon)
      .resize(512, 512, {
        fit: 'contain',
        background: { r: 5, g: 5, b: 26, alpha: 1 } // #05051A background
      })
      .extend({
        top: 400, bottom: 400, left: 200, right: 200,
        background: { r: 5, g: 5, b: 26, alpha: 1 }
      })
      .toFile(path.join(publicDir, 'splash.png'));
    console.log('✅ Created fallback splash.png');

    console.log('All icons resized perfectly for production!');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons();
