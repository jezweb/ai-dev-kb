# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day06.md
Language: multiple

## Snippet: Installing and Configuring Ruby on Rails Environment
Description: A series of Bash commands to install and set up Ruby, Rails, and other dependencies on the CentOS 7 VM.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day06.md#2025-04-17_snippet_1
Language: Bash

```Bash
sudo yum -y install mariadb mariadb-server mariadb-devel
sudo systemctl start mariadb.service
sudo yum -y install links
sudo yum install --assumeyes epel-release
sudo yum install --assumeyes nodejs
curl -L https://get.rvm.io | bash -s stable
source /home/vagrant/.rvm/scripts/rvm
rvm install ruby-2.7
gem install rails
sudo yum install git
sudo yum install epel-release
sudo yum install redis
```

## Snippet: Generating Scaffold for Bootcamp Model
Description: Rails commands to generate a scaffold for the Bootcamp model and migrate the database.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day06.md#2025-04-17_snippet_3
Language: Bash

```Bash
bundle exec rails generate scaffold Bootcamp name:string description:text dates:string
bundle exec rake db:migrate
```

## Snippet: Creating and Configuring a New Rails Application
Description: Commands to create a new Rails application, set up the database, and start the server.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day06.md#2025-04-17_snippet_2
Language: Bash

```Bash
rails new myapp --skip-turbolinks --skip-spring --skip-test-unit -d mysql
cd myapp
bundle exec rake db:create
bundle exec rake db:migrate
bundle exec rails server -b 0.0.0.0
```

## Snippet: Implementing Insecure Search Functionality in Rails Controller
Description: Adding a search feature to the Bootcamps controller that is vulnerable to SQL injection attacks.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day06.md#2025-04-17_snippet_6
Language: Ruby

```Ruby
def index
  @bootcamps = Bootcamp.all
  if params[:search].to_s != ''
    @bootcamps = Bootcamp.where("name LIKE '%#{params[:search]}%'")
  else
    @bootcamps = Bootcamp.all
  end
end
```

## Snippet: Configuring Vagrant for CentOS 7 VM
Description: Vagrant configuration file to set up a CentOS 7 virtual machine with 8GB RAM and 4 CPUs using VirtualBox provider.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day06.md#2025-04-17_snippet_0
Language: Ruby

```Ruby
Vagrant.configure("2") do |config|
  config.vm.box = "centos/7"
  config.vm.provider :virtualbox do |v|
   v.memory  = 8096
   v.cpus    = 4
end
end
```

## Snippet: Adding Search Form to Bootcamps Index View
Description: Implementing a search form in the Bootcamps index view that submits to the insecure search action.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day06.md#2025-04-17_snippet_7
Language: HTML

```HTML
<h1>Search</h1>
<%= form_tag(bootcamps_path, method: "get", id: "search-form") do %>
  <%= text_field_tag :search, params[:search], placeholder: "Search Bootcamps" %>
  <%= submit_tag "Search Bootcamps"%>
<% end %>

<h1>Listing Bootcamps</h1>
```

## Snippet: Introducing XSS Vulnerability in View Template
Description: Modifying the Bootcamp show view to use the raw method, which introduces a potential XSS vulnerability.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day06.md#2025-04-17_snippet_5
Language: HTML

```HTML
<p>
  <strong>Description:</strong>
  <%=raw @bootcamp.description %>
</p>
```

## Snippet: Configuring Default Route in Rails
Description: Adding a default route to the Rails application's routes configuration file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day06.md#2025-04-17_snippet_4
Language: Ruby

```Ruby
root bootcamps#index
```