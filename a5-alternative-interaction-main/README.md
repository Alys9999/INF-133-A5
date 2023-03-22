--Readme document for *Zhaoyang Lu, Nhat Anh Pham*, *zhaoyal5@uci.edu, nhatap@uci.edu*, *30735594, 14456197*--
Link to demo: https://drive.google.com/file/d/1pQM6qXP_Ew4pw6lRzV9-h_ZgKm_8nuxb/view?usp=share_link 

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

15/15
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
- Bootstrap: https://getbootstrap.com/docs/5.0/getting-started/introduction/
- Angular Bootstrap: https://ng-bootstrap.github.io/#/home


4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
Teammate


5. Is there anything special we need to know in order to run your code?
The angular core version is 15.2.3.

--Aim for no more than two sentences for each of the following questions.--


6. Did you design your app with a particular type of user in mind? If so, whom?
We targeted light-weight note takers who would love to use novel features. Since I (Nhat Anh) struggle with taking small notes for myself to keep track of things, throughout this assignment I was implementing features I thought would be useful.

7. Describe the two custom gestures you created.
One Closed Hand and One Open Hand: delete the whole notes
One Open Hand and One Hand Pointing: undo one deletion

8. How does your app implement or follow principles of good UI design?
- pointing/pinching gestures refers to navigation
- rare use of one handed gestures to avoid misread inputs as much as possible
- closed hand gestures represent recessive actions like deletion and reset
- open hand gestures represent growing acitons like add note
- one open one closed represent in between which is delete only the last one
- responsive design, so also mobile-friendly
- initial view is the added notes
- provided uh-oh buttons in the function of deletion and undo deletion
- gave notification through toasts when actions went through or when actions can't go through for a stated reason