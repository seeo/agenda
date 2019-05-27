import React, { Component } from 'react';

import { Navigator, Main } from './components';
import './App.css';

//source: https://aws-amplify.github.io/docs/js/start

import {withAuthenticator} from 'aws-amplify-react';
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';

Amplify.configure(awsmobile);

/* This file is generated by the Amplify CLI, and contains information about the
serverless resources you create with the CLI.The Amplify Library then reads the
JSON in this file when you pass it to the Amplify.configure method.
Once the Amplify Library has been configured, it can access your AWS resources.

Finally, the Amplify UI components can then use the Amplify library to
automatically perform tasks such as authentication, S3 uploads, etc.

You can use the Amplify CLI and the Amplify Library / UI Components separately,
but they are most powerful when used together.
*/

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigator />
        <Main />
      </React.Fragment>
    );
  }
}

const signInConfig = {
    signInFields:
    [
        {
            label: 'Email',
            key: 'username',
            required: true,
            displayOrder: 1,
            type: 'email',
            custom: false
        },
        {
            label: 'Password',
            key: 'password',
            required: true,
            displayOrder: 2,
            type: 'password',
            custom: false
        }
    ]
}

const signUpConfig = {
    hiddenDefaults: ['phone_number'],
    signUpFields: [
        {
            label: 'Name',
            key: 'name',
            required: false,
            displayOrder: 1,
            type: 'text',
            custom: false
        },
        {
            label: 'Email',
            key: 'email',
            required: true,
            displayOrder: 2,
            type: 'email',
            custom: false
        },
        {
            label: 'Confirm Email',
            key: 'username', // !!!
            required: true,
            displayOrder: 3,
            type: 'email',
            custom: false
        },
        {
            label: 'Password',
            key: 'password',
            required: true,
            displayOrder: 4,
            type: 'password',
            custom: false
        },
    ]
};

export default withAuthenticator(App, {
    signInConfig,
    signUpConfig,
    // Render a sign out button once logged in
    includeGreetings: true,
});