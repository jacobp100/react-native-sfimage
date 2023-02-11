import {
  ColorValue,
  ImageStyle,
  requireNativeComponent,
  StyleProp,
  ViewProps,
} from 'react-native';

export type Weight =
  | 'ultralight'
  | 'light'
  | 'thin'
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'heavy';

export type Scale = 'small' | 'medium' | 'large';

export type ResizeMode =
  | 'scale-to-fill'
  | 'scale-aspect-fit'
  | 'scale-aspect-fill'
  | 'redraw'
  | 'center'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'cover'
  | 'contain'
  | 'stretch';

export type Props = Pick<ViewProps, 'onLayout'> & {
  systemName: string;
  tintColor?: ColorValue;
  style?: StyleProp<ImageStyle>;
  size?: number;
  resizeMode?: ResizeMode;
  weight?: Weight;
  scale?: Scale;
  multiColor?: boolean;
};

export default requireNativeComponent<Props>('RCTSFImage');
