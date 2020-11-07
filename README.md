# Combat Capitol - Your Combat Sports Hub
### Developer: Daniel Pillay
### A news app build with React and NewsAPI
---

### Summary
My main goal with this website was to use the NewsAPI to create a combat sports news app. It shows the top articles for various different combat sports. Feel free to use my code and expand on it to create your vision.

**DISCLAIMER:**  *In order to deploy a NewsAPI application, you must sign up and pay. This can run you upwards of $400-800. With that being said, I created this tutorial for those who want to learn about using the Fetch method in React and how to use the NewsAPI for development purposes only.*

### Step 1 - SIGN UP FOR NEWS API:
Sign up for a [NewsAPI](http://google.com) Account. Once you are done, retrieve your API KEY in the account settings section
![API Key](https://i.ibb.co/r7c5j2F/API-Key.png#thumbnail)


### Step 2 - USE THE  ``FETCH()`` METHOD:
Once you collect your key, go to your code and use the ``fetch()`` feature that is included in React and complete the following. First you will create a function that relates to your request. Mine is ``getAllMMA()`` for receiving MMA related news results. Then insert your query. Be sure to check the documentation to full customize your search results to your liking. Also be in mind that your query may look different than mine depending on the news you want to collect. Yours will look something similar to:
``https://newsAPI.org/v2/everything?q={WHATEVER NEWS RESULT YOU WANT}&apiKey{YOUR API KEY HERE}``

![Fetch Method](https://i.ibb.co/zbHXzz3/fetch.png#thumbnail)
As you can see, I use the ``.map()`` method in JavaScript to create a object. In this object I create the keys to be image, date, title, url, source, and description. I then create the value pairs to search for each articles image, date, title, url, source, and description. BE AWARE, these values are specific to NewsAPI's documentation. ``urlToImage`` for an example is NewsAPI's way to search for the article image. The next code block is a loading portion I created. Yo do not have to do this. The last portion of the code is the ``componentDidMount()`` function in React that to make the AJAX request and update the DOM. 

### Step 3 - RENDER YOUR DATA:
The final portion of this project is to render the data. You're going to create the HTML elements that you want to show up. You're then going to set the data to these elements to the keys you created in the function above (IE: image, source, date, title, etc). Once you do this, all of the data should be rendering to your page.

![Render the Data](https://i.ibb.co/m6cn7wB/Mixed-Martial-arts.png#thumbnail)

### STEP 4 - Style the Page and Make it YOURS:
Here is what mine turned out to look like
![Render the Data](https://media.giphy.com/media/ZcFA9Edy1p7MOsaCZC/giphy.gif)

#### For more information, check out the links below
[GitHub Repo](https://github.com/dpillay03/combatcapitol/), 
[Personal Github](https://github.com/dpillay03), 
[LinkedIn](https://www.linkedin.com/in/danielpillay/), 
[Instagram](http://instagram.com/daniel.pillay),
[YouTube](https://www.youtube.com/user/dpillay03/), 

