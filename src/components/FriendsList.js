import Friend from "./Friend";

export default function FriendsList({ friends, onClick, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onClick={onClick}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
