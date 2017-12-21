import React from 'react'
import PropTypes from 'prop-types'

export default class IconContainer extends React.PureComponent {
  static propTypes = {
    iconConstructor: PropTypes.func,
  }
  render() {
    const {
      iconConstructor,
      ...passedProps
    } = this.props
    return React.createElement(iconConstructor, passedProps)
  }
}
