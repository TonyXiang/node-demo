console.time('计时')
const buf = Buffer.from('打完', 'utf8')
console.log(buf.toString('ascii'), '\n')
console.log(buf.toString('utf8'), '\n')
console.log(buf.toString('base64'), '\n')

console.dir({ name: '老王', age: 25, sex: '男' })
console.timeEnd('计时')
