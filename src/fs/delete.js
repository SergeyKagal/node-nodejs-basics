import * as fs from 'fs/promises';
import { resolve } from 'path';

const fileName = 'fileToRemove.txt';
const dist = 'files';

export const remove = async () => {
  return fs
    .rm(resolve(dist, fileName))
    .then(() => console.log(`${fileName} is deleted succesfuly`))
    .catch(() => {
      throw new Error('FS operation failed');
    });
};

remove();
