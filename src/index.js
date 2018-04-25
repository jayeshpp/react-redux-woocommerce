import "./auth";
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router';
import Products from './components/products/Products';

const Root = () => {
    return(
        <div className="root">
            <Router history={browserHistory}>
                <Route path="/" component={Products}/>
            </Router>
        </div>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
