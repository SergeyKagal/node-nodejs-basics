export const parseEnv = () => {
  // Write your code here
  const myEnv = process.env;
  const result = [];
  for (const key in myEnv) {
    if (key.startsWith('RSS')) {
      result.push(`${key}=${myEnv[key]}`);
    }
  }
  console.log(result.join('; '));
};

parseEnv();
