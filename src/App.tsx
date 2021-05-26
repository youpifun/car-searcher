import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import CarTable from './components/CarTable';

class App extends React.Component {
    render() {
        return (
            <Theme preset={presetGpnDefault}>
                <CarTable/>
            </Theme>
        )
    }
}

export default App;
