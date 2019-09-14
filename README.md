 # Pursuit-Core-Web-AJAX-Lab

Alright! It's time to employ our friend the [Dog API](https://dog.ceo/dog-api/) again. However, we aren't going to grab data manually from it anymore - we're going to use `XMLHttpRequest` to get it each time the user asks.

Also, we aren't just going to grab random dog breeds. We're going to grab random dog images and present them to the user! What a therapeutic little app.

## Step 1

Create an HTML file and a JavaScript file. In your HTML file, create a `button` element and import your JavaScript.

In your JavaScript, create an event listener on the button. For now, let's just have our button log `"Clicked!"` to the console.

Now, let's make a function called `getRandomImage`. This function should use `XMLHttpRequest` to make an AJAX GET request to the random image route (https://dog.ceo/api/breeds/image/random) of the Dog API. Get the response object and return it.

Now, change your button event listener to call `getRandomImage` and log its return value to the console. Notice that this object has two keys: a `status` key (success! yay!) and a `message` key, which contains an image URL.

## Step 2

So, our button now triggers an AJAX request. However, it doesn't access our DOM to do anything - yet. Let's add more functionality to our event listener. Assign the result of our `XMLHttpRequest` to a variable. Then, create a DOM node representing an `img` element.

Keying into the DOM node at the key of `src`, we can add a `src` to our `img` tag. Assign the `src` of our DOM node to the image URL we get from our AJAX request. Then, append our `img` to the end of our HTML `body`.

Click the button. You should see a random dog image appear. Yay!

## Step 3

Now that we've got one random dog image, we may want another. However, we don't want to append another image to the bottom of our page - we want to replace the existing image with a new one. Add a condition to your event listener to replace the image if it already exists (hint: while it isn't the only way to do it, the `replaceChild` method may prove useful here).

Awesome. We've built out the core functionality of our Random Dog Image app. Style it to your liking.

## Bonus

- Add a `select` element. Allow the user to select a breed and get a random image of a dog from that breed specifically. Here's an example query to the Dog API to get a random image for a dog with the breed `hound`: https://dog.ceo/api/breed/hound/images/random.
- Save all of the previous images instead of overwriting them.  Use a Flexbox to arrange them on the page.
