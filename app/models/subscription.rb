class Subscription < ActiveRecord::Base
  validates :tag_id, :user_id, presence: true
  validates :tag_id, uniqueness: { scope: :user_id }

  belongs_to :tag

  belongs_to :user
end
