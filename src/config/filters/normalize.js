import capitalize from './capitalize';

export default word => {
  const words = word.split('-')

  const capitalizedWords = words.map(word => capitalize(word))
  return capitalizedWords.join(' ')
}
