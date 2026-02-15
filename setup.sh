#!/bin/bash

echo "🚀 Setting up Optima Tech Hub Website..."
echo ""

# Install main dependencies
echo "📦 Installing dependencies..."
npm install framer-motion lucide-react react-router-dom

# Install Tailwind CSS and related packages
echo "🎨 Installing Tailwind CSS..."
npm install -D tailwindcss postcss autoprefixer

echo ""
echo "✅ All dependencies installed successfully!"
echo ""
echo "🎉 Setup complete! You can now run:"
echo "   npm run dev    - Start development server"
echo "   npm run build  - Build for production"
echo ""
