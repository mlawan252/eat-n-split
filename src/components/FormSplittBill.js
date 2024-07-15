import Button from "./Button";
import { useState } from "react";
export default function FormSplitBill({displayBillForm,selectedFriend}) {
    const [billValue, setBillValue] = useState("")
    const [myExpense, setMyExpense] = useState("")
    const [friendExpense, setFriendExpense] = useState("")
    const [billPayer, setBillPayer] = useState("")
  return (
    <>
    {displayBillForm && <form className="form-split-bill">
        <h2>Split a Bill with {selectedFriend.name}</h2>
      
      <label>💰Bill Value</label>
      <input type="text" onChange={(e)=>setBillValue(e.target.value)} value={billValue}/>

      <label>💰Your Expense</label>
      <input type="text" onChange={(e)=>setMyExpense(e.target.value)} value={myExpense}/>

      <label>💰{selectedFriend.name} Expense</label>
      <input type="text" disabled value={friendExpense}/>

      <label>🧑🏻‍🤝‍🧑🏿Who is paying the bill?</label>
      <select onChange={(e)=>setBillPayer(e.target.value)}>
        <option value='user'>You</option>
        <option value='Friend'>{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>}
    </>
  );
}
