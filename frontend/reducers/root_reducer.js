import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import QuestionReducer from './question_reducer';
import QuestionDetailReducer from './question_detail_reducer';
import FiltersReducer from './filters_reducer';
import TagsReducer from './tags_reducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  questions: QuestionReducer,
  questionDetail: QuestionDetailReducer,
  filters: FiltersReducer,
  tags: TagsReducer
});

export default RootReducer;
