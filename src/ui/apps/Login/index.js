import React from 'react';
import { url } from 'src/router';
import Link from 'ui/common/Link';

import styles from './style.less';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        Login
        <Link to={url('home')} className={styles.goToLesson}>
          Home
        </Link>
      </div>
    );
  }
}
