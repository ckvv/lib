export const visibilityIntervalRegister = (handler: Function, options: {
  interval?: number
  onShown?: Function
  onHidden?: Function
  onStart?: Function
  onStop?: Function
} = {}) => {
  const { interval = 2000, onShown, onHidden, onStart, onStop } = options;

  onStart && onStart();
  let intervalID = setInterval(handler, interval);

  const listener = () => {
    if (document.hidden) {
      onHidden && onHidden();
      clearInterval(intervalID);
    } else {
      onShown && onShown();
      intervalID = setInterval(handler, interval);
    }
  };
  document.addEventListener('visibilitychange', listener);

  return () => {
    onStop && onStop();
    clearInterval(intervalID);
    document.removeEventListener('visibilitychange', listener);
  };
};

export const visibilityChangeRegister = (options: {
  onShown?: Function
  onHidden?: Function
  onStart?: Function
  onStop?: Function
} = {}) => {
  const { onShown, onHidden, onStart, onStop } = options;

  onStart && onStart();

  const listener = () => {
    if (document.hidden)
      onHidden && onHidden();
    else
      onShown && onShown();
  };

  document.addEventListener('visibilitychange', listener);

  return () => {
    onStop && onStop();
    document.removeEventListener('visibilitychange', listener);
  };
};
