# AGENTS.md

## Project overview

This repository is the source for Curtis Li's personal résumé site at
<https://www.curtis-li.com/>. It is a small, single-page Jekyll site hosted by
GitHub Pages.

- `index.html` is the Liquid/Jekyll page shell. It renders every item in
  `site.posts`, in reverse order, as a section on the page.
- `_posts/2017-01-01-intro.md` contains the introduction and social links.
- `_posts/2017-01-02-resume.md` contains the résumé content.
- `_config.yml` contains site metadata and Jekyll settings.
- `combo.css` is the stylesheet loaded by the page. The CSS files under
  `_includes/css/` are source/reference files, but there is no build script in
  this repository that combines them; update `combo.css` when changing the
  deployed styling.
- `site.js` contains the small jQuery interaction for section dividers.
- `img/` and `pdf/` contain static assets.
- `CNAME` configures the custom GitHub Pages domain.

## Prerequisites

The dependencies are intentionally old and pinned:

- Ruby 2.2.1 is recorded in `Gemfile.lock`.
- Bundler 1.13.7 is recorded in `Gemfile.lock`.
- Jekyll 3.3.1 is pinned in `Gemfile`.

For the most reproducible setup, use a Ruby version manager and those recorded
Ruby/Bundler versions. A newer Ruby or Bundler may not be compatible with the
locked gems.

Install dependencies from the repository root:

```sh
gem install bundler -v 1.13.7
bundle _1.13.7_ install
```

Do not update `Gemfile.lock` unless dependency modernization is part of the
task.

## Run locally

Start Jekyll's development server:

```sh
bundle exec jekyll serve
```

Then open <http://localhost:4000/>. The server binds to `0.0.0.0` and uses port
`4000` according to `_config.yml`.

Jekyll writes the generated site to `_site/`, which is ignored by Git. Do not
commit `_site/`.

## Build and test

There is no automated test suite or lint configuration in this repository.
The primary validation is a clean Jekyll build:

```sh
bundle exec jekyll build --trace
```

After a content or layout change, also inspect the locally served page and
verify:

1. The introduction and résumé sections render in the expected order.
2. Markdown headings, spacing, colors, and social icons display correctly.
3. Social, email, image, and PDF links resolve.
4. The page has no browser console errors.
5. The layout remains usable at both desktop and narrow mobile widths.

For JavaScript changes, click any `.sectiondivider` element and confirm that the
page scrolls smoothly to its section. This behavior depends on the externally
hosted jQuery 2.1.1 script.

## Editing guidelines

- Preserve the YAML front matter at the top of `index.html` and each file in
  `_posts/`; Jekyll only processes files with front matter.
- Post filenames determine their ordering. Because `index.html` loops over
  `site.posts reversed`, check the full rendered page after adding or renaming a
  post.
- Root-relative asset paths such as `/img/...` are suitable for the custom
  domain and GitHub Pages root deployment.
- Keep site-wide metadata in `_config.yml` rather than duplicating it in the
  HTML.
- Preserve `CNAME` unless the custom domain is intentionally changing.
- Avoid committing generated files, dependency directories, or local caches.

## Deployment

GitHub Pages publishes the repository. A normal content change does not require
a separate deployment command: commit the source changes and push them to the
repository's publishing branch. Before pushing, run the build and perform the
manual checks above.
