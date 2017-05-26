import {
  createAnswer,
  updateAnswer,
  deleteAnswer
} from '../../util/answer_api_util';

describe('the answer api util', () => {
  beforeEach(() => {
    global.$ = require.requireMock('jquery');
    global.$.ajax = jest.fn(options => "ajax promise");
  });

  afterEach(() => {
    global.$.ajax.mockClear();
  });

  it('createAnswer makes request and returns an ajax promise', () => {
    const answer = { body: 'Content' };
    const returnValue = createAnswer(answer);
    expect($.ajax).toBeCalled();

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('api/answers');
    expect(ajaxCallArg.type || ajaxCallArg.method).toMatch(/post/i);
    expect(ajaxCallArg.data).toEqual({ answer });
    expect(returnValue).toEqual("ajax promise");
  });

  it('updateAnswer makes request and returns an ajax promise', () => {
    const answer = { id: 15, body: 'Content' };
    const returnValue = updateAnswer(answer);
    expect($.ajax).toBeCalled();

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('api/answers/15');
    expect(ajaxCallArg.type || ajaxCallArg.method).toMatch(/patch/i);
    expect(ajaxCallArg.data).toEqual({ answer });
    expect(returnValue).toEqual("ajax promise");
  });

  it('deleteAnswer makes request and returns an ajax promise', () => {
    const returnValue = deleteAnswer(15);
    expect($.ajax).toBeCalled();
    const ajaxCallArg = $.ajax.mock.calls[0][0];

    expect(ajaxCallArg.url).toEqual('api/answers/15');
    expect(ajaxCallArg.type || ajaxCallArg.method).toMatch(/delete/i);
    expect(returnValue).toEqual("ajax promise");
  });
});
