class TrailsController < ApplicationController
  before_action :set_trail, only: [:show, :update, :destroy]
  # before_action :authorize_request, only: [:create, :update, :destroy, :add_comment]

  # GET /trails
  def index
    # @user = User.find(params[:user_id])
    @trails = Trail.all

    render json: @trails
  end

  # GET /trails/1
  def show
    # @user = User.find(params[:user_id])
    @trail = Trail.find(params[:id])
    render json: @trail, include: :comments
  end

  # POST /trails
  def create
    @user = User.find(params[:user_id])
    @trail = Trail.where(user_id:@user.id).new(trail_params)


    if @trail.save
      render json: @trail, status: :created, location: @trail
    else
      render json: @trail.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /trails/1
  def update
    if @trail.update(trail_params)
      render json: @trail
    else
      render json: @trail.errors, status: :unprocessable_entity
    end
  end

  # DELETE /trails/1
  def destroy
    @trail.destroy
  end

  # PUT /comments/1/trails/2
  def add_comment
    @trail = Trail.find(params[:id])
    @comment = Comment.find(params[:comment_id])

    @trail.comments << @comments

    render json: @trail, include: :comments
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_trail
      @trail = Trail.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def trail_params
      params.require(:trail).permit(:name, :difficulty, :travel_time_from_NYC, :length, :trail_image)
    end
end



# def index
#   @user = User.find(params[:user_id])
#   @trails = Trail.where(user_id: @user.id)

#   render json: @trails, include: :user
# end
