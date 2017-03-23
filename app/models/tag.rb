class Tag < ActiveRecord::Base
  validates :name, presence: true

  has_many :taggings, dependent: :destroy
  has_many :questions, through: :taggings

  def self.returnQuestionsByTagId(tag_id)
    self.where("id = ?", "#{tag_id}").first.questions
  end

end
