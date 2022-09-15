/* eslint-disable no-unused-vars */
import { cpus } from 'os';
import { Worker } from 'worker_threads';
import { resolve } from 'path';

const workerUrl = resolve('worker.js');

export const performCalculations = async () => {
  // Write your code here
  const cpusArr = cpus();
  let num = 10;

  const workers = cpusArr.map(() => {
    return new Promise((res, rej) => {
      const worker = new Worker(workerUrl, {
        workerData: num++,
      });
      worker.on('message', (msg) => res(msg));
      worker.on('error', (err) => rej(err));
    });
  });

  return Promise.allSettled(workers)
    .then((resArr) => {
      return resArr.map(({ status, value }) => ({
        status: status === 'fulfilled' ? 'resolved' : 'error',
        data: status === 'fulfilled' ? value : null,
      }));
    })
    .then((result) => console.log(result));
};
performCalculations();
