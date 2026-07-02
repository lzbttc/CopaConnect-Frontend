import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { styles } from './style';

export function Botao({ titulo, onPress, accessibilityLabel }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}
    >
      <View style={styles.botao}>
        <Svg
          width="100%"
          height="100%"
          style={styles.svg}
          preserveAspectRatio="none"
        >
          <Path
            d="
              M30 0
              H345
              Q350 0 350 5
              L325 55
              Q323 60 318 60
              H5
              Q0 60 0 55
              L25 5
              Q27 0 30 0
              Z
            "
            fill="#DFFF2B"
          />
        </Svg>

        <Text style={styles.texto}>
          {titulo}
        </Text>
      </View>
    </TouchableOpacity>
  );
}