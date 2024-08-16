# Yoga 3.0 has been released 🔥

$\textcolor{chocolate}{\text{\textbf{Posted on May 2, 2024}}}$

Hey **React Native 🩵** Developers,

Exciting news in the world of React Native is that **V0.74** was released just a couple of days ago with over **1600 commits** and lots of exciting improvements, including **❝ Yoga 3.0 ❞**.

$\textcolor{crimson}{\text{\textbf{NOTE:}}}$ If you want to learn more about the **React Native V0.74** release, then read my detailed [**article (news)**](https://github.com/anisurrahman072/React-Native-News-2024/blob/master/React-Native-Releases/React-Native-V0.74.md) on it.

# Yoga — The Layout Engine

Yoga is an open-source **layout engine** developed by Meta. The engine which refers to **how UI elements** (such as buttons, text, images, etc.) are **arranged** and **positioned** within a user interface.

Yoga calculates these four layout properties for each UI element.

1.  **Positioning**

2.  **Sizing**

3.  **Alignment**

4.  **Spacing**

With **Yoga**, you can create **responsive layouts** that adapt to different screen sizes and orientations. It also implements a widely used concept called **CSS Flexbox** in React Native. So you already feel that yoga is the heart (♥︎) of React Native flexible UI.

# Yoga 3.0 — what’s new?

In all previous versions of React Native, there were some incorrect layout behaviors. **Yoga 3** solved all of them. One of the most common issues was that the **‘row-reverse’** style was not functioning properly.

Let’s look at the image below where the **left** one is from **V0.73** and the **right** one is from **V0.74**.

![](https://cdn-images-1.medium.com/max/5760/1*pJQga189wcrMpV8J0chYxg.png)

In the above image, we have a **\<Container/>**, then inside it a **\<Parent/>** component, then inside **two \<Child/>** components.

We then applied this style in the **\<Parent/>** component.

```javascript
    // Style for <Parent/> component
    style={{
          flexDirection: 'row-reverse',
          backgroundColor: 'dodgerblue',
          flex: 1,
          marginLeft: 100,
          marginRight: 20,
          marginVertical: 20,
          alignItems: 'center'
    }}
```

Did you notice, that we added a **marginLeft** of **100** pixels for **\<Parent/>**?

- Yeah, but see the output in React Native **V0.73** (the left one) from the above image. It shows a 100 pixels margin on the **right (not on the left)**!!

- Okay, now let’s see the output of React Native **V0.74** (the right one). Great, in V0.74 we see a perfect 100-pixel margin at **left,** and also two **\<Child/>** components got **reversed** 🚀

So, in Yoga-2, if you apply a **‘row-reverse’** flex-direction with **“margin”** or **“padding”** or **“border”** in a component then the edges of that component also get flipped. But in Yoga-3 it has been solved perfectly 💯

**Yoga-3** has brought some other important styling components that were missing in Yoga-2.

- **'space-evenly'** property for alignContent style

- **'static'** property for position style

# That's All 🙋‍♂️

I hope you enjoyed reading it. It would be really great if you could consider giving it a [**STAR**](https://github.com/anisurrahman072/React-Native-News-2024) ⭐️.

# About Author 👷‍♂️

I'm Anis, **Sr. React Native Engineer** and the author of [**React Native Advanced Guide Book**]() with **1.7K STAR** ⭐️. Over 5 years in **React Native** and **Full Stack**, I’ve built numerous production-grade apps. You can **[🩵 CONNECT me in X](https://twitter.com/anis_RNCore)** for any consultation.
