json.extract! answer, :id, :body

json.user do
  json.partial! 'api/users/user', user: answer.user
end
