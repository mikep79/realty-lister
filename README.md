- [x] NPM init. NPM install express, body-parser, mongoose. 

- [x] Set up controllers, services, pages so pages are shaking hands.
    - Source all scripts.
    - Confirm controller/view handshake for home.
    - confirm for other controllers.
    - source in service file.
- [x] Set up get req for rent data.
    - Test get req func from html view to server router - OK!
- [x] Create links to navigate page in index.html.
- [ ] Set up database connection/schema.
     - Grab all data.
     - Grab only rental data.

- [ ] Repeat for sale data.


# Weekend Challenge 5 - Angular, Mongo, Bootstrap Oh My

Welcome to weekend challenge 5! This weekend, you will take on the role of an application developer for a real estate company. You will be working with data that we will be providing to you. It will be a collection called *listings*. Inside of it, you will find information for properties that are either "for rent" or "for sale".

Your job is to get this data onto the DOM, accounting for the inconsistent datatypes that are possible with MongoDB. But additionally, let’s bring in Bootstrap to the mix to make sure that the application looks as good as possible.

## Project Requirements

- [ ] Create a Full Stack application from the ground up using Angular, Node, and MongoDB
- [ ] Work with the data set that we have provided for you
- [ ] Use Bootstrap to present the data
- [ ] Account for the different data ("rent" versus "cost") and ensure that this is noted on the display of the information, by listing "For Rent" or "For Sale" based on which of the two properties that it has.
- [ ] User `angular-route` to display the data in multiple views.
- [ ] Interact with the server via an Angular service. 

## Importing the Provided Data File

1. Download the *listingData.js* file.
2. In Terminal, navigate to the folder where you downloaded the above file (or move it to where you want it).
3. Run this command in your Terminal: `mongoimport --db realestate --collection listings --file listingData.js`

## Hard Mode
Create an interface for adding additional rental or housing properties to the collection. You will need to give the user an option for either a Rent property or a Sale property.

## Pro Mode
Host the application on Heroku and mLabs. You will need to transfer the data up to mLabs. You will need to research how to accomplish this.