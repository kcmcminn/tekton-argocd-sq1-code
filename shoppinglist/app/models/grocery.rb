class Grocery < ApplicationRecord
    validates :name, presence: true
    validates :quantity, presence: true
    validates :list_name, presence: true

end
