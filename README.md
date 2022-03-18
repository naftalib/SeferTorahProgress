# Progress Report App

This App was developped for a client to generate a dynamic display of the development of a Torah scroll in progress.

I created a data file constaining an array of objects. Each object is designated to one of the 245 amudim of scroll. 

I created a generic display card component which is used to represent each column of a Torah scroll. The display card pulls data about the status of the column from the data array and displays the following points of info; 

Using the .map function I have all the amudim being displayed on the page. After each one is completed they are updated in the data file. This way the buyer can see where the project is holding.
