export const parseArgs = () => {
  // Write your code here
  const cliArgs = process.argv.slice(2);
  const result = [];
  cliArgs.forEach((el, i) => {
    if (el.startsWith('--') && cliArgs[i + 1]) {
      result.push(`${el.slice(2)} is ${cliArgs[i + 1]}`);
    }
  });
  console.log(result.join(', '));
};
parseArgs();
