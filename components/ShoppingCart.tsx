import React, { Component, ReactElement } from 'react';
import { Animated, Easing, View } from 'react-native';

let singleView: ShoppingCartView | null = null;

const defaultConfig = {
  duration: 1000,
  TopFix: 0,
  rightFix: 0,
  startScale: 1,
  endScale: 0,
};

export type CoordinateProps = {
  x: number;
  y: number;
};

export type ShoppingCartAnimationConfigProps = {
  startValue?: CoordinateProps; // 开始坐标，如：{x:0,y:0}
  endValue?: CoordinateProps; // 结束坐标，如：{x:100,y:100}
  startView?: View; // 开始组件
  endView: View; // 结束组件
  duration: number;
  startScale: number; // 开始缩放比例
  endScale: number; // 结束缩放比例
  topFix: number; // 顶部偏移量
  rightFix: number; // 右边偏移量
  callback?: () => void; // 动画结束的回调
};

export function ShoppingCartAnimation(node: ReactElement, config: ShoppingCartAnimationConfigProps) {
  if (!singleView) {
    console.error(`Please render ShoppingCartView first`);
    return;
  }

  const mergedConfig = Object.assign(defaultConfig, config);

  singleView.startAnimation(node, mergedConfig);
}

type ShoppingCartViewProps = {};

type ShoppingCartViewState = {
  node: ReactElement | null;
  hide: boolean;
};

export class ShoppingCartView extends Component<ShoppingCartViewProps, ShoppingCartViewState> {
  x: Animated.Value;
  y: Animated.Value;
  scale: Animated.Value;

  constructor(props: ShoppingCartViewProps | Readonly<ShoppingCartViewProps>) {
    super(props);
    this.x = new Animated.Value(0);
    this.y = new Animated.Value(0);
    this.scale = new Animated.Value(0);
    this.state = {
      node: null,
      hide: true,
    };
  }

  componentDidMount() {
    singleView = this;
  }

  componentWillUnmount() {
    singleView = null;
  }

  async startAnimation(node: ReactElement, config: ShoppingCartAnimationConfigProps) {
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;
    const childWidth = node?.props.style?.width ? node?.props.style?.width : 0;
    const childHeight = node?.props.style?.height ? node?.props.style?.height : 0;

    const { startValue, endValue, startView, endView, duration, topFix, rightFix, startScale, endScale, callback } = config;

    if (startValue) {
      startX = startValue.x;
      startY = startValue.y;
    } else if (startView) {
      let startValue = await this.measureView(startView);
      startX = startValue.x + startValue.width / 2 - childWidth / 2 - rightFix;
      startY = startValue.y + startValue.height / 2 - childHeight / 2 - topFix;
    }

    if (endValue) {
      endX = endValue.x;
      endY = endValue.y;
    } else if (endView) {
      let endValue = await this.measureView(endView);
      endX = endValue.x + endValue.width / 2 - childWidth / 2 - rightFix;
      endY = endValue.y + endValue.height / 2 - childHeight / 2 - topFix;
    }
    this._animStart(startX, startY, endX, endY, duration, startScale, endScale, callback);
    this.setState({
      node: node,
      hide: false,
    });
  }

  private _animStart(startX: number, startY: number, endX: number, endY: number, duration: number, startScale: number, endScale: number, callback?: () => void) {
    this.x.setValue(startX);
    this.y.setValue(startY);
    this.scale.setValue(startScale);
    Animated.parallel([
      Animated.timing(this.x, {
        toValue: endX,
        duration: duration,
        easing: Easing.linear, // 线性的渐变函数
        useNativeDriver: false,
      }),
      Animated.timing(this.y, {
        toValue: endY,
        duration: duration,
        easing: Easing.linear, // 线性的渐变函数
        useNativeDriver: false,
      }),
      Animated.timing(this.scale, {
        toValue: endScale,
        duration: duration,
        easing: Easing.linear, // 线性的渐变函数
        useNativeDriver: false,
      }),
    ]).start(() => {
      callback?.();
      this.setState({
        hide: true,
        node: null,
      });
    });
  }

  measureView(view: View): Promise<{
    x: number;
    y: number;
    width: number;
    height: number;
  }> {
    return new Promise((resolve) => {
      view.measureInWindow((x, y, width, height) => resolve({ x, y, width, height }));
    });
  }

  render() {
    return !this.state.hide ? (
      <Animated.View
        style={{
          position: 'absolute',
          left: this.x,
          top: this.y,
          transform: [
            {
              scale: this.scale,
            },
          ],
        }}
      >
        {this.state.node}
      </Animated.View>
    ) : null;
  }
}
