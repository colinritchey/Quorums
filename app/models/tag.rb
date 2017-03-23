class Tag < ActiveRecord::Base
  validates :name, presence: true

  has_many :taggings, dependent: :destroy, inverse_of: :tag
  has_many :subscriptions, dependent: :destroy

  has_many :questions, through: :taggings
  has_many :users, through: :subscriptions

  def self.returnQuestionsByTagId(tag_id)
    self.where("id = ?", "#{tag_id}").first.questions
  end

end
