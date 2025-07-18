Hooks.on('diceSoNiceReady', (dice3d) => {

  dice3d.addTexture("colourdifference", {
      name: "⁂ Colour Dodge",
      composite: "difference",
      source: "modules/nice-more-dice/textures/bark.webp",
        bump: "modules/nice-more-dice/textures/barkb.webp"
  });

    dice3d.addTexture("Blood", {
      name: "⁂ Black Blood",
      composite: "multiply",
      source: "modules/nice-more-dice/textures/bwblood.webp"
  });
  
    dice3d.addTexture("ccorn", {
      name: "⁂ Candy Corn",
      composite: "multiply",
      source: "modules/nice-more-dice/textures/candycorn.webp"
  });  

    dice3d.addTexture("cosmic", {
      name: "⁂ Cosmic",
      composite: "multiply",
      source: "modules/nice-more-dice/textures/cosmic.webp"
  });

   dice3d.addTexture("Claws", {
      name: "⁂ Claws",
      composite: "difference",
      source: "modules/nice-more-dice/textures/claws.webp",
        bump: "modules/nice-more-dice/textures/clawsb.webp"
  });

   dice3d.addTexture("Gears", {
      name: "⁂ Gears",
      composite: "multiply",
      source: "modules/nice-more-dice/textures/gears.webp",
        bump: "modules/nice-more-dice/textures/gearsb.webp"
  });

  dice3d.addTexture("Grid", {
      name: "⁂ Grid",
      composite: "difference",
      source: "modules/nice-more-dice/textures/grid.webp"
  });

  dice3d.addTexture("GoldenBranches", {
      name: "⁂ Golden Branches",
      composite: "multiply",
      source: "modules/nice-more-dice/textures/goldenbranches.webp"
  });

   dice3d.addTexture("Hex", {
      name: "⁂ Hex",
      composite: "hard-light",
      source: "modules/nice-more-dice/textures/hex.webp"
  });

    dice3d.addTexture("Hearts", {
      name: "⁂ Hearts",
      composite: "difference",
      source: "modules/nice-more-dice/textures/hearts.webp",
        bump: "modules/nice-more-dice/textures/heartsb.webp"
  });

  dice3d.addTexture("Lavash", {
      name: "⁂ Lavash",
      composite: "multiply",
      source: "modules/nice-more-dice/textures/lavash.webp"
  });

   dice3d.addTexture("Leafage", {
      name: "⁂ Leafage",
      composite: "multiply",
      source: "modules/nice-more-dice/textures/leafage.webp",
        bump: "modules/nice-more-dice/textures/leafageb.webp"
  });

    dice3d.addTexture("orbs", {
      name: "⁂ Orbs",
      composite: "multiply",
      source: "modules/nice-more-dice/textures/orbs.webp"
  });

   dice3d.addTexture("paws", {
      name: "⁂ Paws",
      composite: "difference",
      source: "modules/nice-more-dice/textures/paws.webp",
        bump: "modules/nice-more-dice/textures/pawsb.webp"
  });

    dice3d.addTexture("redwave", {
      name: "⁂ Redwave",
      composite: "multiply",
      source: "modules/nice-more-dice/textures/redwave.webp"
  });

    dice3d.addTexture("Rainbow", {
      name: "⁂ Rainbow",
      composite: "difference",
      source: "modules/nice-more-dice/textures/rainbow.webp"
  });
  
    dice3d.addTexture("rbmarb", {
      name: "⁂ Roman Superiority Marble",
      composite: "multiply",
      source: "modules/nice-more-dice/textures/rbmarb.webp"
  });

  dice3d.addSystem({id:"Dragon20",name:"⁂ Dragon20 (d20, 20 best)"},false);

  dice3d.addDicePreset({
    type:"d20",
    labels:[
      'No','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19',
      'modules/nice-more-dice/faces/dragon20.webp'
    ],
    system:"Dragon20"
  });

  dice3d.addSystem({id:"Dragon1",name:"⁂ Dragon1 (d20, 1 best)"},false);

  dice3d.addDicePreset({
    type:"d20",
    labels:[
      'modules/nice-more-dice/faces/dragon20.webp','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19',
      'No'
    ],
    system:"Dragon1"
  });

  dice3d.addSystem({id:"OoFYeah",name:"⁂ OoFYeah (d20, 20 best)"},false);

  dice3d.addDicePreset({
    type:"d20",
    labels:[
      'modules/nice-more-dice/faces/oof.webp','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19',
      'modules/nice-more-dice/faces/fuckyeah.webp'
    ],
    system:"OoFYeah"
  });

  dice3d.addSystem({id:"YeahOof",name:"⁂ YeahOof (d20, 1 best)"},false);

  dice3d.addDicePreset({
    type:"d20",
    labels:[
      'modules/nice-more-dice/faces/fuckyeah.webp','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19',
      'modules/nice-more-dice/faces/oof.webp'
    ],
    system:"YeahOof"
  });

  dice3d.addSystem({id:"scriblemotions",name:"⁂ Scriblemotions (d6, special)"},false);

  dice3d.addDicePreset({
    type:"d6",
    labels:[
      'modules/nice-more-dice/faces/scriblemotions/d6-1.webp',
      'modules/nice-more-dice/faces/scriblemotions/d6-2.webp',
      'modules/nice-more-dice/faces/scriblemotions/d6-3.webp',
      'modules/nice-more-dice/faces/scriblemotions/d6-4.webp',
      'modules/nice-more-dice/faces/scriblemotions/d6-5.webp',
      'modules/nice-more-dice/faces/scriblemotions/d6-6.webp'
    ],
  system:"scriblemotions"
  });

 dice3d.addSystem({id:"Hex",name:"⁂ Hex (df)"},false);

  dice3d.addDicePreset({
    type:"df",
    labels:[
      'modules/nice-more-dice/faces/hex/dfm.webp',
      'modules/nice-more-dice/faces/hex/df.webp',
      'modules/nice-more-dice/faces/hex/dfp.webp'
    ],
    bumpMaps:[
      'modules/nice-more-dice/faces/hex/dfmb.webp',
      'modules/nice-more-dice/faces/hex/dfb.webp',
      'modules/nice-more-dice/faces/hex/dfpb.webp'
    ],
  system:"Hex"
  });

 dice3d.addSystem({id:"CL",name:"⁂ Celtic Lynx (Set)"},false);

  dice3d.addDicePreset({
    type:"df",
    labels:[
      'modules/nice-more-dice/faces/celticlynx/dfm.webp',
      'modules/nice-more-dice/faces/celticlynx/df.webp',
      'modules/nice-more-dice/faces/celticlynx/dfp.webp'
    ],
    bumpMaps:[
      'modules/nice-more-dice/faces/celticlynx/dfmb.webp',
      'modules/nice-more-dice/faces/celticlynx/dfb.webp',
      'modules/nice-more-dice/faces/celticlynx/dfpb.webp'
    ],
  system:"CL"
  });

  dice3d.addDicePreset({
    type:"d2",
    labels:[
      'modules/nice-more-dice/faces/celticlynx/d2-1.webp',
      'modules/nice-more-dice/faces/celticlynx/d2-2.webp'
    ],
    bumpMaps:[
      'modules/nice-more-dice/faces/celticlynx/d2-1b.webp',
      'modules/nice-more-dice/faces/celticlynx/d2-2b.webp'
    ],
  system:"CL"
  });

  dice3d.addDicePreset({
    type:"dc",
    labels:[
      'modules/nice-more-dice/faces/celticlynx/dc-1.webp',
      'modules/nice-more-dice/faces/celticlynx/dc-2.webp'
    ],
    bumpMaps:[
      'modules/nice-more-dice/faces/celticlynx/dc-1b.webp',
      'modules/nice-more-dice/faces/celticlynx/dc-2b.webp'
    ],
  system:"CL"
  });

  dice3d.addDicePreset({
    type:"d4",
    labels:[
      'modules/nice-more-dice/faces/celticlynx/d4-1.webp',
      'modules/nice-more-dice/faces/celticlynx/d4-2.webp',
      'modules/nice-more-dice/faces/celticlynx/d4-3.webp',
      'modules/nice-more-dice/faces/celticlynx/d4-4.webp'
    ],
  system:"CL"
  });

  dice3d.addDicePreset({
    type:"d6",
    labels:[
      'modules/nice-more-dice/faces/celticlynx/d6-1.webp',
      'modules/nice-more-dice/faces/celticlynx/d6-2.webp',
      'modules/nice-more-dice/faces/celticlynx/d6-3.webp',
      'modules/nice-more-dice/faces/celticlynx/d6-4.webp',
      'modules/nice-more-dice/faces/celticlynx/d6-5.webp',
      'modules/nice-more-dice/faces/celticlynx/d6-6.webp'
    ],
    bumpMaps:[
      'modules/nice-more-dice/faces/celticlynx/d6-1b.webp',
      'modules/nice-more-dice/faces/celticlynx/d6-2b.webp',
      'modules/nice-more-dice/faces/celticlynx/d6-3b.webp',
      'modules/nice-more-dice/faces/celticlynx/d6-4b.webp',
      'modules/nice-more-dice/faces/celticlynx/d6-5b.webp',
      'modules/nice-more-dice/faces/celticlynx/d6-6b.webp'
    ],
  system:"CL"
  });

  dice3d.addDicePreset({
    type:"d8",
    labels:[
      'modules/nice-more-dice/faces/celticlynx/d8-1.webp',
      'modules/nice-more-dice/faces/celticlynx/d8-2.webp',
      'modules/nice-more-dice/faces/celticlynx/d8-3.webp',
      'modules/nice-more-dice/faces/celticlynx/d8-4.webp',
      'modules/nice-more-dice/faces/celticlynx/d8-5.webp',
      'modules/nice-more-dice/faces/celticlynx/d8-6.webp',
      'modules/nice-more-dice/faces/celticlynx/d8-7.webp',
      'modules/nice-more-dice/faces/celticlynx/d8-8.webp'
    ],
    bumpMaps:[
      'modules/nice-more-dice/faces/celticlynx/d8-1b.webp',
      'modules/nice-more-dice/faces/celticlynx/d8-2b.webp',
      'modules/nice-more-dice/faces/celticlynx/d8-3b.webp',
      'modules/nice-more-dice/faces/celticlynx/d8-4b.webp',
      'modules/nice-more-dice/faces/celticlynx/d8-5b.webp',
      'modules/nice-more-dice/faces/celticlynx/d8-6b.webp',
      'modules/nice-more-dice/faces/celticlynx/d8-7b.webp',
      'modules/nice-more-dice/faces/celticlynx/d8-8b.webp'
    ],
  system:"CL"
  });

  dice3d.addDicePreset({
    type:"d10",
    labels:[
      'modules/nice-more-dice/faces/celticlynx/d10-1.webp',
      'modules/nice-more-dice/faces/celticlynx/d10-2.webp',
      'modules/nice-more-dice/faces/celticlynx/d10-3.webp',
      'modules/nice-more-dice/faces/celticlynx/d10-4.webp',
      'modules/nice-more-dice/faces/celticlynx/d10-5.webp',
      'modules/nice-more-dice/faces/celticlynx/d10-6.webp',
      'modules/nice-more-dice/faces/celticlynx/d10-7.webp',
      'modules/nice-more-dice/faces/celticlynx/d10-8.webp',
      'modules/nice-more-dice/faces/celticlynx/d10-9.webp',
      'modules/nice-more-dice/faces/celticlynx/d10-10.webp'
    ],
    bumpMaps:[
      'modules/nice-more-dice/faces/celticlynx/d10-1b.webp',
      'modules/nice-more-dice/faces/celticlynx/d10-2b.webp',
      'modules/nice-more-dice/faces/celticlynx/d10-3b.webp',
      'modules/nice-more-dice/faces/celticlynx/d10-4b.webp',
      'modules/nice-more-dice/faces/celticlynx/d10-5b.webp',
      'modules/nice-more-dice/faces/celticlynx/d10-6b.webp',
      'modules/nice-more-dice/faces/celticlynx/d10-7b.webp',
      'modules/nice-more-dice/faces/celticlynx/d10-8b.webp',
      'modules/nice-more-dice/faces/celticlynx/d10-9b.webp',
      'modules/nice-more-dice/faces/celticlynx/d10-10b.webp'
    ],
  system:"CL"
  });

  dice3d.addDicePreset({
    type:"d12",
    labels:[
      'modules/nice-more-dice/faces/celticlynx/d12-1.webp',
      'modules/nice-more-dice/faces/celticlynx/d12-2.webp',
      'modules/nice-more-dice/faces/celticlynx/d12-3.webp',
      'modules/nice-more-dice/faces/celticlynx/d12-4.webp',
      'modules/nice-more-dice/faces/celticlynx/d12-5.webp',
      'modules/nice-more-dice/faces/celticlynx/d12-6.webp',
      'modules/nice-more-dice/faces/celticlynx/d12-7.webp',
      'modules/nice-more-dice/faces/celticlynx/d12-8.webp',
      'modules/nice-more-dice/faces/celticlynx/d12-9.webp',
      'modules/nice-more-dice/faces/celticlynx/d12-10.webp',
      'modules/nice-more-dice/faces/celticlynx/d12-11.webp',
      'modules/nice-more-dice/faces/celticlynx/d12-12.webp'
    ],
    bumpMaps:[
      'modules/nice-more-dice/faces/celticlynx/d12-1b.webp',
      'modules/nice-more-dice/faces/celticlynx/d12-2b.webp',
      'modules/nice-more-dice/faces/celticlynx/d12-3b.webp',
      'modules/nice-more-dice/faces/celticlynx/d12-4b.webp',
      'modules/nice-more-dice/faces/celticlynx/d12-5b.webp',
      'modules/nice-more-dice/faces/celticlynx/d12-6b.webp',
      'modules/nice-more-dice/faces/celticlynx/d12-7b.webp',
      'modules/nice-more-dice/faces/celticlynx/d12-8b.webp',
      'modules/nice-more-dice/faces/celticlynx/d12-9b.webp',
      'modules/nice-more-dice/faces/celticlynx/d12-10b.webp',
      'modules/nice-more-dice/faces/celticlynx/d12-11b.webp',
      'modules/nice-more-dice/faces/celticlynx/d12-12b.webp'
   ],
      system:"CL"
  });

  dice3d.addDicePreset({
    type:"d100",
    labels:[
      'modules/nice-more-dice/faces/celticlynx/d100-10.webp',
      'modules/nice-more-dice/faces/celticlynx/d100-20.webp',
      'modules/nice-more-dice/faces/celticlynx/d100-30.webp',
      'modules/nice-more-dice/faces/celticlynx/d100-40.webp',
      'modules/nice-more-dice/faces/celticlynx/d100-50.webp',
      'modules/nice-more-dice/faces/celticlynx/d100-60.webp',
      'modules/nice-more-dice/faces/celticlynx/d100-70.webp',
      'modules/nice-more-dice/faces/celticlynx/d100-80.webp',
      'modules/nice-more-dice/faces/celticlynx/d100-90.webp',
      'modules/nice-more-dice/faces/celticlynx/d100-100.webp'
    ],
    bumpMaps:[
      'modules/nice-more-dice/faces/celticlynx/d100-10b.webp',
      'modules/nice-more-dice/faces/celticlynx/d100-20b.webp',
      'modules/nice-more-dice/faces/celticlynx/d100-30b.webp',
      'modules/nice-more-dice/faces/celticlynx/d100-40b.webp',
      'modules/nice-more-dice/faces/celticlynx/d100-50b.webp',
      'modules/nice-more-dice/faces/celticlynx/d100-60b.webp',
      'modules/nice-more-dice/faces/celticlynx/d100-70b.webp',
      'modules/nice-more-dice/faces/celticlynx/d100-80b.webp',
      'modules/nice-more-dice/faces/celticlynx/d100-90b.webp',
      'modules/nice-more-dice/faces/celticlynx/d100-100b.webp'
    ],
  system:"CL"
  });

  dice3d.addDicePreset({
    type:"d20",
    labels:[
      'modules/nice-more-dice/faces/celticlynx/d20-1.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-2.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-3.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-4.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-5.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-6.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-7.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-8.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-9.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-10.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-11.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-12.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-13.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-14.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-15.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-16.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-17.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-18.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-19.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-20.webp'
    ],
    bumpMaps:[
      'modules/nice-more-dice/faces/celticlynx/d20-1b.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-2b.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-3b.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-4b.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-5b.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-6b.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-7b.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-8b.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-9b.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-10b.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-11b.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-12b.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-13b.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-14b.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-15b.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-16b.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-17b.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-18b.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-19b.webp',
      'modules/nice-more-dice/faces/celticlynx/d20-20b.webp'
    ],
    system:"CL"
  });

dice3d.addSystem({id:"PurpleMagic",name:"⁂ Purple Magic (Set)"},false);

  dice3d.addDicePreset({
    type:"df",
    labels:[
      'modules/nice-more-dice/faces/purplemagic/dfm.webp',
      'modules/nice-more-dice/faces/purplemagic/df.webp',
      'modules/nice-more-dice/faces/purplemagic/dfp.webp',
    ],
  system:"PurpleMagic"
  });

  dice3d.addDicePreset({
    type:"d2",
    labels:[
      'modules/nice-more-dice/faces/purplemagic/d2-1.webp',
      'modules/nice-more-dice/faces/purplemagic/d2-2.webp'
    ],
  system:"PurpleMagic"
  });

  dice3d.addDicePreset({
    type:"dc",
    labels:[
      'modules/nice-more-dice/faces/purplemagic/dc-1.webp',
      'modules/nice-more-dice/faces/purplemagic/dc-2.webp'
    ],
  system:"PurpleMagic"
  });

  dice3d.addDicePreset({
    type:"d4",
    labels:[
      'modules/nice-more-dice/faces/purplemagic/d4-1.webp',
      'modules/nice-more-dice/faces/purplemagic/d4-2.webp',
      'modules/nice-more-dice/faces/purplemagic/d4-3.webp',
      'modules/nice-more-dice/faces/purplemagic/d4-4.webp'
    ],
  system:"PurpleMagic"
  });

  dice3d.addDicePreset({
    type:"d6",
    labels:[
      'modules/nice-more-dice/faces/purplemagic/d6-1.webp',
      'modules/nice-more-dice/faces/purplemagic/d6-2.webp',
      'modules/nice-more-dice/faces/purplemagic/d6-3.webp',
      'modules/nice-more-dice/faces/purplemagic/d6-4.webp',
      'modules/nice-more-dice/faces/purplemagic/d6-5.webp',
      'modules/nice-more-dice/faces/purplemagic/d6-6.webp'
    ],
  system:"PurpleMagic"
  });

  dice3d.addDicePreset({
    type:"d8",
    labels:[
      'modules/nice-more-dice/faces/purplemagic/d8-1.webp',
      'modules/nice-more-dice/faces/purplemagic/d8-2.webp',
      'modules/nice-more-dice/faces/purplemagic/d8-3.webp',
      'modules/nice-more-dice/faces/purplemagic/d8-4.webp',
      'modules/nice-more-dice/faces/purplemagic/d8-5.webp',
      'modules/nice-more-dice/faces/purplemagic/d8-6.webp',
      'modules/nice-more-dice/faces/purplemagic/d8-7.webp',
      'modules/nice-more-dice/faces/purplemagic/d8-8.webp'
    ],
  system:"PurpleMagic"
  });

  dice3d.addDicePreset({
    type:"d10",
    labels:[
      'modules/nice-more-dice/faces/purplemagic/d10-1.webp',
      'modules/nice-more-dice/faces/purplemagic/d10-2.webp',
      'modules/nice-more-dice/faces/purplemagic/d10-3.webp',
      'modules/nice-more-dice/faces/purplemagic/d10-4.webp',
      'modules/nice-more-dice/faces/purplemagic/d10-5.webp',
      'modules/nice-more-dice/faces/purplemagic/d10-6.webp',
      'modules/nice-more-dice/faces/purplemagic/d10-7.webp',
      'modules/nice-more-dice/faces/purplemagic/d10-8.webp',
      'modules/nice-more-dice/faces/purplemagic/d10-9.webp',
      'modules/nice-more-dice/faces/purplemagic/d10-10.webp'
    ],
  system:"PurpleMagic"
  });

  dice3d.addDicePreset({
    type:"d12",
    labels:[
      'modules/nice-more-dice/faces/purplemagic/d12-1.webp',
      'modules/nice-more-dice/faces/purplemagic/d12-2.webp',
      'modules/nice-more-dice/faces/purplemagic/d12-3.webp',
      'modules/nice-more-dice/faces/purplemagic/d12-4.webp',
      'modules/nice-more-dice/faces/purplemagic/d12-5.webp',
      'modules/nice-more-dice/faces/purplemagic/d12-6.webp',
      'modules/nice-more-dice/faces/purplemagic/d12-7.webp',
      'modules/nice-more-dice/faces/purplemagic/d12-8.webp',
      'modules/nice-more-dice/faces/purplemagic/d12-9.webp',
      'modules/nice-more-dice/faces/purplemagic/d12-10.webp',
      'modules/nice-more-dice/faces/purplemagic/d12-11.webp',
      'modules/nice-more-dice/faces/purplemagic/d12-12.webp'
    ],
  system:"PurpleMagic"
  });


  dice3d.addDicePreset({
    type:"d100",
    labels:[
      'modules/nice-more-dice/faces/purplemagic/d100-10.webp',
      'modules/nice-more-dice/faces/purplemagic/d100-20.webp',
      'modules/nice-more-dice/faces/purplemagic/d100-30.webp',
      'modules/nice-more-dice/faces/purplemagic/d100-40.webp',
      'modules/nice-more-dice/faces/purplemagic/d100-50.webp',
      'modules/nice-more-dice/faces/purplemagic/d100-60.webp',
      'modules/nice-more-dice/faces/purplemagic/d100-70.webp',
      'modules/nice-more-dice/faces/purplemagic/d100-80.webp',
      'modules/nice-more-dice/faces/purplemagic/d100-90.webp',
      'modules/nice-more-dice/faces/purplemagic/d100-100.webp'
    ],
  system:"PurpleMagic"
  });

  dice3d.addDicePreset({
    type:"d20",
    labels:[
      'modules/nice-more-dice/faces/purplemagic/d20-1.webp',
      'modules/nice-more-dice/faces/purplemagic/d20-2.webp',
      'modules/nice-more-dice/faces/purplemagic/d20-3.webp',
      'modules/nice-more-dice/faces/purplemagic/d20-4.webp',
      'modules/nice-more-dice/faces/purplemagic/d20-5.webp',
      'modules/nice-more-dice/faces/purplemagic/d20-6.webp',
      'modules/nice-more-dice/faces/purplemagic/d20-7.webp',
      'modules/nice-more-dice/faces/purplemagic/d20-8.webp',
      'modules/nice-more-dice/faces/purplemagic/d20-9.webp',
      'modules/nice-more-dice/faces/purplemagic/d20-10.webp',
      'modules/nice-more-dice/faces/purplemagic/d20-11.webp',
      'modules/nice-more-dice/faces/purplemagic/d20-12.webp',
      'modules/nice-more-dice/faces/purplemagic/d20-13.webp',
      'modules/nice-more-dice/faces/purplemagic/d20-14.webp',
      'modules/nice-more-dice/faces/purplemagic/d20-15.webp',
      'modules/nice-more-dice/faces/purplemagic/d20-16.webp',
      'modules/nice-more-dice/faces/purplemagic/d20-17.webp',
      'modules/nice-more-dice/faces/purplemagic/d20-18.webp',
      'modules/nice-more-dice/faces/purplemagic/d20-19.webp',
      'modules/nice-more-dice/faces/purplemagic/d20-20.webp'
    ],
    system:"PurpleMagic"
  });

dice3d.addSystem({id:"Maze",name:"⁂ Maze (Set)"},false);

  dice3d.addDicePreset({
    type:"df",
    labels:[
      'modules/nice-more-dice/faces/maze/df/dfm.webp',
      'modules/nice-more-dice/faces/maze/df/df.webp',
      'modules/nice-more-dice/faces/maze/df/dfp.webp'
    ],
  system:"Maze"
  });

dice3d.addDicePreset({
    type:"dc",
    labels:[
      'modules/nice-more-dice/faces/maze/dc/dc-1.webp',
      'modules/nice-more-dice/faces/maze/dc/dc-2.webp'
    ],
  system:"Maze"
  });

dice3d.addDicePreset({
    type:"d2",
    labels:[
      'modules/nice-more-dice/faces/maze/d2/d2-1.webp',
      'modules/nice-more-dice/faces/maze/d2/d2-2.webp'
    ],
  system:"Maze"
  });

  dice3d.addDicePreset({
    type:"d4",
    labels:[
      'modules/nice-more-dice/faces/maze/d4/d4-1.webp',
      'modules/nice-more-dice/faces/maze/d4/d4-2.webp',
      'modules/nice-more-dice/faces/maze/d4/d4-3.webp',
      'modules/nice-more-dice/faces/maze/d4/d4-4.webp'
    ],
  system:"Maze"
  });

  dice3d.addDicePreset({
    type:"d6",
    labels:[
      'modules/nice-more-dice/faces/maze/d6/d6-1.webp',
      'modules/nice-more-dice/faces/maze/d6/d6-2.webp',
      'modules/nice-more-dice/faces/maze/d6/d6-3.webp',
      'modules/nice-more-dice/faces/maze/d6/d6-4.webp',
      'modules/nice-more-dice/faces/maze/d6/d6-5.webp',
      'modules/nice-more-dice/faces/maze/d6/d6-6.webp'
    ],
  system:"Maze"
  });

  dice3d.addDicePreset({
    type:"d8",
    labels:[
      'modules/nice-more-dice/faces/maze/d8/d8-1.webp',
      'modules/nice-more-dice/faces/maze/d8/d8-2.webp',
      'modules/nice-more-dice/faces/maze/d8/d8-3.webp',
      'modules/nice-more-dice/faces/maze/d8/d8-4.webp',
      'modules/nice-more-dice/faces/maze/d8/d8-5.webp',
      'modules/nice-more-dice/faces/maze/d8/d8-6.webp',
      'modules/nice-more-dice/faces/maze/d8/d8-7.webp',
      'modules/nice-more-dice/faces/maze/d8/d8-8.webp'
    ],
  system:"Maze"
  });

  dice3d.addDicePreset({
    type:"d10",
    labels:[
      'modules/nice-more-dice/faces/maze/d10/d10-1.webp',
      'modules/nice-more-dice/faces/maze/d10/d10-2.webp',
      'modules/nice-more-dice/faces/maze/d10/d10-3.webp',
      'modules/nice-more-dice/faces/maze/d10/d10-4.webp',
      'modules/nice-more-dice/faces/maze/d10/d10-5.webp',
      'modules/nice-more-dice/faces/maze/d10/d10-6.webp',
      'modules/nice-more-dice/faces/maze/d10/d10-7.webp',
      'modules/nice-more-dice/faces/maze/d10/d10-8.webp',
      'modules/nice-more-dice/faces/maze/d10/d10-9.webp',
      'modules/nice-more-dice/faces/maze/d10/d10-10.webp'
    ],
  system:"Maze"
  });

     dice3d.addDicePreset({
    type:"d12",
    labels:[
      'modules/nice-more-dice/faces/maze/d12/d12-1.webp',
      'modules/nice-more-dice/faces/maze/d12/d12-2.webp',
      'modules/nice-more-dice/faces/maze/d12/d12-3.webp',
      'modules/nice-more-dice/faces/maze/d12/d12-4.webp',
      'modules/nice-more-dice/faces/maze/d12/d12-5.webp',
      'modules/nice-more-dice/faces/maze/d12/d12-6.webp',
      'modules/nice-more-dice/faces/maze/d12/d12-7.webp',
      'modules/nice-more-dice/faces/maze/d12/d12-8.webp',
      'modules/nice-more-dice/faces/maze/d12/d12-9.webp',
      'modules/nice-more-dice/faces/maze/d12/d12-10.webp',
      'modules/nice-more-dice/faces/maze/d12/d12-11.webp',
      'modules/nice-more-dice/faces/maze/d12/d12-12.webp'
    ],
  system:"Maze"
  });

  dice3d.addDicePreset({
    type:"d100",
    labels:[
      'modules/nice-more-dice/faces/maze/d100/d100-10.webp',
      'modules/nice-more-dice/faces/maze/d100/d100-20.webp',
      'modules/nice-more-dice/faces/maze/d100/d100-30.webp',
      'modules/nice-more-dice/faces/maze/d100/d100-40.webp',
      'modules/nice-more-dice/faces/maze/d100/d100-50.webp',
      'modules/nice-more-dice/faces/maze/d100/d100-60.webp',
      'modules/nice-more-dice/faces/maze/d100/d100-70.webp',
      'modules/nice-more-dice/faces/maze/d100/d100-80.webp',
      'modules/nice-more-dice/faces/maze/d100/d100-90.webp',
      'modules/nice-more-dice/faces/maze/d100/d100-100.webp'
    ],
  system:"Maze"
  });

  dice3d.addDicePreset({
    type:"d20",
    labels:[
      'modules/nice-more-dice/faces/maze/d20/d20-1.webp',
      'modules/nice-more-dice/faces/maze/d20/d20-2.webp',
      'modules/nice-more-dice/faces/maze/d20/d20-3.webp',
      'modules/nice-more-dice/faces/maze/d20/d20-4.webp',
      'modules/nice-more-dice/faces/maze/d20/d20-5.webp',
      'modules/nice-more-dice/faces/maze/d20/d20-6.webp',
      'modules/nice-more-dice/faces/maze/d20/d20-7.webp',
      'modules/nice-more-dice/faces/maze/d20/d20-8.webp',
      'modules/nice-more-dice/faces/maze/d20/d20-9.webp',
      'modules/nice-more-dice/faces/maze/d20/d20-10.webp',
      'modules/nice-more-dice/faces/maze/d20/d20-11.webp',
      'modules/nice-more-dice/faces/maze/d20/d20-12.webp',
      'modules/nice-more-dice/faces/maze/d20/d20-13.webp',
      'modules/nice-more-dice/faces/maze/d20/d20-14.webp',
      'modules/nice-more-dice/faces/maze/d20/d20-15.webp',
      'modules/nice-more-dice/faces/maze/d20/d20-16.webp',
      'modules/nice-more-dice/faces/maze/d20/d20-17.webp',
      'modules/nice-more-dice/faces/maze/d20/d20-18.webp',
      'modules/nice-more-dice/faces/maze/d20/d20-19.webp',
      'modules/nice-more-dice/faces/maze/d20/d20-20.webp'
    ],
    system:"Maze"
  });

dice3d.addSystem({id:"FlameStalker",name:"⁂ Flame Stalker (Set)"},false);

  dice3d.addDicePreset({
    type:"df",
    labels:[
      'modules/nice-more-dice/faces/flamestalker/df/dfm.webp',
      'modules/nice-more-dice/faces/flamestalker/df/df.webp',
      'modules/nice-more-dice/faces/flamestalker/df/dfp.webp'
    ],
  system:"FlameStalker"
  });

dice3d.addDicePreset({
    type:"dc",
    labels:[
      'modules/nice-more-dice/faces/flamestalker/dc/dc-1.webp',
      'modules/nice-more-dice/faces/flamestalker/dc/dc-2.webp'
    ],
  system:"FlameStalker"
  });

  dice3d.addDicePreset({
    type:"d2",
    labels:[
      'modules/nice-more-dice/faces/flamestalker/d2/d2-1.webp',
      'modules/nice-more-dice/faces/flamestalker/d2/d2-2.webp'
    ],
  system:"FlameStalker"
  });

  dice3d.addDicePreset({
    type:"d4",
    labels:[
      'modules/nice-more-dice/faces/flamestalker/d4/d4-1.webp',
      'modules/nice-more-dice/faces/flamestalker/d4/d4-2.webp',
      'modules/nice-more-dice/faces/flamestalker/d4/d4-3.webp',
      'modules/nice-more-dice/faces/flamestalker/d4/d4-4.webp'
    ],
  system:"FlameStalker"
  });

  dice3d.addDicePreset({
    type:"d6",
    labels:[
      'modules/nice-more-dice/faces/flamestalker/d6/d6-1.webp',
      'modules/nice-more-dice/faces/flamestalker/d6/d6-2.webp',
      'modules/nice-more-dice/faces/flamestalker/d6/d6-3.webp',
      'modules/nice-more-dice/faces/flamestalker/d6/d6-4.webp',
      'modules/nice-more-dice/faces/flamestalker/d6/d6-5.webp',
      'modules/nice-more-dice/faces/flamestalker/d6/d6-6.webp'
    ],
  system:"FlameStalker"
  });

  dice3d.addDicePreset({
    type:"d8",
    labels:[
      'modules/nice-more-dice/faces/flamestalker/d8/d8-1.webp',
      'modules/nice-more-dice/faces/flamestalker/d8/d8-2.webp',
      'modules/nice-more-dice/faces/flamestalker/d8/d8-3.webp',
      'modules/nice-more-dice/faces/flamestalker/d8/d8-4.webp',
      'modules/nice-more-dice/faces/flamestalker/d8/d8-5.webp',
      'modules/nice-more-dice/faces/flamestalker/d8/d8-6.webp',
      'modules/nice-more-dice/faces/flamestalker/d8/d8-7.webp',
      'modules/nice-more-dice/faces/flamestalker/d8/d8-8.webp'
    ],
  system:"FlameStalker"
  });

  dice3d.addDicePreset({
    type:"d10",
    labels:[
      'modules/nice-more-dice/faces/flamestalker/d10/d10-1.webp',
      'modules/nice-more-dice/faces/flamestalker/d10/d10-2.webp',
      'modules/nice-more-dice/faces/flamestalker/d10/d10-3.webp',
      'modules/nice-more-dice/faces/flamestalker/d10/d10-4.webp',
      'modules/nice-more-dice/faces/flamestalker/d10/d10-5.webp',
      'modules/nice-more-dice/faces/flamestalker/d10/d10-6.webp',
      'modules/nice-more-dice/faces/flamestalker/d10/d10-7.webp',
      'modules/nice-more-dice/faces/flamestalker/d10/d10-8.webp',
      'modules/nice-more-dice/faces/flamestalker/d10/d10-9.webp',
      'modules/nice-more-dice/faces/flamestalker/d10/d10-10.webp'
    ],
  system:"FlameStalker"
  });

  dice3d.addDicePreset({
    type:"d12",
    labels:[
      'modules/nice-more-dice/faces/flamestalker/d12/d12-1.webp',
      'modules/nice-more-dice/faces/flamestalker/d12/d12-2.webp',
      'modules/nice-more-dice/faces/flamestalker/d12/d12-3.webp',
      'modules/nice-more-dice/faces/flamestalker/d12/d12-4.webp',
      'modules/nice-more-dice/faces/flamestalker/d12/d12-5.webp',
      'modules/nice-more-dice/faces/flamestalker/d12/d12-6.webp',
      'modules/nice-more-dice/faces/flamestalker/d12/d12-7.webp',
      'modules/nice-more-dice/faces/flamestalker/d12/d12-8.webp',
      'modules/nice-more-dice/faces/flamestalker/d12/d12-9.webp',
      'modules/nice-more-dice/faces/flamestalker/d12/d12-10.webp',
      'modules/nice-more-dice/faces/flamestalker/d12/d12-11.webp',
      'modules/nice-more-dice/faces/flamestalker/d12/d12-12.webp'
    ],
  system:"FlameStalker"
  });


  dice3d.addDicePreset({
    type:"d100",
    labels:[
      'modules/nice-more-dice/faces/flamestalker/d100/d100-10.webp',
      'modules/nice-more-dice/faces/flamestalker/d100/d100-20.webp',
      'modules/nice-more-dice/faces/flamestalker/d100/d100-30.webp',
      'modules/nice-more-dice/faces/flamestalker/d100/d100-40.webp',
      'modules/nice-more-dice/faces/flamestalker/d100/d100-50.webp',
      'modules/nice-more-dice/faces/flamestalker/d100/d100-60.webp',
      'modules/nice-more-dice/faces/flamestalker/d100/d100-70.webp',
      'modules/nice-more-dice/faces/flamestalker/d100/d100-80.webp',
      'modules/nice-more-dice/faces/flamestalker/d100/d100-90.webp',
      'modules/nice-more-dice/faces/flamestalker/d100/d100-100.webp'
    ],
  system:"FlameStalker"
  });

  dice3d.addDicePreset({
    type:"d20",
    labels:[
      'modules/nice-more-dice/faces/flamestalker/d20/d20-1.webp',
      'modules/nice-more-dice/faces/flamestalker/d20/d20-2.webp',
      'modules/nice-more-dice/faces/flamestalker/d20/d20-3.webp',
      'modules/nice-more-dice/faces/flamestalker/d20/d20-4.webp',
      'modules/nice-more-dice/faces/flamestalker/d20/d20-5.webp',
      'modules/nice-more-dice/faces/flamestalker/d20/d20-6.webp',
      'modules/nice-more-dice/faces/flamestalker/d20/d20-7.webp',
      'modules/nice-more-dice/faces/flamestalker/d20/d20-8.webp',
      'modules/nice-more-dice/faces/flamestalker/d20/d20-9.webp',
      'modules/nice-more-dice/faces/flamestalker/d20/d20-10.webp',
      'modules/nice-more-dice/faces/flamestalker/d20/d20-11.webp',
      'modules/nice-more-dice/faces/flamestalker/d20/d20-12.webp',
      'modules/nice-more-dice/faces/flamestalker/d20/d20-13.webp',
      'modules/nice-more-dice/faces/flamestalker/d20/d20-14.webp',
      'modules/nice-more-dice/faces/flamestalker/d20/d20-15.webp',
      'modules/nice-more-dice/faces/flamestalker/d20/d20-16.webp',
      'modules/nice-more-dice/faces/flamestalker/d20/d20-17.webp',
      'modules/nice-more-dice/faces/flamestalker/d20/d20-18.webp',
      'modules/nice-more-dice/faces/flamestalker/d20/d20-19.webp',
      'modules/nice-more-dice/faces/flamestalker/d20/d20-20.webp'
    ],
    system:"FlameStalker"
  });

dice3d.addSystem({id:"Grifter",name:"⁂ Grifter (Set)"},false);

  dice3d.addDicePreset({
    type:"dc",
    labels:[
      'modules/nice-more-dice/faces/grifter/dc/dc-1.webp',
      'modules/nice-more-dice/faces/grifter/dc/dc-2.webp'
    ],
  system:"Grifter"
  });

  dice3d.addDicePreset({
    type:"d2",
    labels:[
      'modules/nice-more-dice/faces/grifter/d2/d2-1.webp',
      'modules/nice-more-dice/faces/grifter/d2/d2-2.webp'
    ],
  system:"Grifter"
  });

  dice3d.addDicePreset({
    type:"d4",
    labels:[
      'modules/nice-more-dice/faces/grifter/d4/d4-1.webp',
      'modules/nice-more-dice/faces/grifter/d4/d4-2.webp',
      'modules/nice-more-dice/faces/grifter/d4/d4-3.webp',
      'modules/nice-more-dice/faces/grifter/d4/d4-4.webp',
    ],
  system:"Grifter"
  });

  dice3d.addDicePreset({
    type:"df",
    labels:[
      'modules/nice-more-dice/faces/grifter/df/dfm.webp',
      'modules/nice-more-dice/faces/grifter/df/df.webp',
      'modules/nice-more-dice/faces/grifter/df/dfp.webp'
    ],
  system:"Grifter"
  });

dice3d.addDicePreset({
    type:"d6",
    labels:[
      'modules/nice-more-dice/faces/grifter/d6/d6-1.webp',
      'modules/nice-more-dice/faces/grifter/d6/d6-2.webp',
      'modules/nice-more-dice/faces/grifter/d6/d6-3.webp',
      'modules/nice-more-dice/faces/grifter/d6/d6-4.webp',
      'modules/nice-more-dice/faces/grifter/d6/d6-5.webp',
      'modules/nice-more-dice/faces/grifter/d6/d6-6.webp'
    ],
  system:"Grifter"
  });

  dice3d.addDicePreset({
    type:"d8",
    labels:[
      'modules/nice-more-dice/faces/grifter/d8/d8-1.webp',
      'modules/nice-more-dice/faces/grifter/d8/d8-2.webp',
      'modules/nice-more-dice/faces/grifter/d8/d8-3.webp',
      'modules/nice-more-dice/faces/grifter/d8/d8-4.webp',
      'modules/nice-more-dice/faces/grifter/d8/d8-5.webp',
      'modules/nice-more-dice/faces/grifter/d8/d8-6.webp',
      'modules/nice-more-dice/faces/grifter/d8/d8-7.webp',
      'modules/nice-more-dice/faces/grifter/d8/d8-8.webp'
    ],
  system:"Grifter"
  });

  dice3d.addDicePreset({
    type:"d10",
    labels:[
      'modules/nice-more-dice/faces/grifter/d10/d10-1.webp',
      'modules/nice-more-dice/faces/grifter/d10/d10-2.webp',
      'modules/nice-more-dice/faces/grifter/d10/d10-3.webp',
      'modules/nice-more-dice/faces/grifter/d10/d10-4.webp',
      'modules/nice-more-dice/faces/grifter/d10/d10-5.webp',
      'modules/nice-more-dice/faces/grifter/d10/d10-6.webp',
      'modules/nice-more-dice/faces/grifter/d10/d10-7.webp',
      'modules/nice-more-dice/faces/grifter/d10/d10-8.webp',
      'modules/nice-more-dice/faces/grifter/d10/d10-9.webp',
      'modules/nice-more-dice/faces/grifter/d10/d10-10.webp'
    ],
  system:"Grifter"
  });

  dice3d.addDicePreset({
    type:"d12",
    labels:[
      'modules/nice-more-dice/faces/grifter/d12/d12-1.webp',
      'modules/nice-more-dice/faces/grifter/d12/d12-2.webp',
      'modules/nice-more-dice/faces/grifter/d12/d12-3.webp',
      'modules/nice-more-dice/faces/grifter/d12/d12-4.webp',
      'modules/nice-more-dice/faces/grifter/d12/d12-5.webp',
      'modules/nice-more-dice/faces/grifter/d12/d12-6.webp',
      'modules/nice-more-dice/faces/grifter/d12/d12-7.webp',
      'modules/nice-more-dice/faces/grifter/d12/d12-8.webp',
      'modules/nice-more-dice/faces/grifter/d12/d12-9.webp',
      'modules/nice-more-dice/faces/grifter/d12/d12-10.webp',
      'modules/nice-more-dice/faces/grifter/d12/d12-11.webp',
      'modules/nice-more-dice/faces/grifter/d12/d12-12.webp'
    ],
  system:"Grifter"
  });

  dice3d.addDicePreset({
    type:"d20",
    labels:[
      'modules/nice-more-dice/faces/grifter/d20/d20-1.webp',
      'modules/nice-more-dice/faces/grifter/d20/d20-2.webp',
      'modules/nice-more-dice/faces/grifter/d20/d20-3.webp',
      'modules/nice-more-dice/faces/grifter/d20/d20-4.webp',
      'modules/nice-more-dice/faces/grifter/d20/d20-5.webp',
      'modules/nice-more-dice/faces/grifter/d20/d20-6.webp',
      'modules/nice-more-dice/faces/grifter/d20/d20-7.webp',
      'modules/nice-more-dice/faces/grifter/d20/d20-8.webp',
      'modules/nice-more-dice/faces/grifter/d20/d20-9.webp',
      'modules/nice-more-dice/faces/grifter/d20/d20-10.webp',
      'modules/nice-more-dice/faces/grifter/d20/d20-11.webp',
      'modules/nice-more-dice/faces/grifter/d20/d20-12.webp',
      'modules/nice-more-dice/faces/grifter/d20/d20-13.webp',
      'modules/nice-more-dice/faces/grifter/d20/d20-14.webp',
      'modules/nice-more-dice/faces/grifter/d20/d20-15.webp',
      'modules/nice-more-dice/faces/grifter/d20/d20-16.webp',
      'modules/nice-more-dice/faces/grifter/d20/d20-17.webp',
      'modules/nice-more-dice/faces/grifter/d20/d20-18.webp',
      'modules/nice-more-dice/faces/grifter/d20/d20-19.webp',
      'modules/nice-more-dice/faces/grifter/d20/d20-20.webp'
    ],
    system:"Grifter"
  });

  dice3d.addDicePreset({
    type:"d100",
    labels:[
      'modules/nice-more-dice/faces/grifter/d100/d100-10.webp',
      'modules/nice-more-dice/faces/grifter/d100/d100-20.webp',
      'modules/nice-more-dice/faces/grifter/d100/d100-30.webp',
      'modules/nice-more-dice/faces/grifter/d100/d100-40.webp',
      'modules/nice-more-dice/faces/grifter/d100/d100-50.webp',
      'modules/nice-more-dice/faces/grifter/d100/d100-60.webp',
      'modules/nice-more-dice/faces/grifter/d100/d100-70.webp',
      'modules/nice-more-dice/faces/grifter/d100/d100-80.webp',
      'modules/nice-more-dice/faces/grifter/d100/d100-90.webp',
      'modules/nice-more-dice/faces/grifter/d100/d100-00.webp'
    ],
  system:"Grifter"
  });

 dice3d.addSystem({id:"planetary",name:"⁂ Planetary (Set)"},false);

  dice3d.addDicePreset({
    type:"df",
    labels:[
      'modules/nice-more-dice/faces/planetary/dfm.webp',
      'modules/nice-more-dice/faces/planetary/df.webp',
      'modules/nice-more-dice/faces/planetary/dfp.webp'
    ],
  system:"planetary"
  });

  dice3d.addDicePreset({
    type:"d2",
    labels:[
      'modules/nice-more-dice/faces/planetary/d2-1.webp',
      'modules/nice-more-dice/faces/planetary/d2-2.webp'
    ],
  system:"planetary"
  });

  dice3d.addDicePreset({
    type:"dc",
    labels:[
      'modules/nice-more-dice/faces/planetary/dc-1.webp',
      'modules/nice-more-dice/faces/planetary/dc-2.webp'
    ],
  system:"planetary"
  });

  dice3d.addDicePreset({
    type:"d4",
    labels:[
      'modules/nice-more-dice/faces/planetary/d4-1.webp',
      'modules/nice-more-dice/faces/planetary/d4-2.webp',
      'modules/nice-more-dice/faces/planetary/d4-3.webp',
      'modules/nice-more-dice/faces/planetary/d4-4.webp'
    ],
  system:"planetary"
  });

  dice3d.addDicePreset({
    type:"d6",
    labels:[
      'modules/nice-more-dice/faces/planetary/d6-1.webp',
      'modules/nice-more-dice/faces/planetary/d6-2.webp',
      'modules/nice-more-dice/faces/planetary/d6-3.webp',
      'modules/nice-more-dice/faces/planetary/d6-4.webp',
      'modules/nice-more-dice/faces/planetary/d6-5.webp',
      'modules/nice-more-dice/faces/planetary/d6-6.webp'
    ],
  system:"planetary"
  });

  dice3d.addDicePreset({
    type:"d8",
    labels:[
      'modules/nice-more-dice/faces/planetary/d8-1.webp',
      'modules/nice-more-dice/faces/planetary/d8-2.webp',
      'modules/nice-more-dice/faces/planetary/d8-3.webp',
      'modules/nice-more-dice/faces/planetary/d8-4.webp',
      'modules/nice-more-dice/faces/planetary/d8-5.webp',
      'modules/nice-more-dice/faces/planetary/d8-6.webp',
      'modules/nice-more-dice/faces/planetary/d8-7.webp',
      'modules/nice-more-dice/faces/planetary/d8-8.webp'
    ],
  system:"planetary"
  });

  dice3d.addDicePreset({
    type:"d10",
    labels:[
      'modules/nice-more-dice/faces/planetary/d10-1.webp',
      'modules/nice-more-dice/faces/planetary/d10-2.webp',
      'modules/nice-more-dice/faces/planetary/d10-3.webp',
      'modules/nice-more-dice/faces/planetary/d10-4.webp',
      'modules/nice-more-dice/faces/planetary/d10-5.webp',
      'modules/nice-more-dice/faces/planetary/d10-6.webp',
      'modules/nice-more-dice/faces/planetary/d10-7.webp',
      'modules/nice-more-dice/faces/planetary/d10-8.webp',
      'modules/nice-more-dice/faces/planetary/d10-9.webp',
      'modules/nice-more-dice/faces/planetary/d10-10.webp'
    ],
  system:"planetary"
  });

  dice3d.addDicePreset({
    type:"d12",
    labels:[
      'modules/nice-more-dice/faces/planetary/d12-1.webp',
      'modules/nice-more-dice/faces/planetary/d12-2.webp',
      'modules/nice-more-dice/faces/planetary/d12-3.webp',
      'modules/nice-more-dice/faces/planetary/d12-4.webp',
      'modules/nice-more-dice/faces/planetary/d12-5.webp',
      'modules/nice-more-dice/faces/planetary/d12-6.webp',
      'modules/nice-more-dice/faces/planetary/d12-7.webp',
      'modules/nice-more-dice/faces/planetary/d12-8.webp',
      'modules/nice-more-dice/faces/planetary/d12-9.webp',
      'modules/nice-more-dice/faces/planetary/d12-10.webp',
      'modules/nice-more-dice/faces/planetary/d12-11.webp',
      'modules/nice-more-dice/faces/planetary/d12-12.webp'
    ],
      system:"planetary"
  });

  dice3d.addDicePreset({
    type:"d100",
    labels:[
      'modules/nice-more-dice/faces/planetary/d100-10.webp',
      'modules/nice-more-dice/faces/planetary/d100-20.webp',
      'modules/nice-more-dice/faces/planetary/d100-30.webp',
      'modules/nice-more-dice/faces/planetary/d100-40.webp',
      'modules/nice-more-dice/faces/planetary/d100-50.webp',
      'modules/nice-more-dice/faces/planetary/d100-60.webp',
      'modules/nice-more-dice/faces/planetary/d100-70.webp',
      'modules/nice-more-dice/faces/planetary/d100-80.webp',
      'modules/nice-more-dice/faces/planetary/d100-90.webp',
      'modules/nice-more-dice/faces/planetary/d100-100.webp'
    ],
  system:"planetary"
  });

  dice3d.addDicePreset({
    type:"d20",
    labels:[
      'modules/nice-more-dice/faces/planetary/d20-1.webp',
      'modules/nice-more-dice/faces/planetary/d20-2.webp',
      'modules/nice-more-dice/faces/planetary/d20-3.webp',
      'modules/nice-more-dice/faces/planetary/d20-4.webp',
      'modules/nice-more-dice/faces/planetary/d20-5.webp',
      'modules/nice-more-dice/faces/planetary/d20-6.webp',
      'modules/nice-more-dice/faces/planetary/d20-7.webp',
      'modules/nice-more-dice/faces/planetary/d20-8.webp',
      'modules/nice-more-dice/faces/planetary/d20-9.webp',
      'modules/nice-more-dice/faces/planetary/d20-10.webp',
      'modules/nice-more-dice/faces/planetary/d20-11.webp',
      'modules/nice-more-dice/faces/planetary/d20-12.webp',
      'modules/nice-more-dice/faces/planetary/d20-13.webp',
      'modules/nice-more-dice/faces/planetary/d20-14.webp',
      'modules/nice-more-dice/faces/planetary/d20-15.webp',
      'modules/nice-more-dice/faces/planetary/d20-16.webp',
      'modules/nice-more-dice/faces/planetary/d20-17.webp',
      'modules/nice-more-dice/faces/planetary/d20-18.webp',
      'modules/nice-more-dice/faces/planetary/d20-19.webp',
      'modules/nice-more-dice/faces/planetary/d20-20.webp'
    ],
    system:"planetary"
  });  
  
 dice3d.addSystem({id:"roman",name:"⁂ Roman Superiority (Set)"},false);

  dice3d.addDicePreset({
    type:"df",
    labels:[
      'modules/nice-more-dice/faces/roman/dfm.webp',
      'modules/nice-more-dice/faces/roman/df.webp',
      'modules/nice-more-dice/faces/roman/dfp.webp'
    ],
    bumpMaps:[
      'modules/nice-more-dice/faces/roman/dfmb.webp',
      'modules/nice-more-dice/faces/roman/dfb.webp',
      'modules/nice-more-dice/faces/roman/dfpb.webp'
    ],
  system:"roman"
  });

  dice3d.addDicePreset({
    type:"d2",
    labels:[
      'modules/nice-more-dice/faces/roman/d2-1.webp',
      'modules/nice-more-dice/faces/roman/d2-2.webp'
    ],
    bumpMaps:[
      'modules/nice-more-dice/faces/roman/d2-1b.webp',
      'modules/nice-more-dice/faces/roman/d2-2b.webp'
    ],
  system:"roman"
  });

  dice3d.addDicePreset({
    type:"dc",
    labels:[
      'modules/nice-more-dice/faces/roman/dc-1.webp',
      'modules/nice-more-dice/faces/roman/dc-2.webp'
    ],
    bumpMaps:[
      'modules/nice-more-dice/faces/roman/dc-1b.webp',
      'modules/nice-more-dice/faces/roman/dc-2b.webp'
    ],
  system:"roman"
  });

  dice3d.addDicePreset({
    type:"d4",
    labels:[
      'I','II','III','IV'
    ],
    system:"roman"
  });

  dice3d.addDicePreset({
    type:"d6",
    labels:[
      'modules/nice-more-dice/faces/roman/d6-1.webp',
      'modules/nice-more-dice/faces/roman/d6-2.webp',
      'modules/nice-more-dice/faces/roman/d6-3.webp',
      'modules/nice-more-dice/faces/roman/d6-4.webp',
      'modules/nice-more-dice/faces/roman/d6-5.webp',
      'modules/nice-more-dice/faces/roman/d6-6.webp'
    ],
    bumpMaps:[
      'modules/nice-more-dice/faces/roman/d6-1b.webp',
      'modules/nice-more-dice/faces/roman/d6-2b.webp',
      'modules/nice-more-dice/faces/roman/d6-3b.webp',
      'modules/nice-more-dice/faces/roman/d6-4b.webp',
      'modules/nice-more-dice/faces/roman/d6-5b.webp',
      'modules/nice-more-dice/faces/roman/d6-6b.webp'
    ],
  system:"roman"
  });

  dice3d.addDicePreset({
    type:"d8",
    labels:[
      'modules/nice-more-dice/faces/roman/d8-1.webp',
      'modules/nice-more-dice/faces/roman/d8-2.webp',
      'modules/nice-more-dice/faces/roman/d8-3.webp',
      'modules/nice-more-dice/faces/roman/d8-4.webp',
      'modules/nice-more-dice/faces/roman/d8-5.webp',
      'modules/nice-more-dice/faces/roman/d8-6.webp',
      'modules/nice-more-dice/faces/roman/d8-7.webp',
      'modules/nice-more-dice/faces/roman/d8-8.webp'
    ],
    bumpMaps:[
      'modules/nice-more-dice/faces/roman/d8-1b.webp',
      'modules/nice-more-dice/faces/roman/d8-2b.webp',
      'modules/nice-more-dice/faces/roman/d8-3b.webp',
      'modules/nice-more-dice/faces/roman/d8-4b.webp',
      'modules/nice-more-dice/faces/roman/d8-5b.webp',
      'modules/nice-more-dice/faces/roman/d8-6b.webp',
      'modules/nice-more-dice/faces/roman/d8-7b.webp',
      'modules/nice-more-dice/faces/roman/d8-8b.webp'
    ],
  system:"roman"
  });

   dice3d.addDicePreset({
    type:"d10",
    labels:[
      'modules/nice-more-dice/faces/roman/d10-1.webp',
      'modules/nice-more-dice/faces/roman/d10-2.webp',
      'modules/nice-more-dice/faces/roman/d10-3.webp',
      'modules/nice-more-dice/faces/roman/d10-4.webp',
      'modules/nice-more-dice/faces/roman/d10-5.webp',
      'modules/nice-more-dice/faces/roman/d10-6.webp',
      'modules/nice-more-dice/faces/roman/d10-7.webp',
      'modules/nice-more-dice/faces/roman/d10-8.webp',
      'modules/nice-more-dice/faces/roman/d10-9.webp',
      'modules/nice-more-dice/faces/roman/d10-10.webp'
    ],
    bumpMaps:[
      'modules/nice-more-dice/faces/roman/d10-1b.webp',
      'modules/nice-more-dice/faces/roman/d10-2b.webp',
      'modules/nice-more-dice/faces/roman/d10-3b.webp',
      'modules/nice-more-dice/faces/roman/d10-4b.webp',
      'modules/nice-more-dice/faces/roman/d10-5b.webp',
      'modules/nice-more-dice/faces/roman/d10-6b.webp',
      'modules/nice-more-dice/faces/roman/d10-7b.webp',
      'modules/nice-more-dice/faces/roman/d10-8b.webp',
      'modules/nice-more-dice/faces/roman/d10-9b.webp',
      'modules/nice-more-dice/faces/roman/d10-10b.webp'
    ],
  system:"roman"
  });

  dice3d.addDicePreset({
    type:"d12",
    labels:[
      'modules/nice-more-dice/faces/roman/d12-1.webp',
      'modules/nice-more-dice/faces/roman/d12-2.webp',
      'modules/nice-more-dice/faces/roman/d12-3.webp',
      'modules/nice-more-dice/faces/roman/d12-4.webp',
      'modules/nice-more-dice/faces/roman/d12-5.webp',
      'modules/nice-more-dice/faces/roman/d12-6.webp',
      'modules/nice-more-dice/faces/roman/d12-7.webp',
      'modules/nice-more-dice/faces/roman/d12-8.webp',
      'modules/nice-more-dice/faces/roman/d12-9.webp',
      'modules/nice-more-dice/faces/roman/d12-10.webp',
      'modules/nice-more-dice/faces/roman/d12-11.webp',
      'modules/nice-more-dice/faces/roman/d12-12.webp'
    ],
    bumpMaps:[
      'modules/nice-more-dice/faces/roman/d12-1b.webp',
      'modules/nice-more-dice/faces/roman/d12-2b.webp',
      'modules/nice-more-dice/faces/roman/d12-3b.webp',
      'modules/nice-more-dice/faces/roman/d12-4b.webp',
      'modules/nice-more-dice/faces/roman/d12-5b.webp',
      'modules/nice-more-dice/faces/roman/d12-6b.webp',
      'modules/nice-more-dice/faces/roman/d12-7b.webp',
      'modules/nice-more-dice/faces/roman/d12-8b.webp',
      'modules/nice-more-dice/faces/roman/d12-9b.webp',
      'modules/nice-more-dice/faces/roman/d12-10b.webp',
      'modules/nice-more-dice/faces/roman/d12-11b.webp',
      'modules/nice-more-dice/faces/roman/d12-12b.webp'
   ],
      system:"roman"
  });

  dice3d.addDicePreset({
    type:"d20",
    labels:[
      'modules/nice-more-dice/faces/roman/d20-1.webp',
      'modules/nice-more-dice/faces/roman/d20-2.webp',
      'modules/nice-more-dice/faces/roman/d20-3.webp',
      'modules/nice-more-dice/faces/roman/d20-4.webp',
      'modules/nice-more-dice/faces/roman/d20-5.webp',
      'modules/nice-more-dice/faces/roman/d20-6.webp',
      'modules/nice-more-dice/faces/roman/d20-7.webp',
      'modules/nice-more-dice/faces/roman/d20-8.webp',
      'modules/nice-more-dice/faces/roman/d20-9.webp',
      'modules/nice-more-dice/faces/roman/d20-10.webp',
      'modules/nice-more-dice/faces/roman/d20-11.webp',
      'modules/nice-more-dice/faces/roman/d20-12.webp',
      'modules/nice-more-dice/faces/roman/d20-13.webp',
      'modules/nice-more-dice/faces/roman/d20-14.webp',
      'modules/nice-more-dice/faces/roman/d20-15.webp',
      'modules/nice-more-dice/faces/roman/d20-16.webp',
      'modules/nice-more-dice/faces/roman/d20-17.webp',
      'modules/nice-more-dice/faces/roman/d20-18.webp',
      'modules/nice-more-dice/faces/roman/d20-19.webp',
      'modules/nice-more-dice/faces/roman/d20-20.webp'
    ],
    bumpMaps:[
      'modules/nice-more-dice/faces/roman/d20-1b.webp',
      'modules/nice-more-dice/faces/roman/d20-2b.webp',
      'modules/nice-more-dice/faces/roman/d20-3b.webp',
      'modules/nice-more-dice/faces/roman/d20-4b.webp',
      'modules/nice-more-dice/faces/roman/d20-5b.webp',
      'modules/nice-more-dice/faces/roman/d20-6b.webp',
      'modules/nice-more-dice/faces/roman/d20-7b.webp',
      'modules/nice-more-dice/faces/roman/d20-8b.webp',
      'modules/nice-more-dice/faces/roman/d20-9b.webp',
      'modules/nice-more-dice/faces/roman/d20-10b.webp',
      'modules/nice-more-dice/faces/roman/d20-11b.webp',
      'modules/nice-more-dice/faces/roman/d20-12b.webp',
      'modules/nice-more-dice/faces/roman/d20-13b.webp',
      'modules/nice-more-dice/faces/roman/d20-14b.webp',
      'modules/nice-more-dice/faces/roman/d20-15b.webp',
      'modules/nice-more-dice/faces/roman/d20-16b.webp',
      'modules/nice-more-dice/faces/roman/d20-17b.webp',
      'modules/nice-more-dice/faces/roman/d20-18b.webp',
      'modules/nice-more-dice/faces/roman/d20-19b.webp',
      'modules/nice-more-dice/faces/roman/d20-20b.webp'
    ],
    system:"roman"
  });

  dice3d.addDicePreset({
    type:"d100",
    labels:[
      'modules/nice-more-dice/faces/roman/d100-10.webp',
      'modules/nice-more-dice/faces/roman/d100-20.webp',
      'modules/nice-more-dice/faces/roman/d100-30.webp',
      'modules/nice-more-dice/faces/roman/d100-40.webp',
      'modules/nice-more-dice/faces/roman/d100-50.webp',
      'modules/nice-more-dice/faces/roman/d100-60.webp',
      'modules/nice-more-dice/faces/roman/d100-70.webp',
      'modules/nice-more-dice/faces/roman/d100-80.webp',
      'modules/nice-more-dice/faces/roman/d100-90.webp',
      'modules/nice-more-dice/faces/roman/d100-100.webp'
    ],
    bumpMaps:[
      'modules/nice-more-dice/faces/roman/d100-10b.webp',
      'modules/nice-more-dice/faces/roman/d100-20b.webp',
      'modules/nice-more-dice/faces/roman/d100-30b.webp',
      'modules/nice-more-dice/faces/roman/d100-40b.webp',
      'modules/nice-more-dice/faces/roman/d100-50b.webp',
      'modules/nice-more-dice/faces/roman/d100-60b.webp',
      'modules/nice-more-dice/faces/roman/d100-70b.webp',
      'modules/nice-more-dice/faces/roman/d100-80b.webp',
      'modules/nice-more-dice/faces/roman/d100-90b.webp',
      'modules/nice-more-dice/faces/roman/d100-100b.webp'
    ],
  system:"roman"
  });  
  
  dice3d.addSystem({id:"GMDice",name:"⁂ GM Dice (d20)"},false);

  dice3d.addDicePreset({
    type:"d20",
    labels:[
      'modules/nice-more-dice/faces/gmdice/d20/d20-ehhmaybe.webp',
      'modules/nice-more-dice/faces/gmdice/d20/d20-skull1.webp',
      'modules/nice-more-dice/faces/gmdice/d20/d20-skull2.webp',
      'modules/nice-more-dice/faces/gmdice/d20/d20-skull3.webp',
      'modules/nice-more-dice/faces/gmdice/d20/d20-skull1.webp',
      'modules/nice-more-dice/faces/gmdice/d20/d20-skull2.webp',
      'modules/nice-more-dice/faces/gmdice/d20/d20-death.webp',
      'modules/nice-more-dice/faces/gmdice/d20/d20-nottoday.webp',
      'modules/nice-more-dice/faces/gmdice/d20/d20-playerdeath.webp',
      'modules/nice-more-dice/faces/gmdice/d20/d20-skull3.webp',
      'modules/nice-more-dice/faces/gmdice/d20/d20-skull1.webp',
      'modules/nice-more-dice/faces/gmdice/d20/d20-skull2.webp',
      'modules/nice-more-dice/faces/gmdice/d20/d20-skull3.webp',
      'modules/nice-more-dice/faces/gmdice/d20/d20-skull1.webp',
      'modules/nice-more-dice/faces/gmdice/d20/d20-20.webp',
      'modules/nice-more-dice/faces/gmdice/d20/d20-25.webp',
      'modules/nice-more-dice/faces/gmdice/d20/d20-77.webp',
      'modules/nice-more-dice/faces/gmdice/d20/d20-66.webp',
      'modules/nice-more-dice/faces/gmdice/d20/d20-tpk.webp',
      'modules/nice-more-dice/faces/gmdice/d20/d20-youdie.webp'
    ],
    system:"GMDice"
  });

dice3d.addSystem({id:"Hallo",name:"⁂ Halloween (Set)"},false);

  dice3d.addDicePreset({
    type:"df",
    labels:[
      'modules/nice-more-dice/faces/halloween/dfm.webp',
      'modules/nice-more-dice/faces/halloween/df.webp',
      'modules/nice-more-dice/faces/halloween/dfp.webp'
    ],
    bumpMaps:[
      'modules/nice-more-dice/faces/halloween/dfmb.webp',
      'modules/nice-more-dice/faces/halloween/dfb.webp',
      'modules/nice-more-dice/faces/halloween/dfpb.webp'
    ],
  system:"Hallo"
  });

  dice3d.addDicePreset({
    type:"d2",
    labels:[
      'modules/nice-more-dice/faces/halloween/d2-1.webp',
      'modules/nice-more-dice/faces/halloween/d2-2.webp'
    ],
    bumpMaps:[
      'modules/nice-more-dice/faces/halloween/d2-1b.webp',
      'modules/nice-more-dice/faces/halloween/d2-2b.webp'
    ],
  system:"Hallo"
  });

  dice3d.addDicePreset({
    type:"dc",
    labels:[
      'modules/nice-more-dice/faces/halloween/dc-1.webp',
      'modules/nice-more-dice/faces/halloween/dc-2.webp'
    ],
    bumpMaps:[
      'modules/nice-more-dice/faces/halloween/dc-1b.webp',
      'modules/nice-more-dice/faces/halloween/dc-2b.webp'
    ],
  system:"Hallo"
  });

  dice3d.addDicePreset({
    type:"d4",
    labels:[
      'modules/nice-more-dice/faces/halloween/d4-1.webp',
      'modules/nice-more-dice/faces/halloween/d4-2.webp',
      'modules/nice-more-dice/faces/halloween/d4-3.webp',
      'modules/nice-more-dice/faces/halloween/d4-4.webp'
    ],
  system:"Hallo"
  });

  dice3d.addDicePreset({
    type:"d6",
    labels:[
      'modules/nice-more-dice/faces/halloween/d6-1.webp',
      'modules/nice-more-dice/faces/halloween/d6-2.webp',
      'modules/nice-more-dice/faces/halloween/d6-3.webp',
      'modules/nice-more-dice/faces/halloween/d6-4.webp',
      'modules/nice-more-dice/faces/halloween/d6-5.webp',
      'modules/nice-more-dice/faces/halloween/d6-6.webp'
    ],
    bumpMaps:[
      'modules/nice-more-dice/faces/halloween/d6-1b.webp',
      'modules/nice-more-dice/faces/halloween/d6-2b.webp',
      'modules/nice-more-dice/faces/halloween/d6-3b.webp',
      'modules/nice-more-dice/faces/halloween/d6-4b.webp',
      'modules/nice-more-dice/faces/halloween/d6-5b.webp',
      'modules/nice-more-dice/faces/halloween/d6-6b.webp'
    ],
  system:"Hallo"
  });

  dice3d.addDicePreset({
    type:"d8",
    labels:[
      'modules/nice-more-dice/faces/halloween/d8-1.webp',
      'modules/nice-more-dice/faces/halloween/d8-2.webp',
      'modules/nice-more-dice/faces/halloween/d8-3.webp',
      'modules/nice-more-dice/faces/halloween/d8-4.webp',
      'modules/nice-more-dice/faces/halloween/d8-5.webp',
      'modules/nice-more-dice/faces/halloween/d8-6.webp',
      'modules/nice-more-dice/faces/halloween/d8-7.webp',
      'modules/nice-more-dice/faces/halloween/d8-8.webp'
    ],
    bumpMaps:[
      'modules/nice-more-dice/faces/halloween/d8-1b.webp',
      'modules/nice-more-dice/faces/halloween/d8-2b.webp',
      'modules/nice-more-dice/faces/halloween/d8-3b.webp',
      'modules/nice-more-dice/faces/halloween/d8-4b.webp',
      'modules/nice-more-dice/faces/halloween/d8-5b.webp',
      'modules/nice-more-dice/faces/halloween/d8-6b.webp',
      'modules/nice-more-dice/faces/halloween/d8-7b.webp',
      'modules/nice-more-dice/faces/halloween/d8-8b.webp'
    ],
  system:"Hallo"
  });

  dice3d.addDicePreset({
    type:"d10",
    labels:[
      'modules/nice-more-dice/faces/halloween/d10-1.webp',
      'modules/nice-more-dice/faces/halloween/d10-2.webp',
      'modules/nice-more-dice/faces/halloween/d10-3.webp',
      'modules/nice-more-dice/faces/halloween/d10-4.webp',
      'modules/nice-more-dice/faces/halloween/d10-5.webp',
      'modules/nice-more-dice/faces/halloween/d10-6.webp',
      'modules/nice-more-dice/faces/halloween/d10-7.webp',
      'modules/nice-more-dice/faces/halloween/d10-8.webp',
      'modules/nice-more-dice/faces/halloween/d10-9.webp',
      'modules/nice-more-dice/faces/halloween/d10-10.webp'
    ],
    bumpMaps:[
      'modules/nice-more-dice/faces/halloween/d10-1b.webp',
      'modules/nice-more-dice/faces/halloween/d10-2b.webp',
      'modules/nice-more-dice/faces/halloween/d10-3b.webp',
      'modules/nice-more-dice/faces/halloween/d10-4b.webp',
      'modules/nice-more-dice/faces/halloween/d10-5b.webp',
      'modules/nice-more-dice/faces/halloween/d10-6b.webp',
      'modules/nice-more-dice/faces/halloween/d10-7b.webp',
      'modules/nice-more-dice/faces/halloween/d10-8b.webp',
      'modules/nice-more-dice/faces/halloween/d10-9b.webp',
      'modules/nice-more-dice/faces/halloween/d10-10b.webp'
    ],
  system:"Hallo"
  });

  dice3d.addDicePreset({
    type:"d12",
    labels:[
      'modules/nice-more-dice/faces/halloween/d12-1.webp',
      'modules/nice-more-dice/faces/halloween/d12-2.webp',
      'modules/nice-more-dice/faces/halloween/d12-3.webp',
      'modules/nice-more-dice/faces/halloween/d12-4.webp',
      'modules/nice-more-dice/faces/halloween/d12-5.webp',
      'modules/nice-more-dice/faces/halloween/d12-6.webp',
      'modules/nice-more-dice/faces/halloween/d12-7.webp',
      'modules/nice-more-dice/faces/halloween/d12-8.webp',
      'modules/nice-more-dice/faces/halloween/d12-9.webp',
      'modules/nice-more-dice/faces/halloween/d12-10.webp',
      'modules/nice-more-dice/faces/halloween/d12-11.webp',
      'modules/nice-more-dice/faces/halloween/d12-12.webp'
    ],
    bumpMaps:[
      'modules/nice-more-dice/faces/halloween/d12-1b.webp',
      'modules/nice-more-dice/faces/halloween/d12-2b.webp',
      'modules/nice-more-dice/faces/halloween/d12-3b.webp',
      'modules/nice-more-dice/faces/halloween/d12-4b.webp',
      'modules/nice-more-dice/faces/halloween/d12-5b.webp',
      'modules/nice-more-dice/faces/halloween/d12-6b.webp',
      'modules/nice-more-dice/faces/halloween/d12-7b.webp',
      'modules/nice-more-dice/faces/halloween/d12-8b.webp',
      'modules/nice-more-dice/faces/halloween/d12-9b.webp',
      'modules/nice-more-dice/faces/halloween/d12-10b.webp',
      'modules/nice-more-dice/faces/halloween/d12-11b.webp',
      'modules/nice-more-dice/faces/halloween/d12-12b.webp'
   ],
      system:"Hallo"
  });

  dice3d.addDicePreset({
    type:"d100",
    labels:[
      'modules/nice-more-dice/faces/halloween/d100-10.webp',
      'modules/nice-more-dice/faces/halloween/d100-20.webp',
      'modules/nice-more-dice/faces/halloween/d100-30.webp',
      'modules/nice-more-dice/faces/halloween/d100-40.webp',
      'modules/nice-more-dice/faces/halloween/d100-50.webp',
      'modules/nice-more-dice/faces/halloween/d100-60.webp',
      'modules/nice-more-dice/faces/halloween/d100-70.webp',
      'modules/nice-more-dice/faces/halloween/d100-80.webp',
      'modules/nice-more-dice/faces/halloween/d100-90.webp',
      'modules/nice-more-dice/faces/halloween/d100-100.webp'
    ],
    bumpMaps:[
      'modules/nice-more-dice/faces/halloween/d100-10b.webp',
      'modules/nice-more-dice/faces/halloween/d100-20b.webp',
      'modules/nice-more-dice/faces/halloween/d100-30b.webp',
      'modules/nice-more-dice/faces/halloween/d100-40b.webp',
      'modules/nice-more-dice/faces/halloween/d100-50b.webp',
      'modules/nice-more-dice/faces/halloween/d100-60b.webp',
      'modules/nice-more-dice/faces/halloween/d100-70b.webp',
      'modules/nice-more-dice/faces/halloween/d100-80b.webp',
      'modules/nice-more-dice/faces/halloween/d100-90b.webp',
      'modules/nice-more-dice/faces/halloween/d100-100b.webp'
    ],
  system:"Hallo"
  });

  dice3d.addDicePreset({
    type:"d20",
    labels:[
      'modules/nice-more-dice/faces/halloween/d20-1.webp',
      'modules/nice-more-dice/faces/halloween/d20-2.webp',
      'modules/nice-more-dice/faces/halloween/d20-3.webp',
      'modules/nice-more-dice/faces/halloween/d20-4.webp',
      'modules/nice-more-dice/faces/halloween/d20-5.webp',
      'modules/nice-more-dice/faces/halloween/d20-6.webp',
      'modules/nice-more-dice/faces/halloween/d20-7.webp',
      'modules/nice-more-dice/faces/halloween/d20-8.webp',
      'modules/nice-more-dice/faces/halloween/d20-9.webp',
      'modules/nice-more-dice/faces/halloween/d20-10.webp',
      'modules/nice-more-dice/faces/halloween/d20-11.webp',
      'modules/nice-more-dice/faces/halloween/d20-12.webp',
      'modules/nice-more-dice/faces/halloween/d20-13.webp',
      'modules/nice-more-dice/faces/halloween/d20-14.webp',
      'modules/nice-more-dice/faces/halloween/d20-15.webp',
      'modules/nice-more-dice/faces/halloween/d20-16.webp',
      'modules/nice-more-dice/faces/halloween/d20-17.webp',
      'modules/nice-more-dice/faces/halloween/d20-18.webp',
      'modules/nice-more-dice/faces/halloween/d20-19.webp',
      'modules/nice-more-dice/faces/halloween/d20-20.webp'
    ],
    bumpMaps:[
      'modules/nice-more-dice/faces/halloween/d20-1b.webp',
      'modules/nice-more-dice/faces/halloween/d20-2b.webp',
      'modules/nice-more-dice/faces/halloween/d20-3b.webp',
      'modules/nice-more-dice/faces/halloween/d20-4b.webp',
      'modules/nice-more-dice/faces/halloween/d20-5b.webp',
      'modules/nice-more-dice/faces/halloween/d20-6b.webp',
      'modules/nice-more-dice/faces/halloween/d20-7b.webp',
      'modules/nice-more-dice/faces/halloween/d20-8b.webp',
      'modules/nice-more-dice/faces/halloween/d20-9b.webp',
      'modules/nice-more-dice/faces/halloween/d20-10b.webp',
      'modules/nice-more-dice/faces/halloween/d20-11b.webp',
      'modules/nice-more-dice/faces/halloween/d20-12b.webp',
      'modules/nice-more-dice/faces/halloween/d20-13b.webp',
      'modules/nice-more-dice/faces/halloween/d20-14b.webp',
      'modules/nice-more-dice/faces/halloween/d20-15b.webp',
      'modules/nice-more-dice/faces/halloween/d20-16b.webp',
      'modules/nice-more-dice/faces/halloween/d20-17b.webp',
      'modules/nice-more-dice/faces/halloween/d20-18b.webp',
      'modules/nice-more-dice/faces/halloween/d20-19b.webp',
      'modules/nice-more-dice/faces/halloween/d20-20b.webp'
    ],
    system:"Hallo"  
  });  
});
