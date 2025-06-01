#!/bin/bash

# Setze das Quell-Icon (SVG oder PNG als Mastergröße 1024×1024)
SOURCE_ICON="icon-master.svg"
TARGET_DIR="frontend/public/assets"

# Stelle sicher, dass Zielverzeichnis existiert
mkdir -p "$TARGET_DIR"

echo "🔧 Exportiere App Icons…"

# PNG-Versionen
rsvg-convert -w 192 -h 192 "$SOURCE_ICON" -o "$TARGET_DIR/icon.png"
rsvg-convert -w 384 -h 384 "$SOURCE_ICON" -o "$TARGET_DIR/icon@2x.png"
rsvg-convert -w 512 -h 512 "$SOURCE_ICON" -o "$TARGET_DIR/icon@3x.png"

# Favicon
rsvg-convert -w 64 -h 64 "$SOURCE_ICON" -o "$TARGET_DIR/favicon.png"
convert "$TARGET_DIR/favicon.png" -define icon:auto-resize=64,48,32,16 "$TARGET_DIR/favicon.ico"

echo "🧼 Komprimiere PNGs…"
pngquant --force --ext .png "$TARGET_DIR"/*.png

echo "✅ Icons exportiert. Committing to Git…"
git add "$TARGET_DIR"
git commit -m "feat(assets): export icon set for PWA & browser"
