import { FETCH_ORDER_SUCCESS,COMPLETE_ORDER } from '../actions/types';
export function orderReducer(state = {order: []}
,action){
  switch(action.type){
    case "FETCH_ORDER_SUCCESS":
    return action.orders.data;

    }
    break;
    case "FETCH_ORDER_ERROR":
    return state;
    case "COMPLETE_ORDER":
    return state.map(function(order){
      if (order._id === action._orderId) {
        order.completed = true;
        return order;

      }
      return order;
    })
    default:
    return state;
  }
}
