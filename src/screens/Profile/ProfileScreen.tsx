import { SafeAreaView, StyleSheet, View } from 'react-native';

export const ProfileScreen = () => {
  const arr = new Array(10).fill(0);

  return (
    <SafeAreaView style={styles.container}>
      {arr.map(() => (
        <View style={styles.square} />
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 16,
    gap: 10,
  },
  square: {
    backgroundColor: 'gray',
    height: 100,
    width: 100,
  },
});
