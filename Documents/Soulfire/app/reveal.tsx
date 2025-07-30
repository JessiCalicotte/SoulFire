import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Fonts } from '../constants/Colors';
import SacredGeometry from '../components/SacredGeometry';

export default function Reveal() {
  const router = useRouter();
  const [selectedPractice, setSelectedPractice] = useState<string | null>(null);

  const practices = [
    {
      id: 'shadow-mirror',
      title: 'Sacred Mirror Practice',
      description: 'Sit daily before a mirror, make eye contact, whisper unspoken truths, and write what surfaces.',
      duration: '10-15 minutes',
      chakra: 'Root Chakra'
    },
    {
      id: 'trigger-tracker',
      title: 'Trigger Tracker Grid',
      description: 'Log emotional triggers, their involvement, and what they reflect from within.',
      duration: '5-10 minutes',
      chakra: 'Solar Plexus'
    },
    {
      id: 'shadow-letter',
      title: 'Shadow Letter (Unsent)',
      description: 'Write a letter from your shadow self to your conscious self, detailing needs and what she is tired of pretending.',
      duration: '20-30 minutes',
      chakra: 'Root Chakra'
    },
    {
      id: 'archetype-mapping',
      title: 'Archetype Ally Mapping',
      description: 'Identify your dominant feminine archetype and its shadow side, tracking moments when one drives your reactions.',
      duration: '15-20 minutes',
      chakra: 'All Chakras'
    }
  ];

  const keyThemes = [
    'Self-Witnessing & Thought Awareness',
    'Shadow Integration & Mirror Principle',
    'Rooting into Truth & Wholeness',
    'Jungian Psychology & Archetypes',
    'Law of Awareness & Present Power'
  ];

  return (
    <View style={styles.container}>
      <SacredGeometry />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.phaseTitle}>REVEAL</Text>
          <Text style={styles.phaseSubtitle}>Alchemical Awakening</Text>
          <Text style={styles.description}>
            Courageously bring awareness to what is hidden, name what has been silent, and feel what has been numb.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Themes</Text>
          {keyThemes.map((theme, index) => (
            <View key={index} style={styles.themeItem}>
              <Text style={styles.themeText}>• {theme}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sacred Practices</Text>
          {practices.map((practice) => (
            <TouchableOpacity
              key={practice.id}
              style={[
                styles.practiceCard,
                selectedPractice === practice.id && styles.selectedPractice
              ]}
              onPress={() => setSelectedPractice(
                selectedPractice === practice.id ? null : practice.id
              )}
            >
              <Text style={styles.practiceTitle}>{practice.title}</Text>
              <Text style={styles.practiceChakra}>{practice.chakra} • {practice.duration}</Text>
              
              {selectedPractice === practice.id && (
                <View style={styles.practiceDetails}>
                  <Text style={styles.practiceDescription}>{practice.description}</Text>
                  <TouchableOpacity style={styles.startButton}>
                    <Text style={styles.startButtonText}>Begin Practice</Text>
                  </TouchableOpacity>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.navigation}>
          <TouchableOpacity style={styles.navButton} onPress={() => router.back()}>
            <Text style={styles.navText}>← Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => router.push('/expand')}>
            <Text style={styles.navText}>EXPAND →</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.obsidianBlack,
  },
  scrollContent: {
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  phaseTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.goldenGlitter,
    textAlign: 'center',
    marginBottom: 5,
    fontFamily: Fonts.title,
  },
  phaseSubtitle: {
    fontSize: 18,
    color: Colors.americanGold,
    textAlign: 'center',
    marginBottom: 15,
    fontStyle: 'italic',
    fontFamily: Fonts.heading,
  },
  description: {
    fontSize: 16,
    color: Colors.pureWhite,
    textAlign: 'center',
    lineHeight: 24,
    fontFamily: Fonts.body,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.americanGold,
    textAlign: 'center',
    marginBottom: 15,
    fontFamily: Fonts.heading,
  },
  themeItem: {
    marginBottom: 8,
  },
  themeText: {
    fontSize: 14,
    color: Colors.mediumChampagne,
    paddingLeft: 10,
    fontFamily: Fonts.body,
  },
  practiceCard: {
    backgroundColor: Colors.mutedPlum,
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
  },
  selectedPractice: {
    backgroundColor: Colors.americanGold,
  },
  practiceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.pureWhite,
    marginBottom: 5,
    fontFamily: Fonts.heading,
  },
  practiceChakra: {
    fontSize: 12,
    color: Colors.mediumChampagne,
    fontFamily: Fonts.body,
  },
  practiceDetails: {
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: Colors.mediumChampagne,
  },
  practiceDescription: {
    fontSize: 14,
    color: Colors.obsidianBlack,
    lineHeight: 20,
    marginBottom: 15,
    fontFamily: Fonts.body,
  },
  startButton: {
    backgroundColor: Colors.obsidianBlack,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  startButtonText: {
    color: Colors.goldenGlitter,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: Fonts.heading,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  navButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  navText: {
    color: Colors.americanGold,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: Fonts.heading,
  },
});