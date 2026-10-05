import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import MoodButton from './components/MoodButton';

export default function App() {
  const [counts, setCounts] = useState({
    happy: 0,
    sad: 0,
    tired: 0,
    excited: 0,
  });

  const [selectedMood, setSelectedMood] = useState(null);

  function handleMoodPress(mood) {
    setCounts({
      ...counts,
      [mood]: counts[mood] + 1,
    });

    setSelectedMood(mood);
  }

  function resetCounts() {
    setCounts({
      happy: 0,
      sad: 0,
      tired: 0,
      excited: 0,
    });

    setSelectedMood(null);
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        😊 Mood Tracker
      </Text>

      <Text style={styles.subtitle}>
        How are you feeling today?
      </Text>

      <View style={styles.buttonsContainer}>

        <MoodButton
          emoji="😊"
          label="Happy"
          onPress={() => handleMoodPress('happy')}
          selected={selectedMood === 'happy'}
        />

        <MoodButton
          emoji="😢"
          label="Sad"
          onPress={() => handleMoodPress('sad')}
          selected={selectedMood === 'sad'}
        />

        <MoodButton
          emoji="😴"
          label="Tired"
          onPress={() => handleMoodPress('tired')}
          selected={selectedMood === 'tired'}
        />

        <MoodButton
          emoji="🤩"
          label="Excited"
          onPress={() => handleMoodPress('excited')}
          selected={selectedMood === 'excited'}
        />

      </View>

      <Text style={styles.sectionTitle}>
        Your Mood History
      </Text>

      <View style={styles.countsContainer}>

        <Text style={styles.count}>
          😊 Happy: {counts.happy}
        </Text>

        <Text style={styles.count}>
          😢 Sad: {counts.sad}
        </Text>

        <Text style={styles.count}>
          😴 Tired: {counts.tired}
        </Text>

        <Text style={styles.count}>
          🤩 Excited: {counts.excited}
        </Text>

      </View>

      <Pressable
        style={styles.resetButton}
        onPress={resetCounts}
      >
        <Text style={styles.resetText}>
          Reset All
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F7',
    padding: 24,
    justifyContent: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },

  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    color: '#777',
    marginTop: 8,
    marginBottom: 25,
  },

  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 12,
  },

  countsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
  },

  count: {
    fontSize: 18,
    marginVertical: 5,
  },

  resetButton: {
    marginTop: 20,
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },

  resetText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});