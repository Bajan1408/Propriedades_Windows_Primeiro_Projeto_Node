const os = require('node:os');

setInterval(() => {
    const { arch, platform, totalmem, freemem } = os;
    const tRam = parseInt(totalmem() / 1000000) + ' MB';
    const fRam = parseInt(freemem() / 1000000) + ' MB';
    const usage = parseInt((freemem() / totalmem()) * 100) + ' %';

    const stats = {
       Os: platform(),
       Arch: arch(),
       freeRAM: fRam,
       totalRAM: tRam,
       usageRam: usage
    }
console.clear();
console.table(stats);
}, 2000)

