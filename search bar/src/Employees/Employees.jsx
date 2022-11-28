import React, { Component } from 'react'
export default class Employees extends Component {
    state={
       employees :[{
            "id": 1,
            "name": "Frodo Baggins",
            "department": "Management",
            "role": "CEO"
          },
          {
            "id": 2,
            "name": "Samwise Gamgee",
            "department": "Management",
            "role": "CTO"
          },
          {
            "id": 3,
            "name": "Gandalf the Gray",
            "department": "Recruitment",
            "role": "Lead-recruiter"
          },
          {
            "id": 4,
            "name": "Aragorn",
            "department": "Security",
            "role": "Security officer"
          },
          {
            "id": 5,
            "name": "Legolas",
            "department": "Management",
            "role": "Office manager"
          }
        ],
        filtered:[]
    }
    handleClick1=()=>{
      const filtered=this.state.employees.filter(item=>{
        return item.department==="Management"
      })
      this.setState({filtered})
    }
    handleClick2=()=>{
      const filtered=this.state.employees.filter(item=>{
        return item.department==="Recruitment"
      })
      this.setState({filtered})
    }
    handleClick3=()=>{
      const filtered=this.state.employees.filter(item=>{
        return item.department==="Security"
      })
      this.setState({filtered})
    }
    handleAll=()=>{
    
      this.setState({filtered:this.state.employees})
    }
  render() {
   
    return (
      <div>
        <button onClick={this.handleClick1} >Management</button>
        <button onClick={this.handleClick2} >Recruitment</button>
        <button onClick={this.handleClick3} >Security</button>
        <button onClick={this.handleAll} >All</button>
        { this.state.filtered.length>0?this.state.filtered.map((item) => {
         return <React.Fragment key={item.id}>
    
         <h1>{item.id}</h1>
         <p>{item.name}</p>
           <p>{item.department} </p>
           <p> {item.role}</p>
           </React.Fragment>
         
        }):""
        
    }
        </div>
       )


        
    
  }
}
