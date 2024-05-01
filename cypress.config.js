const { defineConfig } = require("cypress");

const { parse } = require('csv-parse/sync');
const { readFileSync } = require('fs');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8000',
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {

      const spells = parse(
        readFileSync('gamedata/spells.csv'), {
        delimiter: '\t',
        columns: true,
        skip_empty_lines: true
      });

      // console.table(spells)
      config.env.spells = spells;

      const items = parse(
        readFileSync('gamedata/BaseI.csv'), {
        delimiter: '\t',
        columns: true,
        skip_empty_lines: true
      });

      // console.table(items)
      config.env.items = items;

      // const units = parse(
      //   readFileSync('gamedata/BaseU.csv'), {
      //   delimiter: '\t',
      //   columns: true,
      //   skip_empty_lines: true
      // });

      // // console.table(units)
      // config.env.units = units;

      // implement node event listeners here
      return config
    },
  },
});
