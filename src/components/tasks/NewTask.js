import React, { Component } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { auth } from "../../config/firebase-config";
import { query,getDocs,where, onSnapshot} from "firebase/firestore";



function NewTask() {
    
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [deadline, setDeadline] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

     //adding tasks in firestore database
  const addTask = async () => {
    
        const docRef = await addDoc(collection(db, "tasks"), {
        title,
        content,
        deadline,
        uid:user.uid
    });
    
    navigate("/");
  
  }


    const getTasks = async() => {
    
      try{
        const q = query(collection(db,'tasks'),where("uid","==",user?.uid));
       // const doc = await getDocs(q);
       const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const tasks = [];
        querySnapshot.forEach((doc) => {
            tasks.push(doc.data());
        });
        console.log()
        return tasks;
      })}
      catch(err)
      {
        console.error(err);
      }
    };

    var list = getTasks();

    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (!user) navigate("/");
    }, [user, loading]);

    return (
        <div className="container">
            <div className="white">
                <h5 className="grey-text text-darken 3">Add New Task</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="input-field">
                    <label htmlFor="content">Task Content</label>
                    <textarea
                        id="content"
                        className="materialize-textarea"
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="deadline">Due date</label>
                    <input type="text" id="deadline" onChange={(e) => setDeadline(e.target.value)} />
                </div>

                <div className="input-field">
                    <button className="btn teal darken-4" onClick={addTask}>Create</button>
                </div>

            </div>
        </div>
    );
}
export default NewTask;
