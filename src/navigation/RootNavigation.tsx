import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CaseStudyScreen from 'screens/case-study-list/CaseStudyScreen';
import CaseStudyDetails from 'screens/case-study-details/CaseStudyDetails';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {stylesApp} from 'styles/app.styles';
import {pages, ParamList} from './pages';

const Stack = createNativeStackNavigator<ParamList>();

const Navigation: React.FC = ({}) => {
  return (
    // <SafeAreaProvider>
      <Stack.Navigator>
        <Stack.Screen
          name={pages.CASE_STUDIES}
          options={{
            headerTitle: 'KIN + CARTA',
            headerTitleStyle: stylesApp.headerTitle,
          }}
          component={CaseStudyScreen}
        />
        <Stack.Screen
          name={pages.CASE_STUDY_DETAILS}
          options={{
            headerTitleStyle: stylesApp.headerTitle,
            headerBackTitle: 'Back',
          }}
          component={CaseStudyDetails}
        />
      </Stack.Navigator>
    // </SafeAreaProvider>
  );
};

export default Navigation;
