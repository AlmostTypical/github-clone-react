## GitHub visualiser with React & React Router

In this sprint we will learn about React Router, a library for React that allows us to route our users to different parts of our application. We will be implementing a "GitHub visualiser", a clone of the GitHub website that displays the Northcoders organisation, its members, members' profiles and their repos, all in different routes.

We will be getting the data from our own custom API server because GitHub limits API requests to 60 an hour, which is not ideal for development. You can read the **neat** reference for the API [here](https://northcoders-github-api.herokuapp.com/).

### Objectives

1. Continue delving deeper into the React ecosystem, routing is a key part of any complex application.
2. Put into practice what you've learned in the previous sprints. Learn from your mistakes and try to find common patterns. By the end of this week you should be "thinking in React".
3. Keep flexing those functional programming muscles, have a zero for-loops policy. Aim to get comfortable using the 4 workhorses of JavaScript: `each`, `map`, `filter` and `reduce`.
4. Nail down making `GET` requests to an API with `axios`. Try to get comfortable with asynchronous code and handle loading periods of time appropriately.

### Stages

1. **THINK IN REACT** Start with a mock website with static data. Have a look at the GitHub website and try to identify which parts should be your components.
2. Identify the routes of your application and which elements are in charge of linking to them.
3. Identify your state and place it in the appropriate components. Hook up your render methods to your state and watch them update auto-magically!
4. Pay close attention to which component lifecycle methods you'll use to request data from the API. Should you request all the information at once or should you stagger it across different routes as you need it? Think of the experience of the user.
5. Write event handlers and make data flow upwards from child components to their parents.
6. Users should be able to navigate to:
  1. The Northcoders organisation page
  2. Northcoders' repos
  3. Northcoders' members
  4. A member's profile pages
  5. A member's list of repos
  6. For anything else that you want to implement, you can link to the actual GitHub website.
7. Feel free to layout and style your application anyway you want. You don't have to copy GitHub's design (although it wouldn't be a bad exercise).

##### Bonus

- A cool feature to implement would be the search/filtering boxes on top of the members and repos lists. They should react in real time to what the user is typing, i.e. there shouldn't be a Search button.
