const execSync = require('child_process').execSync;

const testParam = process.argv[2];
const xuanxiang = process.argv[3];

const commitMessage = `"test: testParam=${testParam} & xuanxiang=${xuanxiang}"`;

console.log(111);

execSync(`git add -A && git commit -m ${commitMessage}`);

console.log(222);

execSync('git push -f origin HEAD:refs/heads/master');

console.log(333);
