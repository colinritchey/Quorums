json.extract! answer, :id, :body, :question_id

json.user do
  json.partial! 'api/users/user', user: answer.user
end
