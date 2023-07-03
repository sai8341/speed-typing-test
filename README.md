# Speed Typing Test

This code is an implementation of a speed typing test in JavaScript. It allows users to test their typing speed by comparing their input to a randomly generated quotation. The code utilizes HTML, CSS, and JavaScript to create a simple user interface and handle the functionality of the typing test.

## Usage

To use the speed typing test, follow these steps:

1. Open the web page containing the code.
2. The page will display a quotation fetched from the "https://apis.ccbp.in/random-quote" API.
3. The timer will start counting the number of seconds elapsed since the quotation was displayed.
4. Type your response to the quotation in the input field provided.
5. Click the "Submit" button to compare your input to the displayed quotation.
6. If your input matches the quotation exactly, the result will show the time taken to type the correct sentence.
7. If your input does not match the quotation, an error message will be displayed indicating an incorrect sentence.
8. To reset the test and fetch a new quotation, click the "Reset" button.

## Code Explanation

- The code uses several `getElementById` calls to access different HTML elements on the page, such as the timer, spinner, quotation display, input field, result display, and buttons.
- The `displayQuotation` function fetches a random quotation from the "https://apis.ccbp.in/random-quote" API, updates the quotation display, and starts a timer.
- The `resetButtonElement` event listener resets the test by calling the `displayQuotation` function, clearing the interval timer, and resetting the input field, quotation display, and result display.
- The `quoteInputElement` event listener captures any changes to the input field.
- The `submitButtonElement` event listener compares the user's input to the displayed quotation and displays an appropriate result message based on the match. If the input matches, the timer is cleared.

## Conclusion

The provided code implements a speed typing test that allows users to measure their typing speed. Users are presented with a random quotation, and they have to type it accurately within a certain time. This code can be enhanced and customized further to include additional features, such as different difficulty levels, user authentication, and tracking of typing statistics.
