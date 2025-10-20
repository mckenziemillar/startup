# CS 260 Notes

[My startup - Simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 54.81.96.130
Launching my AMI I initially put it on a private subnet. Even though it had a public IP address and the security group was right, I wasn't able to connect to it.

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

This was easy. I was careful to use the correct structural elements such as header, footer, main, nav, and form. The links between the three views work great using the `a` element.

The part I didn't like was the duplication of the header and footer code. This is messy, but it will get cleaned up when I get to React.

## CSS

This took a couple hours to get it how I wanted. It was important to make it responsive and Bootstrap helped with that. It looks great on all kinds of screen sizes.

Bootstrap seems a bit like magic. It styles things nicely, but is very opinionated. You either do, or you do not. There doesn't seem to be much in between.

I did like the navbar it made it super easy to build a responsive header.

```html
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
            Calmer
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="play.html">Play</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
```

I also used SVG to make the icon and logo for the app. This turned out to be a piece of cake.

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0066aa" rx="10" ry="10" />
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="72" font-family="Arial" fill="white">C</text>
</svg>
```

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

## React Part 2: Reactivity

React Hooks

useState lets you create variables that make the page re-render when they change
useEffect runs code when the component loads (or unmounts for cleanup)
About component - set up state for imageUrl/quote and initialized them in useEffect (even though they're hardcoded for now)

Managing State Between Components

Lifting State Up - put shared state in the parent and pass functions down to update it
authState lives in App, gets passed to Login with a callback to change it
This way App knows when someone logs in and can show/hide nav items

Breaking Things Into Components

Made smaller components instead of one huge file
Play has Players and SimonGame inside it
SimonGame has the four SimonButton components
Login shows either Authenticated or Unauthenticated based on if you're logged in
Way easier to work with than all the code in one place

Game Logic Stuff

Used state for allowPlayer (stops you from clicking buttons too fast), sequence (pattern to match), and playbackPos (where you are in the sequence)
Saved scores to localStorage so they stick around
Generated the scores table by mapping over an array in JSX
Had to use async/await for the button animations

Routes and Authentication

Only show Play and Scores links if you're logged in
Checked authState to decide what to render

Dev Environment

DON'T use Live Server anymore - run npm run dev instead (Vite handles everything)
deployReact.sh builds the app with Vite then copies it to the server
Use browser devtools to debug frontend

Preparing for Later

gameNotifier has fake scores on a timer, will replace with real WebSocket messages
Login will eventually talk to backend for real authentication
About component ready for actual API calls to get random images/quotes
