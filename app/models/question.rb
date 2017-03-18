class Question < ActiveRecord::Base
  validates :user, :title, presence: true

  belongs_to :user
  has_many :answers, inverse_of: :question, dependent: :destroy
end
