import {
  fetchTags,
  createTag,
  createTagging,
  deleteTagging
} from '../../util/tag_api_util';

describe('the tag api util', () => {
  beforeEach(() => {
    global.$ = require.requireMock('jquery');
    global.$.ajax = jest.fn(options => "ajax promise");
  });

  afterEach(() => {
    global.$.ajax.mockClear();
  });

  it('fetchTags makes request and returns an ajax promise', () => {
    const returnValue = fetchTags();
    expect($.ajax).toBeCalled();

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('api/tags');
    expect(returnValue).toEqual("ajax promise");
  });

  it('createTag makes request and returns an ajax promise', () => {
    const tag = { id: 3, name: 'Internet' };
    const returnValue = createTag(tag);
    expect($.ajax).toBeCalled();

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('api/tags');
    expect(ajaxCallArg.type || ajaxCallArg.method).toMatch(/post/i);
    expect(ajaxCallArg.data).toEqual({ tag });
    expect(returnValue).toEqual("ajax promise");
  });

  it('createTagging makes request and returns an ajax promise', () => {
    const tag = { id: 3, name: 'Internet' };
    const question = { id: 15,  title: 'New Question', body: 'Content' };

    const tagging = { tag_id: tag.id, question_id: question.id };

    const returnValue = createTagging(tagging);
    expect($.ajax).toBeCalled();

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('api/taggings');
    expect(ajaxCallArg.type || ajaxCallArg.method).toMatch(/post/i);
    expect(ajaxCallArg.data).toEqual({ tagging });
    expect(returnValue).toEqual("ajax promise");
  });

});
