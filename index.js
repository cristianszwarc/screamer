'use strict';
const decycle = require('./decycle');

const noStringify = ['string', 'number', 'boolean', 'undefined'];
let screanNumber = 0;
let logger = console.log;

const setup = (options) => {
  if (!options) return;
  logger = options.logger ? options.logger : console.log;
  if (options.global) {
    global.scream = scream;
    global.screamify = screamify;
  }
}

const scream = (what, label) => {
  const labelToUse = label ? label : typeof what;
  screanNumber++;
  logger('-------------------------------------------------------');
  logger(`    .-.${(screanNumber).toString().padStart(47, ' ').padEnd(48, ' ')}`);
  logger('  ((o,O))');
  logger('   \\\\O//  ' + labelToUse.padStart(labelToUse.length + Math.floor((45 - labelToUse.length) / 2), ' ').padEnd(45, ' '));
  logger('    )V(   ');
  logger('-------------------------------------------------------');
  if (noStringify.includes(typeof what)) {
    logger(what);
  } else {
    logger(JSON.stringify(decycle(what), null, 2));
  }
  logger('-------------------------------------------------------');
}

// force stringify
const screamify = (what, label) => {
  scream(JSON.stringify(decycle(what)), label ? label : 'screamify');
}

module.exports = {
  setup,
  scream,
  screamify,
}
