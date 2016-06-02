# LESS

`SASS`是一种CSS的开发工具，提供了许多便利的写法，大大节省了设计者的时间，使得CSS的开发，变得简单和可维护

## Install

```
gem install sass
```

## Usage

* sass test.scss
* sass test.scss test.css
* sass --watch test.scss:test.css
* sass --style compressed test.scss test.css

```
* nested：嵌套缩进的css代码，它是默认值。
* expanded：没有缩进的、扩展的css代码。
* compact：简洁格式的css代码。
* compressed：压缩后的css代码。
```
## Syntax

1. variables
```
$blue:#1875e7;$side : left;
div{
    color:$blue;
    border-#{$side}-radius: 5px;
}
```
2. compute
```
body {
　　　　margin: (14px/2);
　　　　top: 50px + 100px;
　　　　right: $var * 10%;
　　}
```
3. nesting
```
div {
　　　　hi {
　　　　　　color:red;
　　　　}
       p {
    　　　　border: {
    　　　　　　color: red;
    　　　　}
    　　}
       a {
    　　　　&:hover { color: #ffb3ff; }
    　　}
　　}
```
4. extend
```
.class1 {
　　　　border: 1px solid #ddd;
　　}
.class2 {
　　　　@extend .class1;
　　　　font-size:120%;
　　}
```
5. mixin
```
@mixin left($value: 10px) {
　　　　float: left;
　　　　margin-right: $value;
　　}
div {
　　　　@include left(20px);
　　}
@mixin rounded($vert, $horz, $radius: 10px) {
　　　　border-#{$vert}-#{$horz}-radius: $radius;
　　　　-moz-border-radius-#{$vert}#{$horz}: $radius;
　　　　-webkit-border-#{$vert}-#{$horz}-radius: $radius;
　　}
#navbar li { @include rounded(top, left); }
#footer { @include rounded(top, left, 5px); }
```
6. color function
```
lighten(#cc3, 10%) // #d6d65c
　　darken(#cc3, 10%) // #a3a329
　　grayscale(#cc3) // #808080
　　complement(#cc3) // #33c
```
7. import scss
```
@import "path/filename.scss";
```
8. conditional statement
```
@if lightness($color) > 30% {
　　　　background-color: #000;
　　} @else {
　　　　background-color: #fff;
　　}
```
9. loop statement
```
@for $i from 1 to 10 {
　　　　.border-#{$i} {
　　　　　　border: #{$i}px solid blue;
　　　　}
　　}
$i: 6;
　　@while $i > 0 {
　　　　.item-#{$i} { width: 2em * $i; }
　　　　$i: $i - 2;
　　}
@each $member in a, b, c, d {
　　　　.#{$member} {
　　　　　　background-image: url("/image/#{$member}.jpg");
　　　　}
　　}
```
10. customize function
```
@function double($n) {
　　　　@return $n * 2;
　　}
　　#sidebar {
　　　　width: double(5px);
　　}
```

## Author

**Cooyzee** May 24,2016

Follow me on [GitHub](https://github.com/cooyzee)