import * as fs from 'fs/promises';
import { resolve } from 'path';

const dist = 'files';

export const list = async () => {
  return fs
    .readdir(resolve(dist))
    .then((files) => console.log(files))
    .catch(() => {
      throw new Error('FS operation failed');
    });
};

list();
