import { resolve } from 'path';
import { createGzip as gzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
// eslint-disable-next-line node/no-unsupported-features/node-builtins
import { pipeline } from 'stream';

const fileSrc = 'fileToCompress.txt';
const fileDist = 'archive.gz';
const folder = 'files';
const src = resolve(folder, fileSrc);
const dist = resolve(folder, fileDist);

export const compress = async () => {
  const readStream = createReadStream(src);
  const writeStream = createWriteStream(dist);

  pipeline(readStream, gzip(), writeStream, (err) => {
    if (err) {
      console.log(err.message);
      throw err;
    } else {
      console.log('Succes');
    }
  });
};
compress();
