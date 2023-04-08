# BlogApi

    Clone the repository from Github: git clone https://github.com/gulshan00/BlogApi.git
    Install the required dependencies: npm install
    Start the server: npm start
    The API is now running and can be accessed at http://localhost:3000

You can use a tool like Postman to test the API endpoints. The available endpoints are:

    GET /users: to get a list of all users
    GET /users/:id: to get a specific user by ID
    POST /users: to create a new user
    PUT /users/:id: to update a user by ID
    DELETE /users/:id: to delete a user by ID
    GET /blogs: to get a list of all blogs
    GET /blogs/:id: to get a specific blog by ID
    POST /blogs: to create a new blog
    PUT /blogs/:id: to update a blog by ID
    DELETE /blogs/:id: to delete a blog by ID
    GET /comments: to get a list of all comments
    GET /comments/:id: to get a specific comment by ID
    POST /comments: to create a new comment
    PUT /comments/:id: to update a comment by ID
    DELETE /comments/:id: to delete a comment by ID
    GET /users/:id/level/:levelNo: to get all friends of a given user at a given level.
Based on the given requirements, we need to create a backend API with User, Blog, and Comment models. Here are the high-level steps that we can follow to implement this:

    Define the data models for User, Blog, and Comment using a database of our choice. We can use MongoDB or any other relational database depending on our requirements.

    Create a database with sample data for User, Blog, and Comment models.

    Define the logic to identify 1st, 2nd, 3rd, and k-th level friends based on the comments they have made on the same blogs. We can use the Blog and Comment models to implement this.

    Implement read and create APIs for Users, Blogs, and Comments. We can use REST or GraphQL to create these APIs.

    Implement an API to return all the n-th level friends of a given user. This API should take the userId and levelNo as input and return a list of all friends of that level for the given userId.

    Use high standard design principles like SOLID, DRY, KISS, etc. while implementing the solution.

    Write modular and clean code with comments keeping in mind scalability and manageability of the code.

    Finally, create a README file on the Github explaining the approach taken and the steps to run the project.

In summary, we need to define the data models, implement the logic to identify friends, create APIs for Users, Blogs, and Comments, and implement an API to return all the n-th level friends of a given user. We should use high standard design principles and write modular and clean code with comments for scalability and manageability.
