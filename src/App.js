import React from 'react';
import './App.css';
import PersonCard from './Components/PersonCard';
import MyNewComponent from './Components/MyNewComponent';
import LightSwitch from './Components/LightSwitch';

function App() {
  return (
    // <LightSwitch></LightSwitch>
    <div className="App">
      {/* <div>
        <MyNewComponent header={ "Header Prop" }>
          <p>This is a child</p>
          <p>This is another child</p>
          <p>This is even another child</p>
        </MyNewComponent> 
      </div> */}
      <div>
        <PersonCard 
        firstName="Jane" 
        lastName="Doe"
        age={45}
        hairColor = "Black"
        />
        <PersonCard 
        firstName="John" 
        lastName="Smith"
        age={88}
        hairColor = "Brown"
        />
        <PersonCard 
        firstName="Milard" 
        lastName="Fillmore"
        age={50}
        hairColor = "Brown"
        />
        <PersonCard 
        firstName="Maria" 
        lastName="Smith"
        age={62}
        hairColor = "Brown"
        />
      </div>
    </div>
  );
}

export default App;
