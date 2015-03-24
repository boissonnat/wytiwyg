# A quick intro on the markdown's syntax

Markdown is a way to style text on the web. You control the display of the document;
formatting words as bold or italic, adding images, and creating lists are just a few of
the things we can do with Markdown. Mostly, Markdown is just regular text with
a few non-alphabetic characters thrown in, like # or *.

## Titles

Titles are managed by placing a sharp (# ) just before the title itself

## Emphasis

Emphasis, aka italics, with *asterisks* or _underscores_.
Strong emphasis, aka bold, with **asterisks** or __underscores__.
Combined emphasis with **asterisks and _underscores_**.
Strikethrough uses two tildes. ~~Scratch this.~~

## Lists

1. First ordered list item
2. Another item

* Unordered list can use asterisks
- Or minuses
+ Or pluses

## Links
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

## Images

Here's the Mou logo : ![alt text](/mouIcon.png "Mou Logo")

## Code and Syntax Highlighting

Code blocks are part of the Markdown spec, but syntax highlighting isn't.
We are supporting syntax highlighting through the PrismJS library. The only thing you have to do
is to put the language name after the ``` ''' ``` prefixed by ```language-```

Inline `code` has `back-ticks around` it.
Inline code has back-ticks around it.

Blocks of code are either fenced by lines with three back-ticks ```,
or are indented with four spaces. I recommend only using the fenced code
blocks -- they're easier and only they support syntax highlighting.

```language-javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```language-python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

## Blockquotes

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

__Quote break__

> This is a very long line that will still be quoted properly when it wraps.
Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone.
Oh, you can *put* **Markdown** into a blockquote.
Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.
Quote break.