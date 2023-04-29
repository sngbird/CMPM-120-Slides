//Phaser Project
 
 class Intro extends Phaser.Scene{
    constructor(){
        super('intro')
    }
    preload(){
        this.load.image('playButton', "assets/playbutton.jpg")
    }
    create(){
        this.add.text(550,650,"Click to begin.");
        let pButton = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'playButton')
        this.input.on('pointerdown', () => {this.cameras.main.fadeOut(1000,0,0,0); 
    })
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {this.scene.start('logo')})
    }

}
class Logo extends Phaser.Scene{
    constructor(){
        super('logo')
    }
    preload(){
        this.load.image('catLogo', "assets/catsnugglelogo.png")
        this.load.image('LogoType', "assets/catsnugstudio.png")
        this.load.audio('catPurr', "assets/purr_10.mp3")
    }
    create(){     
      
        let purring = this.sound.add('catPurr');
        purring.play();
        this.cameras.main.fadeIn(5000,0,0,0);
        let logoBG = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'catLogo')
        logoBG.setScale(.5).setScrollFactor(0)
        let logoType = this.add.image(700,500, 'LogoType');
        logoType.setScale(.35);
        this.time.delayedCall(5000, () => {
            this.cameras.main.fadeOut(5000,0,0,0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {this.scene.start('info')})
        })

    }
}
class gameInfo extends Phaser.Scene{
    constructor(){
        super('info')
    }
    preload(){
        this.load.audio('kittyLoop', "assets/kittyLoop.mp3")
        this.load.image('cupcake', "assets/cupcake.png")
        this.load.image('tuppy', "assets/tuppy.png")
        this.load.image('anala', "assets/gnawla.png")
        this.load.image('beebo', "assets/beebo.png")
        this.load.image('bubba', "assets/bubbarelax.png")
    }
    create(){
        let titleText = this.add.text(400,25, "Kitty Krash", {
			fontFamily: 'SunnySpells',
			fontSize: '96px',
			color: '#ffa1e8'
		});
        let gameSpace = this.add.rectangle(640,450, 1200, 450, ' 0xffffff');
        let nextCatOutter = this.add.rectangle(1050,400, 300, 300, ' 0x52ecfa');
        let nextCatInner = this.add.rectangle(1050,400, 275, 275, ' 0xffffff');
        let introText = this.add.text(200,125, "A silly game about stackng as many cats into the snuggle pile as you can! Like Tetris, but with cats.", { fontSize: '36px', color: '#ffa1e8' });
        introText.setWordWrapWidth(1000);
        let nextCatText = this.add.text(920, 275, "NEXT CAT TO STACK:",{fontSize: '24px', color: '#ffa1e8'});
        let bgmLoop = this.sound.add('kittyLoop');
        bgmLoop.play();
        let cuppy = this.add.sprite(350,500, 'cupcake')
        cuppy.setScale(.35);
        let tup = this.add.sprite(470,550,'tuppy')
        tup.setScale(.25);
        let gnawla = this.add.sprite(650,300, 'anala')
        gnawla.setScale(.3)
        let bubba = this.add.sprite(1050,425, 'bubba')
        bubba.setScale(.3)
        this.time.delayedCall(3000,() => {
        const chain1 = this.tweens.chain({
            targets: gnawla,
            tweens:[
                {
                    x: 555,
                    ease: 'power3',
                    duration: 500
                },
                {
                    angle: 5,
                    duration: 200
                    
                },
                {
                    y: 490,
                    ease: 'power3',
                    duration: 500
                },
              
            ]
            

        })
    })
        this.time.delayedCall(4500, () => {
            this.add.tween({
                targets: bubba,
                x: 650,
                y: 300,
                alpha: 0,
                duration: 0 
            })
        this.time.delayedCall(4500, () => {
            this.add.tween({
            targets: bubba,
                alpha: 1,
                duration: 200 
            })
        })
    })
        this.time.delayedCall(5000,() =>{
        const chain2 = this.tweens.chain({
            targets: bubba,
            tweens:[
                {
                    alpha: 1,
                    duration: 100,
                },
                {
                    angle: -15,
                    duration: 500
                },
                {
                    x: 550,
                    ease: 'power3',
                    duration: 500
                },
                {
                    y: 460,
                    ease: 'power3',
                    duration: 500
                },
            ]

        })

    })
    this.time.delayedCall(4850,() =>{
        let beebs = this.add.sprite(1050,415, 'beebo')
        beebs.setScale(.25)
        beebs.alpha = 0;
        this.add.tween({
            targets:beebs,
            alpha: 1,
            duration: 200,

        })
    })
    this.time.delayedCall(8000, () => {
        this.cameras.main.fadeOut(3000,0,0,0);
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {this.scene.start('start', { audio: bgmLoop })})
    })
}

}

