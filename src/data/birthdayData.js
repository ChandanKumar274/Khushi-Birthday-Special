// Birthday Configuration & Real Photo Data for Khushi
// Curated with love, cute nicknames (Darling, Bestfriend, Buddy, Meri Jaan) and real cropped pictures!

const getPhotoUrl = (fileName) => {
  const base = import.meta.env.BASE_URL || './';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}photos/${fileName}`;
};

export const BIRTHDAY_DATA = {
  name: "Khushi",
  nicknames: [
    "Khushi 🌸",
    "Darling 💕",
    "Bestfriend 🫂",
    "Buddy 🤝",
    "Meri Jaan 💖",
    "Crime Partner 🍕",
    "Drama Queen 👑"
  ],
  birthdayDate: "Happy Birthday Today! ✨",
  heroTagline: "To my darling Khushi, my sweetest bestfriend, and the coolest buddy in the entire universe!",
  
  // Spotlight Hero Photos (Khushi's actual photos)
  heroImages: [
    {
      url: getPhotoUrl("khushi_birthday_queen.jpg"),
      caption: "The Birthday Queen Khushi Cutting Her Cake! 🎂💖",
      nickname: "Darling Khushi"
    },
    {
      url: getPhotoUrl("khushi_black_glam.jpg"),
      caption: "Bestfriend in Black Glam - Pure Bollywood Swag! 🖤✨",
      nickname: "Glam Bestfriend"
    },
    {
      url: getPhotoUrl("khushi_sweet_smile.jpg"),
      caption: "Million Dollar Smile of My Favorite Buddy! 🌸",
      nickname: "Chirpy Buddy"
    },
    {
      url: getPhotoUrl("khushi_peacock_pink.jpg"),
      caption: "Darling in Pink - Radiance & Pure Grace! 🦚💕",
      nickname: "Meri Jaan"
    }
  ],

  // Polaroid Memory Gallery (All real cropped pictures)
  memories: [
    {
      id: 1,
      title: "The Birthday Girl & Cake",
      nicknameLabel: "Darling Khushi 🎂",
      date: "Special Celebration",
      image: getPhotoUrl("khushi_birthday_queen.jpg"),
      caption: "Khushi darling, jab tu cake cut karke hasti hai toh pura universe roshan ho jata hai! May this year give you all the happiness! 💖✨",
      categories: ['Best Moments', 'Food Partner', 'BFF Forever', 'My Safe Place'],
      tag: "Birthday Queen"
    },
    {
      id: 2,
      title: "Desi Diva in Black Glam",
      nicknameLabel: "My Stylish Bestfriend 🖤",
      date: "Event Night",
      image: getPhotoUrl("khushi_black_glam.jpg"),
      caption: "Kaale chashme aur black ghagra-choli me meri bestfriend kisi Bollywood star se kam nahi lagti! Total heroine vibe! 💅🔥",
      categories: ['Model Vibe', 'Best Moments', 'BFF Forever'],
      tag: "Diva Vibe"
    },
    {
      id: 3,
      title: "The Million Dollar Smile",
      nicknameLabel: "Chirpy Buddy 🌸",
      date: "Jhumka Moments",
      image: getPhotoUrl("khushi_sweet_smile.jpg"),
      caption: "Teri ye tilted smile aur pyare jhumke dekh kar kisi ka bhi kharab din ek minute me theek ho jaye meri pyari buddy! 😊💕",
      categories: ['Best Moments', 'My Safe Place', 'BFF Forever', 'Model Vibe'],
      tag: "Smile Queen"
    },
    {
      id: 4,
      title: "Radha Rani Traditional Look",
      nicknameLabel: "Cutie Darling 🦚",
      date: "Festive Vibes",
      image: getPhotoUrl("khushi_peacock_pink.jpg"),
      caption: "Bright pink attire aur mor pankh ke sath darling Khushi ka ye traditional avatar ekdum mesmerizing hai! 🌸👑",
      categories: ['Model Vibe', 'Best Moments', 'My Safe Place'],
      tag: "Traditional Glow"
    },
    {
      id: 5,
      title: "Cafe & Cargo Swag",
      nicknameLabel: "My Crime Partner ☕",
      date: "Chill Evening",
      image: getPhotoUrl("khushi_cafe_swag.jpg"),
      caption: "Cafe ke bahar poses dena aur bina ruke ghanto gossip karna... tere sath bitaya har lamha yaadgar hai meri bestfriend! 🍕🤙",
      categories: ['Gossip Partner', 'Food Partner', 'BFF Forever'],
      tag: "Cafe Days"
    },
    {
      id: 6,
      title: "Retro Flannel & Shades",
      nicknameLabel: "Coolest Buddy 🕶️",
      date: "Fashion Mood",
      image: getPhotoUrl("khushi_flannel_shades.jpg"),
      caption: "Red check shirt aur retro sunglasses me meri buddy ka swag unmatchable hai! Attitude plus cuteness combo! 🔥😎",
      categories: ['Model Vibe', 'Gossip Partner', 'Best Moments'],
      tag: "Coolest Friend"
    },
    {
      id: 7,
      title: "Lake Side Adventures",
      nicknameLabel: "Adventure Bestfriend 🌊",
      date: "Bhopal Lake Trip",
      image: getPhotoUrl("khushi_lake_adventures.jpg"),
      caption: "Lifejacket pehan kar lake ka shant nazara dekhna... har trip tere bina bilkul adhoori hai Khushi darling! ⛵✨",
      categories: ['My Safe Place', 'BFF Forever', 'Best Moments'],
      tag: "Trip Memories"
    },
    {
      id: 8,
      title: "Flower in Hair Grace",
      nicknameLabel: "Meri Jaan Khushi 🌺",
      date: "Sweet Moments",
      image: getPhotoUrl("khushi_red_stairs.jpg"),
      caption: "Red printed kurti me baalon me phool lagaye meri jaan kitni pyari lagti hai! Hamesha aise hi muskurati rehna! 🫂❤️",
      categories: ['My Safe Place', 'Model Vibe', 'BFF Forever'],
      tag: "Pure Aesthetic"
    },
    {
      id: 9,
      title: "Drama & Pout Selfie Session",
      nicknameLabel: "Nautanki Darling 😚",
      date: "Selfie Madness",
      image: getPhotoUrl("khushi_cute_pout.jpg"),
      caption: "Bina pout banaye meri darling Khushi ka selfie session poora ho hi nahi sakta! You are the sweetest drama queen! 👑💕",
      categories: ['Gossip Partner', 'Food Partner', 'BFF Forever', 'Model Vibe'],
      tag: "Nautanki Queen"
    },
    {
      id: 10,
      title: "Window-side Serene Candid",
      nicknameLabel: "Sweetest Buddy 🌼",
      date: "Golden Hour",
      image: getPhotoUrl("khushi_window_flower.jpg"),
      caption: "Khidki ke paas phool lagaye ye peaceful aur graceful pose... meri buddy ka dil sach me sona hai! 🤍✨",
      categories: ['My Safe Place', 'Model Vibe', 'Best Moments'],
      tag: "Candid Grace"
    },
    {
      id: 11,
      title: "Casual & Carefree Days",
      nicknameLabel: "Forever Bestfriend 📚",
      date: "Daily Memories",
      image: getPhotoUrl("khushi_brown_kurti.jpg"),
      caption: "Roz ki simple baatein, bina wajah hasna aur ek dusre ko support karna... thankful to have you as my bestfriend! 🫂🌸",
      categories: ['Gossip Partner', 'BFF Forever', 'My Safe Place', 'Food Partner'],
      tag: "Casual Cute"
    },
    {
      id: 12,
      title: "Vintage Aesthetic Mirror Pose",
      nicknameLabel: "Vibe Queen Darling 🪞",
      date: "Retro Vibe",
      image: getPhotoUrl("khushi_retro_mirror.jpg"),
      caption: "Dreamy retro aesthetics aur timeless charm! Darling Khushi, you are one in a billion! ✨💖",
      categories: ['Model Vibe', 'Gossip Partner', 'Best Moments', 'BFF Forever'],
      tag: "Aesthetic Vibe"
    }
  ],

  // 10 Reasons why Khushi is the best (using varied affectionate terms)
  reasons: [
    {
      number: "01",
      title: "Khushi Darling Ka Infectious Smile",
      desc: "Jab meri darling hasti hai na, pura mahaul khil uthta hai! Khushi ki hasi duniya ki sabse pyari cheez hai.",
      icon: "Sparkles"
    },
    {
      number: "02",
      title: "Bestfriend Who Keeps All Secrets",
      desc: "Mere saare raaz, funny kisse aur crushes meri bestfriend ke paas bank locker se bhi jyada safe hain!",
      icon: "Lock"
    },
    {
      number: "03",
      title: "Buddy Jo Hamesha Sath Khadi Hai",
      desc: "Chahe koi bhi mushkil ho, meri buddy hamesha bolti hai: 'Tu tension mat le, mai hu na tere sath!'",
      icon: "HeartHandshake"
    },
    {
      number: "04",
      title: "Meri Jaan Ki Endless Nautanki",
      desc: "Khushi ke bina har party aur gup-shup adhoori hai! Meri jaan real entertainment package hai.",
      icon: "Smile"
    },
    {
      number: "05",
      title: "Sensible Advice Giver Darling",
      desc: "Bhale hi khud confused ho, par mujhe hamesha sabse sahi aur mature advice meri darling hi deti hai!",
      icon: "Compass"
    },
    {
      number: "06",
      title: "Bestfriend With Pure Golden Heart",
      desc: "Sabka khayal rakhna aur sabse sacche dil se pyar karna... meri bestfriend jaisa dil kisi ka nahi.",
      icon: "Heart"
    },
    {
      number: "07",
      title: "Unlimited Foodie Buddy",
      desc: "Momos ho ya pizza, khane ke liye meri buddy kabhi mana nahi karti! Khushi + Food = Eternal Love!",
      icon: "Coffee"
    },
    {
      number: "08",
      title: "24/7 Lifeline & Crime Partner",
      desc: "Raat ke 2 baje bhi call kar lo, Khushi meri har baat sunne ke liye hamesha tayyar rehti hai.",
      icon: "PhoneCall"
    }
  ],

  // Secret Letter from the Best Friend
  secretLetter: {
    salutation: "Dearest Khushi, My Darling & Bestfriend 🌸,",
    paragraphs: [
      "Happy Birthday meri sabse pyari Khushi! Aaj ka din mere dil ke bohot kareeb hai, kyunki aaj meri sabse special darling, meri bestfriend aur meri sabse pyari buddy ka janamdin hai.",
      "Sach kahu toh Khushi, meri zindagi tere bina kitni boring hoti mai soch bhi nahi sakta. Teri wo silly baatein, be-matlab hasna, har choti cheez par drama karna, aur jab mai udas hu toh tera bina kuch bole mujhe hasana—ye sab moments meri life ke sabse anmol khazane hain.",
      "Darling, tu jaisi hai bilkul vaisi hi rehna—chulbuli, thodi pagal, bohot caring aur dil ki ekdum saaf! Tu meri sirf bestfriend nahi hai, tu meri family hai, mera support system hai aur meri lifeline hai.",
      "Meri bhagwan se yehi dua hai ki meri buddy Khushi ko duniya ki saari khushiyan, unchi udaan, shaandar success, aur wo sab kuch mile jo uska pyara sa dil chahta hai. Tera chehra hamesha aise hi khilta rahe!",
      "Happy Birthday again, meri jaan Khushi! Aaj tera din hai, enjoy it to the fullest! Party ka bill mai dekh lunga! 😉🎂🎈"
    ],
    signOff: "With endless love & tightest hugs,",
    sender: "Tera Forever Bestfriend & Buddy 💖"
  },

  // Balloon compliments (using Khushi, Darling, Bestfriend, Buddy, Meri Jaan)
  balloonCompliments: [
    "✨ Khushi darling, your smile is brighter than all the stars!",
    "🌸 Meri jaan, you are the strongest and sweetest soul ever!",
    "💖 Thank you for being the most loyal bestfriend in the world!",
    "👑 Darling Khushi, you are officially the queen of our hearts!",
    "🍕 May my buddy get unlimited free pizza, momos & coffee forever!",
    "🌟 Never change yourself, Khushi darling, you are 100% perfect!",
    "🎁 May this new year bring my bestfriend all her dream achievements!",
    "🦋 Buddy, your positive vibe literally lights up every single room!",
    "🌈 Life is 1000x more colorful and fun with darling Khushi around!",
    "🎂 Happiest Birthday meri jaan Khushi! Love you to infinity & beyond!"
  ],

  // Sticky Notes on the Wishes Wall
  initialWishes: [
    {
      id: 1,
      sender: "Your Forever Bestfriend 🫂",
      message: "Happy Birthday meri darling Khushi! May your gorgeous smile never fade away. Love you endlessly!",
      colorHex: "#ffe4ec",
      date: "Today"
    },
    {
      id: 2,
      sender: "Your Crime Partner 🍕",
      message: "Happiest birthday to my coolest buddy! Khushi darling, let's make 100 more crazy memories this year!",
      colorHex: "#fff0f5",
      date: "Today"
    },
    {
      id: 3,
      sender: "Gossip Squad ☕",
      message: "Happy Birthday bestfriend Khushi! Keep slaying and shining like the superstar you are!",
      colorHex: "#f3e8ff",
      date: "Today"
    },
    {
      id: 4,
      sender: "Secret Admirer 🌟",
      message: "Wishing darling Khushi a year loaded with happiness, good health, and huge success!",
      colorHex: "#fef9c3",
      date: "Today"
    }
  ],

  // Fun Quiz
  quizQuestions: [
    {
      id: 1,
      question: "Khushi darling ka sabse favorite mood kaunsa hota hai?",
      options: [
        { text: "Food aur chai enjoy karte waqt khush hona 🍕", points: 100 },
        { text: "Bestfriend ko pyaar se roast karna 😂", points: 100 },
        { text: "Photoshoot aur cute poses dena 📸", points: 100 },
        { text: "All of the above! Darling is an all-rounder mood queen 💖", points: 100 }
      ],
      explanation: "Sab ke sab 100% sach hain! Khushi darling is the ultimate vibe!"
    },
    {
      id: 2,
      question: "Khushi aur uske bestfriend / buddy ki dosti ka secret formula kya hai?",
      options: [
        { text: "Non-stop gossips aur daily rants ☕", points: 100 },
        { text: "Ek dusre ke secrets hamesha chhipana 🤫", points: 100 },
        { text: "Bina bole ek dusre ki baat samajh jana 🫂", points: 100 },
        { text: "Ye dosti hum nahi todenge, forever and always! 🎵", points: 100 }
      ],
      explanation: "Ye bond 1000% unbreakable hai!"
    },
    {
      id: 3,
      question: "Aaj meri jaan Khushi ko kya milna chahiye?",
      options: [
        { text: "Sabse tasty cake aur dher saare gifts 🎂🎁", points: 100 },
        { text: "Duniya bhar ka pyaar aur respect ✨", points: 100 },
        { text: "Her dream life and unlimited happiness 🌸", points: 100 },
        { text: "Everything! Darling Khushi deserves the entire universe 👑", points: 100 }
      ],
      explanation: "She truly deserves the world today!"
    }
  ]
};
