# NestQuest - Real Estate Web App

<p>A complete real state app with admin and agent feature</p>
<p>Website Category: Real Estate Web</p>

# Agent Account

```
email: shejanmahamud006@gmail.com
password: Smjihad123@

```

# Admin Account

```
email: dev.shejanmahamud@gmail.com
password: Ihateu123@

```

# User Account

```
email: dev.shejanmahamud@gmail.com
password: Smjihad123@

```

# Server Side Code

[Repo Link](https://github.com/ShejanMahamud/NestQuest-Server)

# Live Link

[Netlify Link](https://nestquest-web.netlify.app/)

# Key Features

> - User Authentication & Authorization
> - Social Login/Register & Email Password Based Login/Register
> - Private Route and Role Based Route
> - User can add property to wishlist from property details route and wishlist status will be pending by default and user can make a offer between the price range or remove that property from wishlist (can't select price over or below range), Agent can make this request approved or rejected. If status approved then user can pay via stripe and if paid successfully then status will be Paid and that property will show in Bought Property section also tran_id will show in that card
> - User can add reviews on specific properties from property details route and reviews will show on My Reviews route in user dashboard, from that route user can also delete any of reviews he/she added
> - User, Admin, Agent all of them can update their profile from Profile route in their dashboard
> - Agent can add property and by default it's status will Pending, if admin approved it then it will show in My Properties route in agent dashboard
> - Agent can keep track on sold properties from Sold Properties route in dashboard
> - Agent can keep track on requested properties and see all of properties users offered from user dashboard and agent can make these properties status approved or rejected
> - Admin can manage all of properties in this app. Admin can make agent's added property status pending to Verified or Rejected
> - Admin can manage users and can change user to agent or user to admin and make a agent fraud. if a agent fraud then his/her property will not show in all properties route
> - Admin can also manage reviews and delete a reviews
> - Admin can manage reports against properties
> - Admin can manage advertisement from Advertisement route. from here user can make a property advertise and that will be show in home page

# NPM Packages Used

> - Recharts
> - SwiperJS
> - Ant Design
> - Tanstack Query
> - react-icons
> - axios

# Technologies Used

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![TAILWIND CSS](https://img.shields.io/badge/TAILWINDCSS-37B6F1?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Javascript](https://img.shields.io/badge/Javascript-F0DB4F?style=for-the-badge&labelColor=black&logo=javascript&logoColor=F0DB4F)
![React](https://img.shields.io/badge/REACT-37B6F1?style=for-the-badge&logo=react&logoColor=white)
![React Router](https://img.shields.io/badge/REACT%20ROUTER-red?style=for-the-badge&logo=react-router&logoColor=white)
![Firebase](https://img.shields.io/badge/FIREBASE-yellow?style=for-the-badge&logo=firebase&logoColor=white)
![expressJS](https://img.shields.io/badge/EXPRESS-3C873A?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MONGODB-4DB33D?style=for-the-badge&logo=mongodb&logoColor=white)
![NodeJS](https://img.shields.io/badge/NODEJS-3C873A?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

# Problem Faced and Solution

One of the requirements was to ensure that if an admin marks an agent as fraudulent, the properties listed by that agent should not be displayed. To achieve this, I utilized the MongoDB aggregation pipeline. 

Using MongoDB's powerful aggregation framework, I was able to filter out properties based on the agent's status. Here's a brief explanation of the approach:

1. **Lookup**: Used `$lookup` to join the properties collection with the users collection to get the agent's status.
2. **Match**: Applied a `$match` stage to filter out properties where the agent's status is marked as fraudulent.
3. **Projection**: Used `$project` to specify the fields to be included in the final output.

This approach ensures that properties listed by fraudulent agents are dynamically excluded from the results, maintaining the integrity of the listings.

# Run This Project

```
https://github.com/ShejanMahamud/NestQuest-Client.git
```
```
npm instal
```
Dev Mode:
```
npm run dev
```
Build Mode:
```
npm run build
```

# Thanks For Reading & Visiting!
