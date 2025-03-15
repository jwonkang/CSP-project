/*
****
- made by Bo-hyun (Jordan) Lee 
- period 1
*/

//parallel list of all elements (names, symbol, atomic masses) in order of atomic number 
const elementNames = [
  "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon",
  "Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon",
  "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc",
  "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton",
  "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium",
  "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon",
  "Cesium", "Barium",
  "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium",
  "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury",
  "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon",
  "Francium", "Radium",
  "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium",
  "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium", "Roentgenium", "Copernicium",
  "Nihonium", "Flerovium", "Moscovium", "Livermorium", "Tennessine", "Oganesson"
];

const elementSymbols = [
  "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne",
  "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca",
  "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn",
  "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr",
  "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn",
  "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd",
  "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb",
  "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg",
  "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th",
  "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm",
  "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds",
  "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"
];

const atomicMasses = [
  1.01, 4.00, 
  6.94, 9.01, 10.81, 12.01, 14.01, 16.00, 19.00, 20.18, 
  22.99, 24.31, 26.98, 28.09, 30.97, 32.07, 35.45, 39.95, 
  39.10, 40.08, 44.96, 47.87, 50.94, 52.00, 54.94, 55.85, 58.93, 58.69, 63.55, 65.38, 
  69.72, 72.63, 74.92, 78.96, 79.90, 83.90, 
  85.47, 87.62, 88.91, 91.22, 92.91, 95.96, 98.00, 101.07, 102.91, 106.42, 107.87, 112.41, 
  114.82, 118.71, 121.76, 127.60, 126.90, 131.29, 
  132.91, 137.33, 138.91, 140.12, 140.91, 144.24, 145.00, 150.36, 151.96, 157.25, 158.93, 162.50, 164.93, 167.26, 168.93, 173.05, 174.97, 
  178.49, 180.95, 183.84, 186.21, 190.23, 192.22, 195.08, 196.97, 200.97, 
  204.38, 207.20, 208.98, 209.00, 210.00, 222.00, 
  223.00, 226.00, 227.00, 232.04, 231.04, 238.03, 237.00, 244.00, 243.00, 247.00, 247.00, 251.00, 252.00, 257.00, 258.00, 259.00, 262.00, 
  267.00, 268.00, 269.00, 270.00, 269.00, 278.00, 281.00, 281.00, 285.00, 286.00, 289.00, 289.00, 293.00, 294.00, 294.00
];

const electroNegativities = [
  2.20, null, 0.98, 1.57, 2.04, 2.55, 3.04, 3.44, 3.98, null,
  0.93, 1.31, 1.61, 1.90, 2.19, 2.58, 3.16, null, 0.82, 1.00,
  1.36, 1.54, 1.63, 1.66, 1.55, 1.83, 1.88, 1.91, 1.90, 1.65,
  1.81, 2.01, 2.18, 2.55, 2.96, 3.00, 0.82, 0.95, 1.22, 1.33,
  1.60, 2.16, 1.90, 2.20, 2.28, 2.20, 1.93, 1.69, 1.78, 1.96,
  2.05, 2.10, 2.66, 2.60, 0.79, 0.89, 1.10, 1.12, 1.13, 1.14,
  1.13, 1.17, 1.20, 1.20, 1.20, 1.22, 1.23, 1.24, 1.25, 1.27,
  1.30, 1.50, 2.36, 1.90, 2.20, 2.20, 2.28, 2.54, 2.00, 1.62,
  2.33, 2.02, 2.00, 2.20, 2.20, 2.20, 0.70, 0.89, 1.10, 1.30,
  1.50, 1.38, 1.36, 1.28, 1.30, 1.30, 1.30, 1.30, 1.30, 1.30,
  1.30, 1.30, 1.29, null, null, null, null, null, null, null, 
  null, null, null, null, null, null, null, null,
];

