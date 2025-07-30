import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "../constants/Colors";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.obsidianBlack,
        },
        headerTintColor: Colors.goldenGlitter,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.obsidianBlack,
          borderTopColor: Colors.goldenGlitter,
          borderTopWidth: 1,
          height: 80,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarActiveTintColor: Colors.goldenGlitter,
        tabBarInactiveTintColor: '#666666',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="flame" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="reveal"
        options={{
          title: 'Reveal',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="eye" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="expand"
        options={{
          title: 'Expand',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="resize" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="rise"
        options={{
          title: 'Rise',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="arrow-up" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="journal"
        options={{
          title: 'Journal',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="subscription"
        options={{
          title: 'Upgrade',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="diamond" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}