class Comment < ActiveRecord::Base
  validates :body, :user, :question, presence: true

  belongs_to :question

  belongs_to :user

  has_many(
    :child_comments,
    class_name: "Comment",
    foreign_key: :parent_comment_id,
    primary_key: :id
  )

  belongs_to(
    :parent_comment,
    class_name: "Comment",
    foreign_key: :parent_comment_id,
    primary_key: :id
  )
end
