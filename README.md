# angular-scrollbar
Provides a completely custom scrollbar

## Usage
Simply add ```scrollbar``` as an attribute to the desired element e.g:
```html
<div class="scrollable-container" scrollbar></div>
```
The element will then generate a child element ```<scroll></scroll>``` 
which will be given a default set of css rules:
```css
position: absolute;
top: 0;
```
You are then free to customize it just like any other element with regular css like so:
```css
scroll {
    /* Regular css here */
}
```
For ```-webkit``` browsers you can simply disable the already rendered scrollbar with the following:
```css
::-webkit-scrollbar, ::-webkit-scrollbar-track, ::-webkit-scrollbar-thumb {
  visibility: hidden;
  width: 0;
}
```
