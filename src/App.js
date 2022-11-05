import react from 'react'

import Itemleft from './component/itemLeft.jsx';
import Itemform from './component/itemForm.jsx'


// COMPONENT ROOT OR CONTAINER
function App() {
  return (
    <>
     <section className="container">
      <Itemleft/>
      <Itemform/>
     </section>
    </>
  );
}

export default App;
