const ArrayHelper = () => ({
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
