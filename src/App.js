import AddFriendForm from "./components/addFriendForm";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplittBill";
import FriendsList from "./components/FriendsList";
import { useState } from "react";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [displayFriendForm, setDisplayFriendForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState("");

  function handleDisplayFriendForm() {
    setDisplayFriendForm(!displayFriendForm);
  }
  function handleBillForm(friend) {
    setSelectedFriend(friend.id === selectedFriend.id ? "" : friend);
    setDisplayFriendForm(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend("")
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onClick={handleBillForm}
          selectedFriend={selectedFriend}
        />
        {displayFriendForm && <AddFriendForm onSetFriends={setFriends} />}
        <Button onClick={handleDisplayFriendForm}>
          {displayFriendForm ? "close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onHandleSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
