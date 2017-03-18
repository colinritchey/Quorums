class Answer < ActiveRecord::Base
  validates :body, :user, :question, presence: true

  belongs_to :question, inverse_of: :answers

  belongs_to :user
end
