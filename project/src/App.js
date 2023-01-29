import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';



function App() {
  const [sff,ss]=useState([])
  const api="a49bf4b57b3b4d9192b81ad9d7d00596"
  // sss="https://api.spoonacular.com/recipes/716429/information?apiKey=${api}"
 async function aa(){

    
 const apiy=  await fetch(`https://api.spoonacular.com/recipes/random?number=100&apiKey=${api}`)
      const data= await apiy.json()

      
        console.log(data.recipes)
        ss(data.recipes)
      


      
      
      
      
        
      
      
      // .catch(err => console.error(err));
  }
  
  useEffect(()=>{

    console.log("in effect")
   aa()
    
  },[])


  return (
    <div className="App">
      <h1>
        
      fffffffff
      </h1> 
      <div className='all-food' >

      
{
  sff.map((recipes,index)=>{
    return(
      <div>
      <div> {recipes.title} </div>
      <img src={recipes.image} alt="" className='image' />
      </div>

    )
  })
}
</div>
    </div>
  );
}

export default App;
