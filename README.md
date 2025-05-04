# My-Portfolio-React

This is a long-term personal project focused on building a polished, interactive portfolio using React. My goal is to continually develop and improve the site while deepening my understanding of front-end development and web design over time So far, I have
- Set up the core structure: Home, Projects, About Me, and Contact pages
- Added and styled all page content
- Implemented interactive UI elements (e.g. hover effects with color changes and animations)

Next, I hope to add in more advanced or dynamic features and continue refining the design. The project is deployed through netlify at [https://shreya-thoth.netlify.app/](https://shreya-thoth.netlify.app/).

## My Progress
* Day 1: I've just learned how to make tabs on React following [this tutorial](https://www.youtube.com/watch?v=oTzKdpPa3J4) and in the process I also learned how to...
  - Set up a React project using Vite and add [the tailwind CSS library](https://tailwindcss.com/docs/guides/vite)
  - create a grid background
  - add spanners, grids, buttons, and forms (with input)
* Day 2: I've added navigation bar and the website now has three pages. I removed the tabs from earlier but I plan to use them later in one of the pages. I also have experimented with integrating css files for the pages and the navigation bar.
* Day 3: The contact page is functionally done and it links to my github, linkedin, and my email (it autofills with a subject and content). I've been working on the projects page and I added some fun features like having the text on the page turn red as the mouse stays on it and the title shake and grow. I also figured out how to deploy the website following [this tutorial.](https://www.youtube.com/watch?v=XMGOfJxnH7s&t=3s)
* Day 4: I filled in all of the content I wanted for the home page, the about me page, and the projects page and I changed the color scheme using a [color scheme generator](https://coolors.co/). I also reformatted all of the pages to look a little nicer.
* Day 5: I made a mockup of what I want my website to look like ([Here's the link!](https://www.canva.com/design/DAGme0MpjFU/lu7dUZDz3Y776HmzpowlSw/view?utm_content=DAGme0MpjFU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h43cb69348b)). I also have begun implementing the mockup. I've added in hills in the home page using [shapedivider.app](https://www.shapedivider.app/) for the shape, a [particle effect background](https://csscrafter.com/css-particle-effects/) for the about me page, and [shooting stars](https://prismic.io/blog/css-background-effects) for the contact page. I've also updated the entire site with the new colors and I've started adding in variables for the css colors at the top of each page to make it easier to change.

 ## Next Steps
 * For each tab
     - My Projects Tab - I need to figure out how to make it different from About Me tab and I need to add more projects. I've also been considering adding some kind of filtering but I'm not sure if I would have to change how I deploy my website if I use a database.
     - About Me Tab - It's kinda boring, maybe I'll add a trivia game or make things fall off screen when clicked
     - Contact Tab - I would like to get rid of the background of the images, maybe link my spotify.
  * In general  
   - Add more images to site
   - Implement backgrounds myself/make them more dynamic
   - Fun features (that I've seen in other places)
       * change the tab name when user goes to another tab
       * Integrate Unity games into React app using WebGl
 * Bugs
   - Can scroll up and have content disappear behind nav bar - doesn't impact anything functionally but it is kind of annoying. Need a better way to add space for each of the pages behind the nav bar.
   - Not really mobile compatible, considering using Tailwind CSS but transfer seems kind of annoying - will look into other options
