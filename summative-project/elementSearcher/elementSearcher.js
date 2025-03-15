// Kevin Kang
const data = [
  {
    "atomicNumber": 1,
    "name": "Hydrogen",
    "symbol": "H",
    "atomicMass": 1.01,
    "commonCharge": "1+",
    "type": "Nonmetal",
    "electronegativity": 2.2
  },
  {
    "atomicNumber": 2,
    "name": "Helium",
    "symbol": "He",
    "atomicMass": 4.00,
    "commonCharge": "--",
    "type": "Noble Gas",
    "electronegativity": null
  },
  {
    "atomicNumber": 3,
    "name": "Lithium",
    "symbol": "Li",
    "atomicMass": 6.94,
    "commonCharge": "1+",
    "type": "Alkali Metal",
    "electronegativity": 0.98
  },
  {
    "atomicNumber": 4,
    "name": "Beryllium",
    "symbol": "Be",
    "atomicMass": 9.01,
    "commonCharge": "2+",
    "type": "Alkaline Earth Metal",
    "electronegativity": 1.57
  },
  {
    "atomicNumber": 5,
    "name": "Boron",
    "symbol": "B",
    "atomicMass": 10.81,
    "commonCharge": "3+",
    "type": "Metalloid",
    "electronegativity": 2.04
  },
  {
    "atomicNumber": 6,
    "name": "Carbon",
    "symbol": "C",
    "atomicMass": 12.01,
    "commonCharge": "4+",
    "type": "Nonmetal",
    "electronegativity": 2.55
  },
  {
    "atomicNumber": 7,
    "name": "Nitrogen",
    "symbol": "N",
    "atomicMass": 14.01,
    "commonCharge": "3-",
    "type": "Nonmetal",
    "electronegativity": 3.04
  },
  {
    "atomicNumber": 8,
    "name": "Oxygen",
    "symbol": "O",
    "atomicMass": 16.00,
    "commonCharge": "2-",
    "type": "Nonmetal",
    "electronegativity": 3.44
  },
  {
    "atomicNumber": 9,
    "name": "Fluorine",
    "symbol": "F",
    "atomicMass": 19.00,
    "commonCharge": "1-",
    "type": "Halogen",
    "electronegativity": 3.98
  },
  {
    "atomicNumber": 10,
    "name": "Neon",
    "symbol": "Ne",
    "atomicMass": 20.18,
    "commonCharge": "--",
    "type": "Noble Gas",
    "electronegativity": null
  },
  {
    "atomicNumber": 11,
    "name": "Sodium",
    "symbol": "Na",
    "atomicMass": 22.99,
    "commonCharge": "1+",
    "type": "Alkali Metal",
    "electronegativity": 0.93
  },
  {
    "atomicNumber": 12,
    "name": "Magnesium",
    "symbol": "Mg",
    "atomicMass": 24.31,
    "commonCharge": "2+",
    "type": "Alkaline Earth Metal",
    "electronegativity": 1.31
  },
  {
    "atomicNumber": 13,
    "name": "Aluminum",
    "symbol": "Al",
    "atomicMass": 26.98,
    "commonCharge": "3+",
    "type": "Post-transition Metal",
    "electronegativity": 1.61
  },
  {
    "atomicNumber": 14,
    "name": "Silicon",
    "symbol": "Si",
    "atomicMass": 28.09,
    "commonCharge": "4+",
    "type": "Metalloid",
    "electronegativity": 1.9
  },
  {
    "atomicNumber": 15,
    "name": "Phosphorus",
    "symbol": "P",
    "atomicMass": 30.97,
    "commonCharge": "3-",
    "type": "Nonmetal",
    "electronegativity": 2.19
  },
  {
    "atomicNumber": 16,
    "name": "Sulfur",
    "symbol": "S",
    "atomicMass": 32.07,
    "commonCharge": "2-",
    "type": "Nonmetal",
    "electronegativity": 2.58
  },
  {
    "atomicNumber": 17,
    "name": "Chlorine",
    "symbol": "Cl",
    "atomicMass": 35.45,
    "commonCharge": "1-",
    "type": "Halogen",
    "electronegativity": 3.16
  },
  {
    "atomicNumber": 18,
    "name": "Argon",
    "symbol": "Ar",
    "atomicMass": 39.95,
    "commonCharge": "--",
    "type": "Noble Gas",
    "electronegativity": null
  },
  {
    "atomicNumber": 19,
    "name": "Potassium",
    "symbol": "K",
    "atomicMass": 39.10,
    "commonCharge": "1+",
    "type": "Alkali Metal",
    "electronegativity": 0.82
  },
  {
    "atomicNumber": 20,
    "name": "Calcium",
    "symbol": "Ca",
    "atomicMass": 40.08,
    "commonCharge": "2+",
    "type": "Alkaline Earth Metal",
    "electronegativity": 1.0
  },
  {
    "atomicNumber": 21,
    "name": "Scandium",
    "symbol": "Sc",
    "atomicMass": 44.96,
    "commonCharge": "3+",
    "type": "Transition Metal",
    "electronegativity": 1.3
  },
  {
    "atomicNumber": 22,
    "name": "Titanium",
    "symbol": "Ti",
    "atomicMass": 47.90,
    "commonCharge": "4+, 3+",
    "type": "Transition Metal",
    "electronegativity": 1.5
  },
  {
    "atomicNumber": 23,
    "name": "Vanadium",
    "symbol": "V",
    "atomicMass": 50.94,
    "commonCharge": "5+, 4+",
    "type": "Transition Metal",
    "electronegativity": 1.6
  },
  {
    "atomicNumber": 24,
    "name": "Chromium",
    "symbol": "Cr",
    "atomicMass": 52.00,
    "commonCharge": "3+, 2+",
    "type": "Transition Metal",
    "electronegativity": 1.6
  },
  {
    "atomicNumber": 25,
    "name": "Manganese",
    "symbol": "Mn",
    "atomicMass": 54.94,
    "commonCharge": "2+, 4+",
    "type": "Transition Metal",
    "electronegativity": 1.5
  },
  {
    "atomicNumber": 26,
    "name": "Iron",
    "symbol": "Fe",
    "atomicMass": 55.85,
    "commonCharge": "3+, 2+",
    "type": "Transition Metal",
    "electronegativity": 1.8
  },
  {
    "atomicNumber": 27,
    "name": "Cobalt",
    "symbol": "Co",
    "atomicMass": 58.93,
    "commonCharge": "2+, 3+",
    "type": "Transition Metal",
    "electronegativity": 1.8
  },
  {
    "atomicNumber": 28,
    "name": "Nickel",
    "symbol": "Ni",
    "atomicMass": 58.71,
    "commonCharge": "2+, 3+",
    "type": "Transition Metal",
    "electronegativity": 1.8
  },
  {
    "atomicNumber": 29,
    "name": "Copper",
    "symbol": "Cu",
    "atomicMass": 63.55,
    "commonCharge": "2+, 1+",
    "type": "Transition Metal",
    "electronegativity": 1.9
  },
  {
    "atomicNumber": 30,
    "name": "Zinc",
    "symbol": "Zn",
    "atomicMass": 65.38,
    "commonCharge": "2+",
    "type": "Transition Metal",
    "electronegativity": 1.6
  },
  {
    "atomicNumber": 31,
    "name": "Gallium",
    "symbol": "Ga",
    "atomicMass": 69.74,
    "commonCharge": "3+",
    "type": "Post-transition Metal",
    "electronegativity": 1.6
  },
  {
    "atomicNumber": 32,
    "name": "Germanium",
    "symbol": "Ge",
    "atomicMass": 72.59,
    "commonCharge": "4+",
    "type": "Metalloid",
    "electronegativity": 1.8
  },
  {
    "atomicNumber": 33,
    "name": "Arsenic",
    "symbol": "As",
    "atomicMass": 74.92,
    "commonCharge": "3-",
    "type": "Metalloid",
    "electronegativity": 2.0
  },
  {
    "atomicNumber": 34,
    "name": "Selenium",
    "symbol": "Se",
    "atomicMass": 78.96,
    "commonCharge": "2-",
    "type": "Nonmetal",
    "electronegativity": 2.4
  },
  {
    "atomicNumber": 35,
    "name": "Bromine",
    "symbol": "Br",
    "atomicMass": 79.90,
    "commonCharge": "1-",
    "type": "Halogen",
    "electronegativity": 2.8
  },
  {
    "atomicNumber": 36,
    "name": "Krypton",
    "symbol": "Kr",
    "atomicMass": 83.80,
    "commonCharge": "--",
    "type": "Noble Gas",
    "electronegativity": null
  },
  {
    "atomicNumber": 37,
    "name": "Rubidium",
    "symbol": "Rb",
    "atomicMass": 85.47,
    "commonCharge": "1+",
    "type": "Alkali Metal",
    "electronegativity": 0.8
  },
  {
    "atomicNumber": 38,
    "name": "Strontium",
    "symbol": "Sr",
    "atomicMass": 87.62,
    "commonCharge": "2+",
    "type": "Alkaline Earth Metal",
    "electronegativity": 1.0
  },
  {
    "atomicNumber": 39,
    "name": "Yttrium",
    "symbol": "Y",
    "atomicMass": 88.91,
    "commonCharge": "3+",
    "type": "Transition Metal",
    "electronegativity": 1.3
  },
  {
    "atomicNumber": 40,
    "name": "Zirconium",
    "symbol": "Zr",
    "atomicMass": 91.22,
    "commonCharge": "4+",
    "type": "Transition Metal",
    "electronegativity": 1.4
  },
  {
    "atomicNumber": 41,
    "name": "Niobium",
    "symbol": "Nb",
    "atomicMass": 92.91,
    "commonCharge": "5+, 3+",
    "type": "Transition Metal",
    "electronegativity": 1.6
  },
  {
    "atomicNumber": 42,
    "name": "Molybdenum",
    "symbol": "Mo",
    "atomicMass": 95.94,
    "commonCharge": "6+",
    "type": "Transition Metal",
    "electronegativity": 1.8
  },
  {
    "atomicNumber": 43,
    "name": "Technetium",
    "symbol": "Tc",
    "atomicMass": 98.91,
    "commonCharge": "7+",
    "type": "Transition Metal",
    "electronegativity": 1.9
  },
  {
    "atomicNumber": 44,
    "name": "Ruthenium",
    "symbol": "Ru",
    "atomicMass": 101.07,
    "commonCharge": "3+, 4+",
    "type": "Transition Metal",
    "electronegativity": 2.2
  },
  {
    "atomicNumber": 45,
    "name": "Rhodium",
    "symbol": "Rh",
    "atomicMass": 102.91,
    "commonCharge": "3+",
    "type": "Transition Metal",
    "electronegativity": 2.2
  },
  {
    "atomicNumber": 46,
    "name": "Palladium",
    "symbol": "Pd",
    "atomicMass": 106.40,
    "commonCharge": "2+, 4+",
    "type": "Transition Metal",
    "electronegativity": 2.2
  },
  {
    "atomicNumber": 47,
    "name": "Silver",
    "symbol": "Ag",
    "atomicMass": 107.87,
    "commonCharge": "1+",
    "type": "Transition Metal",
    "electronegativity": 1.9
  },
  {
    "atomicNumber": 48,
    "name": "Cadmium",
    "symbol": "Cd",
    "atomicMass": 112.41,
    "commonCharge": "2+",
    "type": "Transition Metal",
    "electronegativity": 1.7
  },
  {
    "atomicNumber": 48,
    "name": "Cadmium",
    "symbol": "Cd",
    "atomicMass": 112.414,
    "commonCharge": "2+",
    "type": "Transition Metal",
    "electronegativity": 1.7
  },
  {
    "atomicNumber": 49,
    "name": "Indium",
    "symbol": "In",
    "atomicMass": 114.82,
    "commonCharge": "3+",
    "type": "Post-transition Metal",
    "electronegativity": 1.7
  },
  {
    "atomicNumber": 50,
    "name": "Tin",
    "symbol": "Sn",
    "atomicMass": 118.710,
    "commonCharge": "2+, 4+",
    "type": "Post-transition Metal",
    "electronegativity": 1.8
  },
  {
    "atomicNumber": 51,
    "name": "Antimony",
    "symbol": "Sb",
    "atomicMass": 121.760,
    "commonCharge": "3+, 5+",
    "type": "Metalloid",
    "electronegativity": 1.9
  },
  {
    "atomicNumber": 52,
    "name": "Tellurium",
    "symbol": "Te",
    "atomicMass": 127.6,
    "commonCharge": "2-, 4+, 6+",
    "type": "Metalloid",
    "electronegativity": 2.1
  },
  {
    "atomicNumber": 53,
    "name": "Iodine",
    "symbol": "I",
    "atomicMass": 126.9045,
    "commonCharge": "1-, 5+, 7+",
    "type": "Halogen",
    "electronegativity": 2.5
  },
  {
    "atomicNumber": 54,
    "name": "Xenon",
    "symbol": "Xe",
    "atomicMass": 131.293,
    "commonCharge": "0, 2+, 4+, 6+, 8+",
    "type": "Noble Gas",
    "electronegativity": 2.6
  },
  {
    "atomicNumber": 55,
    "name": "Cesium",
    "symbol": "Cs",
    "atomicMass": 132.905,
    "commonCharge": "1+",
    "type": "Alkali Metal",
    "electronegativity": 0.79
  },
  {
    "atomicNumber": 56,
    "name": "Barium",
    "symbol": "Ba",
    "atomicMass": 137.327,
    "commonCharge": "2+",
    "type": "Alkaline Earth Metal",
    "electronegativity": 0.89
  },
  {
    "atomicNumber": 57,
    "name": "Lanthanum",
    "symbol": "La",
    "atomicMass": 138.91,
    "commonCharge": "3+",
    "type": "Lanthanide",
    "electronegativity": 1.1
  },
  {
    "atomicNumber": 58,
    "name": "Cerium",
    "symbol": "Ce",
    "atomicMass": 140.116,
    "commonCharge": "3+, 4+",
    "type": "Lanthanide",
    "electronegativity": 1.12
  },
  {
    "atomicNumber": 59,
    "name": "Praseodymium",
    "symbol": "Pr",
    "atomicMass": 140.908,
    "commonCharge": "3+",
    "type": "Lanthanide",
    "electronegativity": 1.13
  },
  {
    "atomicNumber": 60,
    "name": "Neodymium",
    "symbol": "Nd",
    "atomicMass": 144.242,
    "commonCharge": "3+",
    "type": "Lanthanide",
    "electronegativity": 1.14
  },
  {
    "atomicNumber": 61,
    "name": "Promethium",
    "symbol": "Pm",
    "atomicMass": 145,
    "commonCharge": "3+",
    "type": "Lanthanide",
    "electronegativity": 1.13
  },
  {
    "atomicNumber": 62,
    "name": "Samarium",
    "symbol": "Sm",
    "atomicMass": 150.36,
    "commonCharge": "3+",
    "type": "Lanthanide",
    "electronegativity": 1.17
  },
  {
    "atomicNumber": 63,
    "name": "Europium",
    "symbol": "Eu",
    "atomicMass": 151.964,
    "commonCharge": "3+",
    "type": "Lanthanide",
    "electronegativity": 1.2
  },
  {
    "atomicNumber": 64,
    "name": "Gadolinium",
    "symbol": "Gd",
    "atomicMass": 157.25,
    "commonCharge": "3+",
    "type": "Lanthanide",
    "electronegativity": 1.2
  },
  {
    "atomicNumber": 65,
    "name": "Terbium",
    "symbol": "Tb",
    "atomicMass": 158.925,
    "commonCharge": "3+",
    "type": "Lanthanide",
    "electronegativity": 1.2
  },
  {
    "atomicNumber": 66,
    "name": "Dysprosium",
    "symbol": "Dy",
    "atomicMass": 162.500,
    "commonCharge": "3+",
    "type": "Lanthanide",
    "electronegativity": 1.22
  },
  {
    "atomicNumber": 67,
    "name": "Holmium",
    "symbol": "Ho",
    "atomicMass": 164.930,
    "commonCharge": "3+",
    "type": "Lanthanide",
    "electronegativity": 1.23
  },
  {
    "atomicNumber": 68,
    "name": "Erbium",
    "symbol": "Er",
    "atomicMass": 167.259,
    "commonCharge": "3+",
    "type": "Lanthanide",
    "electronegativity": 1.24
  },
  {
    "atomicNumber": 69,
    "name": "Thulium",
    "symbol": "Tm",
    "atomicMass": 168.934,
    "commonCharge": "3+",
    "type": "Lanthanide",
    "electronegativity": 1.25
  },
  {
    "atomicNumber": 70,
    "name": "Ytterbium",
    "symbol": "Yb",
    "atomicMass": 173.045,
    "commonCharge": "3+",
    "type": "Lanthanide",
    "electronegativity": 1.1
  },
  {
    "atomicNumber": 71,
    "name": "Lutetium",
    "symbol": "Lu",
    "atomicMass": 174.967,
    "commonCharge": "3+",
    "type": "Lanthanide",
    "electronegativity": 1.27
  },
  {
    "atomicNumber": 72,
    "name": "Hafnium",
    "symbol": "Hf",
    "atomicMass": 178.49,
    "commonCharge": "4+",
    "type": "Transition Metal",
    "electronegativity": 1.3
  },
  {
    "atomicNumber": 73,
    "name": "Tantalum",
    "symbol": "Ta",
    "atomicMass": 180.95,
    "commonCharge": "5+",
    "type": "Transition Metal",
    "electronegativity": 1.5
  },
  {
    "atomicNumber": 74,
    "name": "Tungsten",
    "symbol": "W",
    "atomicMass": 183.84,
    "commonCharge": "6+",
    "type": "Transition Metal",
    "electronegativity": 2.36
  },
  {
    "atomicNumber": 75,
    "name": "Rhenium",
    "symbol": "Re",
    "atomicMass": 186.21,
    "commonCharge": "7+",
    "type": "Transition Metal",
    "electronegativity": 1.9
  },
  {
    "atomicNumber": 76,
    "name": "Osmium",
    "symbol": "Os",
    "atomicMass": 190.23,
    "commonCharge": "4+, 6+",
    "type": "Transition Metal",
    "electronegativity": 2.2
  },
  {
    "atomicNumber": 77,
    "name": "Iridium",
    "symbol": "Ir",
    "atomicMass": 192.22,
    "commonCharge": "3+, 4+",
    "type": "Transition Metal",
    "electronegativity": 2.2
  },
  {
    "atomicNumber": 78,
    "name": "Platinum",
    "symbol": "Pt",
    "atomicMass": 195.08,
    "commonCharge": "2+, 4+",
    "type": "Transition Metal",
    "electronegativity": 2.28
  },
  {
    "atomicNumber": 79,
    "name": "Gold",
    "symbol": "Au",
    "atomicMass": 196.97,
    "commonCharge": "1+, 3+",
    "type": "Transition Metal",
    "electronegativity": 2.54
  },
  {
    "atomicNumber": 80,
    "name": "Mercury",
    "symbol": "Hg",
    "atomicMass": 200.59,
    "commonCharge": "1+, 2+",
    "type": "Transition Metal",
    "electronegativity": 2.0
  },
  {
    "atomicNumber": 81,
    "name": "Thallium",
    "symbol": "Tl",
    "atomicMass": 204.38,
    "commonCharge": "1+, 3+",
    "type": "Post-transition Metal",
    "electronegativity": 1.62
  },
  {
    "atomicNumber": 82,
    "name": "Lead",
    "symbol": "Pb",
    "atomicMass": 207.2,
    "commonCharge": "2+, 4+",
    "type": "Post-transition Metal",
    "electronegativity": 1.87
  },
  {
    "atomicNumber": 83,
    "name": "Bismuth",
    "symbol": "Bi",
    "atomicMass": 208.98,
    "commonCharge": "3+, 5+",
    "type": "Post-transition Metal",
    "electronegativity": 2.02
  },
  {
    "atomicNumber": 84,
    "name": "Polonium",
    "symbol": "Po",
    "atomicMass": 209,
    "commonCharge": "2+, 4+",
    "type": "Metalloid",
    "electronegativity": 2.0
  },
  {
    "atomicNumber": 85,
    "name": "Astatine",
    "symbol": "At",
    "atomicMass": 210,
    "commonCharge": "1-, 1+",
    "type": "Halogen",
    "electronegativity": 2.2
  },
  {
    "atomicNumber": 86,
    "name": "Radon",
    "symbol": "Rn",
    "atomicMass": 222,
    "commonCharge": "0",
    "type": "Noble Gas",
    "electronegativity": null
  },
  {
    "atomicNumber": 87,
    "name": "Francium",
    "symbol": "Fr",
    "atomicMass": 223,
    "commonCharge": "1+",
    "type": "Alkali Metal",
    "electronegativity": 0.7
  },
  {
    "atomicNumber": 88,
    "name": "Radium",
    "symbol": "Ra",
    "atomicMass": 226,
    "commonCharge": "2+",
    "type": "Alkaline Earth Metal",
    "electronegativity": 0.9
  },
  {
    "atomicNumber": 89,
    "name": "Actinium",
    "symbol": "Ac",
    "atomicMass": 227,
    "commonCharge": "3+",
    "type": "Actinide",
    "electronegativity": 1.1
  },
  {
    "atomicNumber": 90,
    "name": "Thorium",
    "symbol": "Th",
    "atomicMass": 232.04,
    "commonCharge": "4+",
    "type": "Actinide",
    "electronegativity": 1.3
  },
  {
    "atomicNumber": 91,
    "name": "Protactinium",
    "symbol": "Pa",
    "atomicMass": 231.04,
    "commonCharge": "5+",
    "type": "Actinide",
    "electronegativity": 1.5
  },
  {
    "atomicNumber": 92,
    "name": "Uranium",
    "symbol": "U",
    "atomicMass": 238.03,
    "commonCharge": "6+",
    "type": "Actinide",
    "electronegativity": 1.38
  },
  {
    "atomicNumber": 93,
    "name": "Neptunium",
    "symbol": "Np",
    "atomicMass": 237,
    "commonCharge": "5+",
    "type": "Actinide",
    "electronegativity": 1.36
  },
  {
    "atomicNumber": 94,
    "name": "Plutonium",
    "symbol": "Pu",
    "atomicMass": 244,
    "commonCharge": "4+",
    "type": "Actinide",
    "electronegativity": 1.28
  },
  {
    "atomicNumber": 94,
    "name": "Plutonium",
    "symbol": "Pu",
    "atomicMass": 244,
    "commonCharge": "3+, 4+, 5+, 6+",
    "type": "Actinide",
    "electronegativity": 1.28
  },
  {
    "atomicNumber": 95,
    "name": "Americium",
    "symbol": "Am",
    "atomicMass": 243,
    "commonCharge": "3+, 4+",
    "type": "Actinide",
    "electronegativity": 1.3
  },
  {
    "atomicNumber": 96,
    "name": "Curium",
    "symbol": "Cm",
    "atomicMass": 247,
    "commonCharge": "3+",
    "type": "Actinide",
    "electronegativity": 1.3
  },
  {
    "atomicNumber": 97,
    "name": "Berkelium",
    "symbol": "Bk",
    "atomicMass": 247,
    "commonCharge": "3+, 4+",
    "type": "Actinide",
    "electronegativity": 1.3
  },
  {
    "atomicNumber": 98,
    "name": "Californium",
    "symbol": "Cf",
    "atomicMass": 251,
    "commonCharge": "3+",
    "type": "Actinide",
    "electronegativity": 1.3
  },
  {
    "atomicNumber": 99,
    "name": "Einsteinium",
    "symbol": "Es",
    "atomicMass": 252,
    "commonCharge": "3+",
    "type": "Actinide",
    "electronegativity": 1.3
  },
  {
    "atomicNumber": 100,
    "name": "Fermium",
    "symbol": "Fm",
    "atomicMass": 257,
    "commonCharge": "3+",
    "type": "Actinide",
    "electronegativity": 1.3
  },
  {
    "atomicNumber": 101,
    "name": "Mendelevium",
    "symbol": "Md",
    "atomicMass": 258,
    "commonCharge": "2+, 3+",
    "type": "Actinide",
    "electronegativity": 1.3
  },
  {
    "atomicNumber": 102,
    "name": "Nobelium",
    "symbol": "No",
    "atomicMass": 259,
    "commonCharge": "2+, 3+",
    "type": "Actinide",
    "electronegativity": 1.3
  },
  {
    "atomicNumber": 103,
    "name": "Lawrencium",
    "symbol": "Lr",
    "atomicMass": 266,
    "commonCharge": "3+",
    "type": "Actinide",
    "electronegativity": 1.3
  },
  {
    "atomicNumber": 104,
    "name": "Rutherfordium",
    "symbol": "Rf",
    "atomicMass": 267,
    "commonCharge": "4+",
    "type": "Transactinide",
    "electronegativity": null
  },
  {
    "atomicNumber": 105,
    "name": "Dubnium",
    "symbol": "Db",
    "atomicMass": 268,
    "commonCharge": "5+",
    "type": "Transactinide",
    "electronegativity": null
  },
  {
    "atomicNumber": 106,
    "name": "Seaborgium",
    "symbol": "Sg",
    "atomicMass": 269,
    "commonCharge": "6+",
    "type": "Transactinide",
    "electronegativity": null
  },
  {
    "atomicNumber": 107,
    "name": "Bohrium",
    "symbol": "Bh",
    "atomicMass": 270,
    "commonCharge": "7+",
    "type": "Transactinide",
    "electronegativity": null
  },
  {
    "atomicNumber": 108,
    "name": "Hassium",
    "symbol": "Hs",
    "atomicMass": 269,
    "commonCharge": "8+",
    "type": "Transactinide",
    "electronegativity": null
  },
  {
    "atomicNumber": 109,
    "name": "Meitnerium",
    "symbol": "Mt",
    "atomicMass": 278,
    "commonCharge": "3+, 4+, 6+",
    "type": "Transactinide",
    "electronegativity": null
  },
  {
    "atomicNumber": 110,
    "name": "Darmstadtium",
    "symbol": "Ds",
    "atomicMass": 281,
    "commonCharge": "6+",
    "type": "Transactinide",
    "electronegativity": null
  },
  {
    "atomicNumber": 111,
    "name": "Roentgenium",
    "symbol": "Rg",
    "atomicMass": 282,
    "commonCharge": "3+",
    "type": "Transactinide",
    "electronegativity": null
  },
  {
    "atomicNumber": 112,
    "name": "Copernicium",
    "symbol": "Cn",
    "atomicMass": 285,
    "commonCharge": "2+",
    "type": "Transactinide",
    "electronegativity": null
  },
  {
    "atomicNumber": 113,
    "name": "Nihonium",
    "symbol": "Nh",
    "atomicMass": 286,
    "commonCharge": "1+, 3+",
    "type": "Transactinide",
    "electronegativity": null
  },
  {
    "atomicNumber": 114,
    "name": "Flerovium",
    "symbol": "Fl",
    "atomicMass": 289,
    "commonCharge": "2+, 4+",
    "type": "Transactinide",
    "electronegativity": null
  },
  {
    "atomicNumber": 115,
    "name": "Moscovium",
    "symbol": "Mc",
    "atomicMass": 290,
    "commonCharge": "1+, 3+",
    "type": "Transactinide",
    "electronegativity": null
  },
  {
    "atomicNumber": 116,
    "name": "Livermorium",
    "symbol": "Lv",
    "atomicMass": 293,
    "commonCharge": "2+, 4+",
    "type": "Transactinide",
    "electronegativity": null
  },
  {
    "atomicNumber": 117,
    "name": "Tennessine",
    "symbol": "Ts",
    "atomicMass": 294,
    "commonCharge": "1-, 1+, 3+, 5+",
    "type": "Transactinide",
    "electronegativity": null
  },
  {
    "atomicNumber": 118,
    "name": "Oganesson",
    "symbol": "Og",
    "atomicMass": 294,
    "commonCharge": "--",
    "type": "Noble Gas",
    "electronegativity": null
  }
]

