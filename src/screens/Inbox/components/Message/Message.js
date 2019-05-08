import React from 'react';
import T from 'prop-types';
import { View, Image } from 'react-native';
import R from 'ramda';

import {
  getEndDateByStart,
  formatedDate,
  getHourAndMinutes,
} from '../../../../utils/dates';

import s from './styles';
import {
  Text,
  Touchable,
  ShadowContainer,
} from '../../../../components';
import { NavigationService } from '../../../../services';
import i18n from '../../../../i18n';

const messageImage = require('../../../../assets/png/message_image.png');

function Message({ transaction }) {
  const isRent = (value) => {
    switch (value) {
      case 'enquire':
        return (
          <Text gray style={s.request} bold xxsmallSize>
            {i18n.t('inbox.chat')}
          </Text>
        );
      case 'request':
        return (
          <Text orange style={s.request} bold xxsmallSize>
            {i18n.t('inbox.request')}
          </Text>
        );
      case 'accept':
        return (
          <Text green style={s.request} bold xxsmallSize>
            {i18n.t('inbox.accepted')}
          </Text>
        );
      case 'complete':
        return (
          <Text green style={s.request} bold xxsmallSize>
            {i18n.t('inbox.delivered')}
          </Text>
        );
      case 'decline':
        return (
          <Text red style={s.request} bold xxsmallSize>
            {i18n.t('inbox.decline')}
          </Text>
        );
      default:
        return <Text style={s.request} bold xxsmallSize />;
    }
  };
  const createdTime = getHourAndMinutes(
    transaction.lastTransitionedAt,
  );
  return (
    <ShadowContainer>
      <Touchable
        style={s.container}
        onPress={() =>
          NavigationService.navigateTo('Chat', { transaction })
        }
      >
        <View style={s.photoContainer}>
          <Image
            source={{
              uri: R.pathOr(
                messageImage,
                [
                  'relationships',
                  'listing',
                  'relationships',
                  'getImages',
                  [0],
                  'variants',
                  'default',
                  'url',
                ],
                transaction,
              ),
            }}
            style={s.image}
          />
          <View style={s.requestContainer}>
            {isRent(transaction.lastTransition.substring(11))}
          </View>
        </View>
        <View style={s.messageMainInfo}>
          <View style={s.headerMessage}>
            <Text bold>
              {R.pathOr(
                '',
                [
                  'relationships',
                  'listing',
                  'relationships',
                  'author',
                  'profile',
                  'displayName',
                ],
                transaction,
              )}
            </Text>
            <Text lightGray xsmallSize>
              {createdTime}
            </Text>
          </View>
          <View style={s.text}>
            <Text
              ellipsizeMode="tail"
              mediumSize
              numberOfLines={1}
              gray
            >
              {R.pathOr(
                '',
                ['relationships', 'listing', 'description'],
                transaction,
              )}
            </Text>
          </View>
          <View style={s.rentInfo}>
            {/* <Text xxsmallSize>{timeBooking}</Text> */}
          </View>
        </View>
      </Touchable>
    </ShadowContainer>
  );
}

Message.propTypes = {
  transaction: T.object,
};

export default Message;
