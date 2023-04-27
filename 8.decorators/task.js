//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
      const hash =  args.join(','); 
      let objectInCache = cache.find((item) => item === hash);
      if (objectInCache) { 
          objectInCache = func.call(this, ...args);
          console.log("Из кэша: " + objectInCache); 
          return "Из кэша: " + objectInCache;
      }

      let result = func(...args); 
      cache.push(hash) ; 
      if (cache.length > 5) { 
        cache.shift()  
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
  }
  return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    wrapper.count = 0;
    wrapper.allCount = 0;
    function wrapper(...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
  
      if (!timeoutId) {
        func(...args);
        wrapper.count++;
      }
  
      timeoutId = setTimeout(() => {
        func(...args)
        wrapper.count++;
      }, delay);
  
      wrapper.allCount++;
    }
    return wrapper; 
}
