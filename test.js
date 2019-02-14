const TagoAnalysis = require('tago/analysis');
const TagoAccount  = require('tago/account');
const TagoDevice   = require('tago/device');
const TagoUtils    = require('tago/utils');
const updateDash = require('./project/services/pole/updateDash');
// const res = groupData([{ variable: 'teste', serie: 122, location: { a: 1 } }, { variable: 'teste2', serie: 122, value: 'abc' },
//   { variable: 'teste', serie: 123, location: { a: 2 } }, { variable: 'teste2', serie: 123, value: 'wer' }], 'serie', false);
// console.log(res);

// tinyUrl('https://embed.tago.io/?widget=5c54b33fa90a4d00285e708e&dashboard=5c52982b269cfa002d735496&token=2b4c7b36-92d6-47b6-ac05-6353ff195770').then(console.log, console.log);
const acc = new TagoAccount('3f4f0079-8967-493a-a76c-06ca9d64b2a7');
const config_dev = new TagoDevice('4900cc0c-57f6-493f-8a49-1d3279adae6d');
const context = {
  environment: { dash_summary: '5c6462979e6034001d280034/5c6469521f3c1c001d054388' },
};

updateDash(context, acc, config_dev).then(console.log, console.log);