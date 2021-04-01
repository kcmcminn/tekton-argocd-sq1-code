class GroceriesController < ApplicationController
    def index
        @groceries =Grocery.all
        render json: @groceries
    end

    def default_list
        @default_list = Grocery.find(:list_name=="default_list")
        render json: @default_list
    end

    def create
        @grocery = Grocery.create(create_grocery_params)
        if @grocery.valid?
          render json: @grocery, status: 201
        else
          render json: @grocery.errors.full_messages, status: 422
        end
      end
    
    def update
        @grocery = Grocery.find(params[:id])
        @grocery.update(edit_grocery_params)
        render json: @grocery
    end
    
    def destroy
        @grocery = Grocery.find(params[:id])
        @grocery.destroy
        render json: {message: "IT HAS BEEN DELETED", grocery: @grocery}
    end
    
    
    
    private
    def edit_grocery_params
        params.permit(:quantity,:name,:list_name)
    end

    def create_grocery_params
        params.permit(:quantity,:name,:list_name)
    end
    
end