const atomicRadii = [
  53, 31, 167, 112, 87, 67, 56, 48, 42, 38,
  190, 145, 118, 111, 98, 88, 79, 71, 243, 194,
  184, 176, 171, 166, 161, 156, 152, 149, 145, 142,
  136, 125, 114, 103, 94, 88, 265, 219, 212, 206,
  198, 190, 183, 178, 173, 169, 165, 161, 156, 145,
  133, 123, 115, 108, 298, 253, 226, 210, 247, 206,
  205, 238, 231, 233, 225, 228, 226, 226, 222, 222,
  217, 208, 200, 193, 188, 185, 180, 177, 174, 171,
  156, 154, 143, 135, 127, 120, null, null, null, null,
  null, null, null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null
];
//--------------------------------------------------------------------//


//initialize colors and key setting(start as default group color in periodic table)
const groupKey1 = document.getElementById("groupKey1");
const groupKey2 = document.getElementById("groupKey2");
const trendKey = document.getElementById("trendKey");
groupKey1.style.display = "block";
groupKey2.style.display = "block";
trendKey.style.display = "none";


for (let i = 0; i < elementNames.length; i++) {
  let elementName = document.getElementById(elementNames[i].toLowerCase());

  if (elementName && elementName.classList.contains("alkalaiMetal")) { 
      elementName.style.backgroundColor = "#FF6868"; //orange-red
      elementName.style.boxShadow = "0 0px 20px #FF6868, 0 0px 20px #FF6868";
  } else if (elementName && elementName.classList.contains("alkalineEarthMetal")) {
      elementName.style.backgroundColor = "#CA8BFF"; // light purple
      elementName.style.boxShadow = "0 0px 20px #CA8BFF, 0 0px 20px #CA8BFF";
  } else if (elementName && elementName.classList.contains("transitionMetal")) {
      elementName.style.backgroundColor = "#2853ff"; // light cyan
      elementName.style.boxShadow = "0 0px 20px #2853ff, 0 0px 20px #2853ff";
  } else if (elementName && elementName.classList.contains("postTransitionMetal")) {
      elementName.style.backgroundColor = "#B3FF02"; // lime green
      elementName.style.boxShadow = "0 0px 20px #B3FF02, 0 0px 20px #B3FF02";
  } else if (elementName && elementName.classList.contains("halogen")) {
      elementName.style.backgroundColor = "#00FBFF"; // cyan
      elementName.style.boxShadow = "0 0px 20px #00FBFF, 0 0px 20px #00FBFF";
  } else if (elementName && elementName.classList.contains("nobleGas")) {
      elementName.style.backgroundColor = "#FFC860"; // light orange
      elementName.style.boxShadow = "0 0px 20px #FFC860, 0 0px 20px #FFC860";
  } else if (elementName && elementName.classList.contains("metalloid")) {
      elementName.style.backgroundColor = "#FF5DFF"; // pink
      elementName.style.boxShadow = "0 0px 20px #FF5DFF, 0 0px 20px #FF5DFF";
  } else if (elementName && elementName.classList.contains("lanthanides")) {
      elementName.style.backgroundColor = "#827CFF"; //light steel 
      elementName.style.boxShadow = "0 0px 20px #827CFF, 0 0px 20px #827CFF";
  } else if (elementName && elementName.classList.contains("actinides")) {
      elementName.style.backgroundColor = "#DC143C"; // Crimson
      elementName.style.boxShadow = "0 0px 20px #DC143C, 0 0px 20px #DC143C";
  } else if (elementName && elementName.classList.contains("nonmetal")) {
      elementName.style.backgroundColor = "yellow"; 
      elementName.style.boxShadow = "0 0px 20px yellow, 0 0px 20px yellow";
  }
  document.getElementById("lanthanides").style.backgroundColor = "#827CFF"; 
  document.getElementById("lanthanides").style.boxShadow = "0 0px 20px #827CFF, 0 0px 20px #827CFF";
  document.getElementById("actinides").style.backgroundColor = "#DC143C"; 
  document.getElementById("actinides").style.boxShadow = "0 0px 20px #DC143C, 0 0px 20px #DC143C";
}
//--------------------------------------------------------------------//


