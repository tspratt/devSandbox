'use strict';

var path = require('path'),
  fs   = require('fs');

var Handlebars = require('handlebars');

var templatePath = path.join(__dirname, 'template.hbs'),
/* eslint-disable no-sync */
  templateFile = fs.readFileSync(templatePath).toString(),
/* eslint-enable no-sync */
  template     = Handlebars.compile(templateFile);

module.exports = template;
