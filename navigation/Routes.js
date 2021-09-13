import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './AuthStack';

const Routes = () => {
  const [initializing, setInitializing] = useState(true);

  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default Routes;