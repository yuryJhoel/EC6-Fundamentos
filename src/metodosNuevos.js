const texto = "reanimate amigo yury";
console.log(`El texto comienza con a: ${texto.toLowerCase().startsWith('r')}`)

console.log(`El texto comienza con a: ${texto.toLowerCase().endsWith('o')}`)

console.log(`El texto incluye yury ${texto.includes('yury')}`)

const amigos = ['ryhan', 'cornelio', 'Maldtingsasd'];
console.log('ryhan esta entre mis amigos?'+amigos.includes('ryhan'))

console.log(amigos.find(amigo=> amigo.length > 6));

console.log(amigos.findIndex((amigo)=>amigo == "cornelio"))