function diffArray(arr1, arr2) {
  if(!Array.isArray(arr1) || !Array.isArray(arr1)) {
    throw new Error(`Input must be an array !`);
  }

  const diffForArr1 = arr1.filter(item => {
    const indexForSameItem = arr2.indexOf(item);
    if(indexForSameItem >= 0) {
      arr2.splice(indexForSameItem, 1);
      return false;
    }
    return true;
  });

  return [...diffForArr1, ...arr2];
}

export {
  diffArray,
};
