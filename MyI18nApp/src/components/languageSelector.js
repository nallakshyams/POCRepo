// src/components/LanguageSelector.js
import React from 'react';
import {View, Button} from 'react-native';
import i18next from 'i18next';
const LanguageSelector = () => {
  const changeLanguage = language => {
    i18next.changeLanguage(language);
  };

  return (
    <View style={{gap: 4}}>
      <Button title="English" onPress={() => changeLanguage('en')} />
      <Button title="Spanish" onPress={() => changeLanguage('es')} />
    </View>
  );
};

export default LanguageSelector;
