--Readme document for *Zhaoyang Lu*, *zhaoyal5@uci.edu*, *30735594*--

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

*/15
- 5/5 Created a functional web app
- 2/2 The ability to control the web app with basic gestures
- 4/4 The ability to control the web app with at least two custom gestures
- 2/2 Following good principles of UI design
- 1/1 Creating a compelling app and application of gestures
- 1/1 A readme and demo video which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?
5 Hours


3. What online resources did you consult when completing this assignment? (list specific URLs)
- For JSON.parse and JSON.stringify: https://gander.wustl.edu/~wilson/store/yui/docs/json/json-freeze-thaw.html


4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
Teammate


5. Is there anything special we need to know in order to run your code?
The angular core version is 15.2.3.
The gesture tracker module returns wierdly and that is beyong frontend

--Aim for no more than two sentences for each of the following questions.--


6. Did you design your app with a particular type of user in mind? If so, whom?
We target light-weight note take who would love to use novel features.

7. Describe the two custom gestures you created.
One Closed Hand and One Open Hand: delete the whole notes
One Open Hand and One Hand Pointing: undo one deletion

8. How does your app implement or follow principles of good UI design?

pointing gestrues refers to navigation
On Lu's end the module never return pinching so the gestrue is ignored
Closed represent recessive actions like deletion and reset.
Open represent growing acitons like add note.
one open one closed represent in between which is delete only the last one.

We followed the convention on Android and IOS.
Our initial view is the notes.
We provided the ah-oh button in the function of deletion and undo deletion.