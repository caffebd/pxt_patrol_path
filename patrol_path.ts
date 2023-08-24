enum Choice {
    Yes,
    No
}

let activeSprites: Sprite[] = []

namespace sprites {
    /**
     * Sets if patrol is active for a sprite
     */
    //% blockId=setPatrolActive block="set $sprite=variables_get patrol mode is active $choice"
    //% group="Enemy Patrol"
    //% weight=10
    //% blockGap=8
    export function setPatrolActive(sprite: Sprite, choice: Choice) {

        if (choice == Choice.Yes){
            if (activeSprites.indexOf(sprite)==-1){
                activeSprites.push(sprite)
            }
        }else{
            if (activeSprites.indexOf(sprite) != -1) {
                activeSprites.removeAt(activeSprites.indexOf(sprite))
            }
        }
        

    }

    /**
     * Sets a number in the data of a sprite
     */
    //% blockId=setPatrolPathX block="set $sprite=variables_get patrol distance on x $value || with speed $speed"
    //% group="Enemy Patrol"
    //% expandableArgumentMode="enabled"
    //% weight=10
    //% blockGap=8
    //% speed.defl=50
    export function setPatrolPathX(sprite: Sprite, value: number, speed?:number) {

        if (!sprite) return;
        if (activeSprites.indexOf(sprite) == -1) {
            activeSprites.push(sprite)
        }
        let startX = sprite.x
        let targetX = startX + value
        let skipCount = 0
        function checkXPos() {
            if (activeSprites.indexOf(sprite) == -1) {
                sprite.vx = 0
                return;
            }
            if (sprite.vx == 0){
                sprite.setVelocity(speed, sprite.vy)
            }
           
            if (sprite.x >= targetX || sprite.x < startX) {
                if (skipCount > 0) return
                skipCount = 2
                let xVel = sprite.vx * -1
                sprite.setVelocity(xVel, sprite.vy)
            }
            skipCount--
        }

        forever(checkXPos)

    }


    //% blockId=setPatrolPathY block="set $sprite=variables_get patrol distance on y $value || with speed $speed"
    //% group="Enemy Patrol"
    //% expandableArgumentMode="enabled"
    //% weight=10
    //% blockGap=8
    //% speed.defl=50
    export function setPatrolPathY(sprite: Sprite, value: number, speed?:number) {

        if (!sprite) return;
        if (activeSprites.indexOf(sprite) == -1) {
            activeSprites.push(sprite)
        }
        let startY = sprite.y
        let targetY = startY + value
        let skipCount = 0
        function checkYPos() {
            if (activeSprites.indexOf(sprite) == -1) {
                sprite.vy = 0
                return;
            }
            if (sprite.vy == 0) {
                sprite.setVelocity(sprite.vx, speed)
            }
            if (sprite.y >= targetY || sprite.y < startY) {
                if (skipCount > 0) return
                skipCount = 2
                let yVel = sprite.vy * -1
                sprite.setVelocity(sprite.vx, yVel)
            }
            skipCount--
        }

        forever(checkYPos)

    }


}
