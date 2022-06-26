# Before Running project
Run  "Npm install" to install All the dependencies
## Configure firestore and storage
This project use firebase as database
after generating firebase api keys and pasting the in dot env file 
create two collections "books" and "user" in firebase

#### note : firestore and firebase storage are seperate (firestore is used for database and firebase storage is used  for images)
firebase storage is used to store images
genrate a folder bookImage

![image](https://user-images.githubusercontent.com/65819723/175800415-4dc53af5-2b04-44f2-9da7-dd4f7319598a.png)

## configure talkjs
This project uses talkjs  development mode to enable chat feature 
after creating talkjs account paste it in env file
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.




