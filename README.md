# Social-Media-API-NoSQL
A NoSQL Social Media API backend application.

## Description
This is the back-end API for a social network web application where users can share their thoughts, react to friends' thoughts/posts and connect via a friends list.

## User Story
<pre><code>AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
</code></pre>

## Acceptance Criteria
<pre><code>GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts/posts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT and DELETE routes in Insomnia
THEN I am able to successfully create, update and delte usesrs and thoughts/posts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thought/posts and add and remove friends to a user's friend list
</code></pre>

## Installation
This application uses Node.js, Express.js, Mongoose.js and a NoSQL database with MongoDB

## Mock-up/Recording
The following animations show examples of the application's API routes being tested in Insomnia.

### Creating New User
<img src="assets\images\NewUser.png">

### Confirming New User in Get All Users
<img src="assets\images\NewUserInList.png">


### Link to Video: 
https://drive.google.com/file/d/1DCyaDD8CXXNJfbt_kc5Lik2xqWJHLRke/view 


## Support
If there are issues with the site, please reach out to me, Jennifer Engle, at j.engle.dev@gmail.com and reference the site's URL. Please provide any screenshots and behavior along with your browser information.

## References
* https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb
* https://mongoosejs.com/docs/validation.html
* https://masteringjs.io/tutorials/mongoose/mongoose-validate-unique-email
* Class Activity 6

## License
None

## Project Status
In progress

## Authors & Acknowledgement
Jennifer Engle


- GitHub @jengle-dev https://github.com/jengle-dev
