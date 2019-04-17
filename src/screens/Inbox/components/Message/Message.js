import React from 'react';
import T from 'prop-types';
import { View, Image } from 'react-native';

import s from './styles';
import { Text, Touchable } from '../../../../components';
import { NavigationService } from '../../../../services';

const messageImage = require('../../../../assets/png/message_image.png');

const Message = () => (
  <Touchable
    style={s.container}
    onPress={() => NavigationService.navigateTo('Chat')}
  >
    <View style={s.photoContainer}>
      <Image source={messageImage} style={s.image} />
      <View style={s.requestContainer}>
        <Text orange style={s.request} bold xxsmallSize>
          Request
        </Text>
      </View>
    </View>
    <View style={s.messageMainInfo}>
      <View style={s.headerMessage}>
        <Text bold>Ola Kori</Text>
        <Text lightGray xsmallSize>
          10:23
        </Text>
      </View>
      <View style={s.text}>
        <Text ellipsizeMode="tail" numberOfLines={1} gray>
          Pioneer XDJ-RX2 All-in-One Pioneer XDJ-RX2 All-in-One
          Pioneer XDJ-RX2 All-in-One
        </Text>
      </View>
      <View style={s.rentInfo}>
        <Text xxsmallSize>08/12/2018 — 09/12/2018</Text>
      </View>
    </View>
  </Touchable>
);

Message.propTypes = {};

export default Message;