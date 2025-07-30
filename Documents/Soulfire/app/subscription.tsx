import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/Colors';
import SacredGeometry from '../components/SacredGeometry';
import { useStoreKit } from '../hooks/useStoreKit';

export default function Subscription() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly');
  const { purchaseProduct, loading } = useStoreKit();

  const handlePurchase = async (productId: string, tierName: string) => {
    if (productId === 'free') {
      Alert.alert('Welcome, Warrior', 'Your free journey begins now. You carry the flame within.');
      return;
    }

    const success = await purchaseProduct(productId);
    if (success) {
      Alert.alert('Sacred Path Activated', `You have chosen the ${tierName} path. Your transformation awaits.`);
    } else {
      Alert.alert('Sacred Pause', 'Your journey will continue when the timing aligns. Trust the divine flow.');
    }
  };

  const tiers = [
    {
      name: 'SoulFire Spark',
      price: 'Free',
      yearlyPrice: 'Free',
      productId: 'free',
      subtitle: 'Your Sacred Beginning',
      purpose: 'You are ready to witness your power',
      features: [
        'Daily Shadow Insight: Your mirror awaits',
        'Shadow Archetype Assessment: Meet your depths',
        'Sacred Community: Witness others rise',
        '5 Foundational Meditations: Root into presence',
        'Universal Laws: Ancient wisdom revealed',
        'Rotating Content: Your journey unfolds',
        'Practice Tracking: Honor your commitment'
      ],
      limitations: ['Supported by sacred exchange', 'Curated for your readiness', 'Online presence required'],
      color: Colors.mutedSlateBlue,
      textColor: Colors.pureWhite
    },
    {
      name: 'SoulFire Warrior',
      price: '$9.99/month',
      yearlyPrice: '$79.99/year',
      monthlyProductId: 'soulfire_warrior_monthly',
      yearlyProductId: 'soulfire_warrior_yearly',
      foundingPrice: '$59.99/year (Sacred Founding)',
      subtitle: 'Your Truth Embodied',
      purpose: 'You are the sovereign of your transformation',
      features: [
        'Complete Shadow Work Journey: Reclaim all parts',
        'AI Sacred Guidance: Wisdom meets technology',
        'Full Archetype Mastery: Know your divine blueprint',
        'Sacred Community: Full participation in rising',
        'Complete Meditation Sanctuary: All practices',
        'Divine Feminine Embodiment: Your power unleashed',
        'Hermetic Wisdom Complete: Ancient keys revealed',
        'Digital Wellness Mastery: Sacred boundaries',
        'Offline Sacred Space: Your sanctuary anywhere',
        'Transformation Tracking: Witness your becoming',
        'Journal Integration: Bridge digital and sacred',
        'Personalized Practice: Your unique rhythm',
        'Cycle Sync Mastery: Flow with divine timing'
      ],
      color: Colors.americanGold,
      textColor: Colors.obsidianBlack,
      popular: true
    },
    {
      name: 'SoulFire Alchemist',
      price: '$17.99/month',
      yearlyPrice: '$149.99/year',
      monthlyProductId: 'soulfire_alchemist_monthly',
      yearlyProductId: 'soulfire_alchemist_yearly',
      foundingPrice: '$119.99/year (Sacred Founding)',
      subtitle: 'Master of Sacred Fire',
      purpose: 'You are the living prayer of transformation',
      features: [
        'All Warrior Mastery Plus:',
        'Advanced AI Oracle: Deep pattern revelation',
        'Priority Sacred Support: Immediate guidance',
        'Early Access: First to receive new wisdom',
        'Ancestral Healing Mastery: Break generational cycles',
        'Custom Ritual Creation: Your unique ceremonies',
        'Immersive Sacred Experiences: Deep transformation',
        'Accelerated Programs: Rapid embodiment',
        'Physical Sacred Tools: Discounted access',
        'Premium Analytics: Track your mastery',
        'Family Sacred Circle: Share the flame (3 members 50% off)'
      ],
      color: Colors.goldenGlitter,
      textColor: Colors.obsidianBlack
    }
  ];

  const getDisplayPrice = (tier: any) => {
    if (tier.price === 'Free') return 'Free';
    return selectedPlan === 'monthly' ? tier.price : tier.yearlyPrice;
  };

  const getProductId = (tier: any) => {
    if (tier.productId) return tier.productId;
    return selectedPlan === 'monthly' ? tier.monthlyProductId : tier.yearlyProductId;
  };

  return (
    <View style={styles.container}>
      <SacredGeometry />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Choose Your Sacred Path</Text>
          <Text style={styles.subtitle}>You are ready for this transformation</Text>
          
          <View style={styles.toggleContainer}>
            <TouchableOpacity 
              style={[styles.toggleButton, selectedPlan === 'monthly' && styles.activeToggle]}
              onPress={() => setSelectedPlan('monthly')}
            >
              <Text style={[styles.toggleText, selectedPlan === 'monthly' && styles.activeToggleText]}>Monthly</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.toggleButton, selectedPlan === 'yearly' && styles.activeToggle]}
              onPress={() => setSelectedPlan('yearly')}
            >
              <Text style={[styles.toggleText, selectedPlan === 'yearly' && styles.activeToggleText]}>Yearly (Save 33%)</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.tiersContainer}>
          {tiers.map((tier, index) => (
            <View key={index} style={[styles.tierCard, { backgroundColor: tier.color }]}>
              {tier.popular && (
                <View style={styles.popularBadge}>
                  <Text style={styles.popularText}>MOST CHOSEN</Text>
                </View>
              )}
              
              <Text style={[styles.tierName, { color: tier.textColor }]}>{tier.name}</Text>
              <Text style={[styles.tierPrice, { color: tier.textColor }]}>{getDisplayPrice(tier)}</Text>
              {tier.foundingPrice && selectedPlan === 'yearly' && (
                <Text style={[styles.foundingPrice, { color: tier.textColor }]}>{tier.foundingPrice}</Text>
              )}
              <Text style={[styles.tierSubtitle, { color: tier.textColor }]}>{tier.subtitle}</Text>
              <Text style={[styles.purpose, { color: tier.textColor }]}>{tier.purpose}</Text>
              
              <View style={styles.featuresContainer}>
                {tier.features.slice(0, 6).map((feature, idx) => (
                  <Text key={idx} style={[styles.feature, { color: tier.textColor }]}>
                    • {feature}
                  </Text>
                ))}
                {tier.features.length > 6 && (
                  <Text style={[styles.moreFeatures, { color: tier.textColor }]}>
                    +{tier.features.length - 6} more sacred tools
                  </Text>
                )}
              </View>
              
              {tier.limitations && (
                <View style={styles.limitationsContainer}>
                  <Text style={[styles.limitationsTitle, { color: tier.textColor }]}>Sacred Container:</Text>
                  {tier.limitations.map((limit, idx) => (
                    <Text key={idx} style={[styles.limitation, { color: tier.textColor }]}>• {limit}</Text>
                  ))}
                </View>
              )}
              
              <TouchableOpacity 
                style={[styles.selectButton, { borderColor: tier.textColor }]}
                onPress={() => handlePurchase(getProductId(tier), tier.name)}
                disabled={loading}
              >
                <Text style={[styles.selectText, { color: tier.textColor }]}>
                  {tier.price === 'Free' ? 'Begin Your Awakening' : 'Activate Your Path'}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Sacred Investment: $450K-$550K Year 1 • $1.6M-$1.9M Year 2</Text>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backText}>← Return to Your Journey</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.obsidianBlack },
  scrollContent: { paddingTop: 60, paddingBottom: 40 },
  header: { alignItems: 'center', paddingHorizontal: 20, marginBottom: 30 },
  title: { fontSize: 28, fontWeight: 'bold', color: Colors.goldenGlitter, textAlign: 'center', marginBottom: 10, fontFamily: 'System' },
  subtitle: { fontSize: 16, color: Colors.americanGold, textAlign: 'center', marginBottom: 20, fontFamily: 'System' },
  toggleContainer: { flexDirection: 'row', backgroundColor: Colors.mutedPlum, borderRadius: 25, padding: 4 },
  toggleButton: { paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20 },
  activeToggle: { backgroundColor: Colors.americanGold },
  toggleText: { color: Colors.pureWhite, fontSize: 14, fontFamily: 'System' },
  activeToggleText: { color: Colors.obsidianBlack, fontWeight: 'bold', fontFamily: 'System' },
  tiersContainer: { paddingHorizontal: 20, gap: 20 },
  tierCard: { borderRadius: 15, padding: 20, position: 'relative' },
  popularBadge: { position: 'absolute', top: -10, right: 20, backgroundColor: Colors.burntOrange, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12 },
  popularText: { color: Colors.pureWhite, fontSize: 10, fontWeight: 'bold', fontFamily: 'System' },
  tierName: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 5, fontFamily: 'System' },
  tierPrice: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 5, fontFamily: 'System' },
  foundingPrice: { fontSize: 14, textAlign: 'center', fontStyle: 'italic', marginBottom: 5, fontFamily: 'System' },
  tierSubtitle: { fontSize: 16, textAlign: 'center', marginBottom: 5, fontWeight: '600', fontFamily: 'System' },
  purpose: { fontSize: 12, textAlign: 'center', marginBottom: 15, fontStyle: 'italic', fontFamily: 'System' },
  featuresContainer: { marginBottom: 15 },
  feature: { fontSize: 13, marginBottom: 3, paddingLeft: 10, fontFamily: 'System', textAlign: 'center' },
  moreFeatures: { fontSize: 12, fontStyle: 'italic', paddingLeft: 10, marginTop: 5, fontFamily: 'System', textAlign: 'center' },
  limitationsContainer: { marginBottom: 15 },
  limitationsTitle: { fontSize: 12, fontWeight: 'bold', marginBottom: 5, fontFamily: 'System', textAlign: 'center' },
  limitation: { fontSize: 11, marginBottom: 2, paddingLeft: 10, fontFamily: 'System', textAlign: 'center' },
  selectButton: { borderWidth: 2, borderRadius: 25, paddingVertical: 12, alignItems: 'center' },
  selectText: { fontSize: 16, fontWeight: 'bold', fontFamily: 'System' },
  footer: { alignItems: 'center', marginTop: 30, paddingHorizontal: 20 },
  footerText: { color: Colors.mutedTerracotta, fontSize: 12, textAlign: 'center', marginBottom: 15, fontFamily: 'System' },
  backButton: { alignItems: 'center' },
  backText: { color: Colors.americanGold, fontSize: 16, fontFamily: 'System' }
});