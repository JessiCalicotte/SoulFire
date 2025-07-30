import { useEffect, useState } from 'react';
import { Platform } from 'react-native';

// Mock StoreKit implementation for development
// In production, you would use expo-in-app-purchases or react-native-iap

export interface Product {
  productId: string;
  price: string;
  title: string;
  description: string;
  type: 'subscription' | 'consumable';
}

export interface Subscription {
  productId: string;
  purchaseDate: Date;
  expirationDate: Date;
  isActive: boolean;
}

const MOCK_PRODUCTS: Product[] = [
  {
    productId: 'soulfire_warrior_monthly',
    price: '$9.99',
    title: 'SoulFire Warrior Monthly',
    description: 'Monthly subscription to SoulFire Warrior tier',
    type: 'subscription'
  },
  {
    productId: 'soulfire_warrior_yearly',
    price: '$79.99',
    title: 'SoulFire Warrior Yearly',
    description: 'Yearly subscription to SoulFire Warrior tier (33% savings)',
    type: 'subscription'
  },
  {
    productId: 'soulfire_alchemist_monthly',
    price: '$17.99',
    title: 'SoulFire Alchemist Monthly',
    description: 'Monthly subscription to SoulFire Alchemist tier',
    type: 'subscription'
  },
  {
    productId: 'soulfire_alchemist_yearly',
    price: '$149.99',
    title: 'SoulFire Alchemist Yearly',
    description: 'Yearly subscription to SoulFire Alchemist tier (30% savings)',
    type: 'subscription'
  }
];

export const useStoreKit = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [subscription, setSubscription] = useState<Subscription | null>(null);

  useEffect(() => {
    // Simulate loading products
    setTimeout(() => {
      setProducts(MOCK_PRODUCTS);
      setLoading(false);
    }, 1000);
  }, []);

  const purchaseProduct = async (productId: string): Promise<boolean> => {
    try {
      // Mock purchase flow
      console.log(`Purchasing product: ${productId}`);
      
      // Simulate purchase success
      const newSubscription: Subscription = {
        productId,
        purchaseDate: new Date(),
        expirationDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
        isActive: true
      };
      
      setSubscription(newSubscription);
      return true;
    } catch (error) {
      console.error('Purchase failed:', error);
      return false;
    }
  };

  const restorePurchases = async (): Promise<boolean> => {
    try {
      // Mock restore functionality
      console.log('Restoring purchases...');
      return true;
    } catch (error) {
      console.error('Restore failed:', error);
      return false;
    }
  };

  return {
    products,
    loading,
    subscription,
    purchaseProduct,
    restorePurchases
  };
};