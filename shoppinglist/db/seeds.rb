# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
groceries =
[
  {
    name: "eggs",
    quantity: "2",
    list_name: "1"
  
  },
  {
    name: "bananas",
    quantity: "4",
    list_name: "1"
  
  },
  {
    name: "plantains",
    quantity: "3",
    list_name: "2"
  
  },
  {
    name: "fish",
    quantity: "10",
    list_name: "2"
  
  }

]
Grocery.destroy_all
Grocery.create(groceries)