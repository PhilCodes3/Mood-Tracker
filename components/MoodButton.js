import { Pressable, Text, StyleSheet } from 'react-native';

export default function MoodButton({ emoji, label, onPress, selected }) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        selected && styles.selectedButton,
      ]}
    >
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 150,
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    margin: 6,
    borderWidth: 2,
    borderColor: '#E5E5E5',
  },

  selectedButton: {
    borderColor: '#FF5C8A',
    transform: [{ scale: 1.05 }],
  },

  emoji: {
    fontSize: 36,
    marginBottom: 8,
  },

  label: {
    fontSize: 17,
    fontWeight: '600',
  },
});