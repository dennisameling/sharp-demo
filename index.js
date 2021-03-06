const sharp = require('@dennisameling/sharp-arm64-win-temp')

async function myfunction() {
    console.log('Testing buffer');
    const hello = Buffer.alloc(0);
    console.log(hello.byteLength);
    console.log('Starting now...');
    const output = await sharp(Buffer.alloc(0)).toBuffer();
    console.log('OK');
}

// Here we wait for the myfunction to finish
// and then returns a promise that'll be waited for aswell
// It's useless to wait the myfunction to finish before to return
// we can simply returns a promise that will be resolved later

// Also point that we don't use async keyword on the function because
// we can simply returns the promise returned by myfunction
function start() {
    return myfunction();
}

// Call start
(async () => {
    console.log('before start');

    await start();

    console.log('after start');
})();
