#!/bin/bash

# Image Optimization Script for Earth Whispers Project
# This script helps compress and optimize images for better web performance

echo "🌍 Earth Whispers Image Optimization Tool"
echo "=========================================="
echo ""

# Check if imagemagick is installed
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick is not installed."
    echo "Please install it with: brew install imagemagick"
    echo ""
    echo "Or use an online compression tool like:"
    echo "- TinyPNG.com"
    echo "- Squoosh.app"
    echo "- Compressor.io"
    exit 1
fi

# Check if we're in the right directory
if [ ! -d "src/assets/location-images" ]; then
    echo "❌ Please run this script from the project root directory"
    exit 1
fi

echo "📁 Found location images directory"
echo ""

# Create optimized directory if it doesn't exist
mkdir -p src/assets/location-images/optimized

echo "🔧 Optimizing images..."
echo "This will create WebP versions and compress PNG files"
echo ""

# Process each PNG file
for image in src/assets/location-images/*.png; do
    if [ -f "$image" ]; then
        filename=$(basename "$image" .png)
        echo "Processing: $filename"
        
        # Create WebP version (smaller file size, better compression)
        convert "$image" -quality 80 -resize 1920x1080 "src/assets/location-images/optimized/${filename}.webp"
        
        # Create optimized PNG version
        convert "$image" -quality 85 -resize 1920x1080 "src/assets/location-images/optimized/${filename}.png"
        
        echo "  ✅ Created optimized versions for $filename"
    fi
done

echo ""
echo "🎉 Optimization complete!"
echo ""
echo "📊 Results:"
du -sh src/assets/location-images/*.png | head -5
echo "..."
echo "vs optimized:"
du -sh src/assets/location-images/optimized/*.{png,webp} | head -5
echo ""
echo "💡 Next steps:"
echo "1. Update your image imports to use the optimized versions"
echo "2. Consider using WebP images with PNG fallbacks"
echo "3. Update the OptimizedImage component to support multiple formats"