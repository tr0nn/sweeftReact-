import React from 'react';
import axios from 'axios';
import {Link } from 'react-router-dom';


let pageNubmer = 1;

export default class MainPosts extends React.Component {
state = {
    persons: []
  }
  componentDidMount() {

    axios.get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${pageNubmer}/20`)
    .then(res => {
      const persons = res.data.list;
      this.setState({ persons });
    })

      window.addEventListener('scroll', () => {
        const {
            scrollTop,
            scrollHeight,
            clientHeight
        } = document.documentElement;
      
        if (scrollTop + clientHeight >= scrollHeight - 5 ) {
          // window.scrollBy(0, -100)
          pageNubmer++;
          console.log(pageNubmer);
          axios.get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${pageNubmer}/20`)
            .then(res => {
              this.setState({ persons:[...this.state.persons,...res.data.list]});
            })
        }
      }, {passive: true});   
  }
  render() {
    return (
       <div className="mainDiv" > 
         <ul>
          {this.state.persons.map(item => (
            <div className="personElementDiv">
                <Link to={`/posts/${item.id}`}>
                <li key={item.id}> 
                  <img src={`${item.imageUrl}?v=${item.id}`} alt="animal" />
                  <span> <h3> {item.prefix} {item.name} {item.lastName}</h3> </span> 
                  <span> {item.title} </span> 
                </li> 
                </Link>
            </div>
          ))}
        </ul>
       </div>
    )
  }
}