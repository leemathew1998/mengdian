const sm4 = require('sm-crypto').sm4

let sm4Config = {
  key: 'HENG1AN2WEN3YIN4',
  mode: 'ecb',
  cipherType: 'base64',
}

// const key = '0123456789abcdef'
let key = [1, 18, 35, 52, 69, 86, 103, 120, 1, 18, 35, 52, 69, 86, 103, 120]

function hexToArray(str) {
  const arr = []
  for (let i = 0, len = str.length; i < len; i++) {
    arr.push(parseInt(str.substr(i, 2), 16))
  }
  return arr
}
// 加密
function Encrypt(text) {
  let encryptData = sm4.encrypt(text, key)
  return encryptData
}

// 解密
function Decrypt(text) {
  // let sm4 = new SM4(sm4Config)
  // return sm4.decrypt(text).toString()
}

export { Encrypt, Decrypt }
