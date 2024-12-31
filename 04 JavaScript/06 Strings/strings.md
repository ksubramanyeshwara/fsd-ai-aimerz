# Strings

String is a sequence of characters enclosed in quotes.

## Creating strings

**Strings can be created in three ways**

1. using single quotes('')
2. using double quotes("")
3. using Template literals(``)
4. using constructor - type is object so it must not be used

## Properties of strings

- Strings Indexing
    - Strings are array like, means you can access character through bracket notation and index
    - Index starts at `0`
    - Negative indxing is directly not allowed.
    - Negative index and index out of range will result into `undefined`

- Immutable Nature
    - Strings are immutable; their content cannot be changed after creation.
    - Operations on a string always return a new string.

- Unicode Support
    - Strings in JavaScript are based on Unicode, so it suppoerts emojis and international characters.
    - charCodeAt: Returns the UTF-16 code of a character.
    - codePointAt: Returns the Unicode code point of a character.

## Escape Characters

| Escape Sequence | Meaning                        | Example                              | Output               |
|------------------|--------------------------------|--------------------------------------|----------------------|
| `\'`            | Single quote                  | `'It\'s awesome!'`                  | `It's awesome!`      |
| `\"`            | Double quote                  | `"He said, \"Hello!\""`             | `He said, "Hello!"`  |
| `\\`            | Backslash                     | `"C:\\Users\\Documents"`            | `C:\Users\Documents` |
| `\n`            | Newline                       | `"Hello\nWorld"`                    | `Hello` <br> `World` |
| `\r`            | Carriage return (rarely used) | `"Hello\rWorld"`                    | Platform-specific    |
| `\t`            | Tab                           | `"Name:\tSubramanyeshwara"`         | `Name:    Subramanyeshwara` |
| `\b`            | Backspace                     | `"abc\b"`                           | `ac` (removes `b`)   |
| `\f`            | Form feed (rarely used)       | `"Hello\fWorld"`                    | Platform-specific    |
| `\v`            | Vertical tab (rarely used)    | `"Hello\vWorld"`                    | Platform-specific    |
| `\0`            | Null character (not `0`)      | `"Hello\0World"`                    | `Hello World`        |
| `\uXXXX`        | Unicode character             | `"\u03A9"`                          | `Ω` (Greek Omega)    |
| `\xXX`          | Hexadecimal character         | `"\xA9"`                            | `©`                  |

