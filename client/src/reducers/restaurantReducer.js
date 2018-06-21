import {GET_RESTAURANT,POST_RESTAURANT,DELETE_RESTAURANT,UPDATE_RESTAURANT} from '../actions/types';
// RESTAURANT REDUCERS
export  function restaurantReducer(state = {
 restaurants: [
    /*{
 _id: 1,
 title: 'this is title 1',
 description:'this is description 1',
 price: 33.32
 },
 {
 _id: 2,
 title: 'this is title 2',
 description:'this is description 2',
 price: 44.34
}
*/
  ]
} , action) {
  switch (action.type) {
    case "GET_RESTAURANT":
    // let restaurants  = state.restaurants.concat(action.payload)
    //return {restaurants}
       return {...state , restaurants:[...action.payload]}
       break;
       case "POST_RESTAURANT":
       return {...state,restaurants:[...state.restaurants,...action.payload]}
       break;
       case "POST_RESTAURANT_REJECTED":
       return{...state}
       break;
       case "RESET_BUTTON":
       return{...state}
       case "DELETE_RESTAURANT":
       // create a copy of current array of restaurants
       const currentRestaurantToDelete = [...state.restaurants]
       // determine at which index in restaurant array the restaurant is to be deleted
       const indexToDelete = currentRestaurantToDelete.findIndex(
    function(restaurant) {
      return restaurant._id === action.payload
    }
  )
  // use slice to remove book at a particular indexToDelete
  return{restaurants: [...currentRestaurantToDelete.slice(0,indexToDelete),...currentRestaurantToDelete.slice(0,indexToDelete + 1)]}
  break;
  case "UPDATE_RESTAURANT":
  // create a copy of the current array of restaurants
  const currentRestaurantToUpdate = [...state.restaurants]
  // Determine at which index in restaurant array is the restaurant to be deleted
  const indexToUpdate = currentRestaurantToUpdate.findIndex(
    function(restaurant) {
      return restaurant._id === action.payload._id
    }
  )
//  create a new restaurant object with the new values with the same array index of the item we want to replace
const newRestaurantToUpdate = {
  ...currentRestaurantToUpdate[indexToUpdate],
  title: action.payload.title
}
console.log("what is new Restaurant to Update",newRestaurantToUpdate)

  //use slice to remove the restaurant at the specified index, replace with the new object and concatenate with the rest of items in the array
  return {restaurants: [...currentRestaurantToUpdate.slice(0,indexToUpdate),newRestaurantToUpdate,...currentRestaurantToUpdate.slice(indexToUpdate + 1)]}
  break;
}
  return state;
}
