'use strict';

import React from 'react'

import Firestack from 'react-native-firestack'

	const configurationOptions = {
  		debug: true
	};
	const firestack = new Firestack(configurationOptions);
	firestack.on('debug', msg => console.log('Received debug message', msg))

//firestack config ^^
import { Text } from 'react-native'

import { Container, Title, Content, List, ListItem, InputGroup, Input, Icon, Button } from 'native-base';

export class EmailLogin extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		  user: null,
		  email: '',
		  password: ''
		}
	}

	componentWillMount(){
		firestack.auth.listenForAuth((u) => {
			console.log('listenForAuth ->', u);
		});
	}

			fillInFields() {
			this.setState({
				email: 'me@me.com',
				password: '123456'
			});
		}

	loginWithEmail(evt) {
		const { email, password } = this.state;

		firestack.auth.signInWithEmail(email, password)
			.then(u => {
			console.log('Signed in!', u);
			this.setState({
				user: u,
				email: '',
				password: ''
			});
		})
			.catch(err => {
			console.log('An error occurred', err);
			});
	}


	onSignout() {
		console.log('yay', this.state);
		this.setState({
			user: null,
			email: '',
			password: ''
		});
	}

	componentWillUnmount(){
	    const {firestack} = this.props;
	    firestack.auth.unlistenForAuth();
	}

	render(){
	    const { user, email, password } = this.state;
		return(      
		<Container> 
        <Content>
          <List>
            <ListItem>
              <InputGroup>
                <Input 
                  placeholder='EMAIL'
                  value={email} />
              </InputGroup>
            </ListItem>

            <ListItem>
              <InputGroup>
                <Input 
                  placeholder='PASSWORD'
                  secureTextEntry={true}
                  value={password}
                />
              </InputGroup>
            </ListItem>
                      
            <ListItem>
              <Button
                block
                info
                onPress={this.loginWithEmail.bind(this)}>
                  <Text>Sign in</Text>
              </Button>
            </ListItem>

            <ListItem>
              <Button
                block
                info
                onPress={this.fillInFields.bind(this)}>
                  <Text>Fill forms with demo user info</Text>
              </Button>
            </ListItem>
          </List>
        </Content>
      </Container>
      )
	}
}

export default EmailLogin