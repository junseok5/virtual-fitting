module.exports = (ctx, next) => {
  const { seller } = ctx.request
  console.log(seller)
  if (!seller) {
    ctx.status = 401 // unauthorized
    return null
  }
  return next()
}