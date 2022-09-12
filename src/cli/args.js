export const parseArgs = () => {
  // Write your code here
  const cliArgs = process.argv;
  cliArgs.forEach((el, i) => {
    if (el.includes('--')) {
      console.log(`${el} is ${cliArgs[i + 1]}`);
    }
  });
};
parseArgs();
