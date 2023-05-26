# PROJECT DESCRIPTION 

# TITLE: ‘Task Hero’ - MERN Stack To-Do App with Sign-in feature

# DESCRIPTION

‘Task Hero’ MERN Stack To-Do app that comes with a sign-in/sign-up feature letting a user access their tasks anywhere anytime. This app has CRUD operations for tasks.
Schemas:
Users: Users.\_id, username, emailId, password
Tasks: Tasks.\_id, task, userid
Types of Users:
Admin: Admin has access to all the users. They can view all the users registered with the ‘Task Hero’
Users: To ensure security and privacy of data of each user this app needs each user to first login to the app. Any user can directly sign up directly from the app. When a user uses a wrong password or email id ‘wrong credentials’ message is displayed.
Following are the features available to the users:
Create a task: User can add a task
Read a task: Existing task list is displayed when a user is logged-in
Update a task: All tasks are editable by a user any time they want
Delete a task: Tasks can be deleted by a user

# INCLUDES
-Created REST APIs using axios for login, signup, edit and delete tasks.
-Designed Home, About, Profile, CRUD and Navbar pages
-Testing and fixing bugs
-Prepared project presentation and document
-Developed Node-APIs for login and edit task
-Fabricated schemas and database on MongoDB
-State Maintenance
-Documentated & presentated all the modules and processes of this application
-Integrated APIs for admin
-Testing and bug fixes.
-State maintenance.
-Routing.
-Developed Node-APIs
-Integrating initial dashboard with the front end app
-Worked on the project presentation
-Developed Node-APIs to create, fetch and delete

# TECHNICAL ARCHITECTURE:

MongoDB: MongoDB is an open-source NOSQL database. It stores data in documents and collection of documents is known as collection. Data structure as well as data can be easily changed anytime you like and thats how it makes the database flexible for any user.
Features:
-Data is stored in JSON-like documents
-JavaScript is used to work on the database entries
-It is highly scalable in terms of volumen and throughput
Express: Express is back-end web application framework for Node.js. It is a standard server framework for Node.js. It simplifies the process of writing the server code.
Features:
-Minimal and fast architecture
-Used for developing scalable web apps and APIs
-It has built-in routers
-It supports plug-ins
-It is asynchronous
React: React is a front-end JavaScript library. It is used for building single web pages as well as full-fledged mobile applications.
Features:
-It supports one-way data binding that gives a better control over data flow
-It is component based
-It is fast, scalable and easy to use
Node.js: Node.js is a cross-platform back-end server runtime environment. It is based on JavaScript.
Features:
-Output is in chunks
-It’s libraries are asynchronous
-It is used for creating powerful server-side applications
Material-UI: Material-UI is an open source frontend framework used for React components. It is built using Less (Leaner Style Sheets).
Features:
-Documentation of Material-UI is well drafted which makes it very easy to use
-Updates in Material-UI is frequent which makes it up to date
-Consisitency in design and color

# CHALLENGES

-Frontend & Backend Integration: Initially we reviewed many resources to research how to combine backend and frontend. Finally, we found a project on glitch -’ https://glitch.com/edit/#!/mealtracknfind’ which was using ‘https://glitch.com/edit/#!/nodeexpressapi’ as its backend. We modelled our app similar to this. Also bringing up two interfaces together by calling axios API was a challenge.
-Glitch as a platform: Collaborating on a single project on Glitch was not easy as it frequently throwing errors and the most common error was ‘Too many requests’ which in general used to take atleast 30 minutes to go back to normal. We overcame this challenge by creating our personal versions for the project and then consolidating all the changes to the group version of the project.
-Inline update task: Inline update task was difficult than other ‘CRUD’ operations
-Conditional routing: Routing pages based on the user role (i.e. User or admin)
Installing external packages: There were some packages that needed to be installed in Terminal manually

# FUTURE WORK

-Add-on features: Adding tasks filter based on category, priority and due-date. This will help users to categorize, prioritize their tasks
-More Admin Rights: Giving admin some rights like changing background for all the users, flag a user and block a user.
-Integrating Zoom: Zoom option to redirect a user to zoom with a click of a button
-Google Calendar integration: Option to integrate tasks with google calendar
-Set Frequency: This option will enable a user to set up the frequency of a task

# CONCLUSION

Technologies/Framework/Libraries learnt: MongoDB, Express, React, NodeJS, and Material UI. This Project was elegant enough to give us knowledge about the MERN stack. Although, we have done activities in our class separately on each of these but building something from scratch and integrating all the components to output a functional application was challenging at the start but was definitely a very insightful for us.

# RESOURCES

https://mui.com/material-ui/react-card/
https://glitch.com/edit/#!/mealtracknfind
https://glitch.com/edit/#!/nodeexpressapi
https://medium.com/swlh/create-a-to-do-list-app-using-react-and-material-ui-adaa6eb32c3
https://reactjs.org/tutorial/tutorial.html
https://www.geeksforgeeks.org/explain-apis-available-in-html5/
https://tasoskakour.com/blog/react-use-oauth2
https://mdbootstrap.com/docs/react/extended/profiles/
https://reactjs.org/docs/state-and-lifecycle.html

# INSTRUCTIONS:

1. Login using below credentials or simply signup and then login
   -User Credentials:
   emailId: ris90@pitt.edu
   Password: rishu@06
   -Admin Credentials:
   emailId: admin@taskhero.com
   Password: iamadmin
2. Go to task page to view your existing tasks
3. On the task page you can add new tasks, edit existing task and delete tasks using buttons.
4. You can view your profile on the profile page
5. Once you are done go to ‘Home’ page and ‘logout’
