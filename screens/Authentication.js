import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Image, 
    StyleSheet, 
    TouchableHighlight, 
    TouchableOpacity,
    Button
} from 'react-native';

import LoginForm from '../components/LoginForm';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 50
    },
    content: {
        width: 350,
        height: 230,
        justifyContent: 'center',
        paddingHorizontal: 25,
        paddingVertical: 20,
        flex: 9
    },
    thighlight: {
        height: 50,
        backgroundColor: '#ffa500',
        alignItems: 'center',
        justifyContent: 'center',
        width: 300, 
        marginTop: 30,
        alignSelf: 'center',
        borderRadius: 50
    },
    openingText: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    btnTextRegister: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500'
    },
    viewToLogin: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height: 20,
        alignSelf: 'flex-start',
        marginLeft: 40,
        alignItems: 'center'
    },
    btnToLogin: {
        height: 20,
        color: 'blue'
    },
    textToLogin: {
        fontSize: 15,
        height: 20
    }, 
    btnTextLogin: {
        color: 'blue'
    },
    viewHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 40
    }
})

class Authentication extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerTitle: (
                <View style={styles.viewHeader}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        {params.showLogin && <View style={{paddingLeft: 10}}>
                            <Button onPress={params.toggleLogin} title="Cancel" />
                        </View>}
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                        <Image
                            source={require('../assets/alarm.png')}
                        />
                    </View>
                    <View style={{flex: 1}}></View>
                </View>
            ),
            headerTitleStyle: { color: 'white' },
            headerStyle: {
                borderBottomWidth: 0,
                marginTop: 8
            }
        };
    }

    state = {
        showLogin: false, 
        email: '',
        password: ''
    }

    goToRegister = () => {
        this.props.navigation.navigate('Register');
    }

    handleInputChange = val => (e) => {
        this.setState({
            [val]: e
        });
    }

    toggleLogin = () => {
        if (this.state.showLogin === false) {
            this.setState({
                showLogin: true
            }, () => {
                this.props.navigation.setParams({
                    showLogin: true,
                    toggleLogin: this.toggleLogin
                });
            });
        } else {
            this.setState({
                showLogin: false
            }, () => {
                this.props.navigation.setParams({
                    showLogin: false,
                    toggleLogin: this.toggleLogin
                });
            });
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({
            showLogin: this.state.showLogin,
            toggleLogin: this.toggleLogin
        });
    }

    render() {
        return (
            <View style={styles.container}>
                {!this.state.showLogin ? 
                    <>
                        <View style={styles.content}>
                            <Text style={styles.openingText}>Track your</Text>
                            <Text style={styles.openingText}>meeting participants</Text>
                            <Text style={styles.openingText}>real time.</Text>
                            <TouchableHighlight 
                                onPress={this.goToRegister} 
                                style={styles.thighlight} 
                                underlayColor='#f8bc4d'
                            >
                                <Text style={styles.btnTextRegister}>Register</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.viewToLogin}>
                            <Text style={styles.textToLogin}>Have an account already? </Text>
                            <TouchableOpacity style={styles.btnToLogin} onPress={this.toggleLogin}>
                                <Text style={styles.btnTextLogin}>Log in</Text>
                            </TouchableOpacity>
                        </View>
                    </> :
                    <View>
                        <LoginForm email={this.state.email} password={this.state.password} handleInputChange={this.handleInputChange} />
                    </View>
                }
            </View>
        );
    }
}

export default Authentication;