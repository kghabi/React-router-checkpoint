import React from 'react'
import {useState,useEffect} from "react"
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './App.css'
import StarRatingComponent from 'react-star-rating-component';



 const Description = ({match,movie,history}) => {
    function extracting(str){
        str=str.split("")
        let a=[]
  for(let i=0;i<str.length;i++)
 {if(str[i]=="&")
   return a.join("")
   else 
  a[i] =str[i]
   }
 return a.join("")
   }



var show
     if(movie.find(elm=>elm.id===match.params.id)){
        show=true
    var {name,id,trailer,desc,rate}=movie.find(elm=>elm.id===match.params.id)
    
     trailer=trailer.replace("watch?v=","embed/")
     trailer=extracting(trailer)
    
   } else show=false



    return (
       <div className="n">
           <div className="conta">
           {!show && <div className="errorpage"><h1 >Error page not found</h1>
           <br/>
           <Link to="/"><Button variant ="dark">Go to home page</Button></Link></div>}
           
           
            {show &&<div className="description">
           
           <iframe className="vd" src={trailer}> </iframe>
           <h1 style={{width:"70%" ,backgroundColor:'aqua',textAlign:"center ",fontFamily:'Roboto'}}>{name}</h1>
           <br/>
           <p className="para" style={{fontWeight:"bold",fontFamily:'Roboto', color:'aliceblue',textAlign:'center'}}>{desc}</p>
           <h2 className="para">Rate of the movie</h2>
           <StarRatingComponent name="rate" starCount={5} value={rate} className="star-rating"/><br/>
           <Button onClick={()=>history.goBack()} variant ="dark">Go to home page</Button></div>}
           </div>
        </div>
    )
}
export default Description 