class Task < ActiveRecord::Base
  belongs_to :story
  
  attr_accessible :done, :task

  validates :task, :presence => true
end
