json.partial! '/api/questions/questionDetail', question: @question

json.answers do
  @answers.each do |answer|
    json.set! answer.id do
      json.partial! '/api/answers/answer', answer: answer
    end
  end
end

json.comments do
  @comments.each do |key, value|
    json.set! key do
      json.array! value do |comment|
        json.partial! '/api/comments/comment', comment: comment
        # json.child_comments comment.child_comments do |child|
        #   json.partial! '/api/comments/comment', comment: child
        # end
      end
    end
  end
end
