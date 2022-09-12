import { readFile } from 'fs/promises';
import { resolve } from 'path';
import { createHash } from 'crypto';

const file = 'fileToCalculateHashFor.txt';
const srcFolder = 'files';
const src = resolve(srcFolder, file);

export const calculateHash = async () => {
  const data = await readFile(src, 'utf-8');
  const hash = createHash('sha256').update(data).digest('hex');

  return hash;
};

calculateHash().then((data) => console.log(data));
