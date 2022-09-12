export const parseEnv = () => {
  // Write your code here
  const myEnv = process.env;

  for (const key in myEnv) {
    console.log(`RSS_${key}=${myEnv[key]}`);
  }
};

parseEnv();
