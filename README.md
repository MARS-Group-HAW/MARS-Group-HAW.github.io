# MARS Website

The MARS website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. The website contains information about the MARS Group (team page, blog posts, etc.) and the MARS Framework (API documentation and developer documentation).

## Setting up a local development server

To set up a local development environment for editing the website, follow these steps:

1. In a terminal, navigate to the root directory and run `yarn` to install dependencies.
2. Run `yarn start`. This command starts a local development server and opens up a browser window. Per default, the server can be reached at `localhost:3000`.

## Editing content

Webpage content is written in Markdown files and can be edited as such. Depending on your editing needs, work in the following directories:

- `blog/`: blog posts
- `docs/`: MARS framework API and developer documentation
- `src/pages`: individual pages such as Imprint, Team, etc.

Most changes are reflected live without having to restart the server.

### Example: Create a new blog post

To create a new blog post, follow these steps:

1. In the directory `blog/`, create a new directory (e.g., by duplicating one of the existing directories).
2. Rename the new directory  
   **Note** If the development server crashes after changing the folder structure, see the corresponding entry in the [Troubleshooting](#development-server-crashed-after-changing-folder-structure) section for a possible solution.
3. In the directory, add content for the blog post in `index.md`  
   **Note** To add a new author, add a new entry to `blog/authors.yml`.

### Writing LaTeX in Markdown

You can write LaTeX code inside the Markdown files. For inline LaTeX, use `$ … $`. To create blocks, use the following:

```markdown
$$
…
$$
```

### Adding charts to Markdown

You can create dynamic charts with [Mermaid](https://mermaid.js.org/intro/).

Create a Markdown code block and set the "language" to `mermaid` by writing it after the three opening backticks.

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

## Build

```shell
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```shell
USE_SSH=true yarn deploy
```

Not using SSH:

```shell
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Troubleshooting

This section covers solutions to common issues that might occur while working with Docusaurus.

### Development server crashed after changing folder structure

When adding new directories or renaming existing directories, the automatic reload might fail and, as a result, the development server might crash. In this case, restarting the development server usually fixes the issue.

1. In the terminal window that runs the development server process, enter Ctrl+C to stop the process.
2. Reenter `yarn start` to restart a fresh instance of the development server.
