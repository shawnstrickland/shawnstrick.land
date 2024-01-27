+++
title = 'Referencing Git File Versions In Perpetuity'
date = 2024-01-21T10:15:42-06:00
draft = false
featured_image = '/images/git-freakout.png'
featured_image_caption = 'git freakout'
tags = ['git', 'version control']
categories = ['Development']
+++

A real-world use case for referencing a version of a git file came up in practice recently. The suggested solution was to copy a file into git to a folder as the project morphed and evolved over time. I suggested there would be a better way utilizing the power of version control.

## Permalinks
`cat-file` will work within the git command line to `cat` a file out at a particular point in time. This command, assuming you have git installed on the machine you want to view this permanent link at, will allow you to do so at any time.

Example: `git cat-file -p 358ff32:./content/about.md > ./dump.md`
`358ff32` is my hash, I just yanked this out of Github real quick. But any hash will do for the commit you want to reference back in time with.

This requires the writing to a file, it's nice if you know you're going to work locally with it, but as you see, you need to writing to _something_ so I used `dump.md`.

The alternative of this is `git show`. `git show` is nice when you just want to check something out quickly in the terminal. Either way, both options allow for a terminal-based quick reference to a point in time for a file. 

## Permalinks Reinvented
[Github](https://docs.github.com/en/repositories/working-with-files/using-files/getting-permanent-links-to-files) has it's own documentation about permalinks. But it all revolves around the commit's hash, similar to what git show is doing above. But in a web gui instead.