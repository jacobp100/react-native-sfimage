# react-native-sfimage

Use SFSymbols in react native. Requires iOS 13+.

<a href="https://jacobdoescode.com/technicalc"><img alt="Part of the TechniCalc Project" src="https://github.com/jacobp100/technicalc-core/blob/master/banner.png" width="200" height="60"></a>

![iOS Simulator with icons example](https://media.giphy.com/media/5gB4qLjkuYwVn10O77/giphy.gif) ![Example app](https://i.ibb.co/F03LBxj/Simulator-Screen-Shot-i-Phone-12-2021-06-23-at-11-47-54.png)

## Installation

```sh
npm install @jacobp100/react-native-sfimage
```

## Usage

```js
import SFImage from "@jacobp100/react-native-sfimage";

<SFImage
  systemName="thermometer.sun.fill"
  weight="semibold"
  scale="large"
  tintColor="red"
  size={16}
  resizeMode="center"
  multiColor={false}
/>;
```

## Credit

This library is mostly taken from [react-native-sfsymbols](https://github.com/birkir/react-native-sfsymbols). The key difference is that this library will automatically size the images, so you do not need to set the sizes via the `style` prop.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
