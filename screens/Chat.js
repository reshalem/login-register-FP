import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

import Fire from '../Fire';

class Chat extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('name')
    });

    state = {
        messages: []
    }

    get user() {
        return {
            name: this.props.navigation.state.params.name,
            _id: Fire.shared.uid,
        };
    }

    componentDidMount() {
        Fire.shared.on(message =>
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, message),
            }))
        );
    }

    componentWillUnmount() {
        Fire.shared.off();
    }

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={Fire.shared.send}
                user={this.user}
            />
        );
    }
}

export default Chat;