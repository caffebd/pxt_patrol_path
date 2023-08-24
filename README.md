 ## What is this?

 This is an extension for Microsoft MakeCode Arcade
 It allows you to set a patrol path for an enemy.
 This means the enemy can walk left and right or up and down a set distance at a set speed.
 Currently you can use MakeCode's 'Bounce on Wall Block' to make an enemy turn around but this requires placing a wall for the enemy to hit.
 Sometimes you might just want an eney to walk a set distance before turning around and not have a wall in the way.


> Open this page at [https://caffebd.github.io/pxt_patrol_path/](https://caffebd.github.io/pxt_patrol_path/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/caffebd/pxt_patrol_path** and import

## How to use

Make a sprite (this might be an enemy).
Find the extension blocks in the Sprites Tab (under Enemy Patrol).
You can select a patrol distance on x (left and right) or on y (up and down) or use both together.
Enter a number for the distance (how far the sprite will move before turning back).
Press + to expand the block and set a speed.
The speed set here becomes the sprite's Velocity (vx or vy).

You can turn the patrol mode on or off using the Set Patrol Mode Active block. This could be used with timer blocks to have an enemy pause for a set amount of time before resuming their patrol.

NOTE: The patrol path will be interrupted if the enemy hits a wall. You can comibine this extension with the built in 'Set Bounce on Wall' block to combine walking a set distance with turning around when a wall is hit.

## Edit this project ![Build status badge](https://github.com/caffebd/pxt_patrol_path/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/caffebd/pxt_patrol_path** and click import

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/caffebd/pxt_patrol_path/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/arcade
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
