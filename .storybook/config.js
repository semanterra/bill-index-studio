import { configure } from '@storybook/react';

// See https://material-ui.com/css-in-js/basics/#migration-for-material-ui-core-users
import { install } from '@material-ui/styles';

install();

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.[jt]sx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
