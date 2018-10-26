const fs = require('fs')

const randomizeFileName = () => {
  return Math.random().toString().split('.').pop() +
  Math.random().toString().split('.').pop()
}

module.exports = (file, type) => {
  const reader = fs.createReadStream(file.path)
  let filePath = null
  if (type === 'products-main') {
    filePath = `images/products-main/${randomizeFileName()}.jpg`
  } else if (type === 'products-model') {
    filePath = `images/products-model/${randomizeFileName()}.jpg`
  } else if (type === 'user') {
    filePath = `images/users/${randomizeFileName()}.jpg`
  } else {
    return false
  }

  const stream = fs.createWriteStream(filePath)
  reader.pipe(stream)
  return {
    filePath
  }
}