function getRandomNumber(min, max){
  // min, max之间的一个数字
  // [0,1) -> [0, max - min + 1) -> [min, max + 1) -> [min, max]
  return Math.floor(Math.random() * (max - min + 1) + min);
}