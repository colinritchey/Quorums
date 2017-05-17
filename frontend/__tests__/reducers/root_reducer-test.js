import QuestionReducer from '../../reducers/question_reducer';
import RootReducer from '../../reducers/root_reducer';
import { createStore } from 'redux';

describe('RootReducer', () => {
  let testStore;

  beforeAll(() => {
    testStore = createStore(RootReducer);
  });

  it('exports a function', () => {
    expect(typeof RootReducer).toEqual('function');
  });

  it('includes the QuestionReducer under the key `questions`', () => {
    const question = { id: 1, title: 'Root Reducer', body: 'Testing', tag_ids: [] };
    const action = { type: 'RECEIVE_QUESTION', question };
    testStore.dispatch(action);

    expect(testStore.getState().questions).toEqual(QuestionReducer({ [question.id]: question }, action));
  });
});
