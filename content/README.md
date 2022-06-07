# Ocean Pearl CMS Solution
## Leaderboard Alert / Info CMS
File <kbd>content / leaderboard / hint.md</kbd>
You can configure a custom message to be displayed to the user.
You can also use predefined alert boxes (like daisyUI alert):
`<alert-box type="warning" icon>We are currently....</alert-box>`

## Blog
Added a simple blog solution to display blog posts. Ca be managed via our CMS solution.
File <kbd>content / blog / [post-name].md</kbd>
Also the following meta data must be configured:

_our-very-first-blog-post.md_
```md
--- 
title: Name your blog post
oneLiner: A short description for this post (will be displayed in blog overview and in shared links)
author: Name the author (like. Ocean Pearl Team)
readDuration: 5 min
createdAt: optional, date - if undefined - the file meta data is used
---

# Introduction
So this is our first...
```
