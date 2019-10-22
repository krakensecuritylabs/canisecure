# Can I secure…

## Table of Contents
+ [About](#about)
+ [Links](#links)
+ [Getting Started](#getting-started)
+ [Usage](#usage)
+ [Contributing](#contributing)

## About

canisecure.com provides quick and easy guides to secure things like devices and websites.

## Links

- https://www.canisecure.com/

## Getting started

Canisecure.com runs on [Jekyll](https://jekyllrb.com/) as a [GitHub Pages](https://pages.github.com/).

The site uses [Sass](https://sass-lang.com/) for CSS compilation.

1. Clone the repository.

```
git clone https://github.com/krakensecuritylabs/canisecure.git
```

See [Cloning a repository](https://help.github.com/en/articles/cloning-a-repository) on GitHub documentation.

If you're not familiar with Git or GitHub, I strongly encourage you to try [GitHub's desktop app](https://desktop.github.com/) on macOS or Windows.

2. Install Jekyll.

```
gem install bundler jekyll
```

See [Jekyll Installation Guide](https://jekyllrb.com/docs/installation/).

3. Run Jekyll.

```
bundle exec jekyll serve
```

4. Go to [http://localhost:4000](http://localhost:4000).

## Usage

### Folders structure

Here is a quick overview of the project's folders structure:

* Data:

    - `_data`: Data files used throughout the site. This is mainly for settings and labels.
    - `_guides`: Markdown files that instruct readers how to secure their things.
    - `_posts`: Markdown files of the latest news.

* Layout:

    - `_includes`: Files included in other theme files.
    - `_layouts`: The main layouts of the site.
    - `_sass`: Sass files. All files will be compiled into one in the `assets/css/` folder.
    - `assets`: CSS, images, and JavaScript files.

## Contributing

1. Create a new Markdown file inside the `_guides` folder. You can duplicate the existing `_template.md` file for an existing model.


* `description`: A sensible description of the guide.
* `category`: Category to group guides (e.g., `software` or `social media`).
* `updated`: The date of the last update in that file. This is useful to sort features by last update on the homepage of the site.
* `links`: External references to other sites.

2. Create a pull request