const result = document.getElementById("result");
const input = document.getElementById("textInput");

function checkInput(value) {
  if(value == "") {
    result.innerText = "Type something inside";
    input.value = "";
    input.focus();
    return false;
  }
  return true;
}

function dataCheck(value, type) {
  let index = -1;
  for(let i = 0; i < data.length; i++) {
    let filter = data[i].name;
    if(type == "symbol") {
      filter = data[i].symbol;
    }
    if(filter.toLowerCase() == value.toLowerCase()) {
      index = i;
      break;
    }
  }
  if(index < 0) {
    result.innerText = "No result finded";
    return false;
  };
  result.innerHTML = `
    <table border="1" style="border-collapse: collapse; width: 100%; text-align: left;">
      <tr>
        <th>Property</th>
        <th>Value</th>
      </tr>
      <tr>
        <td>Atomic Number</td>
        <td>${data[index].atomicNumber}</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>${data[index].name}</td>
      </tr>
      <tr>
        <td>Symbol</td>
        <td>${data[index].symbol}</td>
      </tr>
      <tr>
        <td>Atomic Mass</td>
        <td>${data[index].atomicMass}</td>
      </tr>
      <tr>
        <td>Common Charge</td>
        <td>${data[index].commonCharge}</td>
      </tr>
      <tr>
        <td>Type</td>
        <td>${data[index].type}</td>
      </tr>
      <tr>
        <td>Electronegativity</td>
        <td>${data[index].electronegativity !== null ? data[index].electronegativity : "N/A"}</td>
      </tr>
    </table>
  `;
}

function nameSearch() {
  const input_value = input.value.trim();
  if(!checkInput(input_value)) return false;
  dataCheck(input_value, "name");
}

function symbolSearch() {
  const input_value = input.value.trim();
  if(!checkInput(input_value)) return false;
  dataCheck(input_value, "symbol");
}