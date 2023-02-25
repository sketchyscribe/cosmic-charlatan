# Cosmic Charlatan

> The current most up-to date build can be played here: https://sketchyscribe.github.io/cosmic-charlatan/

Cosmic Charlatan is a browser based Roguelike written entirely using vanilla HTML and Javascript. It started as a project to refresh my Javascript knowledge, and after plenty of fiddling and deliberation, I've decided I want to take it through to completion.

The game will be focused around collecting resources and artifacts from randomly generated planets, and bringing them back to your space barge inorder to sell them in the Galatic Web for a profit.

The mechanics and setting are loosely based around the Into the Odd/Electrib Bastionland TTRPG by Chris McDowall. Progress so far has been fairly good after the first week and MANY rewrites to get the baseline structure setup for myself.

---

## Done:
* Psuedo ECS system, more composition than a pure ECS.
* ASCII Terminal emulation with character drawing, text drawing,  and colors.
* Message logging system
* Basic UI
* Basic player stats and interaction with Actors
* Keyboard Input system

## TODO:
* Mouse input system
* Implement FOV Algorithm
* Map Generation
     * Ship Generation
     * Dungeon World Generation > 3 levels
* Turn Scheduler
     * Action Points - Each action takes 1 point, limited AP/turn
     * OR
     * Turn phases - Movement > Attack > Bonus 
* Inventory System
     * 10 Slots
     * Pickup & drop items from specific slots
     * Equip item from slot || Use item from inventory
* Basic Items
     * Sword
     * Torch
     * Food
     * Shield
     * 1 artifact
* Implement ship mechanics
     * On ship storage for items, simply drop and pickup from ground
     * Acces computer terminal for marketplace to buy and sell items
     * Access cockpit to select next bounty location
---

## Notes
I intend to keep this open source both as a showcase of my ability and so that people contribute and maybe learn something or two along the way. I don't have a full roadmap written up yet, but once I have the base systems in a more solid position I plan on getting that done.

I also plan on creating biweekly or so devlogs that I will be posting onto my main pages site, I'll post an update here once I've gotten around to that.
