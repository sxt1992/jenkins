const execSync = require('child_process').execSync;

const testParam = process.argv[2];
const xuanxiang = process.argv[3];

const commitMessage = `test: testParam=${testParam} & xuanxiang=${xuanxiang}`;

execSync(`git add -A && git commit -m ${commitMessage}`, { stdio: 'ignore' });
