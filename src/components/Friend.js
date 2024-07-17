import Button from "./Button";
export default function Friend({ friend, onClick, selectedFriend }) {
  const isSelected = selectedFriend.id===friend.id ;
  return (
    <li className={isSelected ? 'selected':''}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p> You are even with {friend.name}</p>}

      <Button onClick={()=>onClick(friend)}>{isSelected ? 'Close':'Select'}</Button>
    </li>
  );
}
