## wy-T-iwyg !

wy-T-iwyg stands for What You *Type* is What You Get.
This is a basic platform for sharing documents built over a powerful markdown editor with a fully real-time rendering.

The front-end is entirely manage with AngularJS (giving a try to AngularJS stayed my first motivation to this project) 
just after the boring registration stuff while Ruby on Rails takes care of the business model.

### Demo available on Heroku

A demo is available on heroku : https://wytiwyg.herokuapp.com

### What does this app

In some (several?) cases, wikis, blogs, etc... are over complicated.
The main purpose of this application is to allow co-workers sharing their knowledge  through a simple but efficient solution !

Here is the list of the main features available in this version :

- Protect every document behind an authentication process
- CRUD operations available on all documents
- Markdown edition with real-time HTML renderer, shortcuts for markdown edition and code syntax highlighting
- Fully responsive design

### What this app does not (yet!)

At this time we are in front of one-day coding app, a more or less .
If we find some interest in the concepts, here is a list of improvements this app could have in a near future :


- Download documents as PDF (generated from Markdown)
- Categorize documents with tags
- Manage visibility through a concept of circles and subscriptions
- Adding a global search (and not just a filter on title)
- Consider the document's visibility for non connected user (public documents)
- Tracking the documents' modification (using Git ?)


### How to install

As you may notice, *wyTiwyg* using Rails to manage the back end. Here is the way to run this app locally :

So, first of, you will need to install ruby, I recommand to managing your Ruby installation
through [rbenv](https://github.com/sstephenson/rbenv).
It’s an easy way to run multiple versions for different applications and update when a new release is made.

The inside your local project folder :

```
$ bundle install
$ rake db:migrate
$ rails s
```

Then point your favorite browser to [http://localhost:3000](http://localhost:3000)





