import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
// import Map from './assets/icons/map.svg';
import BottomNavigation from './BottomNavigation';
import TopBar from './TopBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topbar: {
    backgroundColor: '#fff',
    height: 65,
    // Note: only works on Android
    marginTop: StatusBar.currentHeight,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // marginRight: 16,
    // marginLeft: 16,
  },
  content: {
    flex: 1,
    backgroundColor: 'green',
  },
  bottomNavigation: {
    height: 65,
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topbar}>
        <TopBar />
      </View>
      <View style={styles.content}>
        <Text>Content</Text>
      </View>
      <View style={styles.bottomNavigation}>
        <BottomNavigation />
      </View>
    </SafeAreaView>
  );
}
