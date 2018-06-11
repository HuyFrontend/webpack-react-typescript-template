import * as React from 'react';
import Header from './components/Header/Header';
import './App.css';
class App extends React.Component {
    render() {
        return (
            <div className={`App`}>
                <Header/>
                <h2 className="">Hello App TypeScript!</h2>
            </div>
        )
    }
}
export default App;
