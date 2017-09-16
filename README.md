# angular-scrollbar
Provides a completely custom scrollbar

## Usage
Simply add ```scrollbar``` as an attribute to the desired element e.g:
```html
<div class="scrollable-container" scrollbar></div>
```
The element will then generate a child element ```<scrollbar></scrollbar>```
which will be given a default set of css rules:
```css
position: absolute;
top: 0;
```
You are then free to customize it just like any other element with regular css like so:
```css
scrollbar {
    /* Regular css here */
}
```
While the user is scrolling, the element will gain a class called ```scrolling``` which may help
to customize the scrollbar even further (perhaps a fade in/out effect):
```css
scrollbar.scrolling {
    /* Css to apply while scrolling  */
}
```
For ```-webkit``` browsers you can simply disable the already rendered scrollbar with the following:
```css
::-webkit-scrollbar, ::-webkit-scrollbar-track, ::-webkit-scrollbar-thumb {
  visibility: hidden;
  height: 0;
  width: 0;
}
```

## Todo
As of now, this only helps with ```-webkit``` based browsers. A goal is to make a neat and clean solution for both IE and FF too.
