/* eslint-disable no-undef */
const fs = require('fs');

const CHANGELOG_PATH = 'CHANGELOG.md'; // replace with your changelog file path

const types = require('./commitTypes.cjs');

const parseCommitType = (commit) => {
  for (const type of types) {
    if (commit.includes(type.value)) return type;
  }
  return null;
};

const getEmojiFromValue = (value) => {
  return value.split(' ')[0];
};

const getSimpleTypeName = (name) => {
  return name.split(':')[0].trim();
};

const transformChangelog = (content) => {
  const sections = content.split('## <small>');
  let result = '';
  let isFirstVersion = true;

  for (const section of sections) {
    if (!section.trim()) continue;

    const [header, ...commits] = section.split('\n').filter(Boolean);
    const [version, date] = header.split(' (');

    if (isFirstVersion) {
      isFirstVersion = false;
    } else {
      result += '---\n\n';
    }

    result += `## 🎉 v${version} \`${date.replace(')</small>', '')}\`\n`;

    const categorized = {};

    for (const commit of commits) {
      const type = parseCommitType(commit);
      if (!type) continue;

      if (!categorized[type.name]) {
        categorized[type.name] = [];
      }

      const message = commit.split('): ')[1];
      if (message) {
        categorized[type.name].push(`- ${message}`);
      }
    }

    let hasValidContent = false;
    for (const [, items] of Object.entries(categorized)) {
      if (items.length > 0) {
        hasValidContent = true;
        break;
      }
    }

    if (!hasValidContent) {
      result += '- 没有特别说明\n\n';
      continue;
    }

    for (const [category, items] of Object.entries(categorized)) {
      const type = types.find((t) => t.name === category);
      const emoji = getEmojiFromValue(type.value);
      const simpleName = getSimpleTypeName(category);
      result += `### ${emoji} ${simpleName}\n`;
      items.forEach((item) => {
        result += `${item}\n`;
      });
      result += '\n';
    }
  }

  return result;
};

const content = fs.readFileSync(CHANGELOG_PATH, 'utf-8');
const transformed = transformChangelog(content);
fs.writeFileSync(CHANGELOG_PATH, transformed);