//helper functions
function lightenColor(rgb, percent) {
  //lightens a given color to a [percent] extent
  let result = rgb.slice(4, -1).split(',');
  
  let r = parseInt(result[0]);
  let g = parseInt(result[1]);
  let b = parseInt(result[2]);
  
  r = Math.round(r + (255 - r) * (percent / 100));
  g = Math.round(g + (255 - g) * (percent / 100));
  b = Math.round(b + (255 - b) * (percent / 100));
  
  return `rgb(${r}, ${g}, ${b})`;
}

function getClassFromId(id) {
  //gives out the class name as string, that includes the id given
  let classFromId = document.getElementById(id).className;
  return classFromId;
}

function variableToWord(char) {
  //converting java-type variable names (camelCase) into readable words
  let wordString = "";
  for (let i = 0; i < char.length; i++) {
    if (i == 0) {
      wordString += char[i].toUpperCase();
    }
    else{ 
      if ((i < char.length-1) && (char[i+1] == char[i+1].toUpperCase())) {
        wordString += char[i];
        wordString += " ";
      }
      else {
        wordString += char[i];
      }
    }
  }
  return wordString;
}

function redToYellow(factor, max) {
  //making the color from yellow to red, based on factor/max scale. 
  //pure red --> pure yellow == #FF[HEXADECIMAL]00
  //automize trend color
  factor = Math.max(0, Math.min(max, factor));

  let hex = Math.round((1 - factor / max) * 255).toString(16).padStart(2, "0");

  return `#FF${hex}00`;
}

//--------------------------------------------------------------------//


//defining pop up id
var popUp = document.getElementById("infoPopUp");


//opening information pop up
function openInfo(num){
  popUp.classList.add("open-popUp");

  let symbolID = document.getElementById(elementNames[num].toLowerCase());
  let symbolColor = window.getComputedStyle(symbolID).backgroundColor;
  let lightColor = lightenColor(symbolColor, 50);
  document.getElementById("infoPopUp").style.backgroundColor = lightColor;
  document.getElementById("infoPopUp").style.boxShadow = `0px 0px 100px ${symbolColor}, 0px 0px 100px ${symbolColor}`;

  document.getElementById("topSymbol").style.backgroundColor = symbolColor;
  document.getElementById("topSymbol").style.fontSize = "50px";
  document.getElementById("topSymbol").textContent = elementSymbols[num];

  document.getElementById("elementName").textContent = elementNames[num].toUpperCase();

  document.getElementById("amu").textContent = `AMU: ${atomicMasses[num]}`;
  
  let elementIdClass = getClassFromId(elementNames[num].toLowerCase());
  let elementGroup = variableToWord(elementIdClass);
  document.getElementById("groupDefinition").textContent = `Group: ${elementGroup}`;

  if (electroNegativities[num] != null) {var electroNegativity = electroNegativities[num];} 
  else {var electroNegativity = "Undefined";}
  document.getElementById("electroNegativity").textContent = `Electronegativity: ${electroNegativity}`;

  if (atomicRadii[num] != null) {var atomicRadius = atomicRadii[num];} 
  else {var atomicRadius = "Undefined";}
  document.getElementById("atomicRadius").textContent = `Atomic Radius: ${atomicRadius}`;
}

