import React, { Component } from 'react';
import {S3Album} from 'aws-amplify-react';

const padding = n => {
    return n > 9 ? n : '0' + n;
}

const today = () => {
    const dt = new Date();
    return [
        dt.getDate(),
        padding(dt.getMonth() + 1),
        padding(dt.getFullYear())
    ].join('-');
}

console.log(today());

const album_path = user_id => {
  return user_id + '/' + today() + '/';
}

class Home extends Component {
  render() {
      const {user} = this.props;
      console.log(user);
    return (
    <div>
      <h1>Home</h1>
            <p>
                You are signed in as
                <span font="italic">{user}</span>
            </p>
    </div>
    )
  }
}

export default Home;