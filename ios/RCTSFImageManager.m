#import "RCTSFImageManager.h"
#import "RCTSFImage.h"

#import <React/RCTConvert.h>

@implementation RCTConvert (SfImage)

RCT_ENUM_CONVERTER(UIImageSymbolWeight, (@{
  @"ultralight": @(UIImageSymbolWeightUltraLight),
  @"light": @(UIImageSymbolWeightLight),
  @"thin": @(UIImageSymbolWeightThin),
  @"regular": @(UIImageSymbolWeightRegular),
  @"medium": @(UIImageSymbolWeightMedium),
  @"semibold": @(UIImageSymbolWeightSemibold),
  @"bold": @(UIImageSymbolWeightBold),
  @"heavy": @(UIImageSymbolWeightHeavy),
}), UIImageSymbolWeightUnspecified, integerValue)

RCT_ENUM_CONVERTER(UIImageSymbolScale, (@{
  @"small": @(UIImageSymbolScaleSmall),
  @"medium": @(UIImageSymbolScaleMedium),
  @"large": @(UIImageSymbolScaleLarge),
}), UIImageSymbolScaleDefault, integerValue)

@end

@implementation RCTSFImageManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  return [[RCTSFImage alloc] initWithBridge:self.bridge];
}

RCT_EXPORT_VIEW_PROPERTY(tintColor, UIColor)
RCT_EXPORT_VIEW_PROPERTY(multiColor, BOOL)
RCT_EXPORT_VIEW_PROPERTY(weight, UIImageSymbolWeight)
RCT_EXPORT_VIEW_PROPERTY(scale, UIImageSymbolScale)
RCT_EXPORT_VIEW_PROPERTY(size, CGFloat)
RCT_REMAP_VIEW_PROPERTY(resizeMode, contentMode, UIViewContentMode)
RCT_EXPORT_VIEW_PROPERTY(systemName, NSString)

@end
