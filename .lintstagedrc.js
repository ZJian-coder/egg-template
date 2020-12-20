module.exports = {
    '*.{js,ts}': 'eslint', //推荐，提交时只做检查，不自动修复（自动修复在保存文件时做）
    '*.css': 'stylelint'
    //"src/**/*.{js,ts}": ["eslint --fix", "prettier --write"] //不推荐，提交时保存并修复
};
