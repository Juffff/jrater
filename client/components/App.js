import React from 'react';
import './App.less';
import RaterContainer from './RaterContainer';


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Пожалуйста, оцените качество нашей работы</h1>
                <RaterContainer />
            </div>
        );
    }
}

export default App;