class startMenu extends Phaser.Scene{
    constructor(){
        super('start')
    }
    preload(){
        this.load.audio('kittyLoop', "assets/kittyLoop.mp3")
        this.load.image('cupcake', "assets/cupcake.png")
        this.load.image('tuppy', "assets/tuppy.png")
        this.load.image('anala', "assets/gnawla.png")
        this.load.image('beebo', "assets/beebo.png")
        this.load.image('bubba', "assets/bubbarelax.png")
        this.load.image('thought',"assets/thoughtbubble.png")
    }
    create(data){
        this.cameras.main.setBackgroundColor(0xfcccef);
        let bgmLoop = data;
        let menuBorder = this.add.rectangle(-500,430, 350, 400, ' 0x000000');
        let menuInner = this.add.rectangle(-500,430, 345, 395, ' 0xffffff');
        //Use tween to move to offset 200,430
        let playGameButton = this.add.text(-500,260, "Start Stacking!", {
			fontFamily: 'SunnySpells',
			fontSize: '52px',
			color: '#7ff1f5'}).setInteractive()
            .on('pointerup', () => {this.scene.start('playscreen'); } )
            .on('pointerover', () => playGameButton.setStyle({ fill: '#1a3dc9'}) )
            .on('pointerout', () => playGameButton.setStyle({ fill: '#7ff1f5' }) );
        playGameButton.setShadow(3, 3, 'rgba(0,0,0,0.8)', 5);

        let optionsButton = this.add.text(-500, 340, "Options", {
            fontFamily: 'SunnySpells',
            fontSize: '52px',
            color: '#7ff1f5'
        }).setInteractive()
            .on('pointerup', () => {this.scene.start('options');} )
            .on('pointerover', () => optionsButton.setStyle({ fill: '#1a3dc9'}) )
            .on('pointerout', () => optionsButton.setStyle({ fill: '#7ff1f5' }) );
        optionsButton.setShadow(3, 3, 'rgba(0,0,0,0.8)', 5);


        
        let creditsButton = this.add.text(-500, 420, "Credits", {
            fontFamily: 'SunnySpells',
            fontSize: '52px',
            color: '#7ff1f5'
        }).setInteractive()
            .on('pointerup', () => this.scene.start('credits') )
            .on('pointerover', () => creditsButton.setStyle({ fill: '#1a3dc9'}) )
            .on('pointerout', () => creditsButton.setStyle({ fill: '#7ff1f5' }) );
        creditsButton.setShadow(3, 3, 'rgba(0,0,0,0.8)', 5);
  
   

        let quitButton = this.add.text(-500, 500, "Quit", {
            fontFamily: 'SunnySpells',
            fontSize: '52px',
            color: '#7ff1f5'
        }).setInteractive()
            .on('pointerup', () => {this.scene.start('intro'); data.audio.stop();} )
            .on('pointerover', () => quitButton.setStyle({ fill: '#1a3dc9'}) )
            .on('pointerout', () => quitButton.setStyle({ fill: '#7ff1f5' }) );
        quitButton.setShadow(3, 3, 'rgba(0,0,0,0.8)', 5);




        

        let cuppy = this.add.sprite(1000,575, 'cupcake')
        cuppy.setScale(.3);
        cuppy.angle = -25;

        let bubba = this.add.sprite(1100,150, 'bubba')
        bubba.setScale(.25)
        bubba.angle = 240;

        let tup = this.add.sprite(470,100,'tuppy')
        tup.setScale(.2);
        tup.angle = 160
        
        let gnawla = this.add.sprite(650,600, 'anala')
        gnawla.setScale(.25)

        let beebs = this.add.sprite(80,215, 'beebo')
        beebs.setScale(.2)

        let thoughts = this.add.sprite(720,350, 'thought')
        thoughts.setScale(1.5)
        let titleText = this.add.text(595,270, "Kitty Krash", {
			fontFamily: 'SunnySpells',
			fontSize: '56px',
			color: '#7ff1f5'
		})
        this.time.delayedCall(100, () => {
            this.add.circle(975,500, 10, 0xffffff)
            this.add.circle(550,550, 10, 0xffffff)
            this.add.circle(575,125, 10, 0xffffff)
            this.add.circle(1000,220, 10, 0xffffff)
        })

        this.time.delayedCall(200, () => {
            this.add.circle(950,475, 10, 0xffffff)
            this.add.circle(570,515, 10, 0xffffff)
            this.add.circle(590,150, 10, 0xffffff)
            this.add.circle(975,230, 10, 0xffffff)
        })
        
        this.time.delayedCall(300, () => {
            this.add.circle(925,450, 10, 0xffffff)
            this.add.circle(590,480, 10, 0xffffff)
            this.add.circle(605,175, 10, 0xffffff)
            this.add.circle(950,240, 10, 0xffffff)
        })

        this.time.delayedCall(400, () => {
            this.add.circle(900,425, 10, 0xffffff)
            this.add.circle(610,445, 10, 0xffffff)
            this.add.circle(615,200, 10, 0xffffff)
            this.add.circle(925,250, 10, 0xffffff)
        })
        this.time.delayedCall(500, () => {
            this.add.circle(875, 400, 10, 0xffffff)
            this.add.circle(630,415, 10, 0xffffff)

        })
        this.time.delayedCall(600, () =>{
            this.add.tween({
                targets: playGameButton,
                x: 40,
                ease: 'power3',
                duration: 500,
            })
            this.add.tween({
                targets: optionsButton,
                x: 40,
                ease: 'power3',
                duration: 500,
            })
            this.add.tween({
                targets: creditsButton,
                x: 40,
                ease: 'power3',
                duration: 500,
            })
            this.add.tween({
                targets: quitButton,
                x: 40,
                ease: 'power3',
                duration: 500,
            })
            this.add.tween({
                targets: menuBorder,
                x: 200,
                ease: 'power3',
                duration: 500,
            })
            this.add.tween({
                targets: menuInner,
                x: 200,
                ease: 'power3',
                duration: 500,
            })
        })
    }

}
class playScreen extends Phaser.Scene{
    constructor(){
        super('playscreen')
    }
    create(){
        let toStartButton = this.add.text(300,360, "No Game yet Sorry", {fontFamily: 'SunnySpells',
        fontSize: '84px',
        color: '#7ff1f5'}).setInteractive()
        .on('pointerup', () => {this.scene.start('start');} )
        .on('pointerover', () => toStartButton.setStyle({ fill: '#1a3dc9'}) )
        .on('pointerout', () => toStartButton.setStyle({ fill: '#7ff1f5' }) );
    toStartButton.setShadow(3, 3, 'rgba(0,0,0,0.8)', 5);;
    }
}

