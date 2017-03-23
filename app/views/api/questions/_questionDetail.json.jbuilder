json.extract! question, :id, :title, :body, :tag_ids

json.user do
  json.partial! 'api/users/user', user: question.user
end
