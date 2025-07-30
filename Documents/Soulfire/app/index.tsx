import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Fonts } from '../constants/Colors';
import PhaseCard from '../components/PhaseCard';
import SacredGeometry from '../components/SacredGeometry';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.obsidianBlack} />
      <SacredGeometry />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.appTitle}>SoulFire</Text>
          <Text style={styles.subtitle}>Truth by Fire</Text>
          <Text style={styles.description}>
            You are the alchemist of your own becoming. This is your sacred container for transformation, where shadows become light and wounds become wisdom. You carry the flame within.
          </Text>
        </View>

        <View style={styles.phasesContainer}>
          <PhaseCard
            title="REVEAL"
            subtitle="Alchemical Awakening"
            description="You witness what lives in shadow. You name what has been silent. You feel what has been numb. This is your sacred reclamation."
            backgroundColor={Colors.mediumChampagne}
            onPress={() => router.push('/reveal')}
          />

          <PhaseCard
            title="EXPAND"
            subtitle="Alchemical Amplification"
            description="You transmute what was revealed into sacred expansion. You release what was stored. You trust the divine flow. This is your becoming."
            onPress={() => router.push('/expand')}
          />

          <PhaseCard
            title="RISE"
            subtitle="Alchemical Embodiment"
            description="You embody the wisdom earned through fire. You rise as the sovereign of your own life. You are the living prayer. This is your mastery."
            backgroundColor={Colors.goldenGlitter}
            onPress={() => router.push('/rise')}
          />
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity 
            style={styles.subscriptionButton}
            onPress={() => router.push('/subscription')}
          >
            <Text style={styles.subscriptionText}>Choose Your Path</Text>
          </TouchableOpacity>
          
          <View style={styles.manifestoContainer}>
            <Text style={styles.manifestoTitle}>The Sacred Flame Within</Text>
            <Text style={styles.manifestoText}>
              "You are whole, sister. You are remembering. This is the moment your soul already chose. You carry the flame within, and that liberation? It's your birthright."
            </Text>
          </View>
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
    flexGrow: 1,
    paddingTop: 60,
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  appTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.goldenGlitter,
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: Fonts.title,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.americanGold,
    textAlign: 'center',
    marginBottom: 20,
    fontStyle: 'italic',
    fontFamily: Fonts.heading,
  },
  description: {
    fontSize: 16,
    color: Colors.pureWhite,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
    fontFamily: Fonts.body,
  },
  phasesContainer: {
    flex: 1,
    paddingBottom: 20,
  },
  actionButtons: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  subscriptionButton: {
    backgroundColor: Colors.americanGold,
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    marginBottom: 30,
  },
  subscriptionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.obsidianBlack,
    fontFamily: Fonts.heading,
  },
  manifestoContainer: {
    backgroundColor: Colors.mutedPlum,
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
  },
  manifestoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.goldenGlitter,
    textAlign: 'center',
    marginBottom: 15,
    fontFamily: Fonts.heading,
  },
  manifestoText: {
    fontSize: 14,
    color: Colors.pureWhite,
    textAlign: 'center',
    lineHeight: 22,
    fontStyle: 'italic',
    fontFamily: Fonts.body,
  },
});