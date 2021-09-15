[Plugins]: LINK_TBD

## Staging your content

We don't have a good staging system right now. We'll be able to show you your work before it goes live, but if you want to see how things will render _while_ you're working on them, the only option is to download the main repo and run a local Jekyll server.

To use the Jekyll setup, you'll need a Ruby setup with `bundler` installed. `gem install bundler` should do the trick.

- Clone this repo
- Add your content repo as a submodule in the `/collections` directory
- Run `bundle install` in the root of the repo
- Run `bundle exec jekyll serve -l`
- Open a web browser to `http://localhost:4000`

The `-l` flag turns on LiveReload and incremental builds, so as you edit your content the web browser should automatically refresh when you save the document. Only pages being modified are rendered again, so if you change a title and it doesn't show up properly on an index page, you need to `touch` the index page to regenerate it. Or kill the server and run `jekyll build` to force the entire site to render.

## Content comes from repositories

The root devo.build site is fairly spartan. Most content in it is provided by external GitHub repositories that are added as submodules and imported when rendering the site.

A content repository is a repository containing nothing but Markdown and image assets. It contains an `index.md`, Markdown pages for each piece of content (optionally sorted into subdirectories), and an `assets` folder which contains any media assets used in the pages (images, PDFs, videos, audio). Each of these types has a few specific requirements that need to be adhered to.

```console
/collections/REPO_SUBMODULE/
                            index.md (see below)
                            Markdown.md (see below)
                            assets/* 
```

