	<title>Random Password Generator</title>
</head>
<body>
	<h1>Random Password Generator</h1>
	<p>The Random Password Generator is a simple command-line tool that generates random passwords based on user-defined criteria, such as length, character sets, and number of passwords to generate. The tool is written in Python and uses the <code>secrets</code> module to generate cryptographically secure random values.</p>
<h2>Features</h2>
<ul>
	<li>Customizable password length</li>
	<li>Customizable character sets (uppercase, lowercase, digits, and special characters)</li>
	<li>Customizable number of passwords to generate</li>
	<li>Secure random generation using <code>secrets</code> module</li>
	<li>Command-line interface</li>
</ul>

<h2>Installation</h2>
<p>To use the Random Password Generator, you need to have Python 3.x installed on your system. To install the tool, you can clone this repository to your local machine:</p>
<pre><code>git clone https://github.com/flayouth/Random-Password-Generator.git</code></pre>

<h2>Usage</h2>
<p>To generate random passwords, you can run the <code>generate.py</code> script with the following command-line arguments:</p>
<pre><code>python generate.py [-h] [--length LENGTH] [--sets SETS] [--count COUNT]</code></pre>

<p>The available arguments are:</p>
<ul>
	<li><code>-h, --help</code>: show the help message and exit</li>
	<li><code>--length LENGTH</code>: the length of each password (default: 12)</li>
	<li><code>--sets SETS</code>: the character sets to use for password generation (default: ulds)
		<ul>
			<li><code>u</code>: uppercase letters</li>
			<li><code>l</code>: lowercase letters</li>
			<li><code>d</code>: digits</li>
			<li><code>s</code>: special characters (e.g., !@#$%^&amp;*)</li>
		</ul>
	</li>
	<li><code>--count COUNT</code>: the number of passwords to generate (default: 1)</li>
</ul>

<p>For example, to generate two 16-character passwords using uppercase letters and digits, you can run:</p>
<pre><code>python generate.py --length 16 --sets ud --count 2</code></pre>

<p>This will output something like:</p>
<pre>
	<code>Password 1: 9H3T8T6W8Y2Q1E6C</code>
	<code>Password 2: 6W8N9Z9M6C0K7H0</code>
</pre>

<h2>License</h2>
<p>The Random Password Generator is licensed under the MIT License. See the <code>LICENSE</code> file for details.</p>

<h2>Contributing</h2>
<p>If you have any ideas, bug reports, or feature requests, feel free to create an issue or submit a pull request on the <a href="https://github.com/flayouth/Random-Password-Generator">GitHub repository</a>. Your contributions are welcome!</p>
