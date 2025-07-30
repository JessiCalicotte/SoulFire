import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import * as ImagePicker from 'expo-image-picker';

const Colors = {
  background: '#000000',
  surface: '#1a1a1a',
  primary: '#FFD700',
  text: '#FFFFFF',
  textSecondary: '#CCCCCC',
  accent: '#40E0D0'
};

export default function JournalScreen() {
  const [activeTab, setActiveTab] = useState<'digital' | 'analog'>('digital');
  const [journalEntry, setJournalEntry] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState('');

  const journalPrompts = [
    "What shadow aspect of myself am I ready to illuminate today?",
    "Where in my body do I feel resistance, and what is it teaching me?",
    "What ancestral pattern am I ready to transform in this moment?",
    "How is my divine feminine power expressing itself today?",
    "What truth is my soul whispering that I've been afraid to hear?",
    "Where am I dimming my light, and what would happen if I let it shine?",
    "What sacred emotions need to be honored and transformed?",
    "How is the universe conspiring in my favor right now?"
  ];

  const exportPrompts = async () => {
    try {
      const html = `
        <html>
          <head>
            <style>
              body { font-family: 'Georgia', serif; padding: 40px; background: #fff; }
              .header { text-align: center; color: #FFD700; margin-bottom: 40px; }
              .prompt { margin: 30px 0; padding: 20px; border-left: 4px solid #FFD700; }
              .lines { border-bottom: 1px solid #ddd; height: 30px; margin: 10px 0; }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>SoulFire Sacred Journal Prompts</h1>
              <p>Truth by Fire • Divine Feminine Awakening</p>
            </div>
            ${journalPrompts.map(prompt => `
              <div class="prompt">
                <h3>${prompt}</h3>
                ${Array(8).fill(0).map(() => '<div class="lines"></div>').join('')}
              </div>
            `).join('')}
          </body>
        </html>
      `;
      
      const { uri } = await Print.printToFileAsync({ html });
      await Sharing.shareAsync(uri);
    } catch (error) {
      Alert.alert('Export Error', 'Unable to export prompts');
    }
  };

  const captureJournalPage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [3, 4],
        quality: 1,
      });

      if (!result.canceled) {
        Alert.alert('Success', 'Journal page captured and saved to your digital collection');
      }
    } catch (error) {
      Alert.alert('Capture Error', 'Unable to capture journal page');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <View style={{ flex: 1, padding: 20 }}>
        <Text style={{ 
          fontSize: 28, 
          fontWeight: 'bold', 
          color: Colors.primary, 
          textAlign: 'center',
          marginBottom: 30,
          fontFamily: 'serif'
        }}>
          Sacred Journal
        </Text>

        {/* Tab Navigation */}
        <View style={{ 
          flexDirection: 'row', 
          backgroundColor: Colors.surface,
          borderRadius: 25,
          padding: 4,
          marginBottom: 30
        }}>
          <TouchableOpacity
            style={{
              flex: 1,
              paddingVertical: 12,
              borderRadius: 20,
              backgroundColor: activeTab === 'digital' ? Colors.primary : 'transparent'
            }}
            onPress={() => setActiveTab('digital')}
          >
            <Text style={{
              textAlign: 'center',
              color: activeTab === 'digital' ? Colors.background : Colors.text,
              fontWeight: 'bold'
            }}>
              Digital
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              paddingVertical: 12,
              borderRadius: 20,
              backgroundColor: activeTab === 'analog' ? Colors.primary : 'transparent'
            }}
            onPress={() => setActiveTab('analog')}
          >
            <Text style={{
              textAlign: 'center',
              color: activeTab === 'analog' ? Colors.background : Colors.text,
              fontWeight: 'bold'
            }}>
              Analog
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {activeTab === 'digital' ? (
            <View>
              <Text style={{
                fontSize: 18,
                color: Colors.primary,
                marginBottom: 15,
                fontWeight: 'bold'
              }}>
                Sacred Prompts
              </Text>
              
              {journalPrompts.map((prompt, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    backgroundColor: Colors.surface,
                    padding: 15,
                    borderRadius: 10,
                    marginBottom: 10,
                    borderLeftWidth: 4,
                    borderLeftColor: Colors.primary
                  }}
                  onPress={() => setSelectedPrompt(prompt)}
                >
                  <Text style={{ color: Colors.text, fontSize: 16 }}>
                    {prompt}
                  </Text>
                </TouchableOpacity>
              ))}

              {selectedPrompt && (
                <View style={{ marginTop: 20 }}>
                  <Text style={{
                    color: Colors.primary,
                    fontSize: 16,
                    marginBottom: 10,
                    fontWeight: 'bold'
                  }}>
                    Your Sacred Reflection:
                  </Text>
                  <Text style={{
                    color: Colors.textSecondary,
                    fontSize: 14,
                    marginBottom: 10,
                    fontStyle: 'italic'
                  }}>
                    {selectedPrompt}
                  </Text>
                  <TextInput
                    style={{
                      backgroundColor: Colors.surface,
                      color: Colors.text,
                      padding: 15,
                      borderRadius: 10,
                      minHeight: 150,
                      textAlignVertical: 'top',
                      fontSize: 16,
                      lineHeight: 24
                    }}
                    multiline
                    placeholder="Let your truth flow onto the page..."
                    placeholderTextColor={Colors.textSecondary}
                    value={journalEntry}
                    onChangeText={setJournalEntry}
                  />
                </View>
              )}
            </View>
          ) : (
            <View>
              <Text style={{
                fontSize: 18,
                color: Colors.primary,
                marginBottom: 20,
                fontWeight: 'bold',
                textAlign: 'center'
              }}>
                Analog Sacred Practice
              </Text>

              <TouchableOpacity
                style={{
                  backgroundColor: Colors.primary,
                  padding: 20,
                  borderRadius: 15,
                  marginBottom: 20,
                  alignItems: 'center'
                }}
                onPress={exportPrompts}
              >
                <Ionicons name="download-outline" size={24} color={Colors.background} />
                <Text style={{
                  color: Colors.background,
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginTop: 5
                }}>
                  Export Sacred Prompts
                </Text>
                <Text style={{
                  color: Colors.background,
                  fontSize: 12,
                  textAlign: 'center',
                  marginTop: 5
                }}>
                  Print for your physical journal practice
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: Colors.accent,
                  padding: 20,
                  borderRadius: 15,
                  marginBottom: 20,
                  alignItems: 'center'
                }}
                onPress={captureJournalPage}
              >
                <Ionicons name="camera-outline" size={24} color={Colors.background} />
                <Text style={{
                  color: Colors.background,
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginTop: 5
                }}>
                  Capture Journal Page
                </Text>
                <Text style={{
                  color: Colors.background,
                  fontSize: 12,
                  textAlign: 'center',
                  marginTop: 5
                }}>
                  Photograph your handwritten reflections
                </Text>
              </TouchableOpacity>

              <View style={{
                backgroundColor: Colors.surface,
                padding: 20,
                borderRadius: 15,
                borderWidth: 2,
                borderColor: Colors.primary,
                borderStyle: 'dashed'
              }}>
                <Text style={{
                  color: Colors.primary,
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginBottom: 10,
                  textAlign: 'center'
                }}>
                  Sacred Pause Ritual
                </Text>
                <Text style={{
                  color: Colors.text,
                  fontSize: 14,
                  lineHeight: 20,
                  textAlign: 'center'
                }}>
                  Light a candle. Take three deep breaths. Feel your feet on the earth. 
                  You are whole. You are remembering. Let your truth flow through your pen.
                </Text>
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}