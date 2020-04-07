let mySprite: Sprite = null
game.onUpdateInterval(5000, function () {
    mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . c c c c c c . . . . 
. . . . . c c c c c c c c . . . 
. . . . c c c c d c c d c c . . 
. . . c c c c d c c c c d c . . 
. . . c c c c c c c c c c c . . 
. . . c c c c c c c c c c c c . 
. . . c c c c c c d d c c c c . 
. . . c c c c c c d d c c c c . 
. . c c c c c c c c c c c c c . 
. . c c c c c c c c c c c c . . 
. . c c c c c c c c c c c c . . 
. . c c c . . c c c . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
})
