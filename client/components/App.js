import React from 'react';
import './App.less';
import Selector from './Selector';
import RaterContainer from './RaterContainer';


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Selector />
                <RaterContainer />
            </div>
        );
    }
}

export default App;
