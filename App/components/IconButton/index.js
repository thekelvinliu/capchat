import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';
import style from './style';

export default class IconButton extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress} underlayColor="transparent" >
        <this.props.set name={this.props.name} size={20} style={style.icon} />
      </TouchableHighlight>
    );
  }
}
