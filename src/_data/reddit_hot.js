const fetch = require("node-fetch");

module.exports = async function redditHot() {
  const res = await fetch("https://www.reddit.com/hot.json").then(res => res.json());
  // console.log(res);
  return res;
};
