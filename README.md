# Obsidian Notion-Like Tables

[![Active Development](https://img.shields.io/badge/Maintenance%20Level-Actively%20Developed-brightgreen.svg)](https://gist.github.com/cheerfulstoic/d107229326a01ff0f333a1d3476e068d)

Obsidian Notion-Like Tables allows you to create markdown tables using an interface similar to that found in Notion.so.

![Screenshot](https://raw.githubusercontent.com/trey-wallis/obsidian-notion-like-tables/master/.readme/preview.png)

## What's New?

### Version 4.2.0

This update includes major bug fixes for column sorting. Sorting is now completely stable. In order to facilitate this update, the options to "Move Up", "Move Down", "Insert Above", or "Insert Below" on a row are hidden if sorting is enabled on any column in the table. If you would like to use these options to manually sort your table, please set the sorted column to the "Default" sorting setting.

To make this more clear, an option bar has been added above the table. When you make a sort selection on a column, a sort bubble will appear in the option bar indicating which column is being sorted.

The excluded files setting now uses a textarea instead of a input field. Thank you to [Mara-Li](https://github.com/Mara-Li) for your contribution.

Thank you everyone for your continued support and appreciation.

Current limitations in 4.2.0 include:

-   Only 1 table per file is currently supported (to be fixed in 4.3.0)
-   Live preview support is currently disabled (to be fixed in 4.4.0)

## Usage

### Markdown Tables

Obsidian markdown tables will automatically be rendered as Notion-Like tables. If you wish to exclude tables from becoming Notion-like tables, you can do so in the settings menu. See [Settings](#Settings)) below for more information.

### Hotkeys

-   Add a new NLT markdown table
    -   `ctrl + shift + +` (Windows) (Press + once)
    -   `cmd + shift + +` (Mac)
-   Add a new column to a focused table
    -   `ctrl + shift + \` (Windows)
    -   `cmd + shift + \ ` (Mac)
-   Add a new row to a focused table
    -   `ctrl + shift + enter` (Windows)
    -   `cmd + shift + enter` (Mac)

### Making a Table via Command

To quickly make a table you can use the add table command. Press `cmd + p` on your keyboard search "Add table".

Note: you must be in editing mode for this command to appear.

Toggle to reading mode and the table will automatically render.

![Screenshot](https://raw.githubusercontent.com/trey-wallis/obsidian-notion-like-tables/master/.readme/add-table-command.png)

### Headers

Click on a header name to view the header menu. In the header menu you can rename the header, sort your column values or change the column content type.

![Screenshot](https://raw.githubusercontent.com/trey-wallis/obsidian-notion-like-tables/master/.readme/header.png)

### Cells

To edit a cell, just click on it. An textarea or menu will appear which will allow you to edit the cell's content. Make the necessary changes and then click outside the box or press enter to save the text. Notion-Like tables will automatically handle updating your markdown.

#### Text Cells

Text can be rendered in cells that are in a column with the `text` content type selected.

#### Number Cells

Numbers can be rendered in cells that are in a column with the `number` content type selected. A valid number only includes digits 0-9

#### Tag Cells

Tags can be rendered in cells that are in a column with the `tag` content type selected.

Tags have a special notion-like menu that will appear. Tags are scoped to each column of a table. You can type text to filter existing tags and select one. You can also create a new tag by typing text and clicking "Create New" or pressing enter.

![Screenshot](https://raw.githubusercontent.com/trey-wallis/obsidian-notion-like-tables/master/.readme/tag-menu.png)

#### Date Cells

Dates can be rendered in cells that are in a column with the `date` content type selected. To render a date please follow the format `yyyy/mm/dd` in your markdown.

#### Checkbox Cells

Checkboxes can be rendered in cells that are in a column with the `checkbox` content type selected. To render a checkbox, add two square brackets with a space `[ ]` for unchecked or two square brackets surrounding an x `[x]` for checked.

### Emphasis

To bold text use either double asterisks `**` or the bold tag `<b>`

-   `**This is bold**`
-   `<b>This is bold</b>`

To italicize text use either single asterisks `*` or the italics tag `<i>`

-   `*This is italicized*`
-   `<i>This is italicized</i>`

To highlight text use the double equal sign syntax `==`

-   `==This is highlighted==`

To underline text use the underline tag `<u>`

-   `<u>This is underlined</u>`

### Links

Links can be rendered in cells that are in a column with the `text` column content type is selected. To render a link, add double squares surrounding text `[[My Link]]`.

![Screenshot](https://raw.githubusercontent.com/trey-wallis/obsidian-notion-like-tables/master/.readme/internal-link-edit.png)

### URLs

If you want to display an url, type the url making sure it begins with `http://` or `https://`. NLT will automatically render it in the table.

![Screenshot](https://raw.githubusercontent.com/trey-wallis/obsidian-notion-like-tables/master/.readme/url.png)

### Line Breaks

Line breaks can be added using the break line HTML tag `<br>`. For example, if you would like to create a line between two pieces of text, you could add:

`This is my text<br><br>There is now a line between us`

### Tag Colors

Once a tag has been added to a cell, you click on any cell that has that tag and then click on the horizontal menu button to the side of the tag name. A menu will then pop up through which you can change the tag color.

### Copy Cell Content

Right click a cell and its content will be added to your clipboard.

NOTE: The table must be in focus for this to work. Click on the table to focus it.

### Column Resizing

#### Auto Width

Text and number cells have an option for `Auto Width`. Auto width means that the column will automatically resize to the largest width of the cell.

Please note that this will calculate the maximum length of the text without wrapping.

This feature can be enabled by clicking on a header, clicking "Edit" and then clicking the toggle for `Auto Width`.

#### Manually Resizing

When auto width is disabled, you have the option to manually size a column. You can do this by hovering your mouse over a header's right border. Your cursor will then show a resize indicator and you can click and drag until you set the desired length.

#### Wrap Overflow

With auto width disabled, you have the option to set the behavior of the text on overflow. This property is known as `Wrap Overflow`.

When wrap overflow is enabled the text will wrap once it reaches the width of the column. This may be useful for long blocks of text.

When wrap overflow is disabled the text will cut off at the column width and create an ellipsis (...)

### Undoing Changes

NLTs does not currently have built in history. If you need to undo changes, go to editing mode and undo markdown changes using `ctrl+z` (or `option-z`on mac). Then go back to reading mode.

### Errors

A cell error will occur if you enter data which doesn't match the column content type. You can correct this error by clicking on the cell and entering in data that matches the column content type.

## Settings

Settings can be found by opening the Obsidian settings menu and then scrolling down to `Notion-Like Tables`

### Excluded Tables

If you would like to exclude a table from being rendered as a Notion-Like table, you can specify the file path for the note that contains the table. Please note that this file path must include any folders starting from the root folder. e.g. `/folder1/folder2/note.md`

Please note that the `.md` extension is required for the file name of the note in the path.

Different path names must be separated with a comma: `/note1.md,/folder/note2.md`

## Custom Themes

NLT tables uses normal table semantic elements (`table`, `th`, `tr`, `td`, etc) to render. If you wish to edit the display of the table, just style those elements in your CSS.

## Bugs and Feature Requests

If you find a bug or would like to suggest a feature, please open an issue [here](https://github.com/trey-wallis/obsidian-notion-like-tables/issues). I will try to respond as soon as possible.

## Support Plugin Development

-   I have a lot of features that I am excited to add to this plugin. If you would like to help support plugin development, you can [buy me an herbal tea](https://www.buymeacoffee.com/treywallis) ;)

## License

-   GNU GPLv3

## Author

-   Trey Wallis
