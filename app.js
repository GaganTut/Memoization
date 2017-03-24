var domMemoize = function() {
  var cache = {};

  function saveQuery(queryVal) {
    cache.queryVal = document.querySelector(queryVal);
  }

  function useQuery(queryVal) {
    if (cache.queryVal !== undefined) {
      return cache.queryVal;
    } else {
      return false;
    }
  }


  return {
    saveQuery,
    useQuery
  };
};