class TasksController < ApplicationController
  before_filter :find_current_story

  def create
    @task = @story.tasks.build(params[:task])
    
    if @task.save
      render :json => @task
    else
      render :json => @task, :status => :unprocessable_entity
    end
  end

  def update
    @task = @story.tasks.find(params[:id])
    @task.update_attributes(params[:task])

    head :ok
  end
  
  def destroy
    @task = @story.tasks.find(params[:id])
    @task.destroy

    head :ok
  end

  private

  def find_current_story
    @project = current_user.projects.find(params[:project_id])
    @story = @project.stories.find(params[:story_id])
  end

end
