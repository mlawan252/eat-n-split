import { useState } from "react";
import Button from "./Button";

export default function AddFriendForm({displayFriendForm, onSetFriends}){
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    
    
    function addNewFriend(e){
        e.preventDefault()
        onSetFriends(prevFriends=>[...prevFriends,{name:name,image:image, id:Date.now, balance:null}])
        setName('')
        setImage('')
    }
    return(
      <>
      {displayFriendForm && <form className="form-add-friend" onSubmit={addNewFriend}>
        <label>🧑🏻‍🤝‍🧑🏿Friend Name</label>
        <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
 
        <label>🧑🏻Image URL</label>
        <input type="text" onChange={(e)=>setImage(e.target.value)} value={image} />
 
        <Button>Add</Button>
       </form>}  
      </>
        
      
    )
  }