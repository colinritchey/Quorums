require 'rails_helper'

RSpec.describe Tagging, type: :model do
  describe "Tagging" do
    let (:tagging) { create(:tagging) }

    it { should validate_presence_of(:tag_id) }
    it { should validate_presence_of(:question_id) }

    # it { should validate_uniqueness_of(:tag_id).scoped_to(:question_id) }

  end

  describe "associations" do
    # "it" refers to an instance of the BasketballTeam class here
    # because we have not explicitly specified a subject
    it { should belong_to(:tag)}
    it { should belong_to(:question)}


  end
end
