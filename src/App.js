import React from 'react';
import { Provider } from 'react-redux';

import styles from 'ui/less/main.less';
import 'ui/less/ckeditor.css';

import configureStore from './data/configureStore';
import router from './router';

const store = configureStore(undefined);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { route: null };
  }

  componentDidMount() {
    router((component) => {
      this.setState({ route: component });
    });
  }

  render() {
    return (
      <Provider store={store}>
        <div className={styles.appWrapper}>
          {this.state.route && this.state.route}
        </div>
      </Provider>
    );
  }
}
