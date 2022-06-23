class Form{

  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your Name");
    this.playButton = createButton("Play");
    this.text = createElement("h2");
    this.goButton = createButton("GO!");
    this.startButton = createButton("Start");
    this.settingButton = createButton("Setting");
    this.musicButton = createButton("Music");
    this.muteButton = createButton("Mute");
  }

  setElementsPosition() { 
    this.input.position(width / 2 - 110, height / 2 - 20);
    this.playButton.position(width / 2 - 90, height / 2 + 40);
    this.text.position(width / 2 - 340, height / 2 - 230);
    this.goButton.position(width / 2 - 900, height / 2 + 240);
    this.startButton.position(width / 2 - 9000, height / 2 + 240);
    this.settingButton.position(width / 2 - 530, height / 2 - 320);
    this.musicButton.position(width / 2 - 530, height / 2 - 32000);
    this.muteButton.position(width / 2 - 530, height / 2 - 32000);
  }

  setElementsStyle() {
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.text.class("greeting");
    this.goButton.class("customButton");
    this.startButton.class("customButton");
    this.settingButton.class("resetButton");
    this.musicButton.class("resetButton");
    this.muteButton.class("resetButton");
  }

 handleMousePressed(){
    this.playButton.mousePressed(()=>{
        this.input.hide();
        this.playButton.hide();
        this.goButton.position(width / 2 - 90, height / 2 + 10);
        this.settingButton.position(width / 2 - 530, height / 2 - 320);
        gameState = 1;
        var message = `
        Hello I am WALL - E
        </br> Will you help me cleaning up the trash ?  `
        this.text.html(message);
    })

    this.goButton.mousePressed(()=>{
        this.text.hide();
        this.goButton.hide();
        this.settingButton.hide();
        this.musicButton.hide();
        this.muteButton.hide();
        gameState = 2; 
    })
   
    this.settingButton.mousePressed(()=>{
      this.musicButton.position(width / 2 - 530, height / 2 - 240);
    })

    this.musicButton.mousePressed(()=>{
      this.muteButton.position(width / 2 - 530, height / 2 - 240);
      sound.play();
      sound.loop();
    })

    this.muteButton.mousePressed(()=>{
      this.musicButton.position(width / 2 - 530, height / 2 - 240);
      this.muteButton.position(width / 2 - 530, height / 2 - 24000);
      sound.stop();
    })

  }


  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}