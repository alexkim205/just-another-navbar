# Just Another NavBar

Making a navbar and collapsible hamburger menu everytime I wanted to make a website was getting tedious.

This package is a responsive ReactJS navbar + sidebar to make my web dev life easier. Go to the [demo]() to see it in action.

## Installation

```{bash}
npm i just-another-navbar
yarn add just-another-navbar
```

## Usage

It's as simple as importing the component. Take a look at the `demo/` folder to look through the demo example.

```{javascript}
import React from 'react';
import { render } from 'react-dom';
import { JustAnotherNavBar as NavBar } from 'just-another-navbar/JustAnotherNavBar';

const App = () => (
  <React.Fragment>
    <NavBar/>
  </React.Fragment>
);

render(<App/>, document.getElementById('root'));
```