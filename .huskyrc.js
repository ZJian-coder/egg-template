module.exports = {
    hooks: {
        'pre-commit': 'lint-staged',
        'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS'
        //"pre-push": "echo 我要推送代码啦"
    }
};
