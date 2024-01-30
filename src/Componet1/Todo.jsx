import React, { useEffect } from 'react'
import {  useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./Todo.css"
// import Aos from 'aos'
// import 'aos/dist/aos.css'
import Aos from 'aos';
import "aos/dist/aos.css"


export default function Todo() {
    const [input, setinput] = useState('');
    
    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])
    const [val, setval] = useState([
       
    ]);
    const handleche = (event) => {
        setinput(event.target.value)
        console.log(input);
    }
    const handleadd = () => {
        setval([...val, { id: uuidv4(), Name: input }])
        console.log(id);
    }
    const update = (index) => {
        const update = prompt("Enter your update", val[index].Name);
        const copied = [...val];
        copied[index].Name = update;
        setval(copied)
    }
    const updelete = (id) => {
        const del = val.filter(da => da.id != id)
        setval(del)
    }
    return (
        <div className='whole'>
             <div className="con1" >
                <div className="sub"data-aos="zoom-in">
                <h1>TO-DO-LIST</h1>

                    <div className='d'>
                <input type="text" onChange={handleche} />
                <button className='btn-1' onClick={handleadd}>add</button>
                </div>
            <div className='res'>
            {val.map((da, i) => (
                <div className="connn"data-aos="zoom-in">

               
                <ul key={i}>
                    <li className='head-2'>{da.Name}
                    </li>
                </ul>
                        <div className="btn">
                        <button  onClick={() => update(i)} className='btn-2'>Update</button>
                        <button onClick={() => updelete(da.id)} className='btn-2'>delete</button>
                        </div>
                      

{/* viswa.murugantellteam.com */}
</div>
            ))}
            </div>
            
                </div>
             </div>
        </div>
    )
}
