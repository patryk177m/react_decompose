import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
// Move each BEM block to a separate component (file) and import them here
const content = [
  `In elementum lorem eget est euismod ornare. Phasellus sit amet
        pellentesque mauris. Aliquam quis malesuada ex. Nullam eu aliquam
        nibh. Mauris molestie, urna accumsan ornare semper, augue nibh
        posuere lorem, vitae feugiat sem magna eget massa. Vivamus quis
        tincidunt dolor. Fusce efficitur, orci non vestibulum consequat,
        lectus turpis bibendum odio, in efficitur leo felis sed justo. Fusce
        commodo iaculis orci, quis imperdiet urna. Sed mollis facilisis lacus
        non condimentum. Nunc efficitur massa non neque elementum semper.
        Vestibulum lorem arcu, tincidunt in quam et, feugiat venenatis augue.
        Donec sed tincidunt tellus, a facilisis magna. Proin sit amet viverra
        nibh, bibendum gravida felis. Vivamus ut nunc id mauris posuere
        pellentesque. Praesent tincidunt id odio id feugiat.`,
  `In ac nisi lacus. Fusce est dolor, tincidunt ut bibendum vitae,
        fermentum ac quam. Aliquam pretium tristique nibh quis iaculis. In et
        cursus ex, eu aliquet ex. Proin facilisis lacus sit amet sapien
        ultrices, ut vehicula arcu lobortis. Vivamus mollis ipsum ut
        hendrerit molestie. Morbi lacinia, sapien eu dictum dignissim, tellus
        tortor congue magna, sit amet bibendum libero nisi id massa.`,
  `Donec arcu elit, euismod vel lobortis eu, fringilla sit amet dolor.
        Cras congue, massa nec sagittis mollis, dui felis ultrices magna,
        tincidunt finibus lorem quam in sem. Morbi odio turpis, pulvinar sit
        amet vulputate quis, ultricies eu libero. Donec ac maximus neque, nec
        maximus nibh. Morbi rhoncus convallis urna, accumsan porta lorem
        hendrerit in. Cras eget nisl dui. Morbi faucibus nisi eget ipsum
        semper vulputate. Mauris nec tincidunt lectus. Aenean ac mi consequat
        velit dignissim consectetur. Fusce placerat ac ipsum ac eleifend.
        Aenean quis faucibus ex.`,
        
]

const App = () => (
  <main className="app">
    <section className="welcome">
      <span className="welcome__text">Sticky Header!</span>
    </section>
    < Header />
    < Article content={content[0]}/>
  </main>
);

export default App;