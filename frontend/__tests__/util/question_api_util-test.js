import {
  fetchQuestion,
  fetchQuestions,
  deleteQuestion,
  updateQuestion,
  createQuestion
} from '../../util/question_api_util';

describe('the api util', () => {
  beforeEach(() => {
    global.$ = require.requireMock('jquery');
    global.$.ajax = jest.fn(options => "ajax promise");
  });

  afterEach(() => {
    global.$.ajax.mockClear();
  });

  it('fetchQuestions makes request and returns an ajax promise', () => {
    const returnValue = fetchQuestions();
    expect($.ajax).toBeCalled();

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('api/questions');
    expect(returnValue).toEqual("ajax promise");
  });

  it('fetchQuestions with parameters makes request and returns an ajax promise', () => {
    let data = { searchByTitle: "test", }
    const returnValue = fetchQuestions(data);
    expect($.ajax).toBeCalled();

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    console.log(ajaxCallArg);
    expect(ajaxCallArg.url).toEqual('api/questions');
    expect(returnValue).toEqual("ajax promise");
  });

  it('fetchQuestion makes request and returns an ajax promise', () => {
    const returnValue = fetchQuestion(15);
    expect($.ajax).toBeCalled();

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('api/questions/15');
    expect(returnValue).toEqual("ajax promise");
  });

  it('createQuestion makes request and returns an ajax promise', () => {
    const question = { title: 'New Question', body: 'Content' };
    const returnValue = createQuestion(question);
    expect($.ajax).toBeCalled();

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('api/questions');
    expect(ajaxCallArg.type || ajaxCallArg.method).toMatch(/post/i);
    expect(ajaxCallArg.data).toEqual({ question });
    expect(returnValue).toEqual("ajax promise");
  });

  it('updateQuestion makes request and returns an ajax promise', () => {
    const question = { id: 15, title: 'Existing Question', body: 'Content' };
    const returnValue = updateQuestion(question);
    expect($.ajax).toBeCalled();

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('api/questions/15');
    expect(ajaxCallArg.type || ajaxCallArg.method).toMatch(/patch/i);
    expect(ajaxCallArg.data).toEqual({ question });
    expect(returnValue).toEqual("ajax promise");
  });

  it('deleteQuestion makes request and returns an ajax promise', () => {
    const returnValue = deleteQuestion(15);
    expect($.ajax).toBeCalled();
    const ajaxCallArg = $.ajax.mock.calls[0][0];

    expect(ajaxCallArg.url).toEqual('api/questions/15');
    expect(ajaxCallArg.type || ajaxCallArg.method).toMatch(/delete/i);
    expect(returnValue).toEqual("ajax promise");
  });
});
