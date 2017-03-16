class Question < ActiveRecord::Base
  validates :user, :title, :body, presence: true

  belongs_to :user
end
