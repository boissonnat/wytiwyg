class DocumentsController < ApplicationController
  before_action :set_default_response_format
  layout 'print', only: [:print]

  # Ensure we have a connected user
  before_filter :authenticate_user!
  # set the actual registration_application
  before_action :set_document, only: [:show, :edit, :update, :destroy, :print]

  def index
    @documents = Document.all.order('title ASC')
    render json: @documents.as_json
  end

  def show
  end

  def new
    @document = Document.new
  end

  def create
    @document = Document.new(document_params)
    @document.user = current_user
    if @document.save
      render json: @document.as_json
    else
     render json: @document.errors, status: :unprocessable_entity
    end
  end

  def update
    if @document.update(document_params)
      render 'show'
    else
      render json: @document.errors, status: :unprocessable_entity
    end
  end


  def destroy
    @document.destroy
    render json: {status: 200}
  end

  def print
  end

  protected

  def set_default_response_format
    if action_name == 'print'
      request.format = :html
    else
      request.format = :json
    end
  end


  private
  # Use callbacks to share common setup or constraints between actions.
  def set_document
    @document = Document.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def document_params
    params.require(:document).permit(:title, :body)
  end

end
