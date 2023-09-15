// src/components/Greeting.js
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text} from 'react-native';

const Greeting = () => {
  const {t} = useTranslation();

  return (
    <View>
      <Text>{t('greeting')}</Text>
    </View>
  );
};

export default Greeting;
