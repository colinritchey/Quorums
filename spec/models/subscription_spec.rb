require 'rails_helper'

RSpec.describe Subscription, type: :model do
  describe "Subscription" do
    let (:subscription) { create(:subscription) }

    it { should validate_presence_of(:tag_id) }
    it { should validate_presence_of(:user_id) }

    # it { should validate_uniqueness_of(:tag_id).scoped_to(:question_id) }

  end

  describe "associations" do
    # "it" refers to an instance of the BasketballTeam class here
    # because we have not explicitly specified a subject
    it { should belong_to(:tag)}
    it { should belong_to(:user)}


  end
end
