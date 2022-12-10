---
title: 'How to make a Github clone'
description: 'In This Blog I will show you how I built my own version of Github.'
date: '2020-01-02'
image: 'https://raw.githubusercontent.com/Arunjoseph3007/github-clone-frontend/main/public/banner.jpg'
tags: ['abcd']
---

In This Blog I will show you how I built my own version of Github. First of all, if you guy want to check it out it is available [here](http://gitbase.sytes.net).

![Gitbase](https://raw.githubusercontent.com/Arunjoseph3007/github-clone-frontend/main/public/banner.jpg)

Now Let me talk a bit about the functionality. Any registered user can

- Make Public or Private Remote **repositories**.
- Controll access to these created repositories.
- Add and delete **Contributors**.
- Browse these repositories through a **web interface**.
- Roll back to previous commits or browse them through the interface.
- Track and analyze commits through **interactive charts**.

*For exploring these features [checkout](http://gitbase.sytes.net/arunjoseph/test1)*


## Disclaimer
Though I have put all my efforts into it this project it is still a side project and by no means production ready. Besides I myself was started out building this project without no idea whatsoever. Figuring out at each step the best ways to do the next. So, probably I am doing a million things wrong and there are many better ways to accomplish each tasks. So if at all you find something wrong please let me know so that I can find a better way. 

## How ? ? ?
Okay, so now thats out of the way lets talk about the project itself. At this point, you are probably wondering (if no, you already a Git guru and this blog is by no means helpful to you cause you already know all of this stuff) how is it possible, how can we store entire folders, how to manage multiple commits and branches, how does CLI functionalities (like clone, pull, etc) work, how to define authentication, and many other details. I will walk you through each of these details in this blog. So get ready to explore a lot of new, interesting and potentially useful stuff.

First of all, let me tell you if this. If you are thinking these are all too advanced, honestly no. Anyone curious about understanding how different systems work can easily do this. Although some prerequisites are advisable. 

- Basic familiarity with Git (if have ever cloned a repo you are good to go).
- Some understanding of servers.
- Some knowledge of HTTP
- Understanding of virtual machines(optional).

## So what are we building and How

At the end we will have a website through we can create, delete repos, blah blah blah (all the above mentioned functionalities). 

All the used stuff
- A GCP(Google cloud platform) Virtual machine to host everything.
- React as our frontend framework.
- NextJS(the best React framework) for server rendering.
- TailwindCSS for styling.
- DaisyUI cause I was lazy to build UI components.
- Django(python framework for API development) for the backend APIs.
- Apache for many thing we will discuss later.

All these technologies are just tools and they can be replaced with any other similar technology that you are comfortable with.

In the end hopefully you will have a much better understanding of how git works.

## Let's begin

So now lets start building. But before that we need a thorough understaning of Git and especially how remote repositories work.

