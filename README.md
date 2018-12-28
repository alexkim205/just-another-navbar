<p align="center">
<img width="400px" src="https://github.com/alexkim205/just-another-navbar/raw/master/demo/demo.gif">
</p>

# Just Another NavBar

Making a navbar and collapsible hamburger menu everytime I wanted to make a website was getting tedious. This package is a responsive ReactJS navbar + sidebar that makes my web dev life a bit easier.

Go to the [demo](https://alexkim205.github.io/just-another-navbar/) to see it in action.

## Installation

```{bash}
npm i just-another-navbar
yarn add just-another-navbar
```

## Usage

It's as simple as importing the component. Take a look at the `demo/` folder to see how it's being used in the demo.

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