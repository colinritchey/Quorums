jest.mock('../reducers/root_reducer', () => {
  return jest.fn((oldState, action) => ({
    questions: { 1: { id: 1, title: "Title", body: "Body", tag_ids: [] } }
  }));
});
import RootReducer from '../reducers/root_reducer';
import configureStore from '../store/store';

describe('Store', () => {
  // it('should handle a simple jest test', () => {
  //   expect(1+1).toEqual(2);
  // });

  let store;

  beforeEach(() => {
    store = configureStore();
  });

  afterEach(() => {
    RootReducer.mockClear();
  });

  it('should export a configureStore function', () => {
    expect(typeof configureStore).toEqual('function');
  });

  it('the exported function should create a store when invoked', () => {
    expect(store.getState()).toEqual({
      questions: { 1: { id: 1, title: "Title", body: "Body", tag_ids: [] } }
    });
  });

  it('passes dispatched objects the the reducer', () => {
    store.dispatch({ type: "TEST" });

    // RootReducer should be called twice: when the store is configured & when
    //  object is dispatched
    expect(RootReducer).toHaveBeenCalledTimes(2);
  });
  
  it('creates a store with thunk middleware', () => {
    store.dispatch(dispatch => {});

    // RootReducer should only be called once: when the store is configured
    expect(RootReducer).toHaveBeenCalledTimes(1);
  });
});
