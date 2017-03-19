class Comment < ActiveRecord::Base
  validates :body, :user, :question, presence: true

  belongs_to :question

  belongs_to :user
end
