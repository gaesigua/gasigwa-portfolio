# Chapter 2: HTML Page Layout Design

<div class="intro-box">
  <h2>Overview</h2>
  <p>In this chapter, you will learn the essentials of building structural components in HTML. By the end of this chapter, you should be able to create HTML forms to accept user input, utilize IFrames to embed external pages, and structure modern web layouts using Tables and Div elements.</p>
</div>

## 2.1 HTML Forms

A form on a web page allows a user to enter data that is sent to a server for processing. Forms resemble paper or database forms because internet users fill out the forms using checkboxes, radio buttons, or text fields.

<div class="note">
  <strong>Use Cases:</strong> Forms are used for shipping/credit card data, user login, ordering a product, or retrieving data (e.g., searching on a search engine).
</div>

HTML forms are used to pass data to a server. A form can contain input elements like text fields, checkboxes, radio-buttons, and submit buttons. The `<form>` tag is used to create an HTML form:

```html
<form>
  <!-- input elements go here -->
</form>
```

### The Input Element

The most important form element is the input element. An input element can vary in many ways, depending on the `type` attribute.

<div class="module">
  <h3>1. Text Fields</h3>
  <p><code>&lt;input type="text" /&gt;</code> defines a one-line input field that a user can enter text into.</p>
  <div class="example">
    <h4>Example Code:</h4>
    <pre><code>&lt;form&gt;
  First name: &lt;input type="text" name="firstname" /&gt;&lt;br /&gt;
  Last name: &lt;input type="text" name="lastname" /&gt;
&lt;/form&gt;</code></pre>
  </div>
</div>

<div class="module">
  <h3>2. Password Field</h3>
  <p><code>&lt;input type="password" /&gt;</code> defines a password field where characters are masked (shown as asterisks or circles).</p>
</div>

<div class="module">
  <h3>3. Radio Buttons</h3>
  <p><code>&lt;input type="radio" /&gt;</code> defines a radio button. Radio buttons let a user select <strong>ONLY ONE</strong> of a limited number of choices.</p>
</div>

<div class="module">
  <h3>4. Checkboxes</h3>
  <p><code>&lt;input type="checkbox" /&gt;</code> defines a checkbox. Checkboxes let a user select <strong>ONE or MORE</strong> options of a limited number of choices.</p>
</div>

<div class="module">
  <h3>5. Submit Button</h3>
  <p><code>&lt;input type="submit" /&gt;</code> defines a submit button used to send form data to a server. The data is sent to the page specified in the form's <code>action</code> attribute.</p>
</div>

## 2.2 HTML IFrames

An iframe is used to display a web page within a web page.

<div class="concept-card">
  <div class="concept-header"><span class="concept-name">Syntax for adding an iframe:</span></div>
  <pre><code>&lt;iframe src="URL"&gt;&lt;/iframe&gt;</code></pre>
  <p>The URL points to the location of the separate page.</p>
</div>

### Common IFrame Properties:
- **Set Height and Width:** Use the `width` and `height` attributes (specified in pixels by default, or percent).
- **Remove the Border:** The `frameborder` attribute specifies whether to display a border. Set to `"0"` to remove it.
- **Target for a Link:** An iframe can be used as the target frame for a link. The `target` attribute of a link must refer to the `name` attribute of the iframe.

## 2.3 HTML Layouts

Web page layout is very important to make your website look good. Most websites put their content in multiple columns (formatted like a magazine). Multiple columns are typically created by using `<table>` or `<div>` tags, combined with CSS to position elements.

### 1. HTML Layouts - Using Tables

The simplest way to create a grid layout is by using the HTML `<table>` tag. You can use the `colspan` attribute to stretch rows across multiple columns.

<div class="warning">
  <strong>Note:</strong> Even though it is possible to create nice layouts with HTML tables, tables were designed for presenting tabular data—NOT as a layout tool. Modern websites should avoid table-based layouts for the overall page structure.
</div>

### 2. HTML Layouts - Using Div Elements

The `<div>` element is a block-level element used for grouping HTML elements. Using `<div>` tags alongside CSS floats and widths allows you to create flexible, modern multiple-column layouts.

<div class="example">
  <h4>Example Layout using Divs</h4>
<pre><code>&lt;html&gt;
&lt;body&gt;
  &lt;div id="container" style="width:500px"&gt;
    &lt;div id="header" style="background-color:#FFA500;"&gt;
      &lt;h1&gt;Main Title of Web Page&lt;/h1&gt;
    &lt;/div&gt;

    &lt;div id="menu" style="background-color:#FFD700;height:200px;width:100px;float:left;"&gt;
      &lt;b&gt;Menu&lt;/b&gt;&lt;br /&gt;HTML&lt;br /&gt;CSS
    &lt;/div&gt;

    &lt;div id="content" style="background-color:#EEEEEE;height:200px;width:400px;float:left;"&gt;
      Content goes here
    &lt;/div&gt;

    &lt;div id="footer" style="background-color:#FFA500;clear:both;text-align:center;"&gt;
      Copyright
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
</div>

<div class="success">
  <strong>HTML Layout - Useful Tips:</strong> The biggest advantage of using CSS layout (with Divs) over Tables is that, if you place the CSS code in an external style sheet, your site becomes MUCH EASIER to maintain. You can change the layout of all your pages by editing one single CSS file!
</div>
