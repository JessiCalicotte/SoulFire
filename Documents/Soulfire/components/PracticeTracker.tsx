import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Colors } from '../constants/Colors';

interface PracticeTrackerProps {
  practiceName: string;
  onComplete: (reflection: string) => void;
}

export default function PracticeTracker({ practiceName, onComplete }: PracticeTrackerProps) {
  const [isActive, setIsActive] = useState(false);
  const [reflection, setReflection] = useState('');
  const [timeSpent, setTimeSpent] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const startPractice = () => {
    setIsActive(true);
    const startTime = Date.now();
    
    // Simple timer simulation
    const interval = setInterval(() => {
      setTimeSpent(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    // Auto-stop after reasonable time or when user completes
    setTimeout(() => {
      clearInterval(interval);
      if (isActive) {
        setIsActive(false);
      }
    }, 1800000); // 30 minutes max
  };

  const completePractice = () => {
    setIsActive(false);
    setIsCompleted(true);
    onComplete(reflection);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.practiceTitle}>{practiceName}</Text>
      
      {!isActive && !isCompleted && (
        <TouchableOpacity style={styles.startButton} onPress={startPractice}>
          <Text style={styles.startButtonText}>Begin Sacred Practice</Text>
        </TouchableOpacity>
      )}

      {isActive && (
        <View style={styles.activeContainer}>
          <Text style={styles.timerText}>Time: {formatTime(timeSpent)}</Text>
          <Text style={styles.guidanceText}>
            Breathe deeply and allow yourself to be present with this practice. 
            Trust your inner wisdom to guide you.
          </Text>
          
          <TextInput
            style={styles.reflectionInput}
            placeholder="What insights are arising? (Optional)"
            placeholderTextColor={Colors.mutedSlateBlue}
            value={reflection}
            onChangeText={setReflection}
            multiline
            numberOfLines={3}
          />
          
          <TouchableOpacity style={styles.completeButton} onPress={completePractice}>
            <Text style={styles.completeButtonText}>Complete Practice</Text>
          </TouchableOpacity>
        </View>
      )}

      {isCompleted && (
        <View style={styles.completedContainer}>
          <Text style={styles.completedText}>✨ Practice Completed</Text>
          <Text style={styles.completedTime}>Duration: {formatTime(timeSpent)}</Text>
          {reflection && (
            <View style={styles.reflectionContainer}>
              <Text style={styles.reflectionLabel}>Your Reflection:</Text>
              <Text style={styles.reflectionText}>{reflection}</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.mutedPlum,
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
  },
  practiceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.goldenGlitter,
    textAlign: 'center',
    marginBottom: 15,
  },
  startButton: {
    backgroundColor: Colors.americanGold,
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  startButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.obsidianBlack,
  },
  activeContainer: {
    alignItems: 'center',
  },
  timerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.goldenGlitter,
    marginBottom: 15,
  },
  guidanceText: {
    fontSize: 14,
    color: Colors.pureWhite,
    textAlign: 'center',
    marginBottom: 20,
    fontStyle: 'italic',
    lineHeight: 20,
  },
  reflectionInput: {
    backgroundColor: Colors.pureWhite,
    borderRadius: 10,
    padding: 15,
    width: '100%',
    minHeight: 80,
    marginBottom: 15,
    fontSize: 14,
    textAlignVertical: 'top',
  },
  completeButton: {
    backgroundColor: Colors.burntOrange,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  completeButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.pureWhite,
  },
  completedContainer: {
    alignItems: 'center',
  },
  completedText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.goldenGlitter,
    marginBottom: 10,
  },
  completedTime: {
    fontSize: 14,
    color: Colors.americanGold,
    marginBottom: 15,
  },
  reflectionContainer: {
    width: '100%',
    backgroundColor: Colors.obsidianBlack,
    borderRadius: 10,
    padding: 15,
  },
  reflectionLabel: {
    fontSize: 12,
    color: Colors.americanGold,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  reflectionText: {
    fontSize: 14,
    color: Colors.pureWhite,
    lineHeight: 20,
  },
});