class Credits extends Phaser.Scene{
    constructor(){
        super('credits')
    }
    create(){
        let toStartButton = this.add.text(100,160, "Assets: \n Photos of my cats edited with Krita\n Audio: My cats purring edited with Audacity and a sample taken with audacity from: \n Andrew Applepie - For Mum", {fontFamily: 'SunnySpells',
        fontSize: '48px',
        color: '#7ff1f5'}).setInteractive()
        .on('pointerup', () => {this.scene.start('start');} )
        .on('pointerover', () => toStartButton.setStyle({ fill: '#1a3dc9'}) )
        .on('pointerout', () => toStartButton.setStyle({ fill: '#7ff1f5' }) );
    toStartButton.setShadow(3, 3, 'rgba(0,0,0,0.8)', 5);
    toStartButton.setWordWrapWidth(1000);
    }
}

class Options extends Phaser.Scene{
    constructor(){
        super('options')
    }
    create(){
        let toStartButton = this.add.text(300,360, "No Game yet Sorry", {fontFamily: 'SunnySpells',
        fontSize: '84px',
        color: '#7ff1f5'}).setInteractive()
        .on('pointerup', () => {this.scene.start('start');} )
        .on('pointerover', () => toStartButton.setStyle({ fill: '#1a3dc9'}) )
        .on('pointerout', () => toStartButton.setStyle({ fill: '#7ff1f5' }) );
    toStartButton.setShadow(3, 3, 'rgba(0,0,0,0.8)', 5);;
    }
}



new Phaser.Game({
    width: 1280,
    height: 720,
    scene:[Intro,Logo,gameInfo,startMenu,playScreen,Credits,Options],
    
});