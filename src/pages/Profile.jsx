import React, { Component } from 'react';
import {Auth, Logger} from 'aws-amplify';
import { Container, InputGroup, Button, Form, Alert } from 'react-bootstrap';

const logger = new Logger('Profile');

class Profile extends Component{

    constructor(props){
        super(props);
        this.state = {
            profile: {
                given_name: "",
                family_name: "",
            }
        }
    }

    componentDidMount() {
        if (this.props.user) { this.loadProfile() }
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.user && this.props.user) {
            this.loadProfile();
        }
    }

    handleInputChange = (name, value) => {
        const profile = Object.assign({}, this.state.profile);
        profile[name] = value;
        this.setState({ profile: profile });
    }

    loadProfile = () => {
        const { user } = this.props;
        Auth.userAttributes(user)
            .then(data => this.loadSuccess(data))
            .catch(err => this.handleError(err));
    }

    loadSuccess(data) {
        logger.info('loaded user attributes', data);
        const profile = this.translateAttributes(data);
        this.setState({ profile: profile });
    }

    handleError(error) {
        logger.info('load / save user attributes error', error);
        this.setState({ error: error.message || error });
    }

    translateAttributes(data) {
        const profile = {};
        data
            .filter(attr => ['given_name', 'family_name'].includes(attr.Name))
            .forEach(attr => profile[attr.Name] = attr.Value);
        return profile;
    }

    saveProfile= () => {
        const { user } = this.props;
        if (!user) {
            this.handleError('No user to save to');
            return;
        }

        Auth.updateUserAttributes(user, this.state.profile)
            .then(data => this.saveSuccess(data))
            .catch(err => this.handleError(err));
    }

    render(){
        const {profile, error} = this.state;
        // console.log(profile);

        return(
            <Container display="flex" flex="column" alignItems="center">
                <InputGroup mb="3" style={{ maxWidth: '24rem' }}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id = "first-name">First name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        type="text"
                        defaultValue={profile.given_name}
                        aria-describedby = "first-name"
                        onChange={event => this.handleInputChange('given_name', event.target.value)}
                    />
                </InputGroup>
                <InputGroup mb="3" style={{ maxWidth: '24rem' }}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id = "last-name">Last name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        type="text"
                        defaultValue={profile.family_name}
                        aria-describedby = "last-name"
                        onChange={event => this.handleInputChange('family_name', event.target.value)}
                    />
                </InputGroup>
                <Button primary px="5" onClick={this.saveProfile}>Save</Button>
                {error && <Alert warning>{error}</Alert>}
            </Container>
        )
    }
}

export default Profile;

