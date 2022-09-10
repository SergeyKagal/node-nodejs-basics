import { writeFile, open, close } from 'fs';
import * as path from 'path';

const fileName = 'fresh.txt';
const content = 'I am fresh and young';
const dist = path.resolve('files', fileName);

console.log(dist, content);

export const create = async () => {
  // Write your code here
  return new Promise((res, rej) => {
    open(dist, 'wx', (err, fd) => {
      if (err) {
        rej(new Error('FS operation failed'));
      } else {
        console.log('file opened');
        writeFile(fd, content, (err) => {
          if (err) {
            throw new Error('FS operation failed');
          } else console.log(' file is written ');
        });
        close(fd, (err) => {
          if (err) {
            throw new Error('FS operation failed');
          } else console.log('file closed');
        });
        res(
          (() => {
            console.log('Done !!!');
          })()
        );
      }
    });
  });
};
create();
export const foo = () => {
  open(dist, 'wx', (err, fd) => {
    if (err) {
      throw new Error('FS operation failed');
    } else {
      console.log('file opened');
      writeFile(fd, content, (err) => {
        if (err) {
          throw new Error('FS operation failed');
        } else console.log(' file is written ');
      });
      close(fd, (err) => {
        if (err) {
          throw new Error('FS operation failed');
        } else console.log('file closed');
      });
    }
  });
};
// foo();
