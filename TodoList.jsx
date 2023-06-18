import { useState } from "react";
import { Icon } from '@iconify/react';
let next = 0;
export default function TodoList(){
    let [store, putStore] = useState([]);
    let [inputs, putInput] = useState('');
    function inputed(e){
      putInput(e.target.value);
    }
    function array(e){
      if(e.key === 'Enter'){
      if(!inputs){
        alert('Enter something')
       null;
      }
      else{
      putStore([...store, {ids: next++, name: inputs}])
      putInput('')
      }
    };
  }
  function click(){
    if(!inputs){
      alert('Enter something')
     null;
    }
    else{
    putStore([...store, {ids: next++, name: inputs}])
    putInput('')
    }
  }
    return(
        <div className="body">
            <div className="inner">
            <h1>Todo List App</h1>
                <div className="outer">
          <input onChange={inputed} onKeyUp={array} value={inputs} className="inter" placeholder='Add a note'/>
          <button className="plus" onClick={click}><Icon icon="uil:plus" color="white"/></button>
          </div>
          <div className="notes">
            {store.map(stores => (
              <>
              <div className="list">
             <div key={stores.ids} className="words">{stores.name}</div>
             <button className="del"onClick={e => {
              let del = [...store];
              let fil = del.filter(filt => stores.ids != filt.ids);
              putStore(fil);
             }}><Icon icon="material-symbols:delete-outline" color="white" /></button>
             </div>
             </>
            ))}
          </div>
          </div>
        </div>
    )
};
