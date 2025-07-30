import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/Colors';
import SacredGeometry from '../components/SacredGeometry';

export default function Rise() {
  const router = useRouter();
  const [selectedPractice, setSelectedPractice] = useState<string | null>(null);

  const practices = [
    {
      id: 'ego-release',
      title: 'Ego Release Ritual',
      description: 'Write a letter from your ego about what it fears losing, then burn and bury the ashes to track emotional shifts.',
      duration: '30-45 minutes',
      chakra: 'Crown Chakra'
    },
    {
      id: 'sacred-pillar',
      title: 'Sacred Pillar Body Practice',
      description: 'Stand in Mountain Pose, breathe crown to root; journal what this alignment activated.',
      duration: '15-20 minutes',
      chakra: 'All Chakras'
    },
    {
      id: 'living-prayer',
      title: 'Living Prayer Practice',
      description: 'Write a sentence starting "My life is a prayer for..."; speak aloud with hands over heart/navel.',
      duration: '10-15 minutes',
      chakra: 'Heart & Crown'
    },
    {
      id: 'quantum-embodiment',
      title: 'Magnetism Pulse Practice',
      description: 'Stand in stillness, speak truth aloud, track felt pulse through chakras; journal expansion/resistance.',
      duration: '15-25 minutes',
      chakra: 'Solar Plexus'
    }
  ];

  const embodimentPrinciples = [
    'Transcendence & Divine Connection',
    'Congruence & Authentic Alignment',
    'True Identity & Unshakable Sovereignty',
    'Conscious Creation & Manifestation',
    'Ancestral & Karmic Cycle Breaking',
    'Quantum Living & Biology Integration',
    'Divine Embodiment as Living Prayer'
  ];

  const quantumConcepts = [
    'Biophotons - Light emission from cells',
    'Circadian Rhythms - Natural time cycles',
    'Quantum Tunneling - Energy transformation',
    'Magnetic Fields - Energetic coherence',
    'Redox Signaling - Cellular communication',
    'Water as Liquid Crystal - Consciousness medium'
  ];

  return (
    <View style={styles.container}>
      <SacredGeometry />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.phaseTitle}>RISE</Text>
          <Text style={styles.phaseSubtitle}>Alchemical Embodiment</Text>
          <Text style={styles.description}>
            Integrate all learned wisdom and step fully into embodied power as a warrior of truth.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Embodiment Principles</Text>
          {embodimentPrinciples.map((principle, index) => (
            <View key={index} style={styles.principleItem}>
              <Text style={styles.principleText}>• {principle}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quantum Biology Integration</Text>
          <Text style={styles.sectionSubtitle}>Your Body as a Quantum Instrument</Text>
          {quantumConcepts.map((concept, index) => (
            <View key={index} style={styles.conceptItem}>
              <Text style={styles.conceptText}>{index + 1}. {concept}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mastery Practices</Text>
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

        <View style={styles.completionSection}>
          <Text style={styles.completionTitle}>The Living Flame</Text>
          <Text style={styles.completionText}>
            You have become the living flame, transforming pain into power, fear into fuel, and wounds into wisdom. 
            You now radiate unshakable sovereignty and manifest from authentic truth.
          </Text>
        </View>

        <View style={styles.navigation}>
          <TouchableOpacity style={styles.navButton} onPress={() => router.push('/expand')}>
            <Text style={styles.navText}>← EXPAND</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => router.back()}>
            <Text style={styles.navText}>Home</Text>
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
  },
  phaseSubtitle: {
    fontSize: 18,
    color: Colors.americanGold,
    textAlign: 'center',
    marginBottom: 15,
    fontStyle: 'italic',
  },
  description: {
    fontSize: 16,
    color: Colors.pureWhite,
    textAlign: 'center',
    lineHeight: 24,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.americanGold,
    textAlign: 'center',
    marginBottom: 10,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: Colors.mediumChampagne,
    textAlign: 'center',
    marginBottom: 15,
    fontStyle: 'italic',
  },
  principleItem: {
    marginBottom: 8,
  },
  principleText: {
    fontSize: 14,
    color: Colors.mediumChampagne,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  conceptItem: {
    marginBottom: 6,
  },
  conceptText: {
    fontSize: 13,
    color: Colors.khaki,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  practiceCard: {
    backgroundColor: Colors.burntOrange,
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
  },
  selectedPractice: {
    backgroundColor: Colors.goldenGlitter,
  },
  practiceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.pureWhite,
    textAlign: 'center',
    marginBottom: 5,
  },
  practiceChakra: {
    fontSize: 12,
    color: Colors.mediumChampagne,
    textAlign: 'center',
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
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 15,
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
  },
  completionSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
    alignItems: 'center',
  },
  completionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.goldenGlitter,
    textAlign: 'center',
    marginBottom: 15,
  },
  completionText: {
    fontSize: 16,
    color: Colors.americanGold,
    textAlign: 'center',
    lineHeight: 24,
    fontStyle: 'italic',
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
    textAlign: 'center',
  },
});