import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.jsx';

ReactDOM.render(<App />, document.getElementById('app'))

var Service_intro = React.createClass({
    
    
})


var myStyle = {
    fontSize:30,  
    color:'#FF0000'
    
};


ReactDOM.render(
	<h1 style = {myStyle}>Testing</h1>,
	document.getElementById('example1')
);

ReactDOM.render(
    <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>,
        document.getElementById('example')
);
