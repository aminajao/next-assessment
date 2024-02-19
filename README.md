
## Documentation
### Slow response: 
By setting a reasonable default timeout, you can prevent requests from hanging indefinitely, ensuring a smoother user experience. Users won’t be left waiting indefinitely for responses that may never arrive.
Setting a default timeout for Axios requests using axios default timeout is a powerful technique for managing request timeouts. By defining a timeout duration, you can ensure efficient handling of requests and prevent delays caused by unresponsive servers or slow API responses. Remember to choose an appropriate timeout duration, handle timeout errors effectively, and adjust timeouts based on specific request needs when necessary. Utilizing axios default timeout in Axios empowers you to create responsive and reliable applications that provide a seamless user experience even in challenging network conditions.

### Using Axios VS Fetch API (Javascript built-in): 
Implementing this application as I would in a production environment would require me to pick axios over fetch for the below reasons
One of the main selling points of Axios is its wide browser support. Even old browsers like IE11 can run Axios without any issues. This is because it uses XMLHttpRequest under the hood.
Fetch(), on the other hand, only supports Chrome 42+, Firefox 39+, Edge 14+, and Safari 10.3+ which might affect users using older browsers to access the application.

One of the key features of Axios is its ability to intercept HTTP requests. HTTP interceptors come in handy when you need to examine or change HTTP requests from your application to the server or vice versa (e.g., logging, authentication, or retrying a failed HTTP request).

With interceptors, I won’t have to write separate code for each HTTP request. HTTP interceptors are helpful when I want to set a global strategy for how I handle requests and responses. 

Response management is a critical part of every application invoking an API.

Error management is different in Axios and fetch(). Specifically, fetch() doesn’t automatically reject the promise in the event of server-side errors, such as HTTP 404 or 500 status codes. This means that these errors do not trigger the .catch() block, unlike in Axios where such responses would typically be considered exceptions.


### Performance Optimization Considerations:
One performance consideration would include allowing pagination both on the frontend and from the server when the products list begins to grow which will help reduce the response time and also give the user a good experience of the application.

Caching can significantly improve performance by reducing the load on server and database.

Prioritizing critical resources for initial page load. Use the next/head component to define the order in which resources should be loaded. This is crucial for improving perceived performance.

Implementing code splitting to load only the JavaScript necessary for the current page. This reduces the initial payload and speeds up the page load time.

### Hosting the application
The easiest way to deploy Next.js to production is to use the Vercel platform developed by the creators of Next.js.

First, go to https://vercel.com/signup to create a Vercel account. Choose Continue with GitHub and go through the sign up process.

Import your project repository from github
Once you’re signed up, import your project repository on Vercel. You can do so from here: https://vercel.com/import/git.

You’ll need to Install Vercel for GitHub. You can give it access to All Repositories.
Once you’ve installed Vercel, import your project.
You can use default values for the following settings — no need to change anything. Vercel automatically detects that you have a Next.js app and chooses optimal build settings for you.

Project Name
Root Directory
Build Command
Output Directory
Development Command
When you deploy, your Next.js app will start building. It should finish in under a minute and you have a preview link to view your app.
