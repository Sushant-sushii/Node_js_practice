# Practice Set 1

## Create a new project by following the named steps

1. Install `nodemon` and `express`.
2. Add two dummy middleware functions:
   - one that logs the request path
   - one that logs the request method
3. Add a third middleware that returns a response.
4. Add route handling using two more middleware functions:
   - one for the path `/`
   - one for the path `/contact-us`
5. Make `/contact-us` return a form with `name` and `email` input fields.
   - the form should submit back to the `/contact-us` page
6. Also handle `POST` requests to `/contact-us` using a separate middleware.

