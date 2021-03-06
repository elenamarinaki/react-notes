# React Basics βοΈ

## β οΈ

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

### Create React App π°

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

β¬οΈ Turning the function App into a Component...

```js
class App extends Component {
    render() {
        return (

        );
    }
}
```

βͺοΈ another way to do it ...

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
- `super()` helps us by calling `React.Component`'s `constructor()`π
- the **components** have some **built-in methods**

### JSX Attributes π¦©

- `className` instead of `class`, because `class` means something else in JavaScript.
- `{}` is a JS expression, a variable, something that produces a value, eg. `src={}`, `<p>{4 + 5}</p>`
- `onClick` instead of `onclick`
- `Babel` will convert JSX to regular JS

### Uni-directional Flow π

- We are not allowed to modify state in React without calling the `setState()` method.
- When we set the state to something different, the `render()` method gets called again, so we can re-render the component in the new state.

### Map() + _key_ attribute πΊοΈ π

- Anytime you use the `map()` function inside of _render_, or you have a list of the **same jsx elements** one after another, **they need a key attribute** (and CRA will warn you about it if you miss it)

### SPA: Single Page Application π

- instead of requesting a page, we are just requesting for **data**, which is being rendered in the page we already are.
- we get the ability to communicate with outside servers, with servers we don't control.
- the API provides us a way to access info from a server

### Lifecycle Methods :cyclone:

- they get called at different stages automatically by React, based on when the component is getting rendered.
- **componentDidMount**: The `componentDidMount()` method allows us to execute the React code _when the component is already placed in the DOM_ (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.

### Props π§±

- any parameters that we pass inside a created component
- is going to be an `object` of ANY properties I pass onto my component in use

In `card-list.component.jsx` :

```js
import React from 'react';

export const CardList = (props) => {
  console.log(props);
  return <div>Hello</div>;
};
```

...and inside `App.js`

```js
<CardList name='Elena' />
```

_becomes..._

```js
{
  name: 'Elena';
}
```

β¨

- The props have children!
  If in `App.js` we pass:

```js
<CardList name='Elena'>Elena2</CardList>
```

... the `Elena2` is a **prop child**! Or anything in between these tags!!

In `card-list.component.jsx`:

```js
import React from 'react';

export const CardList = (props) => {
  console.log(props);
  return <div>{props.children}</div>;
};
```

  <img src='https://media.giphy.com/media/tlGD7PDy1w8fK/giphy.gif?cid=ecf05e47x6mnhe54acc05ki3xh5e8l8jzrm4ns10g20inqia&rid=giphy.gif&ct=g' width=200>

### The job of a React Developer π€

- Decide on **Components**
- Decide the **State** and _where it lives_
- _What_ changes _when_ state changes?

Benefits => more flexibility, re-usable components, easier testing! β¨

### State VS Props πͺ

- A **state** is passed down to a component as an **_attribute_** (just like HTML).
- As soon as we pass a state as component, the component receives this state as a **prop**.
- State changes because of user interaction.
- The key attribute helps React distinguish multiple components of the same kind. This way, updating the DOM is so efficient.
- _State can be anywhere_, not only in the App.js component.

#### π¬ The `onChange` event in React detects when the value of an input element changes.

#### π§ The `setState` is an _asynchronous_ function.

#### π§ Events in React universe => _Synthetic_ events: detect when DOM events happen.

#### β οΈ We cannot use `setState` inside `render()`, it will create a loop.

### Functional VS Class Components π§

- Example: search box π
- Functional components, unlike class components, do **NOT** have access to **state**, because they do not have access to constructor.
- Functional components do **NOT** have access to **life cycle methods**.
- The functional component just **GETS** some **props** and **RETURNS** some **HTML**.
- Easier to read π and to test π§ͺ.

### Context of `this.` π

- The first thing that runs in an App is the _constructor_.
- If we want to control the context of `this`, we have to define it in the constructor itself.
- Using method `.bind()`:
  ```js
  this.handleChange = this.handleChange.bind(this);
  ```
  Is a **method** on any _function_ that returns a **new** _function_, where the context of `this.` is set to whatever we passed to it.
- Overcoming this verbose way by using **_arrow functions_**:
  ```js
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  ```
  β οΈ `This.` is bind to where the arrow function was defined in the first place! (_lexical scoping_)

### React Native & React DOM π₯«

- Both have the _same react engine_.
- They use _different packages_ though.
- In developer tools, we can type `React` and `ReactDOM`, which gives us access to the new created objects offered by the added packages:
  <img src='images/screen_1.png' width=350>
- The above is equal to:
  ```js
  import React from 'react';
  ```
- `ReactDOM` helps us these HTML elements, using **functions** or **classes**.

### `yarn.lock` or `npm.lock` files π

- Auto-generated file by either `yarn` or `npm` that locks the version of all the packages inside of our application, within a specific range, based on the rules that we set inside of `package.json`.
- They ensure everybody is using a consistent version of these dependencies.

### Asynchronous `.setState()` β²οΈ

- There're might be a lot of `.setState()`s in one App. This might cause potential problems with performance.
- React butches them all and executes them together.
- β οΈ General rule => if we're using `this.state` in `.setState()`, we do it like this:
  ```jsx
  this.setState(
    (prevState, prevProps) => {
      return { numberNo: prevState.numberNo + 1 };
    },
    () => {
      console.log(this.state.numberNo);
    }
  );
  ```
- Side note: we can _avoid_ using the `constructor`, if we have **no props**. Instead, we can do this =>
  ```jsx
  state = {
    numberNo = 49
  }
  ```
  This is interpreted by _Babel_ and understood as the `this.state` of the `constructor`.
