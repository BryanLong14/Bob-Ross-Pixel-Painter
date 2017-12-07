

## Please watch the tutorial before proceeding: https://www.youtube.com/embed/VkF0IZ0Lgws

## Happy Trees Live Hosted URL: https://paint-some-happy-trees.firebaseapp.com/

# Pixel Art Maker
In this exercise, you'll create your own pixel art maker which will allow a user to choose colors from a palette and then paint pixel art. The interface is completely up to you, but it could look something like this.

![Example of Pixel Art Maker](screenshots/pixel-art-maker-alt.png)

More specifically, your pixel art maker should allow a user to do the following.

1. Start with a blank canvas of pixels.
1. Select a brush color from a palette of colors.
1. Paint the pixels on the canvas using the brush color.
1. Repeat step 2.

To accomplish this, you will have to:
<!--
* Write a function called `createCanvas` that populates the page with at least a 3x3 canvas made up of white, square `div` tags with a border -->
* Write a function called  `createPalette` that creates a palette of at least two colors (e.g. red and blue) below the canvas using more `div` tags
* Add an event listener to the palette `div` tags so when clicked the brush color is saved
* Add an event listener to each canvas `div` so when clicked the background changes to the color selected in the palette
* You'll likely change ./css/style.css, and maybe index.html as well!

* Deploy your app!
* Paste link to deployed app here:
