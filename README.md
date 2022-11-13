## 动画

### choose

手势左右切换。

#### 一段：手势左右水平移动

transform: translateX(100)
Easing.exp
onPress?

#### 二段：进入时向上，离开时向下移动

transform: translateY(100)

#### 三段：三个星星向指定坐标移动或者 transform 百分比？

transform: translateX、translateY

#### 四段：文字向下消失 fadeOut

opacity: 0 => 1 => 0
transform: translateY(-10%) => translateY(0) => translateY(10%)

### add-to-plate

点击加号进入托盘。

#### 一段：放大、往目标点移动

transform: scaleX, scaleY, translateX、translateY

#### 二段：左右水平移动

transform: translateX

### 总价

先消失再显示。

opacity: 1 => 0 ==> 1

## 动画组合

动画也可以使用合成函数以复杂的方式组合：

- Animated.delay()在给定的延迟后开始动画。
- Animated.parallel()同时启动多个动画。
- Animated.sequence()按顺序启动动画，等待每个动画完成后再开始下一个。
- Animated.stagger()按顺序并行启动动画，但有连续的延迟。
