import { resolve } from 'path';
import { createGunzip as unzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
// eslint-disable-next-line node/no-unsupported-features/node-builtins
import { pipeline } from 'stream';

const fileSrc = 'archive.gz';
const fileDist = 'unZiped.txt';
const folder = 'files';
const src = resolve(folder, fileSrc);
const dist = resolve(folder, fileDist);

export const decompress = async () => {
  const readStream = createReadStream(src);
  const writeStream = createWriteStream(dist);
  pipeline(readStream, unzip(), writeStream, (err) => {
    if (err) {
      throw err;
    } else {
      console.log('succes');
    }
  });
};
decompress();
