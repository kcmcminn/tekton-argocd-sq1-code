class CreateGroceries < ActiveRecord::Migration[6.1]
  def change
    create_table :groceries do |t|
      t.string :name
      t.string :quantity

      t.timestamps
    end
  end
end
