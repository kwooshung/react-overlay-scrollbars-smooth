const fs = require('fs');

const CHANGELOG_PATH = 'CHANGELOG.md'; // 替换为你的changelog文件路径

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
  // 检查内容中是否包含 '## <small>' 来决定如何分割
  const sections = content.includes('## <small>')
    ? content.split('## <small>')
    : content
        .split('## ')
        .slice(1)
        .map((s) => `## ${s}`);
  let result = '';
  let isFirstVersion = true;

  for (const section of sections) {
    if (!section.trim()) continue;

    // 检查section中是否使用了 <small> 标签
    const isUsingSmallTag = section.includes('<small>');
    const [header, ...commits] = section.split('\n').filter(Boolean);
    let version, date;

    // 根据是否使用 <small> 标签来提取版本号和日期
    if (isUsingSmallTag) {
      [version, date] = header.split(' (');
    } else {
      [version, date] = header.replace('## ', '').split(' (');
    }

    date = date.replace(')', '').replace('</small>', '');

    // 确保我们添加了版本前缀并正确格式化日期
    version = version.trim().startsWith('v') ? version.trim() : `v${version.trim()}`;
    date = date.trim();

    if (isFirstVersion) {
      isFirstVersion = false;
    } else {
      result += '---\n\n';
    }

    result += `## 🎉 ${version} \`${date}\`\n`;

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

// 读取CHANGELOG文件的内容
const content = fs.readFileSync(CHANGELOG_PATH, 'utf-8');
// 转换CHANGELOG内容
const transformed = transformChangelog(content);
// 将转换后的内容写回CHANGELOG文件
fs.writeFileSync(CHANGELOG_PATH, transformed);
