export function getRandomElements(array, count) {
  return array
    .slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}