(Note that we're using the word "collections" to represent like groups of content, more akin to "series" than what "collections" means to Jekyll.)

### Collection index.md

Each collection repository _must_ contain an `index.md` file in its root. This file serves as the project overview. In addition to the required front matter, any content in this page will be displayed above a listing of the pages that comprise it. Only the front matter is required.

A submodule repository can have more than one collection. The `index.md` file is what will be served if the url path to the parent directory is called, but additional `.md` files with the same front matter keys can also exist and will be displayed as additional collections. Each piece of content can only belong to one collection, though.

#### Project front matter

The index.md file (and all collection indexes) should have the following front matter. Uppercase values must be customized, lowercase values must not be modified.

```yaml
---
layout: collection
title: PROJECT_TITLE
series: SERIES-SLUG
description: ONE_LINE_SUMMARY
thumbnail: RELATIVE_PATH_TO_THUMBNAIL_IMAGE
---
```

The thumbnail should be a minimum of 250x150px. It will be resized and cropped (if needed to fit the aspect ratio) when displayed. At this time we're requesting that all collections and all submitted content have *at least one* image, even if it's simply a screenshot of a tutorial in action. These thumbnails are used to offer better visual navigation and help prevent a "wall of text."

The `series` key defines the slug you'll use to assign content to the collection, so it must be unique. We may eventually run into issues with name clashes, but we'll manually curate until we have a better solution.

##### Multiple collections per repo

If you wanted to break a repository up into multiple collections, you would simply add a new index file with a different name.

For example, if the directory is "/collections/tutorials", the `index.md` file in that directory would be for "Tutorials." But if you wanted a "Getting Started" collection as well, you would create `getting-started.md` and add the appropriate front matter. As long as it has the `series` key, it will be viewed as a collection. 

The URL for the Getting Started collection would be "https://.../collections/tutorials/getting-started" but it would appear at the same level as all other collections in navigation.

## Pages

Each project repo (and the root repo) can contain as many pages written in Markdown as you like. The only technical requirement for a page is that it contain the appropriate front matter. There are stylistic guidelines that will be enforced in the content, but any text file with the `.md` extension and the requisite front matter will render as part of the site.

Within a project repo, directories become parts of the url (permalink) for the page. Submodule repos are added within the `/collections` directory, and the base URL for any collection is `devo.build/collections/PROJECT-SLUG`. The slug will be assigned by the maintainers when the submodule is added.

(The `collections` directory is purely for organization. It's entirely possible to create other parent directories. As long as they contain the right formatting, there can be as many as needed. Room for future expansion, as needed.)

### Required front matter

```yaml
---
title: PAGE TITLE
parent: series-slug
tags: [TAGS]
thumbnail: https://via.placeholder.com/350x400?text=DevOps+Thumbnail
---
```

See [Tagging Pages](#tags)

### Optional front matter

- `categories:` is an array containing one or more category tags. See [Tagging Pages](#tags) for a list of available categories.
- `author:` can be a block of YAML data, or if the author has been permanently added to the site by the maintainers, the author's slug can be used.
    
    To specify author data in the front matter, use a block like this. Other than "name," all fields are optional; fill out what's appropriate and leave out what's not:

    ```yaml
    author:
      name: Brett Terpstra
      bio: Oracle DevRel Writer, developer, blogger, podcaster
      home: https://brettterpstra.com
      twitter: ttscoff
      github: ttscoff
      gitlab: ttscoff
      bitbucket: ttscoff
      stackoverflow: ttscoff
      codepen: ttscoff
      youtube: BrettTerpstra
      facebook: ttscoff
      linkedin: brettterpstra
      instagram: ttscoff
      avatar: https://cdn3.brettterpstra.com/images/bt-mark.png
      location: Minnesota
      links:
        - label: Random Link
          url: https://example.com/one/
        - label: Second Link
          url: https://example.com/two/
      email: brett@example.com

    ```

- `toc: true` will enable a sidebar table of contents, automatically generated from headers in the page

- You can manually add links to the left sidebar using:
    
    ```yaml
    sidebar:
      - links:
        - url: https://developer.oracle.com/proximasafe-intro/
          title: Proxima Safe Part 1
        - url: https://developer.oracle.com/proximasafe-part-2/
          title: Proxima Safe Part 2
        - url: https://developer.oracle.com/proximasafe-part-3/
          title: Proxima Safe Part 3
    ```

- To disable either or both sidebars and make content wider:
    
    ```yaml
    toc: false
    author_profile: false
    ```

## Tagging Pages {#tags}

Tags and categories should be chosen from available options. If you need a tag or category that does not exist yet, add it to your post but specify in the pull request that you'd like the new tag added to the site.

### Categories

Available Categories, use all that apply. Only include the short version (slug):

- __Build and Run Cloud Native Apps__
  
    slug: `cloudapps`
- __Cloud-Native Software Development on OCI__

    slug: `coulddev`
- __Build, Move, and Modernize Applications__

    slug: `modernize`
- __Java, GraalVM, and Helidon__

    slug: `java`
- __Enterprise Cloud Native Development__

    slug: `enterprise`
- __Personal Cloud Services__

    slug: `personal`
- __Video Games, Servers, and Development__

    slug: `games`
- __Top Frameworks for Top Languages__

    slug: `frameworks`

These categories are based on the content goals for the DevRel program. New categories can be suggested as needed, but if you can fit your content into one of these, well, that's just excellent. Hats off to you.


### Tags

Available Tags are [listed here](https://github.com/oracle-devrel/cool.devo.build/blob/main/_data/topics.yml), try to use at least one of each type. If no appropriate tag exists in a section, you can add a new tag to your post. In the pull request, please specify the new tag and to which type it belongs.

I'm including the list --- as it exists at the time of this writing --- for reference, but it will definitely be changing faster than I'll remember to update, so please check the link above for the current list.

```yaml
topics:
  - hardware
  - oci
  - pytorch
  - iot
  - streaming
  - serverless
  - rpi
  - apex
  - alwaysfree
  - jupyter
personas:
  - fullstack
  - frontend
  - devops
  - backend
  - architect
  - robotics
  - arvr
  - datascience
  - gamedev
  - dbre
  - community
languages:
  - python
  - javascript
  - typescript
  - go
  - ruby
  - terraform
frameworks:
  - tensorflow
  - micronaut
  - nodejs
  - spark
  - flask
```

## Assets

Assets are stored in an `assets` directory in each repository. All links to these assets should be relative to the location of the linking page. If your page is at `/collections/tutorials/page-1.md` and your assets folder is at `/collections/tutorials/assets/`, then your link to an image from `page-1.md` would look like:

    ![](assets/my_image.jpg)

### Images

Images should be sized to appropriate dimensions for retina presentation. If the image is to be displayed at 800x600 and only one asset is being provided, the asset should be 1600x1200 at 72dpi.

Ideally, though, multiple versions of the image should be available. The 1x version should have the base name, e.g. `image1.jpg`. A 2x version should be provided using the same base name with `@2x` appended, i.e. `image1@2x.jpg`. If webp versions with the same base name are provided, they will be offered as sources to compatible browsers (`image1.webp`, `image1@2x.webp`). Webp images can greatly reduce file size and render time for image-heavy pages.

When providing multiple versions of the same image, please use the liquid tag `{% img assets/BASE_NAME{.jpg,@2x.jpg,.webp,@2x.webp} %}`, which will allow our Jekyll plugins to build out a picture tag with multiple sources.

See [Plugins][] for more info on the img tag.

### Video/Animated GIF

Animated gifs can be used in your Markdown, but instead of embedding them with `![](movie.gif)` Markdown formatting, please use the `{% gif movie.gif %}` Liquid tag. See [Plugins][].

In general, videos over one minute in length should be linked to from an external hosting platform like YouTube or Vimeo. Maintaining repositories with large video files is not ideal.

To insert a YouTube video as a responsive embed, simply use:

    {% youtube VIDEOID %}

Short, silent videos can be used instead of animated GIFS, and in most cases take up significantly less space than a GIF. These can be embedded with the gif tag using `{% gif FILENAME{.mp4,.webm} %}`, which will detect the movie format and generate an appropriate video tag, replicating the autoplay/looping of an animated GIF. At minimum an mp4 version must be provided, additional formats (webm, ogv) with the same base name and different extensions are optional.

## Style

- The title front matter will be used as an h1 at the top of the page, don't repeat it in the content
- Avoid using "smart quotes" (curly quotes). Use straight single and double quotes
- Divide long pieces up with headers, starting with level two (`##`), and increasing for sub-sections in sequence
    - Don't jump from a level two to a level four
- [Title case](https://brettterpstra.com/titlecase/test) lede headlines (the `title` key), but simply capitalize subheaders within the content
- Use fenced code blocks for multi-line code, or commands that wrap to multiple lines (allows better formatting and syntax highlighting)
    - Start a code block with triple backticks (`\`\`\``)
    - include language specifier when possible, e.g. `\`\`\`ruby`. You can use `console` for terminal instructions
- Include a newline after headlines
- Use numbered lists when it represents a sequence
    - As long as the first item in the list starts with "1.", it doesn't matter what numbers follow. Every line can be "1." or they can be out of order, they'll be automatically straightened out when it renders. Don't waste a lot of time tweaking the numbering if your list gets out of order
- First letter of list items should be capitalized unless the list items each finish a sentence preceding the list
- If you're referring to a tool or product that is only ever lowercase, don't capitalize it to fit in with sentence structure
- One-sentence list items should not end in a period. If a list item contains multiple sentences, periods are optional. If you use a period on one, though, use a period on every item in that list
- When showing shell commands in fenced code, use a single `$` at the beginning of the line to represent the prompt
- File names, paths, and commands in paragraphs should be surrounded in backticks to mark them as code spans
- When showing an entire URL in the copy, it should either be self-linked (e.g. `<https://example.com>`) or marked as a code span
- Use 4 spaces to indent lists. You can get away with 1 tab instead, but please do not indent lists with two spaces, it leads to trouble if we ever change the rendering engine we use. Four spaces will work _everywhere_
- Only use numbered lists for lists containing two or more items. It's not really a list if there's just one item. That's a sentence, if you're lucky
- To include paragraphs in a list item, add a blank line before the paragraph and indent it four spaces (or one tab) beyond the indent of the parent list item
    - You can do the same with fenced code blocks, starting the fence four spaces/one tab from the parent list item's indent level
- Use italics for emphasis in prose copy (`I *emphasized* this`)
- Use bold for things like 
    - emphasizing a key word
    - product names
    - menu/button titles
- Use block quotes for quotes, starting each line with `> TEXT`. Add line breaks by including a double space at the end of the line. Attribution should start with `---` (em dash), and be linked if appropriate
    - No one will yell at you if you include `<br>` tags to force line breaks. I'd prefer you use two spaces, but a lot of editors trim whitespace willy nilly and it's easy for them to disappear. A `<br>` will stick around. They'll be there for you. We won't begrudge you that
- When linking text, make the content of the link actually describe where the link will go
    - __Bad:__ Click [here](http://example.com) for more details
    - __Good:__ Check out our tips page for [more details on Markdown formatting](http://example.com)
