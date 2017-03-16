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
