# React Compiler (Now in Experimental Release 🙌)

$\textcolor{chocolate}{\text{\textbf{Posted on May 30, 2024}}}$

Hey **React Native 🩵** Developers,

The biggest **React** Conference, [**React Conf 2024**](https://conf.react.dev/) organized by [**Meta**](https://x.com/Meta) and [**Callstack**](https://x.com/callstackio), wrapped up recently. It was a two-day event that started on May 15th, filled with exciting talks. One of the most exciting talks was on **❝ React Compiler now in Experimental Release ❞**. Today, we will explore more details about it! 🚀

$\textcolor{crimson}{\text{\textbf{NOTE:}}}$ If you want to learn more about all the exciting talks at [**React Conf 2024**](https://conf.react.dev/), then read my detailed [**article (news)**](https://github.com/anisurrahman072/React-Native-News-2024/blob/master/React-Native-Conference-Talks/React-Conf-2024.md) on it.

# Back to Stage 🙋‍♂️

Finally, the **React team** has announced an experimental release of the **React compiler** 🚀. The community has made huge comments on this. Let’s explore it more here.

# What is React Compiler?

**React Compiler** is a build-time-only tool that automatically optimizes your React application. It works with plain JavaScript and understands the **Rules of React** (which we will discuss later), so there’s no need to rewrite any code to use it. If it detects violations of the rules, it will automatically skip those specific components or hooks and continue to compile the rest of the code safely.

# How does React Compiler work?

To optimize applications, the **`React Compiler`** automatically memoizes your code. You may already be familiar with memoization through APIs such as **`useMemo`**, **`useCallback`**, and **`React.memo`**. With these APIs, you can inform React that certain parts of your application don’t need to recompute if their inputs remain unchanged, thereby reducing the workload during updates. If your codebase is already well-memoized, you might not see significant performance improvements with the compiler.

# What React Compiler memoize?

The initial release of the React Compiler is primarily focused on these two areas to improve app performance by memoization.

1. Skipping all **`<Child/>`** components from re-rendering when **`<Parent/>`** component state got updated.
2. Memoizing all expensive calculations.

# Points to remember

Let’s see the below code snippet:

```javascript
// **Not** memoized by React Compiler, since this is not a component or hook
function expensivelyProcessAReallyLargeArrayOfObjects() {
  /* ... */
}

// Memoized by React Compiler since this is a component
function TableContainer({ items }) {
  // This function call would be memoized:
  const data = expensivelyProcessAReallyLargeArrayOfObjects(items);
  // ...
}
```

- React Compiler only memoizes React **components** and **hooks**, not every function: In this above code, we see that function **`expensivelyProcessAReallyLargeArrayOfObjects()`** will not be memoized by React Compiler as it is not a component (react component returns a React element) nor a hook (hook manage states). The function in this case is just processing an array of objects.
- The React Compiler’s memoization works separately for each component or hook: If you have a function like **`expensivelyProcessAReallyLargeArrayOfObjects()`** that’s used in several places, it will do the same heavy calculation each time, even if you’re passing the same data.

# Rules of React

Let’s easily understand which React rules should be followed to fully achieve the power of the React Compiler.

- **Components and Hooks must be pure:** Below are the conditions to be pure.
  - Always produce **the same output** given the same inputs.
  - **No side effects** (Ex: API calls, setTimeout, setInterval, etc) during the rendering phase.
  - Component **Props** and **states** can’t be mutated (changed) directly.
  - **Return values** and **arguments** to Hooks are immutable (read-only).
  - Don’t mutate (change) values after they’ve been used in JSX.
- **React calls Components and Hooks**
  - Don’t call components like regular functions (Ex: Don’t call by Component(). Instead, call it by `<Component/>`).
  - Hooks should only be called inside of components.
- **Rules of Hooks**
  - Only call Hooks at the top level of the component
  - Don’t call Hooks from regular JavaScript functions.

# That's All 🙋‍♂️

I hope you enjoyed reading it. It would be really great if you could consider giving it a [**STAR**](https://github.com/anisurrahman072/React-Native-News-2024) ⭐️.

# About Author 👷‍♂️

I'm Anis, **Sr. React Native Engineer** and the author of [**React Native Advanced Guide Book**]() with **1.7K STAR** ⭐️. Over 5 years in **React Native** and **Full Stack**, I’ve built numerous production-grade apps. You can **[🩵 CONNECT me in X](https://twitter.com/anis_RNCore)** for any consultation.
