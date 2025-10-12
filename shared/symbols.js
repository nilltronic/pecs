// -------------------------
  // Symbol library (with categories)
  // Each entry: { name, src, keywords, category }
  // -------------------------
// symbols.js
  //const symbolLibrary = [ //commented out
  window.symbolLibrary = [  
  // Colors
  { name:"Red", src:"../shared/images/red.png", keywords:["red","colour red","color red"], category:"Colors" },
  { name:"Orange", src:"../shared/images/orange.png", keywords:["orange"], category:"Colors" },
  { name:"Yellow", src:"../shared/images/yellow.png", keywords:["yellow"], category:"Colors" },
  { name:"Green", src:"../shared/images/green.png", keywords:["green"], category:"Colors" },
  { name:"Blue", src:"../shared/images/blue.png", keywords:["blue"], category:"Colors" },
  { name:"Purple", src:"../shared/images/purple.png", keywords:["purple"], category:"Colors" },

  // Needs
  { name:"Toilet", src:"../shared/images/toilet.png", keywords:["toilet","loo","bathroom"], category:"Needs" },
  { name:"Drink", src:"../shared/images/drink.png", keywords:["drink","water","cup"], category:"Needs" },
  { name:"Eat", src:"../shared/images/eat.png", keywords:["snack","food","eat"], category:"Needs" },
  { name:"Wash", src:"../shared/images/wash.png", keywords:["wash","wash hands","sink"], category:"Needs" },
  { name:"Food", src:"../shared/images/food.png", keywords:["food","eat","snack"], category:"Needs" },

  // Actions
  { name:"Yes", src:"../shared/images/yes.png", keywords:["yes","affirm","ok"], category:"Actions" },
  { name:"No", src:"../shared/images/no.png", keywords:["no","not"], category:"Actions" },
  { name:"Stop", src:"../shared/images/stop.png", keywords:["stop","don't","wait"], category:"Actions" },
  { name:"Line", src:"../shared/images/line.png", keywords:["line","queue","line up"], category:"Actions" },
  { name:"Tidy", src:"../shared/images/tidy.png", keywords:["tidy","clean","clean up"], category:"Actions" },
  { name:"Sit", src:"../shared/images/sit.png", keywords:["sit","sit down"], category:"Actions" },
  { name:"Tie", src:"../shared/images/tie.png", keywords:["tie","trainers","shoes"], category:"Actions" },
  { name:"Listen", src:"../shared/images/listen.png", keywords:["listen"], category:"Actions" },
  { name:"Look", src:"../shared/images/look.png", keywords:["look"], category:"Actions" },
  { name:"Shoes On", src:"../shared/images/shoes on.png", keywords:["shoes","on"], category:"Actions" },
  { name:"Shoes Off", src:"../shared/images/shoes off.png", keywords:["shoes","off"], category:"Actions" },

  // Places
  { name:"Outside", src:"../shared/images/outside.png", keywords:["outside","play out"], category:"Places" },
  { name:"Sensory", src:"../shared/images/sensory.png", keywords:["sensory","sensory room"], category:"Places" },
  { name:"Home", src:"../shared/images/home.png", keywords:["home","house"], category:"Places" },
  { name:"Pirate", src:"../shared/images/pirate.png", keywords:["pirate","ship"], category:"Places" },
  { name:"Classroom", src:"../shared/images/classroom.png", keywords:["classroom","class"], category:"Places" },
  { name:"Cafeteria", src:"../shared/images/cafeteria.png", keywords:["cafeteria","lunch","dinner"], category:"Places" },

  // Activities
  { name:"Register", src:"../shared/images/register.png", keywords:["register","registration"], category:"Activities" },
  { name:"Swimming", src:"../shared/images/swimming.png", keywords:["swimming","pool"], category:"Activities" },
  { name:"Trampoline", src:"../shared/images/trampoline.png", keywords:["trampoline","jump"], category:"Activities" },
  { name:"Swing", src:"../shared/images/swing.png", keywords:["swing","swinging"], category:"Activities" },
  { name:"Assembly", src:"../shared/images/assembly.png", keywords:["assembly"], category:"Activities" },
  { name:"Circle", src:"../shared/images/circle.png", keywords:["circle","circle time"], category:"Activities" },
  { name:"Bucket", src:"../shared/images/bucket.png", keywords:["bucket","bucket time"], category:"Activities" },
  { name:"Snack", src:"../shared/images/snack.png", keywords:["snack","snack time"], category:"Activities" },
  

  // Behavioural / others
  { name:"Hitting", src:"../shared/images/hitting.png", keywords:["hitting","no hitting"], category:"Behaviours" },
  { name:"Biting", src:"../shared/images/biting.png", keywords:["biting","no biting"], category:"Behaviours" },
  { name:"Chair", src:"../shared/images/chair.png", keywords:["chair","sit on chair"], category:"Behaviours" },
  { name:"Quiet", src:"../shared/images/quiet.png", keywords:["quiet","shh","silence"], category:"Behaviours" },
  { name:"Pick", src:"../shared/images/pick.png", keywords:["pick","pick up"], category:"Behaviours" },
  { name:"Spitting", src:"../shared/images/spitting.png", keywords:["spitting","no spitting"], category:"Behaviours" },
  { name:"Scratching", src:"../shared/images/scratching.png", keywords:["scratching","no scratching"], category:"Behaviours" },
  { name:"Good Choice", src:"../shared/images/good choice.png", keywords:["good choice","thumbs up"], category:"Behaviours" },

  // Subjects
  { name:"Maths", src:"../shared/images/maths.png", keywords:["maths"], category:"Subjects" },
  { name:"PE", src:"../shared/images/pe.png", keywords:["pe","sport","sports"], category:"Subjects" },
  // Time
  { name:"Now", src:"../shared/images/now.png", keywords:["now"], category:"Time" },
  { name:"Next", src:"../shared/images/next.png", keywords:["next","later"], category:"Time" },

];

// Define available categories (extracted from symbolLibrary)
window.symbolCategories = [...new Set(window.symbolLibrary.map(s => s.category || 'Uncategorized'))];
