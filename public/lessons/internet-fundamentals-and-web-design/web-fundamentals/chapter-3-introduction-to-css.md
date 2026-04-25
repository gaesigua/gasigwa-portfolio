# Chapter 3: Introduction to CSS

<div class="intro-box">
  <h2>Overview</h2>
  <p>This chapter introduces Cascading Style Sheets (CSS). CSS revolutionized the web by separating document content from its visual presentation. By the end of this chapter, you will be able to explain what CSS is, format web pages using different CSS methods, and build layouts using the CSS Box Model.</p>
</div>

## 3.1 What is CSS?

Cascading Style Sheets (CSS) is a style sheet language used to describe the presentation semantics (the look and formatting) of a document written in a markup language, most commonly HTML.

<div class="note">
  <strong>Why CSS?</strong> HTML was never intended to contain tags for formatting a document. It was intended to define the structure and content. CSS solves this by separating the styling rules from the structural content.
</div>

### Advantages of CSS
<div class="advantages-disadvantages">
  <div class="advantage-box">
    <ul>
      <li><strong>Flexibility & Maintenance:</strong> With an external style sheet, you can change the look of an entire website by editing just one file.</li>
      <li><strong>Accessibility:</strong> Web designers can lay out pages without using HTML tables, which hinder accessibility for vision-impaired users.</li>
      <li><strong>Separation of Content from Presentation:</strong> Facilitates publishing the same content in multiple presentation formats (desktop vs. mobile).</li>
      <li><strong>Bandwidth Efficiency:</strong> External style sheets are stored in the browser's cache, preventing redundant downloads and saving data transfer.</li>
    </ul>
  </div>
</div>

## 3.2 CSS Syntax and Selectors

A CSS rule has two main parts: a **selector**, and one or more **declarations**:

<pre><code>selector {
  property: value;
}</code></pre>

- The **selector** is the HTML element you want to style.
- Each **declaration** consists of a property and a value, separated by a colon and ending with a semicolon.

### Classes and IDs
In addition to selecting raw HTML tags (like `p` or `h1`), you can specify custom selectors using Classes and IDs.

<div class="comparison-grid">
  <div class="comparison-card">
    <h5>The id Selector</h5>
    <p>Specifies a style for a single, unique element. It is defined with a hash <code>#</code> character.</p>
    <code>#para1 { color: red; }</code>
  </div>
  <div class="comparison-card">
    <h5>The class Selector</h5>
    <p>Specifies a style for a group of elements. It is defined with a period <code>.</code> character.</p>
    <code>.center { text-align: center; }</code>
  </div>
</div>

## 3.3 Three Ways to Insert CSS

When a browser reads a style sheet, it will format the HTML document according to it. There are three ways to insert CSS:

<div class="steps">
  <div class="step">
    <strong>1. External Style Sheet:</strong> Ideal for applying styles across many pages. You link to an external `.css` file inside the HTML <code>&lt;head&gt;</code> using the <code>&lt;link&gt;</code> tag.
  </div>
  <div class="step">
    <strong>2. Internal Style Sheet:</strong> Used when a single HTML document has a unique style. Styles are defined inside the <code>&lt;head&gt;</code> using the <code>&lt;style&gt;</code> tag.
  </div>
  <div class="step">
    <strong>3. Inline Styles:</strong> Defined directly on the HTML element using the <code>style</code> attribute. This method mixes content with presentation and should be used sparingly!
  </div>
</div>

<div class="warning">
  <strong>Cascading Order:</strong> When multiple styles are specified for an HTML element, they "cascade" by priority. Inline styles have the highest priority, followed by Internal style sheets, then External style sheets, and finally Browser defaults.
</div>

## 3.4 Common CSS Properties

### CSS Backgrounds
CSS background properties define the background effects of an element.
- `background-color`: Specifies the background color.
- `background-image`: Specifies an image to use as the background.
- `background-repeat`: Defines whether/how an image repeats (e.g., `repeat-x`, `no-repeat`).

### CSS Text and Fonts
- `color`: Sets the color of the text.
- `text-align`: Sets horizontal alignment (left, right, center, justify).
- `text-decoration`: Sets or removes decorations (often used to remove underlines from links).
- `font-family`: Defines the font. Often given a comma-separated list as a fallback system.
- `font-size`: Sets the size of the text (using px, pt, or em units).

### CSS Links
Links can be styled differently depending on what state they are in:
- `a:link` - a normal, unvisited link
- `a:visited` - a link the user has visited
- `a:hover` - a link when the user mouses over it
- `a:active` - a link the moment it is clicked

## 3.5 The CSS Box Model

<div class="concept-card">
  <div class="concept-header"><span class="concept-name">The Box Model</span></div>
  <p>All HTML elements can be considered as boxes. The CSS box model wraps around HTML elements and consists of margins, borders, padding, and the actual content.</p>
</div>

<div class="module">
  <h3>Components of the Box Model:</h3>
  <ul>
    <li><strong>Margin:</strong> Clears an area around the border. The margin is completely transparent.</li>
    <li><strong>Border:</strong> A border that goes around the padding and content.</li>
    <li><strong>Padding:</strong> Clears an area around the content, inside the border. Affected by the background color.</li>
    <li><strong>Content:</strong> The actual content of the box, where text and images appear.</li>
  </ul>
</div>

<div class="example">
  <h4>Calculating Total Width</h4>
  <p>If you specify <code>width: 250px; padding: 10px; border: 5px solid gray; margin: 10px;</code></p>
  <p>Total Width = 250px + 20px (left/right padding) + 10px (left/right border) + 20px (left/right margin) = <strong>300px</strong></p>
</div>
