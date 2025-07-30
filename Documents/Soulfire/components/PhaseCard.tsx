import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../constants/Colors';

interface PhaseCardProps {
  title: string;
  subtitle: string;
  description: string;
  onPress: () => void;
  backgroundColor?: string;
}

export default function PhaseCard({ 
  title, 
  subtitle, 
  description, 
  onPress, 
  backgroundColor 
}: PhaseCardProps) {
  return (
    <TouchableOpacity style={[styles.card, { backgroundColor: backgroundColor || Colors.mediumChampagne }]} onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 15,
    padding: 20,
    shadowColor: Colors.obsidianBlack,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.obsidianBlack,
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: Fonts.title,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.mutedPlum,
    textAlign: 'center',
    marginBottom: 12,
    fontStyle: 'italic',
    fontFamily: Fonts.heading,
  },
  description: {
    fontSize: 14,
    color: Colors.obsidianBlack,
    textAlign: 'center',
    lineHeight: 20,
    fontFamily: Fonts.body,
  },
});