import { StyleSheet, Text, View } from 'react-native';
import { useIsFocused } from '@react-navigation/core';
import { StatusBar } from 'react-native';

const FocusedStatusBar = props => {
  const IsFocused = useIsFocused();

  return IsFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;

const styles = StyleSheet.create({});
