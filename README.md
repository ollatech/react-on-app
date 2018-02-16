React on App
=========

Integrate react on anywhere

## Installation

  `yarn add react-on-app`

## Usage

    var ReactOnApp = require('react-on-app');
    var Home = require('./Home');

    ReactOnApp.register({'home.js', Home})
  
  
  Call app on html
  <div id="app"></div>
  <script>
  	ReactOnApp.render({
  		domId: 'app',
  		name: 'home.js'
  	})
  </script>


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.