const match = require('./match.js');

module.exports = (base, ...subStrings) => {
  if (subStrings.length === 0)
    throw new Error('at least 1 substring must be specified');

  const string = '' + base;

  let found = false;
  for (const subString of subStrings) {
    if (!string.includes(subString))
      continue;

    found = true;
    break;
  };

  if (!found)
    return {
      string,
      subStrings,
      found,
      message: `not any of ${JSON.stringify(subStrings)} found in "${string}"`,
    };

  return;
};