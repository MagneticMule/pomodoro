import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const [workTime, setWorkTime] = useState(25);
const [breakTime, setBreakTime] = useState(5);

const Time = () => {
  return (
    <View style={styles.container}>
      <Text>Open </Text>
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Time;
