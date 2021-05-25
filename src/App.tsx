import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import CarList from './components/CarList'
import CarFilter from './components/CarFilter';

class App extends React.Component {
    render() {
        return (
            <Theme preset={presetGpnDefault}>
                <CarFilter/>
            </Theme>
        )
    }
}

export default App;
