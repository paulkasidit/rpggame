import Character from '../src/js/character.js';

describe('Character', () => {

  test('should create a character object', () => {
    const newPlayer = new Character(); 
    expect(typeof(newPlayer.userName)).toEqual('string');
    expect(typeof(newPlayer.pronoun)).toEqual('string');
    expect(typeof(newPlayer.hitPoints)).toEqual('number');
    expect(typeof(newPlayer.maxHp)).toEqual('number');
    expect(typeof(newPlayer.level)).toEqual('number');
    expect(typeof(newPlayer.xp)).toEqual('number');
    expect(typeof(newPlayer.moves)).toEqual('object');
    expect(typeof(newPlayer.attributes)).toEqual('object');
    expect(typeof(newPlayer.inventory)).toEqual('object');
    expect(typeof(newPlayer.bonusPoints)).toEqual('object');
  });

  //Tests for createPlayerCharacter function
  test('should input user collected and selected information for new player', () => {
    const newPlayer= new Character();
    newPlayer.createPlayerCharacter("brian", "he");
    expect (newPlayer.userName).toEqual("brian");
    expect (newPlayer.pronoun).toEqual("he");
  });

  //Tests for UpdateLevel function
  test("should return level as level 2 if xp is between 10-100", () => {
    const newPlayer = new Character();
    newPlayer.xp = 15;
    newPlayer.updateLevel();
    expect (newPlayer.level).toEqual(2);
  });

  test("should return level as level 1 if xp is 9 or under", () => {
    const newPlayer = new Character();
    newPlayer.xp = 8;
    newPlayer.updateLevel();
    expect (newPlayer.level).toEqual(1);
  });

  test("should return level as level 1 if xp is 9 or under", () => {
    const newPlayer = new Character();
    newPlayer.xp = 100;
    newPlayer.updateLevel();
    expect (newPlayer.level).toEqual(2);
  });

  test("should return level as level 3 if xp is over 100", () => {
    const newPlayer = new Character();
    newPlayer.xp = 101;
    newPlayer.updateLevel();
    expect (newPlayer.level).toEqual(3);
  });

}); 

