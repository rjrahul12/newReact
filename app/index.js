var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
var DynamicCollage = require('./components/DynamicCollage.js');
/*ReactDOM.render(
	<App />,document.getElementById('app'));*/
ReactDOM.render(
	<DynamicCollage />,document.getElementById('canvas'));