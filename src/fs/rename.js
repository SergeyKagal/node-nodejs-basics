import * as fs from 'fs/promises';
import { resolve } from 'path';

const newFileName = 'properFilename.md';
const dist = 'files';
const srcFile = 'wrongFilename.txt';

export const rename = async () => {
  // Write your code here
  let isDistFileExisted = false;

  try {
    await fs.access(resolve(dist, newFileName));
    console.log('333555');
    isDistFileExisted = true;
    throw new Error('FS fail');
  } catch (error) {
    if (isDistFileExisted) {
      throw new Error('FS failure');
    }
    try {
      await fs.access(resolve(dist, srcFile));
      fs.rename(resolve(dist, srcFile), resolve(dist, newFileName)).catch(
        () => {
          throw new Error('FS failure 3');
        }
      );
    } catch (error) {
      throw new Error('FS failure 2');
    }
  }
};

rename();
