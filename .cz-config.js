module.exports = {
    types: [
        { value: ':sparkles:feat', name: '特性:    添加新特性' },
        { value: ':bug:fix', name: '修复:    修复Bug' },
        { value: ':memo:docs', name: '文档:    变更的只有文档' },
        {
            value: ':art:style',
            name: '格式:    仅仅修改了空格、格式缩进、逗号等，不改变代码逻辑'
        },
        {
            value: ':recycle:refactor',
            name: '重构:    代码重构，注意和特性、修复区分开'
        },
        { value: ':rocket:perf', name: '性能:    提升性能' },
        { value: ':white_check_mark:test', name: '测试:    添加一个测试' },
        {
            value: ':building_construction:build',
            name: '构建:    构建过程或增加依赖库、工具等'
        },
        {
            value: ':tada:init',
            name: '初始化:    初始化项目'
        }
    ],
    messages: {
        type: '选择一种你的提交类型:',
        scope: '选择一个scope (可选):',
        // used if allowCustomScopes is true
        customScope: 'Denote the SCOPE of this change:',
        subject: '短说明:\n',
        body: '长说明，使用"|"换行(可选)：\n',
        breaking: '非兼容性说明 (可选):\n',
        footer: '关联关闭的issue，例如：#31, #34(可选):\n',
        confirmCommit: '确定提交说明?'
    },
    allowCustomScopes: true,
    subjectLimit: 100
};
