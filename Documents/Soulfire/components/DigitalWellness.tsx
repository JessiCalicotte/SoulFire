import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

const Colors = {
  background: '#000000',
  surface: '#1a1a1a',
  primary: '#FFD700',
  text: '#FFFFFF',
  accent: '#40E0D0'
};

interface DigitalWellnessProps {
  onClose?: () => void;
}

export default function DigitalWellness({ onClose }: DigitalWellnessProps) {
  const [activeChallenge, setActiveChallenge] = useState<string | null>(null);

  const detoxChallenges = [
    {
      id: 'sacred-pause',
      title: 'Sacred Pause Practice',
      duration: '7 days',
      description: 'Hourly mindful breaks to reconnect with your divine essence'
    },
    {
      id: 'digital-sunset',
      title: 'Digital Sunset Ritual',
      duration: '21 days',
      description: 'Sacred technology boundaries aligned with natural rhythms'
    },
    {
      id: 'analog-morning',
      title: 'Analog Morning Ceremony',
      duration: '14 days',
      description: 'First hour of each day devoted to offline sacred practices'
    }
  ];

  const offlineRituals = [
    {
      title: 'Moon Gazing Meditation',
      steps: ['Find a quiet outdoor space', 'Sit comfortably facing the moon', 'Breathe deeply for 10 minutes', 'Set intentions with lunar energy']
    },
    {
      title: 'Sacred Emotion Release',
      steps: ['Create safe physical space', 'Use pillow or journal for expression', 'Move energy through your body', 'Close with self-compassion']
    },
    {
      title: 'Ancestral Wisdom Circle',
      steps: ['Light a candle for your lineage', 'Call in ancestral guidance', 'Journal received messages', 'Offer gratitude and close circle']
    }
  ];

  const exportRitual = async (ritual: any) => {
    try {
      const html = `
        <html>
          <head>
            <style>
              body { font-family: 'Georgia', serif; padding: 40px; background: #fff; }
              .header { text-align: center; color: #FFD700; margin-bottom: 30px; }
              .step { margin: 15px 0; padding: 15px; border-left: 3px solid #FFD700; }
              .footer { margin-top: 40px; text-align: center; font-style: italic; }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>${ritual.title}</h1>
              <p>SoulFire Sacred Practice</p>
            </div>
            ${ritual.steps.map((step: string, index: number) => `
              <div class="step">
                <h3>Step ${index + 1}</h3>
                <p>${step}</p>
              </div>
            `).join('')}
            <div class="footer">
              <p>You are whole. You are remembering. You are rising.</p>
            </div>
          </body>
        </html>
      `;
      
      const { uri } = await Print.printToFileAsync({ html });
      await Sharing.shareAsync(uri);
    } catch (error) {
      Alert.alert('Export Error', 'Unable to export ritual guide');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background, padding: 20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: Colors.primary }}>
          Digital Wellness
        </Text>
        {onClose && (
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="close" size={24} color={Colors.text} />
          </TouchableOpacity>
        )}
      </View>

      <Text style={{ fontSize: 18, color: Colors.primary, marginBottom: 15, fontWeight: 'bold' }}>
        Sacred Detox Challenges
      </Text>

      {detoxChallenges.map((challenge) => (
        <TouchableOpacity
          key={challenge.id}
          style={{
            backgroundColor: Colors.surface,
            padding: 15,
            borderRadius: 10,
            marginBottom: 10,
            borderLeftWidth: 4,
            borderLeftColor: activeChallenge === challenge.id ? Colors.accent : Colors.primary
          }}
          onPress={() => setActiveChallenge(challenge.id)}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flex: 1 }}>
              <Text style={{ color: Colors.text, fontSize: 16, fontWeight: 'bold' }}>
                {challenge.title}
              </Text>
              <Text style={{ color: Colors.accent, fontSize: 12, marginTop: 2 }}>
                {challenge.duration}
              </Text>
              <Text style={{ color: Colors.text, fontSize: 14, marginTop: 5 }}>
                {challenge.description}
              </Text>
            </View>
            <Ionicons 
              name={activeChallenge === challenge.id ? "checkmark-circle" : "play-circle"} 
              size={24} 
              color={activeChallenge === challenge.id ? Colors.accent : Colors.primary} 
            />
          </View>
        </TouchableOpacity>
      ))}

      <Text style={{ fontSize: 18, color: Colors.primary, marginTop: 30, marginBottom: 15, fontWeight: 'bold' }}>
        Offline Sacred Rituals
      </Text>

      {offlineRituals.map((ritual, index) => (
        <View key={index} style={{
          backgroundColor: Colors.surface,
          padding: 15,
          borderRadius: 10,
          marginBottom: 15,
          borderWidth: 1,
          borderColor: Colors.primary
        }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <Text style={{ color: Colors.text, fontSize: 16, fontWeight: 'bold', flex: 1 }}>
              {ritual.title}
            </Text>
            <TouchableOpacity
              onPress={() => exportRitual(ritual)}
              style={{ backgroundColor: Colors.primary, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 15 }}
            >
              <Text style={{ color: Colors.background, fontSize: 12, fontWeight: 'bold' }}>
                Export
              </Text>
            </TouchableOpacity>
          </View>
          {ritual.steps.map((step, stepIndex) => (
            <Text key={stepIndex} style={{ color: Colors.text, fontSize: 14, marginBottom: 5, marginLeft: 10 }}>
              • {step}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
}