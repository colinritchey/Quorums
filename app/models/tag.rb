class Tag < ActiveRecord::Base
  validates :name, presence: true

  has_many :taggings, dependent: :destroy
  has_many :questions, through: :taggings

  def self.returnQuestionsByTagName(tag)
    self.where("lower(name) LIKE ?", "%#{tag.downcase}%").first.questions
  end

end
