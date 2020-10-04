export default function (page) {
  const limit = 20

  const offset = limit * (page - 1)
  return offset
}
