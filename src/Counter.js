import React, {Component} from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {connect} from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <SafeAreaView>
        <CounterContainer>
          <TouchableOpacity onPress={this.props.increaseCounter}>
            <StyledText>Increase</StyledText>
          </TouchableOpacity>
          <StyledText>{this.props.counter}</StyledText>
          <TouchableOpacity onPress={this.props.decreaseCounter}>
            <StyledText>Decrease</StyledText>
          </TouchableOpacity>
        </CounterContainer>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {counter: state.counter};
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
    decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const CounterContainer = styled.View`
  flex-direction: row;
  width: 200;
  align-self: center;
  align-items: center;
  height: 100%;
  justify-content: space-around;
`;

const StyledText = styled.Text`
  font-size: 20;
`;
