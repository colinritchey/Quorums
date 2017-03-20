export const createAnswer = (answer) => (
  $.ajax({
    url: `api/answers`,
    method: 'POST',
    data: {answer}
  })
);

export const updateAnswer = answer => {
  debugger;
  return ($.ajax({
    url: `api/answers/${answer.id}`,
    method: 'PATCH',
    data: { answer }
  }));
};

export const deleteAnswer = id => (
  $.ajax({
    url: `api/answers/${id}`,
    method: 'DELETE'
  })
);
