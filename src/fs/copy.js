import * as path from 'path';
import * as fs from 'fs/promises';
const dist = path.resolve('files_copy');

const src = path.resolve('files');

export const copy = async () => {
  // Write your code here
  return fs
    .mkdir(dist)
    .then(() => console.log('folder is created'))
    .catch(() => {
      throw new Error('FS operation failed');
    });
};

copy();

const openDir = async () => {
  return fs
    .opendir(src)
    .then(() => {
      fs.readdir(src).then((fileList) =>
        fileList.forEach((file) =>
          fs
            .copyFile(path.resolve(src, file), path.resolve(dist, file))
            .then(() =>
              console.log(
                `${file} is succesfuly copied to ${path.resolve(dist, file)}`
              )
            )
            .catch(() => {
              throw new Error('FS operation failed');
            })
        )
      );
    })
    .catch(() => {
      throw new Error('FS operation failed');
    });
};

openDir();
