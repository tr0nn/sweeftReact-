import React, { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';
import axios from 'axios';


function DetailInfo() {

    let { id } = useParams();
    const [data, setData] = useState([])

  useEffect(() => {

    axios.get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`)
    .then((response)=>{
      console.log(response.data);
      setData(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })

    
  });
  return (
   
    <div>
        <div className='detailInfo'>
            <img src={`${data.imageUrl}?v=${data.id}`} alt='animal'></img>
                <div className='info'>
                    <h3>{data.prefix}{data.name}{data.lastName}</h3>
                    <span>{data.title}</span>
                    <p>Email: {data.email}</p>
                    <p>Ip Address:{data.ip}</p>
                    <p>Job Area:{data.jobArea}</p>
                    <p>Job Type:{data.jobType}</p>
                </div>
                <div className='Address'>
                
                    <p></p>
                </div>
        </div>
    </div>
  );
}

export default DetailInfo;


