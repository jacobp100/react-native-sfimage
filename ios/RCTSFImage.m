#import "RCTSFImage.h"

#import <React/RCTBridge.h>
#import <React/RCTUIManager.h>

@implementation RCTSFImage {
  __weak RCTBridge *_bridge;
  BOOL _needsUpdate;
}

- (instancetype)initWithBridge:(RCTBridge *)bridge
{
  if (self = [super initWithFrame:CGRectZero]) {
    _bridge = bridge;
    _needsUpdate = YES;
  }

  return self;
}

@synthesize reactTag;
@synthesize rootTag;

- (BOOL)isYogaLeafNode
{
  return YES;
}

- (BOOL)canHaveSubviews
{
  return NO;
}


- (void)didSetProps:(NSArray<NSString *> *)changedProps
{
  if (!_needsUpdate) {
    return;
  }

  _needsUpdate = NO;

  if (@available(iOS 13.0, *)) {
    CGFloat size = _size > 0 ? _size : [UIFont systemFontSize];

    UIImageSymbolConfiguration *configuration = [UIImageSymbolConfiguration
                                                 configurationWithPointSize:size
                                                 weight:_weight
                                                 scale:_scale];
    UIImage *image = [UIImage systemImageNamed:_systemName
                             withConfiguration:configuration];

    if (_multiColor) {
      if (self.tintColor != nil) {
        image = [image imageWithTintColor:self.tintColor
                            renderingMode:UIImageRenderingModeAlwaysOriginal];
      } else {
        image = [image imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal];
      }
    } else if (self.tintColor != nil) {
      image = [image imageWithRenderingMode:UIImageRenderingModeAlwaysTemplate];
    }

    self.image = image;

    [_bridge.uiManager setSize:image.size
                       forView:self];
  }
}

- (void)setMultiColor:(BOOL)multiColor
{
  _multiColor = multiColor;
  _needsUpdate = YES;
}

- (void)setWeight:(UIImageSymbolWeight)weight
{
  _weight = weight;
  _needsUpdate = YES;
}

- (void)setScale:(UIImageSymbolScale)scale
{
  _scale = scale;
  _needsUpdate = YES;
}

- (void)setSize:(CGFloat)size
{
  _size = size;
  _needsUpdate = YES;
}

- (void)setSystemName:(NSString *)systemName
{
  _systemName = systemName;
  _needsUpdate = YES;
}

@end
