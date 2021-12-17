import React, { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';
import axios from 'axios';
import MainPosts from './mainPosts';


function DetailInfo() {

    let { id } = useParams();
    const [data, setData] = useState([])
    const [history, setHistory] = useState([])

  useEffect(() => {

    axios.get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`)
    .then((response)=>{
      console.log(response.data);
      setData(response.data)
      setHistory(history  +  response.data.prefix + response.data.name + response.data.lastName + " > ")
    })
    .catch((error)=>{
      console.log(error);
    })
  },[id]);
  return (
   
    <div className='mainBorder'>
        <div className='detailInfo'> 
            <img src={`${data.imageUrl}?v=${data.id}`} alt='animal'></img> 
                <div className='info'>
                    <h3>{data.prefix+" "}{data.name+" "}{data.lastName}</h3>
                    <span>{data.title}</span>
                    <p>Email: {data.email}</p>
                    <p>Ip Address:{data.ip}</p>
                    <p>Job Area:{data.jobArea}</p>
                    <p>Job Type:{data.jobType}</p>
                </div>

                <div  className='addressDiv'>
                {data.company ?  <div> <h3>{data.company.name}{" "+data.company.suffix}</h3>  </div> : 'Loading...'}
                {data.address ?  
                    <div className='addressSpan'> 
                      <span>city:{data.address.city} </span> <br/>
                      <span>country:{data.address.country}</span> 
                      <span>state:{data.address.state}</span> <br/>
                      <span>streetAddress:{data.address.streetAddress}</span> <br/>
                      <span>zipCode:{data.address.zipCode} </span>
                    </div> 
                : 'Loading...'}
                </div>
        </div>
        <div className='history-Friends'>
          <h3>{history}</h3>
          <h1>Friends :</h1>
        </div>
        
        <MainPosts />
    </div>
  );
}

export default DetailInfo;


