#!/bin/bash

echo "🏗️  Building Bhavesh Chainani Portfolio for Production..."
echo "📦 Installing dependencies..."
npm install

echo "🔧 Building application..."
npm run build

echo "📁 Creating deployment files..."
touch out/.nojekyll
cp public/CNAME out/ 2>/dev/null || echo "No CNAME file found, skipping..."

echo "✅ Production build complete!"
echo "📂 Static files are ready in the 'out' directory"
echo "🚀 You can now deploy the 'out' directory to your hosting provider"