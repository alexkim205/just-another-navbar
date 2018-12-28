'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JustAnotherNavBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  font-family: Montserrat;\n  font-weight: bold;\n  font-size: 1.1em;\n  width: 100%;\n  background-color: ', ';\n  display: flex;\n  flex-direction: row;\n  padding: 0;\n  // height: 70px;\n  \n  ', '\n'], ['\n  font-family: Montserrat;\n  font-weight: bold;\n  font-size: 1.1em;\n  width: 100%;\n  background-color: ', ';\n  display: flex;\n  flex-direction: row;\n  padding: 0;\n  // height: 70px;\n  \n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    flex-wrap: wrap;\n  '], ['\n    flex-wrap: wrap;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n  flex: 1;\n'], ['\n  flex: 1;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  \n  a {\n    display: block;\n    text-decoration: none;\n    color: white;\n  }\n  \n  &.title {\n    text-align: left;\n    align-items: flex-start;\n    padding: 1.2em 1.5em;\n    // position: absolute;\n    >.large-title {\n      display: block;\n      ', '\n    }\n    \n    >.small-title {\n      display: none;\n      ', '\n    }\n  }\n\n  &.item {\n    padding: 1.2em 1em;\n    ', '\n  }\n'], ['\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  \n  a {\n    display: block;\n    text-decoration: none;\n    color: white;\n  }\n  \n  &.title {\n    text-align: left;\n    align-items: flex-start;\n    padding: 1.2em 1.5em;\n    // position: absolute;\n    >.large-title {\n      display: block;\n      ', '\n    }\n    \n    >.small-title {\n      display: none;\n      ', '\n    }\n  }\n\n  &.item {\n    padding: 1.2em 1em;\n    ', '\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n        display: none;\n      '], ['\n        display: none;\n      ']),
    _templateObject6 = _taggedTemplateLiteral(['\n        display: block;\n      '], ['\n        display: block;\n      ']),
    _templateObject7 = _taggedTemplateLiteral(['\n      display: none;\n    '], ['\n      display: none;\n    ']),
    _templateObject8 = _taggedTemplateLiteral(['\n  text-align: left;\n  justify-content: center;\n  cursor: pointer;\n'], ['\n  text-align: left;\n  justify-content: center;\n  cursor: pointer;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  display: none;\n  margin: auto 1em;\n  ', '\n'], ['\n  display: none;\n  margin: auto 1em;\n  ', '\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n    display: block;\n  '], ['\n    display: block;\n  ']),
    _templateObject11 = _taggedTemplateLiteral(['\n  margin: 0.15em 0 0.8em 0;\n'], ['\n  margin: 0.15em 0 0.8em 0;\n']),
    _templateObject12 = _taggedTemplateLiteral(['\n  padding: 1.5em 1.5em;\n  text-align: center;\n  // align-items: center;\n  display: flex;\n  flex-direction: column;\n  background-color: ', ';\n  z-index: 1;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 50vw;\n  height: 100vh;\n  transition: transform .3s cubic-bezier(0, .52, 0, 1);\n\n  ', '\n  \n  ', '\n  \n  // default\n  &.hide {\n    transform: translate3d(110vw, 0, 0);\n  }\n  &.show {\n    transform: translate3d(50vw, 0, 0);\n    ', '\n    ', '\n  }\n'], ['\n  padding: 1.5em 1.5em;\n  text-align: center;\n  // align-items: center;\n  display: flex;\n  flex-direction: column;\n  background-color: ', ';\n  z-index: 1;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 50vw;\n  height: 100vh;\n  transition: transform .3s cubic-bezier(0, .52, 0, 1);\n\n  ', '\n  \n  ', '\n  \n  // default\n  &.hide {\n    transform: translate3d(110vw, 0, 0);\n  }\n  &.show {\n    transform: translate3d(50vw, 0, 0);\n    ', '\n    ', '\n  }\n']),
    _templateObject13 = _taggedTemplateLiteral(['\n    width: 65vw;\n  '], ['\n    width: 65vw;\n  ']),
    _templateObject14 = _taggedTemplateLiteral(['\n    width: 100vw;\n  '], ['\n    width: 100vw;\n  ']),
    _templateObject15 = _taggedTemplateLiteral(['\n      transform: translate3d(35vw, 0, 0);\n    '], ['\n      transform: translate3d(35vw, 0, 0);\n    ']),
    _templateObject16 = _taggedTemplateLiteral(['\n      transform: translate3d(0vw, 0, 0);\n    '], ['\n      transform: translate3d(0vw, 0, 0);\n    ']),
    _templateObject17 = _taggedTemplateLiteral(['\n  background-color: ', ';\n  padding: 0.7em 2em;\n  margin: 0.35em 0;\n  \n  a {\n    color: ', ';\n    text-decoration: none;\n  }\n'], ['\n  background-color: ', ';\n  padding: 0.7em 2em;\n  margin: 0.35em 0;\n  \n  a {\n    color: ', ';\n    text-decoration: none;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _helpers = require('../_helpers');

var _grommetIcons = require('grommet-icons');

var _styles = require('../_styles');

require('../_styles/base.css');

require('../_styles/font.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavBarWrapper = _styledComponents2.default.div(_templateObject, _styles.theme.global.colors.brand, _helpers.media.tablet(_templateObject2));

var NavBarGrow = _styledComponents2.default.div(_templateObject3);

var NavBarItem = _styledComponents2.default.div(_templateObject4, _helpers.media.tablet(_templateObject5), _helpers.media.tablet(_templateObject6), _helpers.media.tablet(_templateObject7));

var IconItem = _styledComponents2.default.div(_templateObject8);

var NavBarIconItem = (0, _styledComponents2.default)(IconItem)(_templateObject9, _helpers.media.tablet(_templateObject10));

var SideBarIconItem = (0, _styledComponents2.default)(IconItem)(_templateObject11);

var SideBar = _styledComponents2.default.div(_templateObject12, _styles.theme.global.colors.darkAccent, _helpers.media.mablet(_templateObject13), _helpers.media.lMobile(_templateObject14), _helpers.media.mablet(_templateObject15), _helpers.media.lMobile(_templateObject16));

var SideBarItem = _styledComponents2.default.div(_templateObject17, _styles.theme.global.colors.accent, _styles.theme.global.colors.text.dark);

var JustAnotherNavBar = function (_React$Component) {
  _inherits(JustAnotherNavBar, _React$Component);

  function JustAnotherNavBar(props) {
    _classCallCheck(this, JustAnotherNavBar);

    var _this = _possibleConstructorReturn(this, (JustAnotherNavBar.__proto__ || Object.getPrototypeOf(JustAnotherNavBar)).call(this, props));

    _this.state = {
      sideBarOpen: false
    };

    _this.handleNavBar = _this.handleNavBar.bind(_this);
    return _this;
  }

  _createClass(JustAnotherNavBar, [{
    key: 'handleNavBar',
    value: function handleNavBar(e) {
      this.setState({ sideBarOpen: !this.state.sideBarOpen });
      console.log(this.state.sideBarOpen);

      e.stopPropagation();
    }
  }, {
    key: 'render',
    value: function render() {
      var sideBarOpen = this.state.sideBarOpen;


      return _react2.default.createElement(
        NavBarWrapper,
        null,
        _react2.default.createElement(
          NavBarItem,
          { className: 'title' },
          _react2.default.createElement(
            'a',
            { href: '#', className: 'large-title' },
            'Just Another NavBar'
          ),
          _react2.default.createElement(
            'a',
            { href: '#', className: 'small-title' },
            'J.A.N.B.'
          )
        ),
        _react2.default.createElement(NavBarGrow, null),
        _react2.default.createElement(
          NavBarItem,
          { className: 'item' },
          _react2.default.createElement(
            'a',
            { href: '#' },
            'NavBar Item 1'
          )
        ),
        _react2.default.createElement(
          NavBarItem,
          { className: 'item' },
          _react2.default.createElement(
            'a',
            { href: '#' },
            'NavBar Item 2'
          )
        ),
        _react2.default.createElement(
          NavBarItem,
          { className: 'item' },
          _react2.default.createElement(
            'a',
            { href: '#' },
            'NavBar Item 3'
          )
        ),
        _react2.default.createElement(
          NavBarIconItem,
          { onClick: this.handleNavBar },
          _react2.default.createElement(_grommetIcons.Menu, { color: 'white', size: 'medium' })
        ),
        _react2.default.createElement(
          SideBar,
          { className: sideBarOpen ? 'show' : 'hide' },
          _react2.default.createElement(
            SideBarIconItem,
            null,
            _react2.default.createElement(_grommetIcons.Close, { color: 'white', size: 'medium', onClick: this.handleNavBar })
          ),
          _react2.default.createElement(
            SideBarItem,
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              'Sidebar Item 1'
            )
          ),
          _react2.default.createElement(
            SideBarItem,
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              'Sidebar Item 2'
            )
          ),
          _react2.default.createElement(
            SideBarItem,
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              'Sidebar Item 3'
            )
          )
        )
      );
    }
  }]);

  return JustAnotherNavBar;
}(_react2.default.Component);

exports.JustAnotherNavBar = JustAnotherNavBar;