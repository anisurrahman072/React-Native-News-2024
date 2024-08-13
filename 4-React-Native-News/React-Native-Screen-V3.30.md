# React Native Screens V3.30: What’s New!

Hey **React Native** Developers,

We’re thrilled to share some exciting news from **Software Mansion**! 🚀 In the ever-evolving world of React Native, they’ve made remarkable strides. Last month, they unveiled **react-native-screen** version 3.30, and it comes with a groundbreaking feature: **“Custom Screen Transitions Based on Gesture.”**

In today’s newsletter, we’ll dive into the code and explore how we can harness this powerful feature in our React Native apps.

![](../images/ReactNativeScreen3.30/output.gif)

Before we delve further, let’s explore the essential groundwork of React Native Screens.

## The React-Native-Screens library

When building React Native applications, **effective navigation** is essential. **React Native Screens**, developed by Software Mansion, provides **native navigation primitives** specifically tailored for React Native apps. These primitives correspond to **native components** offered by your phone’s operating system. By leveraging these components, **React-native-screens** enhances performance and ensures that your app operates seamlessly.

However, it’s important to note that **React Native Screens** isn’t intended to be used as a standalone library for handling navigation independently. Instead, it serves as a dependency for **full-featured** navigation libraries.

Some of the most popular full-featured navigation libraries are:

- [react-navigation](https://github.com/react-navigation) (Most popular for bare React Native apps)

- [react-native-navigation](https://github.com/wix/react-native-navigation) (Created by Wix)

We will use [react-navigation](https://github.com/react-navigation) or this newsletter. Let’s get cooking with it! 🍟.

## Custom Screen Transitions based on Gesture

From now on, in React Native apps, developers can apply a screen transition effect based on users’ gestures (like swipe up, swipe left, etc) while going back to the previous screen. To make this feature ready, three open-source teams from Software Mansion came to the table.

1.  react-native-reanimated

2.  react-native-screens

3.  react-native-gesture-handler

All the teams have published their dependencies for this feature in their latest stable version. However, the “react-native-reanimated” dependencies for this feature are not yet available in the latest stable version. Fortunately, they have made a pre-release of [V3.9](https://github.com/software-mansion/react-native-reanimated/releases/tag/3.9.0-rc.0), which includes all the necessary dependencies for this feature. We will utilize it.

In the next section, we will explore the necessary additions or upgrades to our app, enabling the implementation of this feature.

## Install with React-Navigation

To enable Custom Screen Transitions with gesture let’s install the following packages.

- First, install React Navigation:

```bash
  npm install @react-navigation/native
```

- Then install React Native Gesture Handler, React Native Screens (Latest version is important) & its dependencies:

```bash
  npm install react-native-gesture-handler react-native-screens react-native-safe-area-context
```

- Finally, install the pre-release version (V3.9.0-rc.0) of “React Native **Reanimated**”. Or if you already installed it before then upgrade it to “3.9.0-rc.0”.

```bash
  npm install react-native-reanimated@3.9.0-rc.0
```

You can check the reanimated **V3.9** pre-release note from here [(Change Log of reanimated 3.9.0-rc.0)](https://github.com/software-mansion/react-native-reanimated/releases/tag/3.9.0-rc.0).

## Code Example

To enable Custom Screen Transitions based on gestures, we need to modify our **navigation file** (the file that declares the names of each screen to navigate). We will use **“App.js”** as our navigation file in this example.

1.  We have to import **“createNativeStackNavigator”** from **“react-native-screens/native-stack”** instead of **“@react-navigation/native-stack”**. They both provide the same functionalities on navigation but “react-native-screens/native-stack” provides an extra functionality for handling Custom Screen Transitions.

2.  We need to wrap the <**NavigationContainer />** component by using **\<GestureDetectorProvider />** from **“react-native-screens/gesture-handler”**. The GestureDetectorProvider enables you to recognize and handle various gestures (like swipes, pinches, rotations, etc.) in your React Native app.

3.  Finally, wrap your whole app by using **\<GestureHandlerRootView />** from **“react-native-gesture-handler”** as it allows your app to catch all touch events.

The imports should look like below in “App.js”:

```javascript
// Imports in "App.js"
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { GestureDetectorProvider } from "react-native-screens/gesture-handler";
import { ScreenTransition } from "react-native-reanimated";
```

As we have imported all dependencies, now let’s do all the wrapping with these imported components:

```javascript
// Imports...

// Build the stack for screens
const Stack = createNativeStackNavigator();

// Build App function
function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <GestureDetectorProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ScreenA" component={ScreenA} />
            <Stack.Screen name="ScreenB" component={ScreenB} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureDetectorProvider>
    </GestureHandlerRootView>
  );
}
```

Let’s recap what we did in the above navigation file. The top component is now **\<GestureHandlerRootView />**, which detects all touch events in your app. The next component is **\<GestureDetectorProvider />**, responsible for identifying whether the touch corresponds to a gesture (such as swipes, pinches, rotations, etc.). After that, we have our **\<NavigationContainer />** component.

That’s it! You’ve enabled gesture action handling power in your React Native app. Now it’s time to apply some “go back” transitions to each screen, as shown below:

```javascript
// Imports...

// Build the stack for screens...

// Build App function
function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      ......
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="ScreenA"
        component={ScreenA}
        options={{
          goBackGesture: "twoDimensionalSwipe",
        }}
      />
      <Stack.Screen
        name="ScreenB"
        component={ScreenB}
        options={{
          goBackGesture: "swipeDown",
        }}
      />
      ......
    </GestureHandlerRootView>
  );
}
```

We used the “**twoDimensionalSwipe**” gesture for “ScreenA” & “**swipeDown**” gesture for “ScreenB”. You are all set 🚀.

For your information, below are all the available gestures from **React Native Screens**:

- swipeRight

- swipeLeft

- swipeUp

- swipeDown

- verticalSwipe

- horizontalSwipe

- twoDimensionalSwipe

Now let’s create the **“Home”** screen (component) to navigate to “ScreenA” & “ScreenB”. The “Home” screen will be like the below:

```javascript
// Imports ...

// Build "Home" screen (component)
export default function Home({ navigation: { navigate } }) {
  return (
    <View>
      {/* GO TO SCREEN A */}
      <TouchableOpacity onPress={() => navigate("ScreenA")}>
        <Text> ScreenA </Text>
      </TouchableOpacity>

      {/* GO TO SCREEN B */}
      <TouchableOpacity onPress={() => navigate("ScreenB")}>
        <Text> ScreenB </Text>
      </TouchableOpacity>
    </View>
  );
}
```

Design your screens (components) **ScreenA** and **ScreenB**. Reload your app, navigate from the Home screen to **“ScreenA”**, and then swipe in any direction as we’ve set up **“twoDimensionalSwipe”** for ScreenA. For **“ScreenB”**, perform a swipe down, as we’ve configured **“swipeDown”** for it. You’ll observe an effect like the one shown below: 👇

![](../images/ReactNativeScreen3.30/output.gif)

## That’s it 🙌

The **V3.30** release in **React Native Screens** introduces enhanced transition animations for smoother and more visually appealing navigation when returning to the previous screen.

### [🙏 If you find my R&D helpful, please give a STAR ⭐️](https://github.com/anisurrahman072/React-Native-SDK-Research)
