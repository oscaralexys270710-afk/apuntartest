enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const HitBox = SpriteKind.create()
    export const Corpse = SpriteKind.create()
    export const Proyectil = SpriteKind.create()
}
spriteutils.onSpriteKindUpdateInterval(SpriteKind.Enemy, 200, function (sprite) {
    if (sight.isInSightCone(
    sprite,
    mySprite,
    64,
    1000,
    1000
    ) && Muerte == false) {
        spriteFx.faceToward(sprite, mySprite)
        timer.after(randint(10, 500), function () {
            if (sight.isInSightCone(
            sprite,
            mySprite,
            64,
            1000,
            1000
            ) && Muerte == false) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 4 4 . . . . . . . 
                    . . . . . . 4 5 5 4 . . . . . . 
                    . . . . . . 2 5 5 2 . . . . . . 
                    . . . . . . . 2 2 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, sprite, 300 * Math.cos(spriteutils.angleFrom(sprite, mySprite)), 300 * Math.sin(spriteutils.angleFrom(sprite, mySprite)))
            }
        })
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
	
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Proyectil, function (sprite, otherSprite) {
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f f f . . . . 
        . . . . . . . . f 4 4 d f f . . 
        . . . f f f f . f f f f e e f . 
        . . f d 1 1 d f 4 4 4 4 f f . . 
        . . f d d d d f 4 4 4 4 f . . . 
        . . f d 1 1 d f 4 4 4 4 f f . . 
        . . . f f f f . f f f f e e f . 
        . . . . . . . . f 4 4 d f f . . 
        . . . . . f . . . f f f . . . . 
        . . . . f 6 f . . . . . . . . . 
        . . . f 6 f . . . . . . . . . . 
        . . f 6 f . . . . . . . . . . . 
        . . . f . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Corpse)
    mySprite4.setPosition(sprite.x, sprite.y)
    spriteFx.faceToward(mySprite4, mySprite)
    sprites.destroy(otherSprite, effects.none, 0)
    sprites.destroy(sprite, effects.none, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Muerte == true) {
    	
    } else if (Pistola == true) {
    	
    } else if (Escopeta == true) {
        projectile.setKind(SpriteKind.Proyectil)
    } else {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 300 * Math.cos(spriteutils.angleFrom(mySprite, mySprite2)), 300 * Math.sin(spriteutils.angleFrom(mySprite, mySprite2)))
        projectile.setKind(SpriteKind.Proyectil)
    }
})
browserEvents.onMouseMove(function (x, y) {
    MauseX = x
    MauseY = y
})
function Arma () {
    if (true) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
    	
    }
}
function Pared () {
    tileUtil.setWalls(assets.tile`greenInnerNorthWest`, true)
    tileUtil.setWalls(assets.tile`greenInnerSouthWest`, true)
    tileUtil.setWalls(assets.tile`greenInnerNorthEast`, true)
    tileUtil.setWalls(assets.tile`greenInnerSouthEast`, true)
    tileUtil.setWalls(assets.tile`greenOuterNorthWest`, true)
    tileUtil.setWalls(assets.tile`greenOuterSouthEast`, true)
    tileUtil.setWalls(assets.tile`greenOuterNorthEast`, true)
    tileUtil.setWalls(assets.tile`greenOuterSouthWest`, true)
    tileUtil.setWalls(assets.tile`greenOuterNorth0`, true)
    tileUtil.setWalls(assets.tile`greenOuterSouth1`, true)
    tileUtil.setWalls(assets.tile`greenOuterEast0`, true)
    tileUtil.setWalls(assets.tile`greenOuterWest0`, true)
}
let mySprite3: Sprite = null
let MauseY = 0
let MauseX = 0
let mySprite4: Sprite = null
let projectile: Sprite = null
let Escopeta = false
let Pistola = false
let Muerte = false
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f d d d d d f . . . . 
    . . . f f f f f f f d f . . . . 
    . . f e e d 1 4 f . f f f f f . 
    . . f e e e d d d f f 6 6 6 f . 
    . . f e e d 1 4 f . f f f f f . 
    . . . f f f f f f f d f . . . . 
    . . . . . f d d d d d f . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.z = 999999999
mySprite2.z = 999999999
MakeyMakey.setSimulatorKeymap(
MakeyMakey.PlayerNumber.ONE,
MakeyMakey.MakeyMakeyKey.W,
MakeyMakey.MakeyMakeyKey.S,
MakeyMakey.MakeyMakeyKey.A,
MakeyMakey.MakeyMakeyKey.D,
MakeyMakey.MakeyMakeyKey.LEFT_CLICK,
MakeyMakey.MakeyMakeyKey.RIGHT_CLICK
)
mySprite.setStayInScreen(true)
tiles.setCurrentTilemap(tilemap`nivel1`)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
browserEvents.setCursorVisible(false)
mySprite2.setFlag(SpriteFlag.Ghost, true)
Muerte = false
Pared()
Pistola = false
Escopeta = false
game.onUpdateInterval(5000, function () {
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f d d d d d f . . . . 
        . . . f f f f f f f d f . . . . 
        . . f d d d 1 4 f . f f f f f . 
        . . f d d d d d d f f 6 6 6 f . 
        . . f d d d 1 4 f . f f f f f . 
        . . . f f f f f f f d f . . . . 
        . . . . . f d d d d d f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mySprite3, assets.tile`floorLight0`)
})
forever(function () {
    mySprite2.setPosition(MauseX + (scene.cameraProperty(CameraProperty.X) - 80), MauseY + (scene.cameraProperty(CameraProperty.Y) - 60))
    spriteFx.faceToward(mySprite2, mySprite)
    spriteFx.faceToward(mySprite, mySprite2)
})
