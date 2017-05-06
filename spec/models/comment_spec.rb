require 'rails_helper'

RSpec.describe Comment, type: :model do
  describe "Comment" do
    let (:comment) { create(:comment) }

    it { should validate_presence_of(:user) }
    it { should validate_presence_of(:body) }
    it { should validate_presence_of(:question) }
  end

  describe "associations" do
    # "it" refers to an instance of the BasketballTeam class here
    # because we have not explicitly specified a subject
    it { should belong_to(:question)}
    it { should belong_to(:user)}

  end
end
