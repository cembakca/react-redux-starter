import React from 'react';
import { url } from 'src/router';
import Link from 'ui/common/Link';

import styles from './style.less';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        Main
        <Link to={url('login')} className={styles.goToLesson}>
          Login
        </Link>
      </div>
    );
  }
}
