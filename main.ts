function parseHex (text: string, num: number) {
    if (text.charAt(num) == "A") {
        picture = 10
    } else if (text.charAt(num) == "B") {
        picture = 11
    } else if (text.charAt(num) == "C") {
        picture = 12
    } else if (text.charAt(num) == "D") {
        picture = 13
    } else if (text.charAt(num) == "E") {
        picture = 14
    } else if (text.charAt(num) == "F") {
        picture = 15
    } else {
        picture = parseFloat(text.charAt(num))
    }
    return picture
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (evenindex % 2 == 0) {
        BillCipher(passwordimage, mySprite, false)
        evenindex += 1
    } else {
        BillCipher2(passwordimage, mySprite, false)
        evenindex += 1
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (evenindex % 2 == 0) {
        BillCipher(passwordimage, mySprite, true)
        evenindex += 1
    } else {
        BillCipher2(passwordimage, mySprite, true)
        evenindex += 1
    }
})
function BillCipher (keyword: Sprite, image2: Sprite, encode: boolean) {
    for (let row = 0; row <= image2.height - 1; row++) {
        for (let column = 0; column <= image2.width - 1; column++) {
            if (encode) {
                image2.image.setPixel(column, row, (image2.image.getPixel(column, row) + keyword.image.getPixel(pIndex, 0)) % 16)
            } else {
                image2.image.setPixel(column, row, (image2.image.getPixel(column, row) - keyword.image.getPixel(pIndex, 0) + 16) % 16)
            }
            pIndex += 10
            if (pIndex >= keyword.width) {
                pIndex = 0
            }
        }
        pause(1)
    }
}
function BillCipher2 (keyword: Sprite, image2: Sprite, encode: boolean) {
    for (let column = 0; column <= image2.height - 1; column++) {
        for (let row = 0; row <= image2.width - 1; row++) {
            if (encode) {
                image2.image.setPixel(column, row, (image2.image.getPixel(column, row) + keyword.image.getPixel(pIndex, 0)) % 16)
            } else {
                image2.image.setPixel(column, row, (image2.image.getPixel(column, row) - keyword.image.getPixel(pIndex, 0) + 16) % 16)
            }
            pIndex += 10
            if (pIndex >= keyword.width) {
                pIndex = 0
            }
        }
        pause(1)
    }
}
let pIndex = 0
let evenindex = 0
let picture = 0
let index = 0
let mySprite: Sprite = null
let passwordimage: Sprite = null
passwordimage = sprites.create(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `, SpriteKind.Projectile)
passwordimage.top = 0
mySprite = sprites.create(img`
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ...............................................eeeeeeeeeeeeeeeeeeee.................................
    ...............................................eeeeeeeeeeeeeeeeeeee.................................
    .........................................eeeeee4444555556666662222e222222e..........................
    .........................................eeeeee4444555556666662222e222222e..........................
    .........................................eeeeee4444555556666662222e222222e..........................
    .........................................eeeeee4444555556666662222e222222e..........................
    ..................................eeeeeee4444555555566667722223333e2222226888888....................
    ..................................eeeeeee4444555555566667722223333e2222226888888....................
    .................................e444444677777766666777777222233332eeeeee777777766666888............
    .................................e444444677777766666777777222233332eeeeee777777766666888............
    ..............................eee46666667444455555554444777777222222222227777777666677778888........
    ..............................eee46666667444455555554444777777222222222227777777666677778888........
    ..............................eee46666667444455555554444777777222222222227777777666677778888........
    ..............................eee46666667444455555554444777777222222222227777777666677778888........
    ...........................44444448888887444444444444444777777777776666666777777777767778888........
    .......................44445552222eeeeee7777777777777777667777777777777776666666777766666666888.....
    .......................44445552222eeeeee7777777777777777667777777777777776666666777766666666888.....
    .......................44445552222eeeeee7777777777777777667777777777777776666666777766666666888.....
    .......................44445552222eeeeee7777777777777777667777777777777776666666777766666666888.....
    ......................455552223332222222777776666667222222eeee66666666666eeeeeeeeeeee8888888888.....
    ......................455552223332222222777776666667222222eeee66666666666eeeeeeeeeeee8888888888.....
    ...................444555552223332eeeeee7666666777723333222222eeee45555555555ddddddddddd4444888.....
    ...................444555552223332eeeeee7666666777723333222222eeee45555555555ddddddddddd4444888.....
    ...................444555552223332eeeeee7666666777723333222222eeee45555555555ddddddddddd4444888.....
    ...............44444445666677777777777775555544666623333ee444455555dddddddddddddddddddddddddddd4....
    ...............44444445666677777777777775555544666623333ee444455555dddddddddddddddddddddddddddd4....
    ...............44444445666677777777777775555544666623333ee444455555dddddddddddddddddddddddddddd4....
    ...............eeee66667777777444555555544444777777e4444555555dddddddddddd55555555555444ddddddd4444.
    ...............eeee66667777777444555555544444777777e4444555555dddddddddddd55555555555444ddddddd4444.
    ...............eeee66667777777444555555544444777777e4444555555dddddddddddd55555555555444ddddddd4444.
    ............eee44446667777777744444444446777777eeee55555dddddd555555555555555ddd55555ddddddddddd444.
    ............eee44446667777777744444444446777777eeee55555dddddd555555555555555ddd55555ddddddddddd444.
    ............eee44446667777777744444444446777777eeee55555dddddd555555555555555ddd55555ddddddddddd444.
    ............eee555566668888666777766666666666ee5555ddddd555555555555555555555555555555555555ddddeee.
    ............eee555566668888666777766666666666ee5555ddddd555555555555555555555555555555555555ddddeee.
    .........eee444555555544444eee88877777776eeee55dddd55555555555555545555555555555555555555555555deee.
    .........eee444555555544444eee88877777776eeee55dddd55555555555555545555555555555555555555555555deee.
    .........eee444555555544444eee88877777776eeee55dddd55555555555555545555555555555555555555555555deee.
    .........eee5555555444eeeeeeeeeee6666666e5555dd55555555555dddd555555555555555ddddddddddd5555444deee.
    .........eee5555555444eeeeeeeeeee6666666e5555dd55555555555dddd555555555555555ddddddddddd5555444deee.
    .........eee5555555444eeeeeeeeeee6666666e5555dd55555555555dddd555555555555555ddddddddddd5555444deee.
    .........eee5555555444eeeeeeeeeee6666666e5555dd55555555555dddd555555555555555ddddddddddd5555444deee.
    .........eee5555555eeee4444444fffeeeeeee5dddd55dddd5555555555555555dddddd5ddd555ddddddddddddddddeee.
    ......eee4445554444eeeeeeeeeeefffe4444445dddd55555555555555555555555555555555ddddddd4dddddddddde....
    ......eee4445554444eeeeeeeeeeefffe4444445dddd55555555555555555555555555555555ddddddd4dddddddddde....
    ......eee4445554444eeeeeeeeeeefffe4444445dddd55555555555555555555555555555555ddddddd4dddddddddde....
    ......eee555eee4444eeeeffffffffffe555555d5555555555555555555555555d5555555555555ddddddddddddeee.....
    ......eee555eee4444eeeeffffffffffe555555d5555555555555555555555555d5555555555555ddddddddddddeee.....
    ......eee555eee4444eeeeffffffffffe555555d5555555555555555555555555d5555555555555ddddddddddddeee.....
    ......eee555eeeeeee444eeeeeffffff4555555d555555555555555555555555555555555555dddddddddddeeee........
    ......eee555eeeeeeeeeeefffffffeee5dddddd55555dd555555555dd555555555555555d555ddddddddeee............
    ......eee555eeeeeeeeeeefffffffeee5dddddd55555dd555555555dd555555555555555d555ddddddddeee............
    ......eee555eeeeeeeeeeefffffffeee5dddddd55555dd555555555dd555555555555555d555ddddddddeee............
    ......eee555eeeeeeeeeeefffffffeee5dddddd55555dd555555555dd555555555555555d555ddddddddeee............
    ......eee555eeeeeeeeeeefffffffeee5dddddd55555dd555555555dd555555555555555d555ddddddddeee............
    ......eee555fffffffeeefeeeeeeeeee5dddddd555555544445555555555555555555555ddddddd4444e...............
    ......eee555fffffffeeefeeeeeeeeee5dddddd555555544445555555555555555555555ddddddd4444e...............
    ......eee555ffffffffffffffffffeee5444444555555555555555555dddd5555d444444ddddeeeeeee................
    ......eee555ffffffffffffffffffeee5444444555555555555555555dddd5555d444444ddddeeeeeee................
    ......eee555ffffffffffffffffffeee5444444555555555555555555dddd5555d444444ddddeeeeeee................
    ......eee555ffffffffffffffffffeee5444444555555555555555555dddd5555d444444ddddeeeeeee................
    ......eee555444eeeefffefffffff4445dddddd55555dd555555555555555ddddddddddddeee.......................
    ......eee555eeeeeeeeeefffffeee555ddddddd555555555555444455dddddddddeeeeeee..........................
    ......eee555eeeeeeeeeefffffeee555ddddddd555555555555444455dddddddddeeeeeee..........................
    ......eee444eeeeeeeeeeffffffff555d5555555555555dddd55555dddddddddde.................................
    ......eee444eeeeeeeeeeffffffff555d5555555555555dddd55555dddddddddde.................................
    ......eee444eeeeeeeeeeffffffff555d5555555555555dddd55555dddddddddde.................................
    ......eee444eeeeeeeeeeffffffff555d5555555555555dddd55555dddddddddde.................................
    ......eee444eeeeeeeeeeffffffff555d5555555555555dddd55555dddddddddde.................................
    ......eee444eeeffffeeeffffffff555d555555d555555555555555dd4444eeee..................................
    .........eee444eeeeffffffffeee555d555555555555555555ddddeeeeee......................................
    .........eee444eeeeffffffffeee555d555555555555555555ddddeeeeee......................................
    .........eee444eeeeffffffffeee555d555555555555555555ddddeeeeee......................................
    .........eee444eeeeffffffffeee555d555555555555555555ddddeeeeee......................................
    .........eee5554444eeeeeeeeeee555d55555545555dddddd4eeee............................................
    .........eee5554444eeeeeeeeeee555d55555545555dddddd4eeee............................................
    ............eee55555554eeeeeee555ddddddddddddddeeeee................................................
    ............eee55555554eeeeeee555ddddddddddddddeeeee................................................
    ...............eeeeeee55555444444ddddddddeeeeee.....................................................
    ...............eeeeeee55555444444ddddddddeeeeee.....................................................
    ...............eeeeeee55555444444ddddddddeeeeee.....................................................
    ......................eeeeeeeeeeeeeeeeeee...........................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    ....................................................................................................
    `, SpriteKind.Player)
game.splash("Use hex password")
let a1 = game.askForString("Password?", 20)
for (let row = 0; row <= passwordimage.height - 1; row++) {
    for (let column = 0; column <= passwordimage.width - 1; column++) {
        for (let index2 = 0; index2 < 8; index2++) {
            passwordimage.image.setPixel(column * 8 + index, row, parseHex(a1, column))
            index += 1
        }
        index = 0
    }
}
