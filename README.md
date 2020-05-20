# How to Build a web app using ReactJS and Firebase

We will use the following components in this application:

- ReactJS
- Material UI
- Firebase
- ExpressJS
- Postman

## How our application is going to look:

![](./docs/account_creation.gif)

## Application Architecture:

![](./docs/dashboard.png)

## Understanding our components:

You may be wondering why we are using firebase in this application. Well, it provides secure Authentication, a Real-time database, a Serverless Component, and a Storage bucket.

We are using Express here so that we don't need to handle HTTP Exceptions. We are going to use all the firebase packages in our functions component. This is because we don't want to make our client application too big, which tends to slow the loading process of the UI.

Note: I am going to divide this tutorial into four separate sections. At the start of every section, you will find a git commit that has the code developed in that section. Also If you want to see the complete code then it is available in this repository.

## Section 1: Developing Todo APIs
In this section, we are going to develop these elements:

Configure the firebase functions.
Install the Express framework and build Todo APIs.
Configuring firestore as database.
The Todo API code implemented in this section can be found at this commit.

Configure Firebase Functions:
Go to the Firebase console.

![](./docs/FirebaseFunctions.png)

Select the Add Project option. After that follow the gif down below step by step to configure the firebase project.

![](./docs/FirebaseConfigure.gif)

Go to the functions tab and click on the Get Started button:

![](./docs/FirebaseFunctionConfig1.png)

You will see a dialogue box which has instructions on How to set up the Firebase Functions. Go to your local environment. Open a command-line tool. To install the firebase tools in your machine use the command below:

<code> npm install -g firebase-tools </code>

