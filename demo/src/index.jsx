import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { JustAnotherNavBar } from '../../src/JustAnotherNavBar';
import { theme } from '../../src/_styles';
import '../../src/_styles/font.css';
import '../../src/_styles/base.css';

const Main = styled.div`
  font-family: Roboto;
  padding: 2em;
  h1 {
    font-size: 4em;
  }
  p {
    margin: 0 1em;
    padding-left: 1em;
    border-left: 5px solid ${theme.global.colors.accent}
  }
`;
const Name = styled.div`
  text-align: right;
  margin: 1em 5em 2em 0;
`;

const App = () => (
  <React.Fragment>
    <JustAnotherNavBar/>
    <Main>
      <h1># Just Another Title</h1>
      <h2>## Just another header</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam felis urna, scelerisque nec
        nunc vel, vestibulum varius ipsum. Nunc ultricies quam dolor, et pharetra orci tincidunt ut.
        Cras eu diam sit amet neque tincidunt sagittis. Donec orci eros, porta vitae dui nec,
        maximus placerat nunc. Nullam vulputate tellus nec dui placerat, at tincidunt lectus
        finibus. Pellentesque mi ex, consequat eget bibendum et, tincidunt eget nulla. Phasellus
        efficitur aliquam mauris sit amet posuere. Nullam consequat vel urna in cursus.
      </p>
      <Name>- Socrates</Name>
      <p>
        Etiam tristique ante ut orci volutpat aliquam. Aenean pretium dapibus ligula et fringilla.
        Sed nec egestas orci. Etiam imperdiet ex in felis fringilla, et feugiat lorem posuere.
        Pellentesque sed urna dui. Aenean eget orci ipsum. Nunc lobortis ut erat at consectetur.
        Nunc ex augue, ultrices vitae diam a, semper suscipit mi. In accumsan ullamcorper nunc, et
        interdum ipsum congue id. Integer volutpat in est quis porttitor. Sed ut condimentum mauris.
        Curabitur nec dui odio. Phasellus varius ultricies purus, ut commodo risus ultrices sed.
        Etiam sed vestibulum purus. Mauris rhoncus odio sit amet dui pretium, fermentum finibus dui
        sollicitudin. Aenean ut ultrices nisi, non faucibus ante.
      </p>
      <Name>- Plato</Name>
      <p>
        Quisque placerat, purus non elementum cursus, sem magna aliquam ligula, quis volutpat lorem
        est non libero. Vivamus vulputate egestas dui, a elementum ante lacinia in. Nunc mauris
        erat, pellentesque vitae aliquam nec, bibendum at neque. In enim ipsum, placerat vitae
        auctor vel, faucibus sed lectus. Sed in hendrerit tellus. Nunc scelerisque consectetur
        congue. Proin dignissim est blandit sem posuere, ac porta magna maximus. Aliquam mattis,
        odio ut fermentum scelerisque, metus tellus tristique ligula, a porta augue quam vel sem.
      </p>
      <Name>- Aristotle</Name>
    </Main>
  </React.Fragment>
);

render(<App/>, document.getElementById('root'));