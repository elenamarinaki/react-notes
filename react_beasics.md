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

- The `return ();` that was going inside the _function App_, now goes into a class. This way we can make use of special functionalities of the classes, like the `render()` method.
- The `render()` method returns HTML.

### JSX Attributes 🦩

- `className` instead of `class`, because `class` means something else in JavaScript.
- `{}` is a JS expression, a variable, something that produces a value, eg. `src={}`, `<p>{4 + 5}</p>`
- `onClick` instead of `onclick`

### Uni-directional Flow 🌊

- We are not allowed to modify state in React without calling the `setState()` method.
- When we set the state to something different, the `render()` method gets called again, so we can re-render the component in the new state.
