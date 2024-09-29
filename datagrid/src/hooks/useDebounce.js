function useDebounce(callBack, delay = 100) {
  let timeout = null;
  return (...args) => {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      callBack(...args);
      timeout = null;
    }, delay);
  };
}

export default useDebounce;
