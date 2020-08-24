import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Translate from './components/Translate';
import Dropdown from './components/Dropdown';
import List from './components/List';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'What is a dog?',
    content: `A dog is a type of domesticated animal. Known for its loyalty and
    faithfulness, it can be found as a welcome guest in many households
    across the world.`,
  },

  {
    title: 'What kinds of dogs are there?',
    content: `There are many breeds of dogs. Each breed varies in size and
    temperament. Owners often select a breed of dog that they find to be
    compatible with their own lifestyle and desires from a companion.`,
  },

  {
    title: 'How do you acquire a dog?',
    content: `A pet shop may be the most convenient way to buy a dog. Buying a dog
    from a private owner allows you to assess the pedigree and
    upbringing of your dog before choosing to take it home. Lastly,
    finding your dog from a shelter, helps give a good home to a dog who
    may not find one so readily.`,
  },
];

const options = [
  {
    label: 'The color Red',
    value: 'red',
  },
  {
    label: 'The color Orange',
    value: 'orange',
  },
  {
    label: 'The Lighe Blue',
    value: 'blue',
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <List />
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          label='Select a Color'
          options={options}
          selected={selected}
          onsetSelected={setSelected}
        />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
}

export default App;
