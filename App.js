import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Authentication from './screens/Authentication';
import RegisterForm from './screens/RegisterForm';

const AppNavigator = createStackNavigator({
    Auth: {
        screen: Authentication
    },
    Register: {
        screen: RegisterForm
    }
});

const HomeNavigator = createAppContainer(AppNavigator)

class App extends Component {
    render() {
        return(
            <HomeNavigator />
        );
    }
}

export default App;
