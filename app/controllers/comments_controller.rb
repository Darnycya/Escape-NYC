class CommentsController < ApplicationController
  before_action :set_comment, only: [:show]

  # GET /comments
  def index
    @comments = Comment.all

    render json: @comments
    # @trail = Trail.find(params[:trail_id])
    # @comments = Comment.where(trail_id: @trail_id)


    # render json: @comments, include: :trail
  end

  # GET /comments/1
  def show
    render json: @comment
  end

  # POST /comments
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render json: @comment, status: :created, location: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def comment_params
      params.require(:comment).permit(:comment, :user_id, :trail_id)
    end
end
