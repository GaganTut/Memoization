var domMemoize = function() {
  var cache = {};

  function saveQuery(queryVal) {
    cache[queryVal] = document.querySelector(queryVal);
  }

  function useQuery(queryVal, index) {
    if (cache[queryVal].index !== undefined) {
      return cache[queryVal].index;
    } else {
      return false;
    }
  }

  function saveQueryCollection(queryVal) {
    cache[queryVal] = document.querySelectorAll(queryVal);
  }

  return {
    saveQuery,
    useQuery,
    saveQueryCollection
  };
};