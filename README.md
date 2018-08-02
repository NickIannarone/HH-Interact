# HH-Interact
Interact Club Website. Live @ [https://hhinteract.herokuapp.com]( https://hhinteract.herokuapp.com)

## What is This
In high school, I gave this site to a friend for his new volunteer club: HH Interact. Most of the logic is from the hh-nhs project by @varughese, but I changed the design and added a few features such as the Contact Info page and an interactive (for admin users) photo gallery.

This is a CRUD app built with the MEAN stack and deployed to Heroku. It includes the following features:
- Authentication
- A member can log and track their community service events and hours
- Admins can add "Upcoming Events" that everyone can see
- Autocomplete when logging a new community service event
- Admin control dashboard with password
- Admins can check off (verify) member hours in the Member List
- Fully responsive design


## Screenshots
![](https://i.imgur.com/hBfGkai.png)
![](https://i.imgur.com/CFPJAvY.png)
![](https://i.imgur.com/bYO6iXH.png) 

## Instructions for Viewing (credit to @varughese)
- [Download Node.JS](https://nodejs.org/en/)
  - Download the Version 4
  - Download the file and run it. Go through the set up
  
- Click on the green `clone or download` button above. Click download zip.
- Open it up and unzip it. That means drag the folder onto your Desktop. Google how to unzip if you cant figure this out.
- When thats done open up the `hh-nhs-master` folder that you saved.
- Hold `Shift` and right click (you have to right click near the bottom of the window in a space that is white). Click open in command prompt.
- Type `npm install`. This will install dependencies from the internet into your project.
- Type the following `node server.js`
- Open up a web browser and type in the following url `localhost:8080`
- Login!

## Instructions for Deploying
There are two branches on this project: the `master` and `production`. Pushing to the `production` branch will trigger a deploy to Heroku, which will deploy a new change!

The `production` branch is different because it minifies and concatenates all of the HTML templates and JS files. This reduces filesize and server requests, which is pretty important when you are using a free hosting service.

To deploy a change 
- Install [Grunt](https://gruntjs.com/) with `npm install -g grunt`, a build tool used to automate certain tasks. 
- Switch to the production branch. `git checkout production`
- Pull the changes. `git pull master`
- Minify the Javscript and angular HTML templates `grunt` 
    - just running `grunt` will trigger the default task, which is to minify javascript and compile the html templates into one file
- `git add .` `git commit -m "built"` `git push origin production`
- Switch back to master branch! `git checkout master` If you forget this, you will be editing the wrong branch!

