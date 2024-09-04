# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the website + Playwright UI to run e2e tests

## Notes

- I purposefully did not write any validation around the duration inputs. Ideally we shouldn't caluclate the the score if duration in bed is < duration asleep. With more time I would use tools like zod, react-hook-form to add input validation.

- If I had more time I would add more test cases around the calculations, as well as all the possible responses the api could possibly return.

- I have some q's around the score calculation. In a real world scenario I would reach out to the owner of this ticket to get further clarification. For this exercise I did what I thought made sense.

- I chose to write e2e tests with playwright as it was quicker to standup and didnt require any mocking

- I used msw to mock a BE server

- I added a toggle switch on the screen that switches whether the api call succeeds (201) or returns a 400 status code

- I used Tailwind.css to do some styling
