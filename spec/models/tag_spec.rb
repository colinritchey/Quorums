require 'rails_helper'

RSpec.describe Tag, type: :model do
  describe "Tag" do
    let (:tag) { create(:tag) }

    it { should validate_presence_of(:name) }

  end

  describe "associations" do
    # "it" refers to an instance of the BasketballTeam class here
    # because we have not explicitly specified a subject
    it { should have_many(:taggings)}
    it { should have_many(:subscriptions)}

    it { should have_many(:questions)}
    it { should have_many(:users)}

  end

  describe 'model_methods' do
    describe '.returnQuestionsByTagId' do
      context 'when given correct credentials' do
        it 'should find the right user' do
          # test goes here
        end
      end

      context 'when given incorrect credentials' do
        it 'should return nil' do
          # test goes here
        end
      end
    end
  end


end