//opening information popup, for placeholders 
function placeholderInfo(type){
  if (type == 1) {
    document.getElementById("topSymbol").style.fontSize = "25px";
    document.getElementById("topSymbol").textContent = "Lanthanides";

    let symbolID = document.getElementById("lanthanides");
    let symbolColor = window.getComputedStyle(symbolID).backgroundColor;
    document.getElementById("topSymbol").style.backgroundColor = symbolColor;

    document.getElementById("infoPopUp").style.backgroundColor = lightenColor(symbolColor, 50);

    document.getElementById("infoPopUp").style.boxShadow = `0px 0px 100px ${symbolColor}, 0px 0px 100px ${symbolColor}`;
    
    popUp.classList.add("open-popUp");
    document.getElementById("groupDefinition").textContent = "";
    document.getElementById("electroNegativity").textContent = "";
    document.getElementById("atomicRadius").textContent = "";
    document.getElementById("elementName").textContent = "Lanthanides";
    document.getElementById("amu").textContent = "This is a placeholder containing element 57-71.";
  }
  else {
    document.getElementById("topSymbol").style.fontSize = "25px";
    document.getElementById("topSymbol").textContent = "Actinides";
    let symbolID = document.getElementById("actinides");
    let symbolColor = window.getComputedStyle(symbolID).backgroundColor;
    document.getElementById("topSymbol").style.backgroundColor = symbolColor;

    document.getElementById("infoPopUp").style.backgroundColor = lightenColor(symbolColor, 50);

    document.getElementById("infoPopUp").style.boxShadow = `0px 0px 100px ${symbolColor}, 0px 0px 100px ${symbolColor}`;

    popUp.classList.add("open-popUp");
    document.getElementById("groupDefinition").textContent = "";
    document.getElementById("electroNegativity").textContent = "";
    document.getElementById("atomicRadius").textContent = "";
    document.getElementById("elementName").textContent = "Actinides";
    document.getElementById("amu").textContent = "This is a placeholder containing element 89-103.";
  }
}

//closing information pop up
function closeInfo(){
    popUp.classList.remove("open-popUp");
}
//--------------------------------------------------------------------//


//setting colors as horizontal groups 
function groupColor(){
    groupKey1.style.display = "block";
    groupKey2.style.display = "block";
    trendKey.style.display = "none";

    for (let i = 0; i < elementNames.length; i++) {
    let elementName = document.getElementById(elementNames[i].toLowerCase());

      if (elementName && elementName.classList.contains("alkalaiMetal")) { 
          elementName.style.backgroundColor = "#FF6868"; //orange-red
          elementName.style.boxShadow = "0 0px 20px #FF6868, 0 0px 20px #FF6868";
      } else if (elementName && elementName.classList.contains("alkalineEarthMetal")) {
          elementName.style.backgroundColor = "#CA8BFF"; // light purple
          elementName.style.boxShadow = "0 0px 20px #CA8BFF, 0 0px 20px #CA8BFF";
      } else if (elementName && elementName.classList.contains("transitionMetal")) {
          elementName.style.backgroundColor = "#2853ff"; // light cyan
          elementName.style.boxShadow = "0 0px 20px #2853ff, 0 0px 20px #2853ff";
      } else if (elementName && elementName.classList.contains("postTransitionMetal")) {
          elementName.style.backgroundColor = "#B3FF02"; // lime green
          elementName.style.boxShadow = "0 0px 20px #B3FF02, 0 0px 20px #B3FF02";
      } else if (elementName && elementName.classList.contains("halogen")) {
          elementName.style.backgroundColor = "#00FBFF"; // cyan
          elementName.style.boxShadow = "0 0px 20px #00FBFF, 0 0px 20px #00FBFF";
      } else if (elementName && elementName.classList.contains("nobleGas")) {
          elementName.style.backgroundColor = "#FFC860"; // light orange
          elementName.style.boxShadow = "0 0px 20px #FFC860, 0 0px 20px #FFC860";
      } else if (elementName && elementName.classList.contains("metalloid")) {
          elementName.style.backgroundColor = "#FF5DFF"; // pink
          elementName.style.boxShadow = "0 0px 20px #FF5DFF, 0 0px 20px #FF5DFF";
      } else if (elementName && elementName.classList.contains("lanthanides")) {
          elementName.style.backgroundColor = "#827CFF"; //light steel 
          elementName.style.boxShadow = "0 0px 20px #827CFF, 0 0px 20px #827CFF";
      } else if (elementName && elementName.classList.contains("actinides")) {
          elementName.style.backgroundColor = "#DC143C"; // Crimson
          elementName.style.boxShadow = "0 0px 20px #DC143C, 0 0px 20px #DC143C";
      } else if (elementName && elementName.classList.contains("nonmetal")) {
          elementName.style.backgroundColor = "yellow"; 
          elementName.style.boxShadow = "0 0px 20px yellow, 0 0px 20px yellow";
      }
      document.getElementById("lanthanides").style.backgroundColor = "#827CFF"; 
      document.getElementById("lanthanides").style.boxShadow = "0 0px 20px #827CFF, 0 0px 20px #827CFF";
      document.getElementById("actinides").style.backgroundColor = "#DC143C"; 
      document.getElementById("actinides").style.boxShadow = "0 0px 20px #DC143C, 0 0px 20px #DC143C";
    }
}
//--------------------------------------------------------------------//


