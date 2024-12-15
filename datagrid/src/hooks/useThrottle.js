function useThrottle(callBack, delay = 100) {
  let waitingArgs = null;
  let isWaiting = false;

  const timeoutFunc = () => {
    if (waitingArgs === null) {
      isWaiting = false;
    } else {
      callBack(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (isWaiting) {
      waitingArgs = args;
      return;
    }
    callBack(...args);
    isWaiting = true;

    setTimeout(timeoutFunc, delay);
  };
}

export default useThrottle;
