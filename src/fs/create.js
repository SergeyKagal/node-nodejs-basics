// import { writeFile, open, close } from 'fs';
import { writeFile as asyncWriteFile } from 'fs/promises';
import * as path from 'path';

const fileName = 'fresh.txt';
const content = 'I am fresh and young';
const dist = path.resolve('files', fileName);
const error = new Error('FS operation failed');

console.log(dist, content);

const create = () => {
  asyncWriteFile(dist, content, { flag: 'wx' })
    .then(() => console.log(`${fileName} is created`))
    .catch(() => {
      throw error;
    });
};
create();
