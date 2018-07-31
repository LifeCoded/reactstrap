'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  color: _propTypes2.default.string,
  pill: _propTypes2.default.bool,
  tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object
};

var defaultProps = {
  color: 'default',
  pill: false,
  tag: 'span'
};

var Tag = function Tag(props) {
  var className = props.className,
      cssModule = props.cssModule,
      color = props.color,
      pill = props.pill,
      Component = props.tag,
      attributes = _objectWithoutProperties(props, ['className', 'cssModule', 'color', 'pill', 'tag']);

  var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, 'tag', 'tag-' + color, pill ? 'tag-pill' : false), cssModule);

  return _react2.default.createElement(Component, _extends({}, attributes, { className: classes }));
};

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;

exports.default = Tag;