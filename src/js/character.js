export default function Character() {
  this.userName = '';
  this.pronoun = ''; 
  this.hitPoints = 0;
  this.maxHp = 0;
  this.level = 1;
  this.xp = 0;
  this.moves = {};
  this.attributes = {};
  this.inventory = {};
  this.bonusPoints = {};
};

Character.prototype.createPlayerCharacter = function(userName, pronoun) {
  this.userName = userName;
  this.pronoun = pronoun;
};

Character.prototype.updateLevel = function() { 
  let xp = this.xp;
  if (xp <= 9) {
    this.level = 1;
  } else if (xp <=100) {
    this.level = 2;
  } else {
    this.level = 3;
  }
};