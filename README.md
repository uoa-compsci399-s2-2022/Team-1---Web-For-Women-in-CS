# Team 200 OK - Project: A website for women in the School of Computer Science at the UoA

## Project Management tool
[Link]
- Github https://github.com/users/tea830/projects/1/views/1
- Jira https://21hertz.atlassian.net/jira/software/projects/CS399/boards/2/roadmap

## Short Description of Our Project
Our website provides a platform allowing all the women who is already in or interested in joining this industry to be connected to the professional women in UoA.
At the same time, we also keep our target users up-to-date with the latest news and recent events on this site.
[[final report link]](https://docs.google.com/document/d/1J1WOLyRU7KnnWI10wytJNRwFcBaSWhIYGnzGVX6YR6E/edit#heading=h.17gf7kgbgt5m)

## Technologies used
- ReactJS (frontend)
  - antd (module) 
- CSS (frontend)
- Node.js (backend)
- Express (backend)
- MongoDB (database)

## Project's Installation and Setup Instructions

Clone the repository. You will need node and npm installed globally on your machine.

### To set up the project:
You need to install all the node modules in both backend & frontend.

```sh
$ cd frontend
$ npm install
$ npm install antd --save
$ npm install --save @ant-design/icons
$ cd backend
$ npm install
```

### To run the project:
You need to have both the node server and the react project running.

### Start the server:
You need to call the following commands
```sh
$ cd backend
$ nodemon server.js
```
If doesn't work, please try:
```sh
$ cd backend
$ npx nodemon server.js
```

This server should now be running on port 4000.

### To start the website:
You need to call the following commands

```sh
$ cd frontend
$ npm start
```

This will start the react application on port 3000.


## Usage Examples (if available).

### User instruction
General user:
1. Users can click on the text in the navigation bar to jump to different pages.
2. Users can click the title of the news/events/prjects page to jump to the details page.
3. Users can click the read more link on the staff and phd student pages to jump to the details page.
4. Users can click on the images in the gallery page to view larger images.
5. Users can click on different links on the resource page to jump to different websites.

Admin user:
1. User need an account to log in.
2. User can click on the 'add' button to add events/ news/ research projects/ staff details/ PhD student details on the corresponding page.
3. User can click on the 'edit' button to edit the corresponding events/ news/ research projects/ staff details/ PhD student details.
4. User can delete the events, news, research projects, staff details, PhD student details by clicking on the 'delete' button. 
5. These changes will be saved immediately after the 'submit' or the 'delete' button is clicked. 


## URL of the website where the project has been deployed
localhost

## Future Plan 
- WYSWYG
- Countdown function
- Search function
- FAQ 

## Our Team
Sihui Yang
- Leader, Project manager, Backend, Database

Christina Zheng
- Project design, Organising, UI design, Frontend

Ji Zhu
- Frontend

Yaochen Yan
- Frontend, Testing

Yihan Wang
- N/A

Amy Chieng
- Frontend, UI design

## Acknowledgements
We would like to take this opportunity to thank our client, Ms Vita Tsai, our lecturer and course coordinator, Asma Shakil and Anna Trofimova, and our tutor, Andrey Borro. They offered significant guidance, support, and kindness during this project. The outcome of this project would not have been possible without their constructive instructions and kind support.

