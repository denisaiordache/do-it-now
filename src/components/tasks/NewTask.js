import React, { Component } from "react";

class NewTask extends Component{
    state = {
        title:'',
       content:''

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value  //update field values
        })
        //console.log(e);
    }

    handleSubmit = (e) => {
        e.preventDefault(); //prevent the page for reloading
        console.log(this.state);
    }

    render(){
        return(
            <div className="container">
               <form onSubmit={this.handleSubmit} className="white">
                   <h5 className="grey-text text-darken 3">Add New Task</h5>
                   <div className="input-field">
                       <label htmlFor="title">Title</label>
                       <input type="text" id="title" onChange={this.handleChange}/>
                   </div>

                   <div className="input-field">
                       <label htmlFor="content">Task Content</label>
                       <textarea  id="content" className="materialize-textarea"  onChange={this.handleChange}/>
                   </div>

                   <div className="input-field">
                       <label htmlFor="deadline">Due date</label>
                       <input type="text" id="deadline" onChange={this.handleChange}/>
                   </div>

                   <div className="input-field">
                     <button className="btn teal darken-4">
                        Create
                     </button>

                   </div>

               </form>

            </div>

            )

    }
    
}
export default NewTask;