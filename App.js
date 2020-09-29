/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
'use strict';

import React from 'react';
import {StyleSheet, Text} from 'react-native';

function App() {
  return React.createElement(
    Text,
    {style: styles.description},
    'Search for houses to buy!',
  );
}

export default App;

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
});
