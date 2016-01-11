# 256! A 2048 Clone.

## A generic clone for the game 2048 using AngularJs

This is a clone for 2048 game using AngularJs to perform data storage and event binding.

## The game logic is built in gameService.js.
The game has three representations: single dimension array represents the grid from left to right, from top to bottom; row representation and column representation structured in a nested arrays.
For example:
Board:
  2 0 4 4
  4 0 0 0
  2 2 0 4
  0 0 2 2

Array Representation:
  [2,0,4,4,4,0,0,0,2,2,0,4,0,0,2,2]

Row Representation:
  [
    [2,0,4,4],
    [4,0,0,0],
    [2,2,0,4],
    [0,0,2,2]
  ]

Column Representation:
  [
    [2,4,2,0],
    [0,0,2,0],
    [4,0,0,2],
    [4,0,4,2]
  ]


## Using custom directive to manage tiles actions

Every single tile is a custom directive that has custom events to show different animation base on the behaviors.

This part is still under development.