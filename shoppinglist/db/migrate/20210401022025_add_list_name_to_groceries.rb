class AddListNameToGroceries < ActiveRecord::Migration[6.1]
  def change
    add_column :groceries, :list_name, :string
  end
end
