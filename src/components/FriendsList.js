import Friend from "./Friend"

export default function FriendsList({friends, onClick}){

    return(
      <ul>
        {friends.map(friend =><Friend key={friend.id} friend={friend} onClick={onClick} />)}
      </ul>
    )
  }