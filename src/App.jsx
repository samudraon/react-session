import React from 'react';
import Card from './components/Card/Card';
import Message from './components/NestedComponent/Message';
import Person from './components/NestedComponent/Person';
import { guns } from '../test';
import Basic from './components/Events/Basic';
import ArrayExample from './components/Events/ArrayExample';
import ObjectExample from './components/Events/ObjectExample';
import UseEffectExample from './components/Events/UseEffectExample'

const App = () => {

  return (
    <>
      {/* <Person></Person>
      <Message /> */}

      {/* <div className='grid grid-cols-3 gap-4 px-12'>
        {
          guns.map(item => {
            // console.log(item);
            return <Card {...item} key={item.id} />
          })
        }
      </div> */}

      {/* <Basic /> */}

      {/* <ArrayExample /> */}

      {/* <ObjectExample /> */}

      <UseEffectExample />
    </>
  );
};

export default App;