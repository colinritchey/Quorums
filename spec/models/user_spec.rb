require 'rails_helper'

RSpec.describe User, type: :model do
  describe "User" do
    let (:user) { create(:user) }
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_presence_of(:session_token) }


    # it { should validate_uniqueness_of(:username) }
    it { should validate_length_of(:password).is_at_least(6)}
  end

  describe "associations" do
    # "it" refers to an instance of the BasketballTeam class here
    # because we have not explicitly specified a subject
    it { should have_many(:questions)}
    it { should have_many(:answers)}
    it { should have_many(:comments)}
    it { should have_many(:subscriptions)}
    it { should have_many(:tags)}
    # it { should have_one(:owner)}
  end

  describe 'model_methods' do
    describe '.find_by_credentials' do
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

  describe 'instance_methods' do
    describe '#reset_session_token!' do
      it 'resets the session token' do
        # test goes here
      end
    end
  end
end
