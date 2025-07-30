import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';
import { Colors } from '../constants/Colors';

const { width, height } = Dimensions.get('window');

export default function SacredGeometry() {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const opacityAnim = useRef(new Animated.Value(0.1)).current;

  useEffect(() => {
    // Continuous rotation animation
    const rotateAnimation = Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 30000,
        useNativeDriver: true,
      })
    );

    // Breathing scale animation
    const scaleAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 0.9,
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0.7,
          duration: 4000,
          useNativeDriver: true,
        }),
      ])
    );

    // Opacity pulse animation
    const opacityAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacityAnim, {
          toValue: 0.15,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0.05,
          duration: 3000,
          useNativeDriver: true,
        }),
      ])
    );

    rotateAnimation.start();
    scaleAnimation.start();
    opacityAnimation.start();

    return () => {
      rotateAnimation.stop();
      scaleAnimation.stop();
      opacityAnimation.stop();
    };
  }, []);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      {/* Outer Sacred Circle */}
      <Animated.View
        style={[
          styles.outerCircle,
          {
            transform: [
              { rotate },
              { scale: scaleAnim },
            ],
            opacity: opacityAnim,
          },
        ]}
      />

      {/* Flower of Life Pattern */}
      <View style={styles.flowerOfLife}>
        {[...Array(6)].map((_, index) => (
          <Animated.View
            key={index}
            style={[
              styles.petalCircle,
              {
                transform: [
                  { rotate: `${index * 60}deg` },
                  { translateY: -30 },
                ],
                opacity: opacityAnim,
              },
            ]}
          />
        ))}
        <View style={styles.centerCircle} />
      </View>

      {/* Golden Ratio Spiral */}
      <Animated.View
        style={[
          styles.spiralContainer,
          {
            transform: [
              { rotate: rotate },
              { scale: 0.5 },
            ],
            opacity: 0.1,
          },
        ]}
      >
        <View style={styles.spiral} />
      </Animated.View>

      {/* Divine Feminine Crescents */}
      <View style={styles.crescentContainer}>
        {[...Array(3)].map((_, index) => (
          <Animated.View
            key={index}
            style={[
              styles.crescent,
              {
                transform: [
                  { rotate: `${index * 120}deg` },
                ],
                opacity: opacityAnim,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
  },
  outerCircle: {
    width: width * 0.6,
    height: width * 0.6,
    borderRadius: width * 0.3,
    borderWidth: 1,
    borderColor: Colors.americanGold + '30',
    position: 'absolute',
  },
  flowerOfLife: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  petalCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.americanGold + '20',
    position: 'absolute',
  },
  centerCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.americanGold + '25',
    backgroundColor: Colors.americanGold + '10',
  },
  spiralContainer: {
    width: 120,
    height: 120,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spiral: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.americanGold + '15',
    borderStyle: 'dashed',
  },
  crescentContainer: {
    width: 200,
    height: 200,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  crescent: {
    width: 25,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Colors.americanGold + '20',
    position: 'absolute',
    top: -60,
  },
});