## Create some users
unless User.find_by(email: 'foo@bar.com')
  foo = User.create!({:email => 'foo@bar.com', :password => 'password', :password_confirmation => 'password'})
end

unless User.find_by(email: 'john@doe.com')
  john = User.create!({:email => 'john@doe.com', :password => 'password', :password_confirmation => 'password'})
end

## Create some documents, but delete all before
Document.all.each {|d| d.destroy}
Document.find_or_create_by({:title => 'Great document', :body => 'Lorem', :user => foo})
Document.find_or_create_by({:title => 'Ruby rocks', :body => 'Lorem', :user => john})
Document.find_or_create_by({:title => 'Angular too', :body => 'Lorem', :user => john})