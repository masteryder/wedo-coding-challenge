# Wedo Coding Challenge  - Meeting Cost Calculator

## Get started

Install the dependencies...

```bash
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

or simply build and run a version of the project with:

```bash
npm start
```

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start:no-build`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Using TypeScript

This template comes with a script to set up a TypeScript development environment, you can run it immediately after cloning the template with:

```bash
node scripts/setupTypeScript.js
```

Or remove the script via:

```bash
rm scripts/setupTypeScript.js
```

## Deploying to the web

### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
npm install -g vercel
```

Then, from within your project folder:

```bash
cd public
vercel deploy --name my-project
```

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```


## Description of the exercise

### Take-home exercise

Hey Front End developer. Welcome. Your mission, should you choose to accept it, is to create a
tool to calculate the cost of a meeting for a whole year. You have 2h30 to create a single page
app (SPA) following the instructions defined below. If you can finish faster — great! If not, limit
yourself and don't spend much longer than 2h30.

### Project - Meeting cost Calculator
We would like you to build a web app that calculates the estimated cost of a meeting. Many
businesses spend way too much time in meetings.

The user should be able to calculate the cost of one meeting by inputting the average annual
salary of participants, the number of participants, the duration of the meeting and it’s frequency
(weekly, monthly, …).

This project is pretty open ended in order to leave you some freedom and creativity for your
implementation depending on the time you have available.
You can pick a couple of optional improvements if the timing allows it. The following are just
some ideas, so if none of these interest you, feel free to do something that isn’t on this list:
* Add advanced options so the user can choose the number of working weeks or time to
prepare and distribute the meeting agenda/minutes :x:
* Make it responsive so it works on desktop, tablet and mobile devices :x:
* Add a nice graph showing that the user could save 30% by using WEDO :x:
* Add the option to calculate the global costs of meetings in the company (instead of only
for one meeting) :x:
* Instead of average annual salary, the user could input the salary for each participants :x:
* Add some unit tests. :x:

### Project Structure
If your framework of choice is React, you can get started with this project by using create-reactapp. If you'd prefer to use something other than React (Angular/VueJS/Svelte) or you'd prefer a
different project structure, go ahead with what you are comfortable with.

### Evaluation
The app should run on any computer by running npm install and npm start. We’ll evaluate
the exercise by looking at the end result and the code. You will have the opportunity to present
us your project and explain your decisions.


### Coding at WEDO

At WEDO we strive for writing simple, maintainable and clean code. We prefer simplicity over
complexity. We commit often. We love our users and we really care about providing a good user
experience and pleasant UI. We encourage out of the box thinking and we love to be impressed!