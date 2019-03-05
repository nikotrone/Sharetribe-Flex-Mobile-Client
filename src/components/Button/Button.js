import React from 'react';
import { View, Text } from 'react-native';
import { Touchable } from '..';
import T from 'prop-types';
import s from './styles';
import { colors } from '../../styles';

const Button = ({ children, primary, containerStyle, disable }) => (
  <View style={containerStyle}>
    <Touchable
      disable={!disable}
      rippleColor={
        primary
          ? colors.button.rippleColorPrimary
          : colors.button.rippleColor
      }
    >
      <View
        style={[
          s.button,
          s.view,
          primary && s.primaryView,
          disable && s.disable,
        ]}
      >
        <Text style={[s.text, primary && s.primaryText]}>
          {children}
        </Text>
      </View>
    </Touchable>
  </View>
);

Button.propTypes = {
  children: T.any,
  primary: T.bool,
  containerStyle: T.any,
  disable: T.bool,
};

export default Button;