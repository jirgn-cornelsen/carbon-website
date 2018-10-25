---
label: Experimental
title: Iconography
tabs: ['Library', 'Usage', 'Design and Contribution']
internal: true
---

<page-intro>**Iconography** is highly functional in a user interface. When used wisely, icons become an elegant yet efficient way to communicate and help guide a user through an experience. To maintain this functionality it’s important to reduce cognitive load on users by employing icons sparingly and strategically throughout your designs.</page-intro>

## Resources

You can find the source file for the icon library within the <a href="https://github.com/ibm/carbon-design-kit" target=blank>Carbon Design Kit.</a>

- <a href="https://github.com/ibm/carbon-icons" target=blank>Carbon icons GitHub repo</a>
- <a href="http://www.ibm.com/design/language/resources/icon-library/" target=blank>IBM Design Language icon library</a>

## Visual usage
### Sizing

Icons have been designed to work best in four sizes: 16px, 20px, 24px, and 32px. Please use icons at their original sizes which are provided in SVG and Adobe Illustrator files.

![image sizing examples](images/sizing-example-comp.svg)

| Icon size | Stroke width | Padding | Live area | Corner radius | Type sizes |
|-----------|--------------|---------|-----------|---------------|------------|
| 32px      | 2px          | 2px     | 28px      | 2px           | -          |
| 24px      | 1.5px        | 1.5px   | 21px      | 1.5px         | -          |
| 20px      | 1.25px       | 1.25px  | 17.5px    | 1.25px        | 16pt       |
| 16px      | 1px          | 1px     | 14px      | 1px           | 14pt       |


![icon usage](images/sizing-alignment-example-comp.svg)

![icon do's and don'ts](images/icons-do-dont-1.png)

### Alignment

Icons are optically aligned to the center of the icon grid within the boundary box. Centering ensures all icons will be aligned correctly when exported and used side by side in a line or a row.

![proper alignment of icons](images/alignment-example-comp.svg)

Visually center an icon where the visual weight is heaviest. In some situations, mechanically centering doesn’t work.

![visual centering](images/alignment-example-visual-center-comp.svg)

### Clearance

When designing icons for touch surfaces, all targets need to be 44px or greater. The icon can be smaller than 44px if padding is added to the touch target with CSS to meet the 44px minimum.

![icon clearance](images/clearance-example-comp.svg)

![icon clearance dos and don'ts](images/icon-clearance-rule.png)



### Color

Icons are always a solid, monochromatic color and need to pass the same color contrast ratio as typography (4.5:1). The color of the icon should reflect the importance of the icon’s action which should always be to help guide a user. For more information on color, see [Color in UI].

![icon color do's and don'ts](images/icon-color-do-dont.png)

<!--
|                        | SCSS             | HEX y                              |
| ---------------------- | ---------------- | ---------------------------------- |
| Primary action         | $brand-01        | <color-block>#3d70b2</color-block> |
| Primary action:hover   | $hover-primary   | <color-block>#30588C</color-block> |
| Secondary action       | $ui-05           | <color-block>#5a6872</color-block> |
| Secondary action:hover | $hover-secondary | <color-block>#3d70b2</color-block> |

**Exception:** There is an exception to both the `brand-01` and UI color rules. Certain icons, such as status or notification icons, can inherit their parent color. For example, a warning icon is yellow because warning notifications are yellow.

-->

<!--
### Background

All icons should be on a transparent background and with the artboard boundaries at the edges of the icon. At least one of the edges should be at the standard measurement of 24px or 16px.

![icon usage](images/icon-usage-1.png)

-->

<!--
### Padding

When **creating icons,** do not add internal padding with Sketch or Illustrator. If the icon needs padding, developers can add this with CSS.

When **using icons,** all touch targets need to be 44px or higher. With that said, a developer can add padding to a touch target with CSS to meet the 44px requirement.

![icon padding](images/icon-usage-2.png)

-->

<!--
### Weight

Icons of the same size should have the same visual weight. One icon should not look heavier or lighter than another icon of the same size. Most UI Icons are drawn with a two pixel stroke.

Make sure the 2px stroke does not change when resizing icons because it causes
icons to look uneven. When scaling icons you should always start each icon at the same base size (preferably the default of 24px).

Glyphs or 16 pixel icons, should always be a filled icon. This adds visual weight to the icon, allowing it to maintain its proper emphasis and stay legible. Fine stroke weights can disappear or break at the glyph size.
-->

<!--
### Pixel grid

When drawing or re-sizing icons make sure the vector always aligns to the base pixel grid. This ensures pixel clarity and crispness on all screen ratios. The x and y coordinates of icons should never contain decimals.

-->
