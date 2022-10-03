class DaysController < ApplicationController
    # before_action :authorize

    # GET /days
    def index
        @days = Day.all
        render json: @days
    end

    # GET /days/1
    def show
        @day = Day.find(params[:id])
        render json: @day
    end

    # POST /days
    def create
        @day = Day.create(day_params)
        if @day.valid?
            render json: @day, status: :created
        else
            render json: { errors: @day.errors.full_messages }, status: :unprocessable_entity
        end
    end

    # DELETE /days/1
    def destroy
        @day = Day.find(params[:id])
        if @day
            @day.destroy
            render json: @day
        else
            render json: { errors: ["Day not found"] }, status: :not_found
        end
    end

    private

    # Only allow a list of trusted parameters through.
    def day_params
        params.permit(:name)
    end
    
    def authorize
        render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
    end
end
