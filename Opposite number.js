function opposite(number) {
  if (number < 0) return number + Math.abs(number * 2);
  return number - number * 2;
}
