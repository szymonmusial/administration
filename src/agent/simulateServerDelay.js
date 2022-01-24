const DELAY_TIME = 0;

const simulateServerDelay = (delay = DELAY_TIME) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export default simulateServerDelay;
