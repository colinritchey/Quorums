export const fetchTags = () => (
  $.ajax({
    url: `api/tags`
  })
);

export const createTag = (tag) => (
  $.ajax({
    url: `api/tags`,
    method: 'POST',
    data: {tag}
  })
);

export const createTagging = (tagging) => (
  $.ajax({
    url: `api/taggings`,
    method: 'POST',
    data: {tagging}
  })
);

export const deleteTaggin = (tag) => (
  $.ajax({
    url: `api/tags`,
    method: 'DELETE'
  })
);
