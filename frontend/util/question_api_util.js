export const fetchQuestions = () => (
  $.ajax({
    url: 'api/questions'
  })
);

export const fetchQuestion = (id) => (
  $.ajax({
    url: `api/questions/${id}`
  })
);

export const createQuestion = (question) => (
  $.ajax({
    url: `api/questions`,
    method: 'POST',
    data: {question}
  })
);

export const updateQuestion = question => (
  $.ajax({
    url: `api/questions/${question.id}`,
    method: 'PATCH',
    data: { question }
  })
);

export const deleteQuestion = id => (
  $.ajax({
    url: `api/questions/${id}`,
    method: 'DELETE'
  })
);
