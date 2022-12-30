import { Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';

type HomeScreenProps = {
  navigateToProfile(): void;
};

export const HomeScreen = (props: HomeScreenProps) => {
  const { navigateToProfile } = props;

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.buttonContainer} onPress={navigateToProfile}>
        <Text style={styles.buttonText}>{'Open profile'}</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
  },
  buttonContainer: {
    backgroundColor: 'black',
    borderRadius: 16,
    padding: 16,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
});
