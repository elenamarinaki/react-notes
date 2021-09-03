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
