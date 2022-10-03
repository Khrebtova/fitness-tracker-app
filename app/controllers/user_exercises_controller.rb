class UserExercisesController < ApplicationController
    # before_action :authorize

    # GET /user_exercises
    def index
        @user_exercises = UserExercise.all
        render json: @user_exercises
    end

    # GET /user_exercises/1
    def show
        @user_exercise = UserExercise.find(params[:id])
        if @user_exercise
            render json: @user_exercise
        else
            render json: { errors: ["Exercise not found"] }, status: :not_found
        end
    end

    # POST /user_exercises
    def create
        @user_exercise = UserExercise.create(user_exercise_params)
        if @user_exercise.valid?
            render json: @user_exercise, status: :created
        else
            render json: { errors: @user_exercise.errors.full_messages }, status: :unprocessable_entity
        end
    end

    # DELETE /user_exercises/1
    def destroy
        @user_exercise = UserExercise.find(params[:id])
        if @user_exercise
            @user_exercise.destroy
            render json: @user_exercise
        else
            render json: { errors: ["Exercise not found"] }, status: :not_found
        end
    end

    # PATCH/PUT /user_exercises/1
    def update
        @user_exercise = UserExercise.find(params[:id])
        if @user_exercise
            @user_exercise.update(user_exercise_params)
            render json: @user_exercise
        else
            render json: { errors: ["Exercise not found"] }, status: :not_found
        end
    end

    private

    def user_exercise_params
        params.permit(:user_id, :day_id, :name, :reps, :weight, :sets, :exercise_url)
    end

    def authorize
        render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
    end

end
