const quiz = {
  id: "html-layout-quiz",
  title: "HTML Page Layout Design",
  questions: [
    {
      question: "What is the primary purpose of an HTML Form?",
      options: [
        "To add background music to a web page.",
        "To allow a user to enter data that is sent to a server for processing.",
        "To format text into multiple columns.",
        "To embed a video player."
      ],
      correctIndex: 1,
      hint: "Think about user input like logging in or searching.",
      explanation: "Forms resemble paper or database forms, allowing internet users to input data via checkboxes, radio buttons, or text fields to be processed."
    },
    {
      question: "Which form element lets a user select ONLY ONE of a limited number of choices?",
      options: [
        "Checkbox",
        "Text Field",
        "Radio Button",
        "Submit Button"
      ],
      correctIndex: 2,
      hint: "It looks like a small circle.",
      explanation: "Radio buttons (type='radio') are designed to allow the user to select one mutually exclusive option from a list."
    },
    {
      question: "What is an HTML iframe used for?",
      options: [
        "To display a separate web page within the current web page.",
        "To create a dropdown menu.",
        "To build a table structure.",
        "To encrypt form data before sending."
      ],
      correctIndex: 0,
      hint: "It frames another site.",
      explanation: "An iframe (<iframe src='URL'>) embeds another HTML document inside the current document."
    },
    {
      question: "Why is it generally discouraged to use HTML Tables for the overall page layout?",
      options: [
        "Tables are not supported by modern browsers.",
        "Tables were designed for presenting tabular data, not as a layout tool.",
        "Tables cannot contain text or images.",
        "Tables cost money to use."
      ],
      correctIndex: 1,
      hint: "Use divs and CSS instead.",
      explanation: "While possible to create layouts with tables, they were structurally designed to display data grids. Divs and CSS provide better flexibility and accessibility."
    },
    {
      question: "What is the biggest advantage of using Divs and external CSS for layout over inline HTML Tables?",
      options: [
        "It generates automatic JavaScript code.",
        "It makes the site much easier to maintain, as you can change the layout of all pages by editing one file.",
        "It forces the website to only load on mobile phones.",
        "It automatically translates the text into multiple languages."
      ],
      correctIndex: 1,
      hint: "Think about updating a 100-page website.",
      explanation: "Separating layout into an external CSS file using Divs allows you to alter the entire website's appearance by editing just one style sheet."
    }
  ]
};

export default quiz;
