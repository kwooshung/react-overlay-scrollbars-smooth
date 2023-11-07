const { Octokit } = require('@octokit/rest');
const semver = require('semver');
const fs = require('fs');

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const owner = process.env.GITHUB_REPOSITORY.split('/')[0];
const repo = process.env.GITHUB_REPOSITORY.split('/')[1];

async function getTags() {
  const { data } = await octokit.repos.listTags({
    owner,
    repo,
    per_page: 100
  });
  return data;
}

async function getReleases() {
  const { data } = await octokit.repos.listReleases({
    owner,
    repo,
    per_page: 100
  });
  return data.map((release) => release.tag_name);
}

const extractChangelog = (tag, changelogPath = 'CHANGELOG.md') => {
  const changelog = fs.readFileSync(changelogPath, 'utf-8');
  const versionRegex = new RegExp(`## 🎉 ${tag} .+?\\n(.*?)(\\n## |\\n$)`, 's');
  const match = changelog.match(versionRegex);
  return match ? match[1].trim() : null;
};

async function autoRelease() {
  const tags = await getTags();
  const releasedTags = await getReleases();
  // 按照语义化版本号从小到大排序标签
  const sortedTags = tags.sort((a, b) => semver.compare(a.name, b.name));

  for (const tag of sortedTags) {
    if (!releasedTags.includes(tag.name)) {
      const changelog = extractChangelog(tag.name);
      if (changelog) {
        // 等待发布完成后再进行下一个发布
        await octokit.repos.createRelease({
          owner,
          repo,
          tag_name: tag.name,
          name: `🎉 ${tag.name}`,
          body: changelog
        });
      }
    }
  }
}

autoRelease().catch((err) => {
  console.error(err);
  process.exit(1);
});
