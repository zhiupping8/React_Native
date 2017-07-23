import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Image, Text, View, Button} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true};

    //每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText};
      });
    }, 1000);
  }
  
  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class ChatScreen extends Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };
    render() {
        return (
            <View>
                <Text>Chat with Lucy</Text>
            </View>
        );
    }
}

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    const { navigate } = this.props.navigation;
    return (
      <View style={{alignItems: 'center'}}>
        <Image source={pic} style={{width: 193, height: 110}} />
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />

        <Blink text='I love to blink' />

        <Button
          onPress = {() => navigate('Chat')}
          title="Chat with Lucy"
        />
         <View> 
          <Text style={styles.red}>just red</Text>
          <Text style={styles.bigblue}>just bigblue</Text>
          <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
          <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
         </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

const mydemo = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

// AppRegistry.registerComponent('Greeting', () => Greeting);
AppRegistry.registerComponent('mydemo', () => mydemo);