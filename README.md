# Career progression framework

This is the publicly accessible career progression framework for Findmypast.

## Getting started

You can run build and run the pages locally, or just update the markdown files. To run locally, you will need to use [node](https://nodejs.org/en/download/) to run this application. Once cloned, do an `npm start`

The framework is hosted via github pages. To update the site, after committing your changes you can trigger a deploy using [Github Actions](https://github.com/findmypast/career-progression-framework/actions).

## Adding a new department

Copy an existing department in the `/src/content` folder e.g. `engineering`. Update the `json` file with the name of the department and then update/remove the relevant markdown files.

## Built using

- https://mozilla.github.io/nunjucks/
- https://www.11ty.dev/
