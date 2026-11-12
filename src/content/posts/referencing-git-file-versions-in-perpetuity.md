---
title: "Referencing Git File Versions In Perpetuity"
description: "How to use git cat-file and git show to reference a specific version of a file in git, forever."
pubDate: 2024-01-21
draft: false
featuredImage: "/images/git-freakout.png"
tags: ["git", "version control"]
categories: ["Development"]
---

A real-world use case for referencing a version of a git file came up in practice recently. The suggested solution was to copy a file into git to a folder as the project morphed and evolved over time. I suggested there would be a better way utilizing the power of version control.

## Permalinks

`cat-file` will work within the git command line to `cat` a file out at a particular point in time. This command, assuming you have git installed on the machine you want to view this permanent link at, will allow you to do so at any time.

Example: `git cat-file -p 358ff32:./content/about.md > ./dump.md`

`358ff32` is my hash, I just yanked this out of Github real quick. But any hash will do for the commit you want to reference back in time with.

This requires writing to a file — it's nice if you know you're going to work locally with it, but as you see, you need to write to _something_ so I used `dump.md`.

The alternative is `git show`. `git show` is nice when you just want to check something out quickly in the terminal. Either way, both options allow for a terminal-based quick reference to a point in time for a file.

## Permalinks Reinvented

[Github](https://docs.github.com/en/repositories/working-with-files/using-files/getting-permanent-links-to-files) has its own documentation about permalinks. But it all revolves around the commit's hash, similar to what git show is doing above — just in a web GUI instead.
