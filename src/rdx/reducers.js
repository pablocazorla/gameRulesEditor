import { combineReducers } from 'redux';
import { actName } from './actions';
import { steps } from 'config';




let reducers = {};

reducers.step = (state = steps[0], action) => {
  switch (action.type) {
    case actName.CHANGE_STEP:        
      return action.step;
    default:
      return state;
  }
};

reducers.name = (state = null, action) => {
  switch (action.type) {
    case actName.UPLOAD_FILE:        
      return action.name;
    case actName.CLEAR:        
      return null;
    default:
      return state;
  }
};

reducers.file = (state = null, action) => {
  switch (action.type) {
    case actName.UPLOAD_FILE:        
      return action.file;
    case actName.CLEAR:        
      return null;
    default:
      return state;
  }
};

export default combineReducers(reducers);