const ArrayHelper = () => ({
  sortByObjectValue: function sortByObjectValue(array, sortFieldCb, asc = true) {
    console.log(array);
    return array.sort((a, b) => {
      const fieldA = sortFieldCb(a);
      const fieldB = sortFieldCb(b);
      if (fieldA < fieldB) {
        return asc ? -1 : 1;
      }
      if (fieldA > fieldB) {
        return asc ? 1 : -1;
      }
      return 0;
    });
  },
  
  shuffle: function shuffle(array) {
    return array.reduce(
      (newArr, _, i) => {
        const rand = i + (Math.floor(Math.random() * (newArr.length - i)));
        // eslint-disable-next-line no-param-reassign
        [newArr[rand], newArr[i]] = [newArr[i], newArr[rand]];
        return newArr;
      },
      [...array],
    );
  }
});

export default ArrayHelper();
