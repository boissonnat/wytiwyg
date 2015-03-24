class HomeController < ApplicationController

  def index
    if user_signed_in?
      render 'private'
    else
      render 'public'
    end
  end
end
