## 动画

### 动画 1：选餐

Swipe 手势左右切换。

#### 一段：手势左右水平移动

transform: translateX(100) 和 absolute 定位改变 left 值。

动效：Easing.exp

PanResponder => onSwipe

#### 二段：进入时向上，离开时向下移动

transform: translateY(100)

#### 三段：三个星星向指定坐标移动或者 transform 百分比

transform: translateX(100) 和 absolute 定位改变 left 值。

#### 四段：文字向下消失 fadeOut

- opacity: 0 => 1 => 0
- transform: translateY(-10%) => translateY(0) => translateY(10%)

### 动画 2：点餐

点击加号进入托盘。

```jsx
<TouchableWithoutFeedback
  onPress={() => {
    addToPlate(i);
  }}
>
  <View>Add Button</View>
</TouchableWithoutFeedback>
```

#### 一段：放大、往目标点移动

transform: scaleX, scaleY, translateX、translateY

#### 二段：左右水平移动

transform: translateX

### 动画 3：结账

总金额先消失再显示。

opacity: 1 => 0 ==> 1

## 动画调度函数

动画也可以使用合成函数以复杂的方式组合：

- Animated.delay()在给定的延迟后开始动画。
- Animated.parallel()同时启动多个动画。
- Animated.sequence()按顺序启动动画，等待每个动画完成后再开始下一个。
- Animated.stagger()按顺序并行启动动画，但有连续的延迟。
