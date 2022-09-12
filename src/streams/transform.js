// eslint-disable-next-line node/no-unsupported-features/node-builtins
import { Transform, pipeline } from 'stream';
import { EOL } from 'os';

export const transform = async () => {
  // Write your code here
  const reverce = new Transform({
    transform(chunk, encoding, callback) {
      let result = chunk.toString();
      result = result.replace(EOL, '');
      result = result.split('').reverse().join('') + EOL;
      callback(null, result);
    },
  });
  pipeline(process.stdin, reverce, process.stdout, (err) => {
    throw err;
  });
};
transform();
