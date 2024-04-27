# React Native V0.74 — Stable is out 🚀

Hi **notJust** Developers,

Exciting news in the world of React Native is that **V0.74** was released just a couple of days ago with over **1600 commits**. The highlights are:

- **Yoga 3.0**

- **New Architecture: Bridgeless by Default**

- **New Architecture: Batched onLayout Updates**

- **Yarn 3 for New Projects**

Let’s dive into each of the new highlights.

![](https://cdn-images-1.medium.com/max/5760/1*pJQga189wcrMpV8J0chYxg.png)

## Yoga 3.0

Let's understand first what **yoga** is in React Native.

### Yoga — the layout engine

Yoga is an open-source **layout engine** developed by Meta. The engine which refers to **how UI elements** (such as buttons, text, images, etc.) are **arranged** and **positioned** within a user interface.

Yoga calculates these four for each UI element.

1.  **Positioning**

2.  **Sizing**

3.  **Alignment**

4.  **Spacing**

With **Yoga**, you can create **responsive layouts** that adapt to different screen sizes and orientations. It also implements a widely used concept called **CSS Flexbox** in React Native. So you already feel that yoga is the heart (♥︎) of React Native flexible UI.

### Yoga 3.0 — what’s new?

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

Yeah, but see the output in React Native **V0.73** (the left one) from the above image. It shows a 100 pixels margin on the **right (not on the left)**!!

Okay, now let’s see the output of React Native **V0.74** (the right one). Great, in V0.74 we see a perfect 100-pixel margin at **left,** and also two **\<Child/>** components got **reversed** 🚀

So, in Yoga-2, if you apply a **‘row-reverse’** flex-direction with **“margin”** or **“padding”** or **“border”** in a component then the edges of that component also get flipped. But in Yoga-3 it has been solved perfectly 💯

**Yoga-3** has brought some other important styling components that were missing in Yoga-2.

- **'space-evenly'** property for alignContent style

- **'static'** property for position style

## **New Architecture: Bridgeless by Default**

### Old Architecture

React Native previously used a **bridge** to communicate between JavaScript and native modules. The Modules are written in C++, Objective C, Java, or kotlin to access native features like cameras, sensors, etc. Unfortunately, the **Bridge** has some limitations.

One main limitation is that each time one layer communicates with another, it involves serializing (converting JS Object to JSON String) and deserializing (converting JSON String back to JS Object) data. Since the conversion takes time, this process adds a performance issue to the communication flow.

### New Architecture — performance booster

The good news is that the React Native team was able to replace the bridge with an interface called **JSI (JavaScript Interface)**. It was written in C++ and it opens up all the native features available to your JS code, which means that you can call native methods without any data serialization or deserialization, making the app super fast.

### Remove OLD architecture dependencies

JSI is the core part of New Architecture. To enable JSI (New Architecture) with its full power in our app, we need to first remove the app dependency from OLD **bridge** architecture. To do that, the React Native Team has introduced **three pillars** of New Architecture, which allow us to remove full dependency on the bridge.

1.  **TurboModules:** It removed the app dependency on **native calls** from the bridge (released on V0.68)

2.  **Fabric Renderer:** It removed the app dependency on **component rendering** from the bridge (released on V0.68)

3.  **Bridgeless Mode:** It removed the app dependency on **everything else** (i.e: the rest of the React Native runtime: error handling, global event emitters, timers, and more) from the bridge (released on V0.73)

### What is new in V0.74?

From **V0.74**, once you enable the New Architecture, you will see that **‘Bridgeless Mode’** has been enabled **automatically**. However, the New Architecture itself is still not yet enabled by default.

When you enable New Architecture in your React Native app with **V0.74**, you will see these **two lines** like the below in your Metro Log:

![](https://cdn-images-1.medium.com/max/5760/1*o1vN9WObY9GFSlp2f6lG1g.png)

That’s it 🚀. From React Native **V0.74**, you **don’t need to enable Bridgeless mode manually** after enabling New Architecture 💯

## **New Architecture: Batched onLayout Updates**

Another great news is that the React Native team not only made the New Architecture **Bridgeless Mode** the default, but they also improved this architecture to handle batched **onLayout** updates (executing multiple updates in a single rendering). This optimization enhances performance by minimizing layout-related computations during rendering.

### The “onLayout” props

The onLayout prop in React Native is used to handle **layout (position)** changes for a component. When the layout of a component changes (due to mounting, resizing, rotation, or other factors), the onLayout callback function is triggered.

You can use this prop like below to **perform actions** based on the updated layout information.

```javascript
function App() {
  return (
    <View
      onLayout={() => {
        console.log("Component has been invoked 🚀");
      }}
    />
  );
}
```

### How “onLayout" batch update works?

Assume the component **\<App/>** is as shown below, where each **View** triggers an **onLayout** callback function when mounted.

```javascript
function App() {
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);

  console.log("✅ COMPONENT RE-RENDERED .....");

  return (
    <View>
      <View
        onLayout={() => {
          console.log("FIRST View invoked");
          setState1(true); // Update state1 when the View mounts
        }}
      ></View>

      <View
        onLayout={() => {
          console.log("SECOND View invoked");
          setState2(true); // Update state2 when the View mounts
        }}
      ></View>

      <View
        onLayout={() => {
          console.log("THIRD View invoked");
          setState3(true); // Update state3 when the View mounts
        }}
      ></View>
    </View>
  );
}
```

Now, in React Native **V0.73**, you will see an output like below 👇

![](https://cdn-images-1.medium.com/max/2000/1*i3Ahq2Dc1OwVXY-gfhLSCQ.png)

Did you notice that, on each execution of the **“onLayout”** callback, it re-renders the whole component? Yeah, it is not expected.

Now, let’s see the output in React Native **V0.74** with enabling **New Architecture** 👇

![](https://cdn-images-1.medium.com/max/2524/1*6YXc49M7CsVZFNeZh1N6yQ.png)

Amazing performance 🔥. The component got re-rendered only once for all 3 **“onLayout”** callback execution.

A good summary in the below image on **“onLayout”** batch update 👇

![](https://cdn-images-1.medium.com/max/5760/1*fMOuEt9ovEuLiZtKcbwvFg.png)

## **Yarn 3 for New Projects**

**Yarn 3** is now the default JavaScript package manager for new projects initialized with React Native Community CLI. This replaces Yarn Classic **(1.x)**, which was deprecated and previously used as the default.

Yarn 3 speeds up the process of installing and updating dependencies and optimizes how dependencies are stored.

## That’s it 🙌

React Native version **0.74** introduced significant improvements in component layout, architecture, batched onLayout updates, and integration with Yarn 3.

## Did you learn something new today?

If you found this email valuable, forward it to one friend or coworker that can benefit from it as well. That would be much appreciated 🙏

**The newsletter was written by [Anis](https://twitter.com/anis_RNCore) and edited by [Vadim Savin](https://twitter.com/VadimNotJustDev).**