//setting colors as electronegativity trend --> not 100% accurate but just a trendy thing
function ENTrend(){
    groupKey1.style.display = "none";
    groupKey2.style.display = "none";
    trendKey.style.display = "block";

    for (let i = 0; i < electroNegativities.length; i++) {
      if (electroNegativities[i] != null) {
        let element = elementNames[i].toLowerCase();
        let strengthColor = redToYellow(electroNegativities[i], 3.98);
        document.getElementById(element).style.backgroundColor = strengthColor;
        document.getElementById(element).style.boxShadow = `0px 0px 20px ${strengthColor}, 0px 0px 20px ${strengthColor}`;
      }
      else {
        let element = elementNames[i].toLowerCase();
        document.getElementById(element).style.backgroundColor = "grey";
        document.getElementById(element).style.boxShadow = `0px 0px 20px grey, 0px 0px 20px grey`;
      }
    }

    document.getElementById("lanthanides").style.backgroundColor = "grey";
    document.getElementById("lanthanides").style.boxShadow = `0px 0px 20px grey, 0px 0px 20px grey`;
    document.getElementById("actinides").style.backgroundColor = "grey";
    document.getElementById("actinides").style.boxShadow = `0px 0px 20px grey, 0px 0px 20px grey`;

    document.getElementById("trendGradient").textContent = "Weak ------------------> Strong";
}
//--------------------------------------------------------------------//


//setting colors as atomic radii trend --> not 100% accurate but just a trendy thing
function radiusTrend() {
    groupKey1.style.display = "none";
    groupKey2.style.display = "none";
    trendKey.style.display = "block";

    for (let i = 0; i < atomicRadii.length; i++) {
      if (atomicRadii[i] != null) {
        let element = elementNames[i].toLowerCase();
        let sizeColor = redToYellow(atomicRadii[i], 298);
        document.getElementById(element).style.backgroundColor = sizeColor;
        document.getElementById(element).style.boxShadow = `0px 0px 20px ${sizeColor}, 0px 0px 20px ${sizeColor}`;
        document.getElementById("trendGradient").textContent = "Small ------------------> Large";
      }
      else {
        let element = elementNames[i].toLowerCase();
        document.getElementById(element).style.backgroundColor = "grey";
        document.getElementById(element).style.boxShadow = `0px 0px 20px grey, 0px 0px 20px grey`;
        document.getElementById("lanthanides").style.backgroundColor = "grey";
        document.getElementById("lanthanides").style.boxShadow = `0px 0px 20px grey, 0px 0px 20px grey`;
        document.getElementById("actinides").style.backgroundColor = "grey";
        document.getElementById("actinides").style.boxShadow = `0px 0px 20px grey, 0px 0px 20px grey`;
      }
    }
}
//--------------------------------------------------------------------//