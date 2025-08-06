#!/usr/bin/env node

// Workaround for undici CacheStorage issue in Node.js  
// This patches the CacheStorage constructor to avoid the undici crash

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Mock CacheStorage to prevent undici errors
const originalCacheStorage = globalThis.CacheStorage;
Object.defineProperty(globalThis, 'CacheStorage', {
  value: class CacheStorage {
    constructor() {
      // Mock constructor that doesn't throw
    }
    
    async open() { return new MockCache(); }
    async delete() { return false; }
    async has() { return false; }
    async keys() { return []; }
    async match() { return undefined; }
  },
  writable: false,
  enumerable: false,
  configurable: true
});

class MockCache {
  async add() {}
  async addAll() {}
  async delete() { return false; }
  async keys() { return []; }
  async match() { return undefined; }
  async matchAll() { return []; }
  async put() {}
}

// Now run payload CLI through tsx like normal
const start = async () => {
  const tsxAPI = await import('./node_modules/.pnpm/tsx@4.20.3/node_modules/tsx/dist/esm/api/index.mjs');
  const tsImport = tsxAPI.tsImport;
  
  const dirname = new URL('.', import.meta.url).pathname;
  const url = 'file://' + dirname;
  
  const { bin } = await tsImport('./node_modules/payload/dist/bin/index.js', url);
  await bin();
};

start().catch(console.error);