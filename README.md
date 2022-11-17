# README

## 如何运行？

1. install Expo Go App on your phone(Android or iOS).
2. Scan the QR code with Expo Go (Android) or the Camera app (iOS)
3. The project will run in Expo Go App on your phone.
4. Shake your phone to use the reload menu.

## 动画 1：选餐

Swipe 手势左右切换。

### 一段：手势左右水平移动

transform: translateX(offset)，swipe left 和 swipe right 使用正负 offset

PanResponder => onSwipe

### 二段：进入时向上，离开时向下移动

transform: translateY()

### 三段：三个星星向指定坐标移动

absolute 定位改变 left 和 top 值。

### 四段：文字向下消失

- opacity: 0 => 1 => 0
- transform: translateY(-offset) => translateY(0) => translateY(offset)

### 五段：添加按钮消失再显示

opacity: 1 => 0 => 1

## 动画 2：点餐

点击加号进入托盘区域。

```jsx
<TouchableWithoutFeedback
  onPress={() => {
    addToPlate(i);
  }}
>
  <View>Add Button</View>
</TouchableWithoutFeedback>
```

### 一段：放大、往目标点移动

transform: scale, left, top

### 二段：左右水平移动（挤入效果）

transform: translateX

- 第一个进入时，无动画
- 第二个进入的同时，将第一个右移 offset
- 第三个进入的同时，将第一个和第二个一起左移 offset

## 动画 3：结账

总金额先消失再显示。

opacity: 1 => 0 ==> 1

## 动画调度函数

动画也可以使用合成函数以复杂的方式组合：

- Animated.delay()在给定的延迟后开始动画。
- Animated.parallel()同时启动多个动画。
- Animated.sequence()按顺序启动动画，等待每个动画完成后再开始下一个。
- Animated.stagger()按顺序并行启动动画，但有连续的延迟。

## 状态共享

当前场景使用 context 够用。
