import Button from "./Button";
import { useState } from "react";
export default function FormSplitBill({ selectedFriend, onHandleSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("");
  const paidByFriend = bill ? bill - paidByUser : ''

  function handleOnSubmit(e){
    e.preventDefault()
    onHandleSplitBill(whoIsPaying ==='user' ? paidByFriend: -paidByUser)
  }
  return (
    <form className="form-split-bill" onSubmit={handleOnSubmit}>
      <h2>Split a Bill with {selectedFriend.name}</h2>

      <label>💰Bill Value</label>
      <input
        type="text"
        onChange={(e) => setBill(Number(e.target.value))}
        value={bill}
      />

      <label>💰Your Expense</label>
      <input
        type="text"
        onChange={(e) => setPaidByUser(Number(e.target.value)>bill ? paidByUser : e.target.value)}
        value={paidByUser}
      />

      <label>💰{selectedFriend.name} Expense</label>
      <input
        type="text"
        disabled
        value={paidByFriend}
      />

      <label>🧑🏻‍🤝‍🧑🏿Who is paying the bill?</label>
      <select onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value="user">You</option>
        <option value={selectedFriend.name}>{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
