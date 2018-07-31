import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const ModalBody = (props) => {
  const {
    className,
    cssModule,
    ...attributes } = props;
  const classes = mapToCssModules(classNames(
    className,
    'modal-body'
  ), cssModule);

  return (
    <div {...attributes} className={classes} />
  );
};

ModalBody.propTypes = propTypes;

export default ModalBody;
