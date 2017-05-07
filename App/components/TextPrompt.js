import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

// styled component
const StyledInput = styled.TextInput`
  height: 28;
  marginTop: 5;
  padding: 0 5 0;
  backgroundColor: white;
  borderColor: gray;
  borderWidth: 1;
`;

export default class extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.prompt}:</Text>
        <StyledInput
          placeholder={this.props.prompt}
          autoCapitalize={this.props.autoCapitalize}
          autoCorrect={this.props.autoCorrect}
          autoFocus={this.props.autoFocus}
          maxLength={this.props.maxLength}
          secureTextEntry={this.props.secureTextEntry}
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}
