import Attributes from "../src/js/attributes.js";

describe ('Attributes', () => {

  test("Should create a Attribute object", () => {
    let newAttributes = new Attributes();
    expect (typeof(newAttributes)).toEqual('object');
  });

  test("Should expect Attribute properties to have integer values", () => {
    const newAttributes = new Attributes();
    expect(typeof(newAttributes.charm)).toEqual('number');
    expect(typeof(newAttributes.singing)).toEqual('number');
    expect(typeof(newAttributes.dancing)).toEqual('number');
    expect(typeof(newAttributes.fashion)).toEqual('number');
    expect(typeof(newAttributes.luck)).toEqual('number');
  });

  test("Should increase the value of the charm property by 1", () => {
    let newAttributes = new Attributes();
    newAttributes.charm = 1;
    newAttributes.charm.key
    newAttributes.increaseAttribute(newAttributes.charm, 1);
    expect (newAttributes.charm).toEqual(2);
  });

})