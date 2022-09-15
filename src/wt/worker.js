// eslint-disable-next-line node/no-unsupported-features/node-builtins
import { workerData, parentPort } from 'worker_threads';
// n should be received from main thread
export const nthFibonacci = (n) => {
  return n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
};

export const sendResult = () => {
  if (Math.random() > 0.5) throw new Error('oops');
  // This function sends result of nthFibonacci computations to main thread
  parentPort.postMessage(nthFibonacci(workerData));
};
sendResult();
