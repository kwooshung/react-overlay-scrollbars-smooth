module.exports = {
  releaseCommitMessageFormat: '📦️ release(tag): {{currentTag}}',
  scripts: {
    postchangelog: 'echo "start change" && pnpm changelog'
  }
};
