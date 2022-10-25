#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const libs = ['browser', 'common', 'node'].map(lib => path.resolve('packages', lib, 'src'));

for (const lib of libs) {
  const files = fs.readdirSync(lib).filter(name => name !== 'index.ts' && name.endsWith('ts'));
  const data = `${files.map(file => `export * from './${file.slice(0, -3)}.js';`).join('\n')}\n`;
  fs.writeFileSync(path.resolve(lib, 'index.ts'), data);
}
