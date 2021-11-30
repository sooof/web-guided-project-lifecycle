import React from 'react';
import axios from 'axios';

class App extends React.Component {
    render() {
        return(<div>
            <h1>Dog Image Retriever v1.4</h1>
            <form>
                <input/>
                <button>Search</button>
            </form>
            <div id="dogImages">
                <img src=""/>
            </div>
        </div>);
    }
}
export default App;