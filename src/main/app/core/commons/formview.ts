// The different views supported by the template, e.g. form view, summary view, etc.
export enum FormView {
  Wait,                   // Wait message until any details retrieved from server
  Error,                  // Generic error page which should show server side error message
  Form,                   // The form itself
  Summary,                // For summary page
  SuccessConfirmation,    // Report form submit success
  ErrorConfirmation       // Report form failure
};
