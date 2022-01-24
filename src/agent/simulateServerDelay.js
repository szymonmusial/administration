const DELAY_TIME = 2000;

const simulateServerDelay = (delay = DELAY_TIME) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export default simulateServerDelay;
