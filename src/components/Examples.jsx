import { useState } from 'react'
import Section from './Section.jsx';
import TabButton from './TabButton.jsx' 
import { EXAMPLES } from '../data.js'
export default function Examples(){
    
   
      const [selectedItem, setSelectedItem] = useState();
      function handleSelect(selctedIndex) {
        setSelectedItem(selctedIndex);
        console.log(`Selected item: ${selectedItem}`);
      }
    return(
    <Section title={"Examples"} id="examples">
        <menu>
         
         <>
           <TabButton isSelected={selectedItem==="components"} onClick={()=>handleSelect('components')}>Component</TabButton>
           <TabButton isSelected={selectedItem==="jsx"} onClick={()=>handleSelect('jsx')}>JSX</TabButton>
           <TabButton isSelected={selectedItem==="props"} onClick={()=>handleSelect("props")}>PROPS</TabButton>
           <TabButton isSelected={selectedItem==="state"} onClick={()=>handleSelect("state")}>STATE</TabButton>
         </>
       
       </menu>
       {!selectedItem? <p>Select a tab to see the example</p> :
        <div id="tab-content">
          <h3>{EXAMPLES[selectedItem].title}</h3>
          <p>{EXAMPLES[selectedItem].description}</p>
          <pre>
            <code>{EXAMPLES[selectedItem].code}</code>
          </pre>
        </div> }
       
         
        
        </Section>)
}