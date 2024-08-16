# New Expo Fingerprint for Native Runtime 🎯

$\textcolor{chocolate}{\text{\textbf{Posted on May 16, 2024}}}$

Hey **React Native 🩵** Developers,

The 𝝠 [**Expo**](https://x.com/expo) team has just released **SDK 51**, packed with amazing features and improvements, including **❝ Expo Fingerprint now in Beta ❞**.

In **Expo SDK 51**, the **Fingerprint runtime** version policy has been promoted from experimental status to **beta**. Let’s understand details about it.

$\textcolor{crimson}{\text{\textbf{NOTE:}}}$ If you want to learn more about the **𝝠 Expo SDK 51** release, then read my detailed [**article (news)**](https://github.com/anisurrahman072/React-Native-News-2024/blob/master/Expo-SDK-Releases/Expo-Sdk51.md) on it.

# What is **Fingerprint?**

Fingerprint is a **hash value** (a long string of numbers and letters) that represents the exact state of your app’s native code at a certain point in time. When you make changes to the native code, you get a new “fingerprint” for the updated code.

A real-life use case occurs when you install an npm package with native dependencies, the app creates a new fingerprint. For example: `npx expo install expo-camera` (for expo-based app) or `npm install react-native-vision-camera` (for bare react native app).

# **@expo/fingerprint in action**

The new **`@expo/fingerprint`** package fully supports projects made with [Expo CLI](https://docs.expo.dev/more/expo-cli/) and also works with any [bare React Native apps](https://docs.expo.dev/bare/overview/) to detect any changes in native code. By running **`npx @expo/fingerprint@latest /path/to/yourProject`**, you can get a full picture of your project's native setup. Notice that it will identify what changed, for example, if you installed **expo-camera,** you will see something like this.

![alt text](../images/ExpoSdk51/image-2.png)

# Why **@expo/fingerprint?**

The creation of `@expo/fingerprint` provided answers to all these questions from community:

- Does a pull request include native code changes and need to initiate a new build for testing?
- Is my update compatible with the runtime in my production app? Or will it crash the app?
- Does a project require a [development build](https://docs.expo.dev/develop/development-builds/introduction/), or can I experiment with it in Expo Go?

# That's All 🙋‍♂️

I hope you enjoyed reading it. It would be really great if you could consider giving it a [**STAR**](https://github.com/anisurrahman072/React-Native-News-2024) ⭐️.

# About Author 👷‍♂️

I'm Anis, **Sr. React Native Engineer** and the author of [**React Native Advanced Guide Book**]() with **1.7K STAR** ⭐️. Over 5 years in **React Native** and **Full Stack**, I’ve built numerous production-grade apps. You can **[🩵 CONNECT me in X](https://twitter.com/anis_RNCore)** for any consultation.
