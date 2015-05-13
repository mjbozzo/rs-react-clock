# clock (https://github.com/salesforce-demos/rs-react-clock)

React clock component

## Installing

```bash
$ npm install --save git+https://github.com/salesforce-demos/rs-react-clock.git
```

## Requirements

In order to make this component work in your project you need to include the
following configuration object in your configuration.js file and make the
corresponding changes. You can add more than
one notification object:

```js
{
    reactClock: {
        // shows hour in twelve hours format (12:00)
        twelveHoursClock: true
    }
}
```

## Example

```js
var React = require('react'),
    ReactClock = require('rs-react-clock');

var App = React.createClass({
    render: function () {
        return (
            <ReactClock />
        );
    }
});

React.render(<App/>, document.body);
```
