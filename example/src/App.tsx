/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  ScrollView,
  Animated,
  Text,
  Easing,
  SafeAreaView,
} from 'react-native';
import SFImage, { Scale, Weight } from 'react-native-sfimage';

const AnimatedSFImage = Animated.createAnimatedComponent(SFImage);

function Row({ title, children }: any) {
  return (
    <View style={{ marginBottom: 32, gap: 8 }}>
      <View style={{ width: '100%', marginBottom: 8, paddingLeft: 16 }}>
        <Text style={{ fontSize: 19 }}>{title}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#eee',
          paddingVertical: 16,
        }}
      >
        {children}
      </View>
    </View>
  );
}

export default function App() {
  const weights = [
    'ultralight',
    'light',
    'regular',
    'medium',
    'semibold',
    'bold',
    'heavy',
  ];

  const scales = ['small', 'medium', 'large'];

  const rotation = React.useRef(new Animated.Value(0)).current;
  const color = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.spring(rotation, { toValue: 360, useNativeDriver: true })
    ).start();
    Animated.loop(
      Animated.timing(color, {
        toValue: 360,
        useNativeDriver: false,
        duration: 5000,
        easing: Easing.linear,
      })
    ).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Text
          style={{
            paddingLeft: 16,
            fontSize: 32,
            fontWeight: '300',
            marginTop: 64,
            marginBottom: 48,
          }}
        >
          React Native SFImage
        </Text>
        <Row title="Weights">
          {weights.map((weight) => (
            <SFImage
              key={weight}
              systemName="cloud.sun.rain.fill"
              multiColor
              weight={weight as Weight}
              resizeMode="center"
              size={32}
            />
          ))}
        </Row>
        <Row title="Scale">
          {scales.map((scale) => (
            <SFImage
              key={scale}
              systemName="thermometer.sun.fill"
              multiColor
              scale={scale as Scale}
              resizeMode="center"
              size={32}
            />
          ))}
        </Row>
        <Row title="Colors">
          <SFImage systemName="tornado" tintColor="rebeccapurple" size={32} />
          <SFImage
            systemName="moon.circle.fill"
            tintColor="hotpink"
            size={32}
          />
          <SFImage systemName="sparkles" tintColor="orange" size={32} />
        </Row>
        <Row title="Animated">
          <AnimatedSFImage
            systemName="mustache"
            size={32}
            style={{
              transform: [
                {
                  rotateZ: rotation.interpolate({
                    inputRange: [0, 360],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            }}
          />
          <AnimatedSFImage
            systemName="star.fill"
            size={32}
            tintColor={color.interpolate({
              inputRange: [0, 60, 120, 180, 240, 300, 360],
              outputRange: [
                'rgb(255,0,0)',
                'rgb(255,255,0)',
                'rgb(0,255,0)',
                'rgb(0,255,255)',
                'rgb(0,0,255)',
                'rgb(255,0,255)',
                'rgb(255,0,0)',
              ],
            })}
          />
        </Row>
      </ScrollView>
    </SafeAreaView>
  );
}
