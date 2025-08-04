export const wait = (ms) => {
  // await new Promise(resolve => setTimeout(resolve, 1000));

  return new Promise((resolve) => setTimeout(resolve, ms));
};
