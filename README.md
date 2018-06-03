API Seperated into services that handle the sort logic and controllers. Think code style is important so project comes with linting.
Modularize that code as much as possible and reduce the amount of code in the main entry point.

Edge cases: Empty Input, No "value" query param supplied, NaN inputs, Negative Numbers

For empty input should just return empty array.
No "value" query param supplied. Think this is not actually an error condition because query params are optional and not restrictive so just return an empty array not an error message.
NaN input was debating to either return results as null, or ignore NaN values, or return error message. Decided to do error message to infrom user so as to be as verbose as possible (not fail silently).
