import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface SpacerProps {
  horizontal?: number; // Horizontal spacing in dp
  vertical?: number;   // Vertical spacing in dp
}

const Spacer: React.FC<SpacerProps> = ({ horizontal = 0, vertical = 0 }) => {
  return (
    <View
      style={[
        {
          width: horizontal,
          height: vertical,
        },
      ]}
    />
  );
};


export default Spacer;
