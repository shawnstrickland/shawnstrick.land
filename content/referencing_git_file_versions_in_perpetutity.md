+++
title = 'Referencing_git_file_versions_in_perpetutity'
date = 2024-01-21T10:15:42-06:00
draft = true
+++
A real-world use case for referencing a version of a git file came up in practice recently. The suggested solution was to copy a file in git to a folder for preservation as the project morphed and evolved over time. I suggested there would be a better way. That eventually this old file version would be found by someone and wondered why it was so stale, bounded to cause issues later on.

This sent me down a path of discovering what the best solution for this could be.

## The Solution

I landed on git permalinks - known hashes of the file we want to preserve - to be documented elsewhere for any future reference that may be needed. This allows for the version control system to do as it does and control versioning, but still allow us to identify an _exact_ version of something needed in case it must be referenced later.

This is a better use of version control than saving off a specified version in a folder in the project. My experience coming into projects well after they've been established has taught me that this method is only bound to confuse someone else later. It also potentially has adverse affects in production if its use and purposes are not well-documented and known in the project later.