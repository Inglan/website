#!/usr/bin/env node

// Post-install script to patch undici CacheStorage issue
// This fixes the "Illegal constructor" error when running payload generate:types

const fs = require('fs');
const path = require('path');

const undiciPath = path.join(__dirname, '../node_modules/.pnpm/undici@5.29.0/node_modules/undici/index.js');

if (fs.existsSync(undiciPath)) {
  console.log('Patching undici CacheStorage issue...');
  
  let content = fs.readFileSync(undiciPath, 'utf8');
  
  // Check if already patched
  if (content.includes('// Patched to avoid CacheStorage constructor issue')) {
    console.log('undici already patched.');
    return;
  }
  
  // Apply the patch
  const originalCode = `  const { CacheStorage } = require('./lib/cache/cachestorage')
  const { kConstruct } = require('./lib/cache/symbols')

  // Cache & CacheStorage are tightly coupled with fetch. Even if it may run
  // in an older version of Node, it doesn't have any use without fetch.
  module.exports.caches = new CacheStorage(kConstruct)`;

  const patchedCode = `  const { CacheStorage } = require('./lib/cache/cachestorage')
  const { kConstruct } = require('./lib/cache/symbols')

  // Cache & CacheStorage are tightly coupled with fetch. Even if it may run
  // in an older version of Node, it doesn't have any use without fetch.
  // Patched to avoid CacheStorage constructor issue in Node.js v20
  try {
    module.exports.caches = new CacheStorage(kConstruct)
  } catch (e) {
    // Fallback: provide empty caches object if CacheStorage fails
    module.exports.caches = {
      open: () => Promise.resolve({
        add: () => Promise.resolve(),
        addAll: () => Promise.resolve(),
        delete: () => Promise.resolve(false),
        keys: () => Promise.resolve([]),
        match: () => Promise.resolve(undefined),
        matchAll: () => Promise.resolve([]),
        put: () => Promise.resolve()
      }),
      delete: () => Promise.resolve(false),
      has: () => Promise.resolve(false),
      keys: () => Promise.resolve([]),
      match: () => Promise.resolve(undefined)
    }
  }`;

  content = content.replace(originalCode, patchedCode);
  fs.writeFileSync(undiciPath, content);
  console.log('undici patched successfully.');
} else {
  console.log('undici file not found, skipping patch.');
}