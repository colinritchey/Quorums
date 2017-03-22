json.partial! '/api/questions/questionDetail', question: @question

json.answers do
  @answers.each do |answer|
    json.set! answer.id do
      json.partial! '/api/answers/answer', answer: answer
    end
  end
end

json.comments do
  @comments.each do |comment|
    json.set! comment.id do
      json.partial! '/api/comments/comment', comment: comment
    end
  end
end

json.tags do
  @tags.each do |tag|
    json.set! tag.id do
      json.partial! '/api/tags/tag', tag: tag
    end
  end
end
