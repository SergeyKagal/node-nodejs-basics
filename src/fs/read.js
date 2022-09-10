import { readFile } from 'fs';

import { readFile as _readFile } from 'fs/promises';
import { resolve } from 'path';

const file = resolve('files', 'fileToRead.txt');

const promise = new Promise((res, rej) => {
  readFile(file, 'utf-8', (error, data) => {
    if (error) {
      rej(new Error('FS operation failed'));
    }
    res(data);
  });
});

const read = async () => {
  let result = '';
  try {
    result = await promise;
    console.log(result);
  } catch (error) {
    console.warn(error.message);
  }
};

const read2 = async () => {
  const data = await _readFile(file, 'utf-8');
  console.log(data);
};

read();
read2();
