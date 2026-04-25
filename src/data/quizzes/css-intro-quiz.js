const quiz = {
  id: "css-intro-quiz",
  title: "Introduction to CSS",
  questions: [
    {
      question: "What was the main problem CSS was created to solve?",
      options: [
        "HTML had no way to add links.",
        "HTML was never intended to contain tags for formatting; separating structure from presentation saved time and effort.",
        "Browsers could not load images without CSS.",
        "JavaScript was too slow for animations."
      ],
      correctIndex: 1,
      hint: "Think about content versus style.",
      explanation: "HTML was designed to define structure and content. When presentation tags like <font> were added, it created a nightmare for developers trying to maintain large sites. CSS solved this by cleanly separating content from presentation."
    },
    {
      question: "Which CSS selector is used to specify a style for a single, unique element?",
      options: [
        "class selector (.)",
        "tag selector",
        "id selector (#)",
        "universal selector (*)"
      ],
      correctIndex: 2,
      hint: "It uses a hashtag.",
      explanation: "The id selector uses the id attribute of the HTML element and is defined with a '#' to uniquely identify one element on the page."
    },
    {
      question: "When applying styles, what is the 'Cascading' order priority from highest to lowest?",
      options: [
        "External style sheet -> Internal style sheet -> Inline style",
        "Inline style -> Internal style sheet -> External style sheet -> Browser default",
        "Browser default -> Inline style -> External style sheet",
        "Internal style sheet -> Inline style -> Browser default"
      ],
      correctIndex: 1,
      hint: "Styles closest to the element have the highest priority.",
      explanation: "Inline styles inside an HTML tag override internal styles in the <head>, which in turn override external style sheets and browser defaults."
    },
    {
      question: "According to the CSS Box Model, what clears an area completely transparently OUTSIDE the border?",
      options: [
        "Padding",
        "Content",
        "Margin",
        "Outline"
      ],
      correctIndex: 2,
      hint: "It pushes other elements away.",
      explanation: "The Margin clears an area outside the element's border. It is completely transparent and does not take on the background color."
    },
    {
      question: "If an element has width: 200px, padding: 10px on all sides, and border: 5px on all sides, what is its total visible width?",
      options: [
        "200px",
        "215px",
        "220px",
        "230px"
      ],
      correctIndex: 3,
      hint: "Width + Left Padding + Right Padding + Left Border + Right Border",
      explanation: "Total Width = 200 (base width) + 10 (left padding) + 10 (right padding) + 5 (left border) + 5 (right border) = 230px."
    }
  ]
};

export default quiz;
