import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import MParticle from 'react-native-mparticle';

const App = () => {
  useEffect(() => {
    // Track a custom event
    MParticle.logEvent('Home Screen Viewed', MParticle.EventType.Other, {
      screenName: 'Home Screen',
    });

    // Set user identity
    MParticle.Identity.getCurrentUser().setUserIdentity(
      'user12345',
      MParticle.IdentityType.CustomerId,
    );

    // Add user attributes
    MParticle.Identity.getCurrentUser().setUserAttribute(
      'email',
      'user@example.com',
    );

    // Log a commerce event (Product View)
    const productEvent = new MParticle.CommerceEvent(
      MParticle.CommerceEventType.ProductView,
    );
    productEvent.addProduct(
      '12345', // Product ID
      'Sample Product', // Product Name
      1, // Quantity
      19.99, // Price
    );
    MParticle.logCommerceEvent(productEvent);

    // Add a user attribute (Preferred Language)
    MParticle.Identity.getCurrentUser().setUserAttribute(
      'preferred_language',
      'English',
    );

    // Enable push notifications
    MParticle.pushNotificationEvents([
      'PushNotificationOpened',
      'PushNotificationDismissed',
    ]);

    // Start retention tracking
    MParticle.startSession();

    // Define retention attributes (e.g., 'day', 'week', 'month')
    const retentionAttributes = {
      day: '1', // Day 1 retention
      week: '1', // Week 1 retention
      month: '1', // Month 1 retention
    };

    // Log retention events
    MParticle.logRetentionEvent(retentionAttributes);
  }, []);

  return (
    <View>
      <Text>Welcome to the Home Screen</Text>
      <Button
        title="Track Custom Event"
        onPress={() => {
          // Track a custom event when the button is pressed
          MParticle.logEvent('Button Clicked', MParticle.EventType.Other, {
            buttonName: 'Custom Button',
          });
        }}
      />
    </View>
  );
};

export default App;
