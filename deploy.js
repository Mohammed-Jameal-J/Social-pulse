#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Building SocialPulse...');

try {
  // Build the project
  execSync('npm run build', { stdio: 'inherit' });

  console.log('✅ Build successful!');
  console.log('📦 Deploying to GitHub Pages...');

  // Deploy using gh-pages
  execSync('npx gh-pages -d dist', { stdio: 'inherit' });

  console.log('🎉 Deployment successful!');
  console.log('🌐 Your site should be live at: https://mohammed-jameal-j.github.io/Social-pulse/');

} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}