const { exec } = require('child_process');

exec('batchScript.bat', (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`); // stdout 子进程标准输出
    console.log(`stderr: ${stderr}`); // stderr 子进程错误输出
});
