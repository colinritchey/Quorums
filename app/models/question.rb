class Question < ActiveRecord::Base
  validates :user, :title, presence: true

  belongs_to :user
  has_many :answers, inverse_of: :question, dependent: :destroy
  has_many :comments, inverse_of: :question, dependent: :destroy

  def comments_by_parent
    comments_by_parent = Hash.new { |hash, key| hash[key] = [] }

    self.comments.includes(:child_comments).each do |comment|
      comments_by_parent[comment.parent_comment_id] << comment
    end

    comments_by_parent
  end

  def self.searchByWords(words)
    results = [];

    words.each do |word|
      results.concat(self.where("lower(title) LIKE ?", "%#{word.downcase}%"))
    end

    results.uniq
  end
end
