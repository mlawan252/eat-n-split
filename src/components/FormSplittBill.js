import Button from "./Button";

export default function FormSplitBill({displayBillForm,selectedFriend}) {
  return (
    <>
    {displayBillForm && <form className="form-split-bill">
        <h2>Split a Bill with {selectedFriend.name}</h2>
      
      <label>💰Bill Value</label>
      <input type="text" />

      <label>💰Your Expense</label>
      <input type="text" />

      <label>💰{selectedFriend.name} Expense</label>
      <input type="text" disabled/>

      <label>🧑🏻‍🤝‍🧑🏿Who is paying the bill?</label>
      <select>
        <option value='user'>You</option>
        <option value='Friend'>{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>}
    </>
  );
}
