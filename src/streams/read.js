import * as process from 'process';
import { createReadStream } from 'fs';

import { resolve } from 'path';

const file = 'fileToRead.txt';
const srcFolder = 'files';
const src = resolve(srcFolder, file);

export const read = async () => {
  const stream = createReadStream(src, 'utf-8');
  stream.on('readable', () => {
    const buffer = stream.read();
    if (buffer) {
      process.stdout.write(buffer);
    }
  });
};
read();
