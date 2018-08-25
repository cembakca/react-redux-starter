import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './style.less';


export default function Button(props) {
  const classes = cx(styles.root, props.className, {
    [styles.success]: props.success,
    [styles.error]: props.error
  });

  return (
    <button
      className={classes}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}


Button.propTypes = {
  success: PropTypes.bool,
  error: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any
};


Button.defaultProps = {
  success: false,
  error: false,
  className: '',
  onClick() { },
  children: undefined
};
