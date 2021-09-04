# React Basics ⚛️

## ⚠️

To add auto-complete in React:

- `Command + Shift + P`
- Preferences: Configure language specific settings => JavaScript => opens `settings.json`
- Added:
  ```js
  "emmet.triggerExpansionOnTab": true,
  "emmet.includeLanguages": {
  "javascript": "javascriptreact"
  }
  ```

### Create React App 🍰

`npx create-react-app [app_name]`
`cd [app_name]`
`npm start`

### Class Components

- We can write functions that return HTML, but we can also write **Classes** that return HTML.
- React gives us more functionality through Classes, than just writing a function.
- Implementation:

```js
import React, { Component } from 'react';
```

⬇️ Turning the function App into a Component...

```js
class App extends Component {
    render() {
        return (

        );
    }
}
```

↪️ another way to do it ...

```js
import React from 'react';
```

and instead we add it after the `extends` keyword

```js
class App extends React.Component {
    render() {
        return (

        );
    }
}
```

- The `return ();` that was going inside the _function App_, now goes into a class. This way we can make use of special functionalities of the classes, like the `render()` method.
- The `render()` method returns HTML.
- `super()` helps us by calling `React.Component`'s `constructor()`🚗
- the **components** have some **built-in methods**

### JSX Attributes 🦩

- `className` instead of `class`, because `class` means something else in JavaScript.
- `{}` is a JS expression, a variable, something that produces a value, eg. `src={}`, `<p>{4 + 5}</p>`
- `onClick` instead of `onclick`
- `Babel` will convert JSX to regular JS

### Uni-directional Flow 🌊

- We are not allowed to modify state in React without calling the `setState()` method.
- When we set the state to something different, the `render()` method gets called again, so we can re-render the component in the new state.

### Map() + _key_ attribute 🗺️ 🔑

- Anytime you use the `map()` function inside of _render_, or you have a list of the **same jsx elements** one after another, **they need a key attribute** (and CRA will warn you about it if you miss it)

### SPA: Single Page Application 📄

- instead of requesting a page, we are just requesting for **data**, which is being rendered in the page we already are.
- we get the ability to communicate with outside servers, with servers we don't control.
- the API provides us a way to access info from a server

### Lifecycle Methods :cyclone:

- they get called at different stages automatically by React, based on when the component is getting rendered.
- **componentDidMount**: The `componentDidMount()` method allows us to execute the React code _when the component is already placed in the DOM_ (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.
