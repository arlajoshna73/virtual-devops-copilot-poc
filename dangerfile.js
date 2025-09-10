// dangerfile.js
const { message, fail, warn, markdown } = require('danger');

if (danger.github.pr) {
  const files = danger.git.modified_files.concat(danger.git.created_files);
  // Example rule: warn if pipeline YAML doesn't include caching
  const hasWorkflow = files.some(f => f.startsWith('.github/workflows/'));
  if (hasWorkflow) {
    markdown('Automated pipeline linting: remember to add caching and avoid long serial tests.');
  }
}
