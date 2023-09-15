// App.js
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next'; // Import initReactI18next
import Greeting from './src/components/Greeting';
import LanguageSelector from './src/components/languageSelector';


//1. define language jsons with keys
//2. initialize i18next with lang resources above, def lang , fallback lang
//3. provide i18next as provider for app using i18next provider 
//4. useTranslation will give t method , and t(key) can be used for lable text
//5. i18next's changeLanguage method can be used to change languages at run time

i18next
  .use(initReactI18next) 
  .init({
    fallbackLng:'en',
    lng: 'en',
    resources: {
      en: {
        translation: require('./src/translations/en.json'),
      },
      es: {
        translation: require('./src/translations/es.json'),
      },
    },
    
  });

const App = () => {
  return (
    <I18nextProvider i18n={i18next}>
      <SafeAreaView style={{alignItems:'center',justifyContent:'center',flex:1,gap:8,backgroundColor:'black'}}>
        <LanguageSelector />
        <Greeting />
      </SafeAreaView>
    </I18nextProvider>
  );
};

export default App;
