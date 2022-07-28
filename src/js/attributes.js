export default function Attributes() {
  
  this.charm = 0; 
  this.singing = 0; 
  this.dancing = 0;  
  this.fashion = 0;  
  this.luck = 0; 

};


Attributes.prototype.increaseAttribute = function(attribute, number){
  return attribute + number;

}
