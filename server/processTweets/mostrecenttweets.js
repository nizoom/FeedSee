async function sortByMostRecent(processedTweets) {
  processedTweets.sort(function (a, b) {
    return b.recencyNumber - a.recencyNumber;
  });

  return processedTweets;
}

module.exports = sortByMostRecent;
