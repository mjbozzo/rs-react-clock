# clock (https://github.com/salesforce-demos/rs-react-clock)

React clock component

## Installing

```bash
$ npm install --save git+https://github.com/salesforce-demos/rs-react-clock.git
```

## Requirements

In order to make this component work in your project you need to add these meta
tags on your index.html:

```html
<meta name="description" content="">
<meta name="format-detection" content="telephone=no" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
```

You need also to include the following configuration object in your
configuration.js file and make the corresponding changes. You can add more than
one notification object:

```js
{
    reactClock: {
        // shows hour in twelve hours format (12:00)
        twelveHoursClock: true,
        // shows AM-PM
        showAMPM: true
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
