var shell = require('shelljs');

if (shell.exec('node index.js').code !== 0) {
    shell.echo('node index.js commit failed');
    shell.exit(1);
}
