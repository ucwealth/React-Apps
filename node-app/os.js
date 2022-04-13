const os = require('os')

console.log('os Platform: ' + os.platform())
console.log('cpu architecture: ' + os.arch())
console.log('number of CPU cores: ' + os.cpus().length)
console.log('list of CPU cores: ' + os.cpus())
console.log('user\'s home directory: ' + os.homedir())
