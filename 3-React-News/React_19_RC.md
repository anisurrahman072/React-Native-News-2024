# React 19 RC

Hey **React Native** Developers,

The biggest **React** Conference, organized by [**Meta**](https://x.com/Meta) and [**Callstack**](https://x.com/callstackio), wrapped up recently. It was a two-day event that started on May 15th, filled with exciting announcements.

![alt text](../images/ReactConf2024/image.png)
Picture credit by [@mattcarrollcode](https://x.com/mattcarrollcode)

React team announced React 19 as RC (Release Candidate) which means React 19 will be stable in the next few weeks. Also, react 19 RC is now available on npm as V**18.3.** One of the most exciting parts of React 19 is that RSC (React Server Component) is now stable and will not break between major versions. Let’s explore RSC in-depth. 🚀

### What is RSC?

RSC (React Server Component) is a rendering technique where the Server can send fully interactive, dynamic UI components (Ex: custom sliders) to the client (web, desktop, or Mobile device).

RSC allows developers to write components that render on both the **server** and the **client**. It also allows for selective rendering of components on the server, which means only the necessary components are rendered, reducing the server’s computational load. In RSC, initial rendering happens on the server, improving performance and reducing user wait time.

In the next section, we will learn more details about how RSC works from [Evan Bacon](https://x.com/Baconbrix)'s talk.

**`NOTE:`** 2 more rendering techniques in React World came before the birth of RSC.

- Client Side Rendering (CSR)
- Server Side Rendering (SSR)

### Client Side Rendering (CSR)

In this rendering technique, the final HTML content and user interface (UI) components are generated on the client's browser or Mobile app using JavaScript.

Client-side rendering can cause slow performance and SEO issues, so SSR (Server Side Rendering) came to improve loading times and page visibility for search engines.

### Server Side Rendering (SSR)

This rendering technique is used in web development where the web page's content is rendered on the server instead of the client's browser & then sent to the device as JSON (a static UI representation) which makes the UX (user experience) faster page transitions & better SEO.

Pretty cool **SSR**, right? But wait, did you notice that in the line above, we mentioned **SSR uses JSON** (basically HTML)? Yes, that **JSON** is not interactive. So, to create a dynamic and interactive UI, RSC came into the spotlight 💯.
