var domMemoize = function() {
  var cache = {};

  function saveQuery(queryVal, personalReference) {
    domElements.personalReference = document.querySelector(queryVal);
  }

  function useQuery(personalReference) {
    if (cache.personalReference !== undefined) {
      return cache.personalReference;
    } else {
      return false;
    }
  }


  return {
    saveQuery,
    useQuery
  };
};