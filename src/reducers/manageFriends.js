export function manageFriends(state = { friends: [] }, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return {
        ...state,
        friends: [
          ...state.friends,
          {
            name: action.friend.name,
            hometown: action.friend.hometown,
            id: action.friend.id,
          },
          //that action is the action we are taking so stores our new values, state is previous values.
        ],
      };
    //When removing a friend, instead of an object, the action will include an id key with an integer.
    case "REMOVE_FRIEND":
      let newFriends = state.friends.filter(
        (friend) => friend.id !== action.id
        //if friend id doesn't match the action id include it in the new friends array
      );
      return { ...state, friends: newFriends };
    default:
      return state;
  }
  solution code way
    case "REMOVE_FRIEND":
  find the removal index in the array of the friend we want to remove
        const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
        return (
          {...state,
              friends: [
  //grab all friends from starting position to right before the removed friend index (0, 2) would return 0,1
                ...state.friends.slice(0, removalIndex),
                //grabs all friends from one after removal index and above (2 + 1) would return 3,4,5,6 .... 
                ...state.friends.slice(removalIndex + 1)
              ]
          }
        )
}
