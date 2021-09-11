const os = require("os");
const log = require("./logger")

setInterval(() => {
  const { freemem, totalmem } = os;

  const total = parseInt(totalmem() / 1024 / 1024);
  const mem = parseInt(freemem() / 1024 / 1024);
  const percents = parseInt((mem / totalmem) * 100);

  const stats = {
    free: `${mem} mb`,
    total: `${total} mb`,
    usage: `${percents}%`,
  };

  console.clear();
  console.log("os stats:");
  console.table(stats);

  log(`${JSON.stringify(stats)}\n`)
}, 1000);

