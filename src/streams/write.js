import * as process from 'process';
import { createWriteStream } from 'fs';

import { resolve } from 'path';

const file = 'fileToWrite.txt';
const srcFolder = 'files';
const src = resolve(srcFolder, file);

export const write = async () => {
  // Write your code here
  const stream = createWriteStream(src);
  process.stdin.pipe(stream);
  console.log('type some text and save it in fileToWrite.txt...\n');
};

write();
