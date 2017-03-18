json.extract! question, :id, :title, :body

json.user do
  json.partial! 'api/users/user', user: question.user
end
