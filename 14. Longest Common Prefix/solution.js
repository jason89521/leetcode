/**
 * @param {string} str
 * @param {string} prefix
 * @return {number} return -1 means there is no difference
 */
const hasDifference = function (str, prefix) {
  const prefixLength = prefix.length;
  for (let i = 0; i < prefixLength; i++) {
    if (str[i] !== prefix[i]) return i;
  }

  return -1;
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = strs[0];
  strs.forEach(str => {
    const differenceIndex = hasDifference(str, prefix);
    if (differenceIndex === -1) return;

    prefix = prefix.slice(0, differenceIndex);
  });
  
  return prefix;
};

module.exports = longestCommonPrefix;
