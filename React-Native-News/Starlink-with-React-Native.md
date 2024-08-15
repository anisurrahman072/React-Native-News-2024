# Starlink App was built with React Native 😳

$\textcolor{chocolate}{\text{\textbf{Posted on Jun 6, 2024}}}$

Hey **React Native 🩵** Developers,

One of the biggest and most exciting conferences, [**App Js Conf 2024**](https://appjs.co/) on **React Native**, organized by [**Software Mansion**](https://x.com/swmansion) with [**Expo**](https://x.com/expo) as the main partner, has recently concluded. The three-day event started on May 22nd, filled with exciting talks. One of the most exciting talks was on **❝ Starlink App was built with React Native ❞**. Today, we will explore more details about it! 🚀

$\textcolor{crimson}{\text{\textbf{NOTE:}}}$ If you want to learn more about all the exciting talks at [**App Js Conf 2024**](https://appjs.co/), then read my detailed [**article (news)**](https://github.com/anisurrahman072/React-Native-News-2024/blob/master/React-Native-Conference-Talks/App-Js-Conf-2024.md) on it.

# What is Starlink?

Starlink is a space-based internet service provider that offers high-speed, low-latency internet from space to nearly any location on the planet. Starlink is currently available in 100 countries and has over 3 million users.

[**Aaron**](https://x.com/aarongrider) from [**SpaceX**](https://x.com/SpaceX) and his team are building the [**Starlink**](https://x.com/Starlink) mobile app by using [**Expo**](https://x.com/expo). The app is provided alongside the Starlink device and serves as the primary interface for configuring the local network, managing services, troubleshooting connectivity issues, and finding and installing a location without obstructions.

# Sky Scanner By ExpoGL

Sky Scanner is a tool in the Starlink app that helps users choose an installation location for the Starlink device by informing them of how much obstruction is in the sky and the quality of service they will receive from that location. This was the very first tool built in the app, by using a 3D effect. The libraries that were used are:

- Expo-camera
- Expo-asset
- Three.js
- ExpoGL & some other

By using **`ExpoGL`** and **`Three.js`**, the team built a real-time rendering of dots on the screen (as seen below) and a progress bar. Additionally, the Starlink team developed a native module to receive the device’s **accelerometer** (for device orientation) and **gyroscope** data (for camera positioning in the 3D scene). The app continuously captures images while users scan the sky.

![Untitled design (16) (1).gif](../images/AppJsConf2024/img17.gif)

After the successful completion of scanning, a **MAP** is created with the help of **`expo-assets`** and a pre-trained model (applied to those images using **tensorflow.js**). Then, the team uses **`ExpoGL`**, which generates a **matrix** (array of numbers). This matrix is then converted into a data structure compatible with **`three.js`**, as shown below, to display the locations of obstructions in the sky (red indicating the obstructions).

![Screenshot 2024-06-03 at 6.45.54 AM.png](../images/AppJsConf2024/img18.png)

# 3D Rendering in Starlink App

We observed some cool **3D rendering** up there, and making these renderings is always hard. Even the engineers at **SpaceX** found it tough. But they figured it out with some smart steps and tools.

**`ExpoGL`** (useful for making 2D and 3D renderings) uses **`OpenGL`** (a well-known 3D tool that lets developers work with the GPU to make pictures faster and more efficient). However, coding with **ExpoGL** or **OpenGL** can be hard. So, Starlink planned to use **`three.js`** (it creates and displays animated 3D computer graphics) on top of the **ExpoGL** which made the 3D animation **code much simpler** to build. But **three.js** has its own issue. It uses an **imperative API** (code that performs step-by-step and you can’t use hooks or states). To fix this, the team decided to use **`‘React Three Fiber’`** (a declarative API that’s easier and also built on top of **`three.js` & `ExpoGL`**) 🚀.

Super cool, right? Yeah, the Starlink team added lots of 3D animations like the one below with the help of the ‘React Three Fiber’ library on top of **ExpoGL**. 🚀

![Untitled design (17).gif](../images/AppJsConf2024/img19.gif)

# That's All 🙋‍♂️

I hope you enjoyed reading it. It would be really great if you could consider giving it a [**STAR**](https://github.com/anisurrahman072/React-Native-News-2024) ⭐️.

# About Author 👷‍♂️

I'm Anis, **Sr. React Native Engineer** and the author of [**React Native Advanced Guide Book**]() with **1.7K STAR** ⭐️. Over 5 years in **React Native** and **Full Stack**, I’ve built numerous production-grade apps. You can **[🩵 CONNECT me in X](https://twitter.com/anis_RNCore)** for any consultation.
