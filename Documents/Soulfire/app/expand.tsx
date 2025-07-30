import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Fonts } from '../constants/Colors';
import SacredGeometry from '../components/SacredGeometry';

export default function Expand() {
  const router = useRouter();
  const [selectedPractice, setSelectedPractice] = useState<string | null>(null);

  const practices = [
    {
      id: 'pattern-disruption',
      title: 'Pattern Loop Ritual',
      description: 'Write down patterns caught mid-act and place in a symbolic jar; weekly, review and burn/transform one.',
      duration: '15-20 minutes',
      chakra: 'Sacral Chakra'
    },
    {
      id: 'neural-rewire',
      title: 'Neural Rewire Script',
      description: 'Write old beliefs → new beliefs in a daily affirmation chart, tracking consistency for 21 days.',
      duration: '10-15 minutes',
      chakra: 'Heart Chakra'
    }
  ];

  const keyThemes = [
    'Deconditioning & Nervous System Reset',
    'Emotional Release & Trauma Healing',
    'Energy Transformation & Sacred Expansion'
  ];

  return (
    <View style={styles.container}>
      <SacredGeometry />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.phaseTitle}>EXPAND</Text>
          <Text style={styles.phaseSubtitle}>Alchemical Amplification</Text>
          <Text style={styles.description}>
            Transmute revealed awareness into deep healing and expansion.
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
          <Text style={styles.sectionTitle}>Transformation Practices</Text>
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
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.navigation}>
          <TouchableOpacity style={styles.navButton} onPress={() => router.push('/reveal')}>
            <Text style={styles.navText}>← REVEAL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => router.push('/rise')}>
            <Text style={styles.navText}>RISE →</Text>
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
    marginBottom: 25,
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
    textAlign: 'center',
    paddingHorizontal: 10,
    fontFamily: Fonts.body,
  },
  practiceCard: {
    backgroundColor: Colors.mutedTerracotta,
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