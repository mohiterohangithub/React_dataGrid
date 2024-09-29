function useThrottle(callBack, delay = 100) {
  let isWaiting = false;
  return (...args) => {
    if (!isWaiting) {
      callBack(...args);
      isWaiting = true;
      setTimeout(() => {
        isWaiting = false;
      }, delay);
    }
  };
}

export default useThrottle;
