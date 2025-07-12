#!/bin/bash
# Ensure node_modules/.bin has proper permissions
chmod +x node_modules/.bin/*
# Run the build
npm run build
