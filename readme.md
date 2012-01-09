# LessXLess

**demo :** http://devric.co.cc/lessxless


### index
---
1. Description
2. Classes
3. Mixings
4. Plugins
5. Todo
6. changelog

### 1. Description
---

**About: **

This OOCSS framework is based on less.js

It is suitable for front end designers! NOT developers, it only provides basic style and helpers classes/mixings.

The classes that work straight out of the box are the modules and the basic site layout, everything else is mixings

**Features : **
- fluid grid( max 16, default 12, set in style.css )
- modular based ( can be light as 8kbs or full powered )
- ongoing development in mixings
- super flexible
- elastic design for multiple resolutions

**Local Demo : **

Note, if you are using a webkit browser( chrome, safari ) you will need to browse with a server(or localhost) due to the samples are in 
seperate files and load via ajax.

*currently in development stage, but feel free to use.*

**Usage :**

make all edits and override in style.less, 

load style.less or precompile to normal css file.

have a look through plugins and mixings to create fast UI components. simply overrides the default components to suit your needs.



**Requirement :**

web based

- less.js

Mac users:

- less.app
- live reload

windows users

- use node compiler



Have fun :)

### 2. classes
---

    | --------------  | ---------------------------------------------------------    |
    | Class           | Description                                                  |
    | --------------  | ---------------------------------------------------------    |
    |                 |                                                              |
    | Utility         |                                                              |
    | *************   |                                                              |
    | .clear          | clear both                                                   |
    | .clear:fix      | apply to containers                                          |
    | .fullscale      | full width within container                                  |
    | .hnav           | float the navigation                                         |
    | .fright         | float right                                                  |
    | .fleft          | float left                                                   |
    | --------------  | ---------------------------------------------------------    |
    |                 |                                                              |
    | Grid            |                                                              |
    | *************   |                                                              |
    | #grid > c6;     | apply in **css** trigger c6 or c4 grid                       |
    | .c6 / .c4       | apply in **html** to trigger column                          |
    | .row            | use it with c6 or c4                                         |
    | .col            | use with .g1 - g6 ( c6=6col, c4=4col )                       |
    | .last           | kill margins for last column                                 |
    | .push( #grid )  | push the coumns to the grid number                           |
    |                 | eg: div.row.c6                                               |
    |                 | > .col.g2 + .col.g1 + .col.g3.last                           |
    | --------------  | ---------------------------------------------------------    |
    |                 |                                                              |
    | mixin           |                                                              |
    | *************   |                                                              |
    | #border >       | .border-radius( @radisu:5px; )                               |
    |                 | .multi-radius (topleft, topright, bottomRight, bottomLeft    |
    |                 |                                                              |
    | #shadow >       | .box-shadow (horiz:-px, vert:1px, blur: 2px, color:#cc)      |
    |                 | .inset-box-shadow ( horz, vert,offset, blur,color )          |
    |                 | .text-shadow( color:#ccc, 0px 0px 20px )                     |
    |                 |                                                              |
    | #gradient>      | .v ( @start color, @end:color )                              |
    |                 | .h ( @start color, @end:color )                              |
    |                 | .v3( @start, @middle, @middle pos %, @end )                  |
    |                 | .h3( @start, @middle, @middle pos %, @end )                  |
    |                 | .h4( @color1, @color2, @pos2, @color3, @pos3, @color4        |
    |                 | .v4( @color1, @color2, @pos2, @color3, @pos3, @color4        |
    |                 |                                                              |
    | #animate>       | .transition(@params)                                         |
    |                 | .transform ( scale )                                         |
    |                 | .skew (angle-x:35, @angle-y:0)                               |
    |                 | .scale (scale-x:1)                                           |
    |                 | .rotate (angle:35)                                           |
    |                 | .translate ( move-x: 10px, move-y: 10px )                    |
    |                 |                                                              |
    | #transparent>   | .background (@color:white, @alpha:1)                         |
    |                 | .border ( @color: white, @alpha:1 )                          |
    |                 | .opacity ( @op: 100 )                                        |
    |                 |                                                              |
    |                 | .box-sizing ( @box: border-box )                             |
    |                 | .size ( with:5px, height:5px )                               |
    |                 | .background-size ( @arg:cover )                              |
    |                 |                                                              |
    | buttons         | .pos (startPos: 0 0, endPos: 10px 10px)                      |
    |                 | .btncolor (color: @white ); /include &hover darken@white 40% |
    |                 |                                                              |
    | link            | .link ( @a:eee ); // include lighten @a:eee 40%              |
    | linkd           | .link ( @a:eee ); // include darken @a:eee 40%               |
    | linkm           | .link ( @a:eee, @b:eee ); // include darken @a:eee 20%       |
    | --------------  | ---------------------------------------------------------    |
    | fonts           |                                                              |
    | **************  |                                                              |
    | sizes >         | .gigantic, h1.huge, h2.large, h3.bigger, h4.big              |
    |                 | h5.strong, h6.small                                          |
    | p.twisted       | ( center ) calson pro,                                       |
    | p.press         | dark bg, emboss in, dark words, large fonts                  |
    | p.presslight    | grey bg, shadow   , light words, large fonts                 |
    | .dropcap        | enlarge first letter                                         |
    |                 | .content-columns ( @col-count:2, @colgap:20px )              |
    | .blockqoute.mag | //top bottom borderd align left qoute                        |
    | --------------  | ---------------------------------------------------------    |
    | hgroups         |                                                              |
    | **************  |                                                              |
    | .coudal         | 1-small header > 2-large sideline                            |
    | .timoni         | ( center ) 1-small datetime > 2-large header                 |
    | .ale            | ( center ) 1-large header > 2-small sideline                 |
    | .noob           | ( right ) 1-small date > 2-big header > 3-smalla sideline    |
    | --------------  | ---------------------------------------------------------    |
    | Color           |                                                              |
    | *************   |                                                              |
    | @white          | #fff                                                         |
    | @greyLighter    | #ccc                                                         |
    | @greyLight      | #777                                                         |
    | @grey           | #555                                                         |
    | @greyDarl       | #333                                                         |
    | @black          |                                                              |
    |                 |                                                              |
    | @blue:          | #08b5fb;                                                     |
    | @green:         | #46a546;                                                     |
    | @red:           | #9d261d;                                                     |
    | @yellow:        | #ffc40d;                                                     |
    | @orange:        | #f89406;                                                     |
    | @pink:          | #c3325f;                                                     |
    | @purple:        | #7a43b6;                                                     |
    | --------------  | ---------------------------------------------------------    |
    | module          |                                                              |
    | *************   |                                                              |
    | [ buttons ]     |                                                              |
    | .button         | (color:#f5f5f5,textcolor:#333,                               |
    |                 | textshadow:0 1px 1px, #color), fontsize:13px,                |
    |                 | padding: 9px 15px 10px, @borderRadius:6px )                  |
    |                 | //button with bottom bar :hover                              |
    |                 |                                                              |
    | .coolbtn        | ( @buttonColor: #c97200, fontsize:20px )  //3D button        |
    |                 |                                                              |

### 3. Mixins
---


### 4. Plugins
---


### 5. Todos
---
- icons
- slideshow
- tab
- form


### 6. Changelog
---


