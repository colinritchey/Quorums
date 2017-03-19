json.extract! comment, :id, :body, :question_id, :parent_comment_id

json.user do
  json.partial! 'api/users/user', user: comment.user
end
