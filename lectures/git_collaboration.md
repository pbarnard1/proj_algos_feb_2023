# Collaborating on GitHub

Collaborating is essential as you will likely be working on tons of projects with coworkers in the future.  One common way to share code is through GitHub.

Think of the main/master branch as the working - or enterprise - code for the application you're building or adding features onto.  **Branches** are used a lot to allow coders to write and test their own code before it is saved as part of the main application.

One common branch is a development branch.  The development branch will come off the main/master branch.  Now from the development branch will be branches for each feature that will be built, like login/registration, adding a "Like" button with the updated functionality, etc.

Once someone is finished building their features, they talk to whomever is responsible for managing the project to make what's called a **pull request**.  A pull request is essentially a request to have a person's code added to a branch.  So when the pull request is made, that person will talk to the other members of the project - usually the leads - and discuss what they added.  One can add as much code as they wish while in their own branch until it is set and ready.  If the code is good, that person's branch will be merged into the development branch.  Once all the features are added, then the development branch can be merged into the main/master branch to become part of the enterprise code.

## Starting a collaborative effort - owner only

The owner of the repository should create a repository with minimal files.  I would recommend just a .gitignore file and possibly a README.md file that describes the routes your project will have and the features it'll hold.  Once that person pushes the repository online (through `git init`, `git add .`, `git commit`, `git remote add origin` and `git push`), then that person should create a new branch.  To do so, type this command:
```
git checkout -b new_branch_name
```
This will create a new branch named "new_branch_name".  (The -b flag means new branch.)  I recommend naming this branch something that describes that you're developing some features, so something like "development_branch", "dev_branch" or a similar name.

Now the owner should be in that new branch.  That person should then begin laying out the basic file and folder structure that everyone in the project will use.  Once it's set up, do `git add` and `git commit` like normal.  However, when pushing, be CAREFUL - use this command:
```
git push origin new_branch_name
```
Here "new_branch_name" is the name of the branch you just made that has the new files.  Do not include "-u", otherwise this will set up the current branch as the default we're pushing from when we add to the repo online.

Once that's done, now you can invite other people to your repository.  Go to your repo online, then go to "Settings" -> look for "Collaborators" under "Access", then under "Manage Access", click on "Add people".  All you need are the names of the profiles of the people you wish to add.  Those people will need to accept the invitations.

(Alternately, you can set up an organization and add collaborators that way before you create the repository.  This will allow people to work on multiple repositories.)

## Other group members
Once you've received the invitation, accept it.  Navigate to the spot in your computer you want to put the project in.  (IMPORTANT: Make sure this ISN'T an already existing repo, as we don't want you to have nested repositories!)

Use this command:
```
git clone https://github.com/<owner_name_here>/<repo_name_here>.git
```
Remove the "<>".  You might need a personal access token here, and if you do, then try the following instead:
```
git clone https://<your_token_here>@github.com/<owner_name_here>/<repo_name_here>.git
```
(If you need a personal access token, click on your profile image, then go to "Settings" -> scroll down to "Developer settings" -> "Personal access tokens" -> "Tokens (classic)" [NOT the fine-grained tokens] -> click on "Genreate new token" [select classic] -> select all the checkboxes -> then generate the new token.  Make sure it's saved somewhere safe!!)

If successful, you'll get the repo saved in a new folder.  Navigate (cd) into that folder.

Now do:
```
git checkout new_branch_name
```
Here new_branch_name is the name of the branch that the owner created.  You will want to either talk to the owner OR go to the repo online and find that branch name.

Once you've moved into that branch, create a new branch and name it as you see fit.  The command is:
```
git checkout -b your_individual_branch_name
```
The -b flag means a new branch.  You can pick any branch name you want, as long as it's not a duplicate of a previously existing branch with that name.

Now you can add code!  Once you're set, do the usual `git add` and `git commit`.  Now when you push, type the following:
```
git push origin your_individual_branch_name
```
Now create a pull request online.  When you do that, the format is:
"branch_to_merge_into" <- "your_individual_branch_name"
Make sure you select the correct branches!  Contact the owner to let them know you're ready.

If the pull request is approved, your code will be merged.

## For ALL:
It's important to pull ALL the time!!!  Do it at the start of every day at least!!!  To bring in the latest code, do the following:
```
git pull origin name_of_branch_to_put_code_into
```
For most, if not all of you, it'll be the development branch.

In order to bring in the latest code to your branch, make sure you're in that branch first!!  Once you are, then do the following:
```
git merge name_to_merge_from
```
This will bring in the code from the branch you're merging from, which likely is the development branch.

From here, it's `git add`, `git commit`, `git push origin name_of_your_branch`, make a pull request, etc.  Remember to pull constantly and merge into your branch as needed!

To switch between branches, do:
```
git checkout branch_to_go_to
```
Notice there's no "-b" flag as the branches should still be there.

Collaborating takes a ton of practice!

## Merge conflicts
Oftentimes you will run into this for various reasons, such as two people working on the same file.  The best way to resolve this is to pull the code like normal to your machine, and look at it in VS Code or STS.  There you can decide what to keep and what to leave out.  Alternately you can resolve the conflicts on GitHub's site, although the interface isn't as good.  How you do it is up to you.  Stay in touch, especially if there's a merge conflict!  Talk to your fellow group members if there's a problem that arises due to a conflict.