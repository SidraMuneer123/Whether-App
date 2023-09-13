import React, { useEffect, useState } from 'react';
// import FontAwesomeIcon from './fontawesome'

const App = () => {
  const [changes , setChanges] = useState('London');
  const [data , setData] = useState('');
  const [countrys , setCountry] = useState('');
  const fetchApi = async() =>{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${changes}&units=metric&appid=d1e14855d8c859aa3daa0cf65450e2d6`)
    const response = await res.json();
    console.log(response);
    setData(response.main);
    setCountry(response.sys)
  }
  useEffect(()=>{
    fetchApi();
  },[changes] )
  const change = (event)=>{
    setChanges(event.target.value)

  }
  return (
    <>
  
      {/* //bismilah */}
      <div className="whole">
        <div className="center">
          <input placeholder='Enter City Name' onChange={change} className='text-center' type="text" />
          <div className="span">
          <i class="fa-solid fa-street-view fa-beat hello" style={{"color": "#ffffff"}}></i>

          
                    <h1>{changes}</h1>
          </div>
          <div className="box">
          {!data ? (<p>Data Not Found</p>) : 
          <>
    
            <h1>{data.temp}° Cel</h1>
            <p> State of {countrys.country}</p>

            </>
  }
            <p>Min:5.25° Cel │ Min:5.25° Cel </p>
          </div>
          
        </div>
      </div>
    </>
    
  )
}

export default App
