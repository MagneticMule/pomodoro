import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import countDownTimer from './utils/countdown';

export default function App() {
  const [time, setTime] = useState(countDownTimer('2022-11-29'));
  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(countDownTimer('2022-11-29'));
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <View style={styles.container}>
      <Text>Time</Text>
      <Text>{time?.days}</Text>
      <Text>{time?.hours}</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
