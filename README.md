# Reactive Snake

Classical Snake Game made using React, Redux, and HTML5 Canvas.

### The game implements these features
  - The snake grows by 1 "unit" when eating food
  - The snake dies (game over) by colliding with itself, wall or boundary
  - Tracks score and displays it once the game is over
  - User can pick easy/medium/hard level for speed and walls
  - Tracks best score across attempts
  - Sometimes "bonus" food spawns which is worth extra score
  - User can adjust movement controls

### Source code structure
![Source code structure](https://i.imgur.com/UZh209S.png)

### What can improve
  - Currently the grid is drawn (actually right now, the drawing code is commented and background image is used for the grid (but you can switch it up)) by defining Canvas width, height, and the scale of a single cell. This solution makes it harder to scale the grid on Canvas resize so alternatively we could use Canvas width, height, and number of columns and rows.
  - Currently the walls are drawn at random (although the game will try to draw walls as separate as possible across the map). This can improve by adding a maze-like walls generator that could generate a more meaningful structure.
  - Code could be refactored better
  - We could add additional options such as:
    - Giving user the option to show a replay of the last game
    - Let the snake pass through the boundaries and coming in from the other end
    - Adding a player 2 while making the map larger to accommodate the second snake
    - Adding different kinds of "bonus" foods
    - ...

# How to run

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
