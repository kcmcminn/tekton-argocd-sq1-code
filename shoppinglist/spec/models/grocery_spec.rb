require 'rails_helper'

RSpec.describe Grocery, type: :model do
  subject {
    described_class.new(name: "fish",
    quantity: "10",
    list_name: "2")
  }
# RSpec.describe 'Grocery' do
  # pending "add some examples to (or delete) #{__FILE__}"
  it "is valid with valid attributes" do
    expect(subject).to be_valid
  # it 'grocery list count' do
  end
  it "is not valid without a grocery name" do
    # grocery = Grocery.new(name: nil)
    subject.name=nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a quantity" do
    subject.quantity = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a list_name" do
    subject.list_name = nil
    expect(subject).to_not be_valid
  end
end
