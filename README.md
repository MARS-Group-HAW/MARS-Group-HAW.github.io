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
- `src/pages/`: individual pages such as Imprint, Team, etc.

Most changes are reflected live without having to restart the server.

### Create a new blog post

To create a new blog post, follow these steps:

1. In the directory `blog/`, create a new directory (e.g., by duplicating one of the existing directories).
2. Rename the new directory  
   > **Note** If the development server crashes after changing the folder structure, see the corresponding entry in the [Troubleshooting](#development-server-crashed-after-changing-folder-structure) section for a possible solution.
3. In the directory, add content for the blog post in `index.md`  
   > **Note** To add a new author, add a new entry to `blog/authors.yml`.

### Create a new page

To creat a new page, follow these steps:

1. In the directory `src/pages/`, create a new Markdown (MD) file.
2. In the new MD file, write the contents that should be displayed on the page. This can include MD source text, HTML source code, and React components. For more details, see the [Docusaurus documentation on MD features](https://docusaurus.io/docs/markdown-features).
3. In the JavaScript (JS) file `docusaurus.config.js`, create a homepage link to the new page via one of the following ways:
   1. To add the link to the top navigation bar, add a new entry to `themeConfig.navbar.items`. For example, the entry `{to: '/md-file-name', label: 'MyLinkLabel', position: 'left'},` would create a link in the navigation bar with the label `MyLinkLabel` that links to a page displaying the contents of the file `src/pages/md-file-name.md`.
   2. To add the link to the footer, add a new entry to the desired section of `themeConfig.footer.links`. Currently, the footer sections `MARS Framework`, `Community`, and `More` are defined. For example, the entry `{label: 'Google', href: 'https://www.google.com/'}` in the section `Community` would create a link in the `Community` section of the footer with the label `Google` to the Google search engine homepage.

> **Note** The order of the entries corresponds to the order in which the links are displayed on the page.

### Create a new thesis entry

To add a new thesis entry on the [Theses](https://www.mars-group.org/student-work/theses) page, follow these steps:

1. Add a PDF version of the thesis to the directory `static/img/student-work/theses/`.
2. In `src/pages/theses.md`, add a new `Thesis` React component under the applicable semester header (see the examples in the file). The `Thesis` component takes the following parameters:
   - `header`: A short header that is set as the title of the thesis entry
   - `title`: The full title of the thesis (in English)
   - `author`: The author of the thesis
   - `type`: The type of the thesis (`ba` or `ma` or `phd`)
     - If left blank, the string `Unspecified` will be printed.
   - `abstract`: The abstract of the thesis (in English)
   - `path`: The path to the PDF file of the thesis. Example: `/img/student-work/theses/<filename>.pdf`
3. Save the page to prompt a reload of the server, and check in your browser if the entry is set as desired.

### Create a new poster entry

To add a new poster entry on the [Posters](https://www.mars-group.org/student-work/posters) page, follow these steps:

1. Add a PDF version **and** a PNG version of the poster to the directory `static/img/student-work/posters/`.
   - The PNG version is used for displaying a preview of the poster on the page, and the PDF version is made available for download.
2. In `src/pages/posters.md`, add a new `Poster` React component under the applicable semester header (see the examples in the file). The `Poster` component takes the following parameters:
   - `title`: The full title of the poster
   - `author`: The author of the poster
   - `description`: A brief description of the poster's content
   - `path`: The path to the poster files **without** a file extension. Example: `/img/student-work/theses/<filename>`.
3. Save the page to prompt a reload of the server, and check in your browser if the entry is set as desired.

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
