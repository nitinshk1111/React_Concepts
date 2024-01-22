const myReact = () => {
  let previousDeps = undefined;
  let isFirstRendered = true;

  const useEffect1 = (callback, deps = undefined) => {
    if (previousDeps === undefined && deps === undefined) {
      callback();
      return;
    }

    if (deps.length === 0) {
      if (isFirstRendered) {
        callback();
        isFirstRendered = false;
      }
      return;
    }

    if (deps && JSON.stringify(previousDeps) !== JSON.stringify(deps)) {
      callback();
      previousDeps = deps;
      return;
    }
  };

  return {
    useEffect1,
  };
};

export default myReact;
