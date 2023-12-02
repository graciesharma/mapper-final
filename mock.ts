function generateRandom() {
  const num = Math.floor(Math.random() * 6) + 1;
  const  = [];
  const users = ["User1", "User2", "User3", "User4", "User5"];

  for (let i = 0; i < num; i++) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    const rating = Math.floor(Math.random() * 5) + 1;
    const comment = generateRandomComment();

    .push({ user: randomUser, rating, comment });
  }

  return ;
}

function generateRandomComment() {
  const comments = [
    "Clean and well-maintained.",
    "Great facilities and convenient location.",
    "Spacious and well-designed.",
    "Decent facilities but could be cleaner.",
    "Good for a quick stop.",
    "Not the best, but it gets the job done.",
    "Needs more frequent maintenance.",
  ];

  return comments[Math.floor(Math.random() * comments.length)];
}

export const toilets = [
  {
    name: "Civil Mall Toilet",
    address: "Sundhara",
    tags: ["Commercial"],
    description:
      "A modern public toilet located at Civil Mall in the heart of the city.",
    coords: {
      latitude: 27.699589259120334,
      longitude: 85.31288936667046,
    },
    images: [],
    : generateRandom(),
    openingTime: "07:00 AM",
    closingTime: "10:00 PM",
  },
  {
    name: "World Trade Center",
    address: "Tripureshwor",
    tags: ["Commercial "],
    description:
      "A state-of-the-art restroom at the World Trade Center offering a pleasant experience.",
    coords: {
      latitude: 27.69420890899019,
      longitude: 85.31393071502649,
    },
    images: [],
    : generateRandom(),
    openingTime: "08:00 AM",
    closingTime: "09:00 PM",
  },
  {
    name: "KL Tower Toilet",
    address: "Chahabil",
    tags: ["Commercial "],
    description:
      "A convenient public toilet located at KL Tower for visitors and shoppers.",
    coords: {
      latitude: 27.71872624452876,
      longitude: 85.34998081760625,
    },
    images: [],
    : generateRandom(),
    openingTime: "07:30 AM",
    closingTime: "09:30 PM",
  },
  {
    name: "Bishwojyoti Hall Toilet",
    address: "Thamel",
    tags: ["Commercial Building"],
    description:
      "A restroom at Bishwojyoti Hall, perfect for event attendees and students.",
    coords: {
      latitude: 27.70930877122919,
      longitude: 85.31570652852398,
    },
    images: [],
    : generateRandom(),
    openingTime: "07:00 AM",
    closingTime: "08:00 PM",
  },
  {
    name: "Tripureshwor Hospital ",
    address: "Tripureshwor ",
    tags: ["Hospital"],
    description:
      "A hospital restroom at Tripureshwor Eye Hospital, clean and accessible.",
    coords: {
      latitude: 27.69318953107179,
      longitude: 85.3138731655211,
    },
    images: [],
    : generateRandom(),
    openingTime: "24 Hours",
    closingTime: "24 Hours",
  },
  {
    name: "Om Hospital Toilet",
    address: "Chabahil",
    tags: ["Hospital"],
    description:
      "A well-maintained restroom at Om Hospital, perfect for patients and visitors.",
    coords: {
      latitude: 27.72149115255192,
      longitude: 85.34479004628098,
    },
    images: [],
    : generateRandom(),
    openingTime: "24 Hours",
    closingTime: "24 Hours",
  },
  {
    name: "Bhrikutimandap 1 Toilet",
    address: "Bhrikutimandap",
    tags: ["Public Toilet"],
    description:
      "A public toilet at Bhrikutimandap 1, convenient for travelers and pedestrians.",
    coords: {
      latitude: 27.701000063518823,
      longitude: 85.31715483392878,
    },
    images: [],
    : generateRandom(),
    openingTime: "06:00 AM",
    closingTime: "10:00 PM",
  },
  {
    name: "Bhrikutimandap 2 Toilet",
    address: "Bhrikutimandap ",
    tags: ["Public Toilet"],
    description:
      "A clean public toilet at Bhrikutimandap 2, perfect for a quick stop.",
    coords: {
      latitude: 27.699694972142282,
      longitude: 85.318732529667,
    },
    images: [],
    : generateRandom(),
    openingTime: "06:30 AM",
    closingTime: "09:30 PM",
  },
  {
    name: "Tuladevi Temple Toilet",
    address: " Baluwatar",
    tags: ["Religious Site"],
    description:
      "A restroom near Tuladevi Temple in Baluwatar, suitable for worshippers.",
    coords: {
      latitude: 27.726918405068915,
      longitude: 85.33523366727619,
    },
    images: [],
    : generateRandom(),
    openingTime: "05:00 AM",
    closingTime: "08:00 PM",
  },
  {
    name: "Prahari Kalyan Kosh Petrol Pump Toilet",
    address: "Naxal",
    tags: ["Petrol Pump"],
    description:
      "A petrol pump restroom at Prahari Kalyan Kosh, convenient for travelers.",
    coords: {
      latitude: 27.715189477408778,
      longitude: 85.32827693798491,
    },
    images: [],
    : generateRandom(),
    openingTime: "24 Hours",
    closingTime: "24 Hours",
  },
  {
    name: "Bhatbhateni Pulchowk Toilet",
    address: " Pulchowk",
    tags: ["Commercial "],
    description:
      "A modern restroom at Bhatbhateni Pulchowk, perfect for shoppers.",
    coords: {
      latitude: 27.679654457829717,
      longitude: 85.31955618869681,
    },
    images: [],
    : generateRandom(),
    openingTime: "07:00 AM",
    closingTime: "10:00 PM",
  },
  {
    name: "Labim Mall Toilet",
    address: "Labim Mall",
    tags: ["Commercial "],
    description: "A restroom at Labim Mall, clean and accessible for shoppers.",
    coords: {
      latitude: 27.677443479930687,
      longitude: 85.31711010855531,
    },
    images: [],
    : generateRandom(),
    openingTime: "08:00 AM",
    closingTime: "09:00 PM",
  },
  {
    name: "Norkhang Complex Toilet",
    address: "Jawalakhel",
    tags: ["Commercial "],
    description:
      "A convenient restroom at Norkhang Complex for shoppers and visitors.",
    coords: {
      latitude: 27.67379920681691,
      longitude: 85.3140521827883,
    },
    images: [],
    : generateRandom(),
    openingTime: "07:30 AM",
    closingTime: "09:30 PM",
  },
  {
    name: "District Post Office Toilet",
    address: "Patan Dhoka",
    tags: ["Government Building"],
    description:
      "A public toilet at District Post Office, Patan Dhoka, accessible for the public.",
    coords: {
      latitude: 27.678694099420305,
      longitude: 85.32098315563583,
    },
    images: [],
    : generateRandom(),
    openingTime: "08:00 AM",
    closingTime: "06:00 PM",
  },
  {
    name: "Lalitpur Metropolitan City Toilet",
    address: " Pulchowk",
    tags: ["Government "],
    description:
      "A government building restroom at Lalitpur Metropolitan City, Pulchowk.",
    coords: {
      latitude: 27.676819813088553,
      longitude: 85.31687006912743,
    },
    images: [],
    : generateRandom(),
    openingTime: "09:00 AM",
    closingTime: "05:00 PM",
  },
  {
    name: "Pulchowk Engineering Campus Toilet",
    address: "Pulchowk",
    tags: ["Government "],
    description:
      "A restroom at Pulchowk Engineering Campus, clean and well-maintained.",
    coords: {
      latitude: 27.681328598145743,
      longitude: 85.31850552511591,
    },
    images: [],
    : generateRandom(),
    openingTime: "07:00 AM",
    closingTime: "09:00 PM",
  },
  {
    name: "Nepal Telecom, Pulchowk Toilet",
    address: "Pulchowk",
    tags: ["Government "],
    description:
      "A restroom at Nepal Telecom, Pulchowk, accessible for employees and visitors.",
    coords: {
      latitude: 27.680275576690235,
      longitude: 85.31801668625354,
    },
    images: [],
    : generateRandom(),
    openingTime: "08:30 AM",
    closingTime: "05:30 PM",
  },
  {
    name: "Nepal Telecom Jawalakhel Toilet",
    address: "Jawalakhel",
    tags: ["Government "],
    description:
      "A public toilet at Nepal Telecom Jawalakhel, convenient for pedestrians.",
    coords: {
      latitude: 27.6725260222564,
      longitude: 85.31343886744293,
    },
    images: [],
    : generateRandom(),
    openingTime: "06:30 AM",
    closingTime: "08:30 PM",
  },
  {
    name: "Sumeru City Hospital Toilet",
    address: "Pulchowk",
    tags: ["Hospital"],
    description:
      "A hospital restroom at Sumeru City Hospital, suitable for patients and visitors.",
    coords: {
      latitude: 27.675947740750612,
      longitude: 85.31423590662047,
    },
    images: [],
    : generateRandom(),
    openingTime: "24 Hours",
    closingTime: "24 Hours",
  },
  {
    name: "Alka Hospital Toilet",
    address: "Jawalakhel",
    tags: ["Hospital"],
    description:
      "A clean and well-maintained restroom at Alka Hospital, suitable for healthcare needs.",
    coords: {
      latitude: 27.67452699000013,
      longitude: 85.31508656429135,
    },
    images: [],
    : generateRandom(),
    openingTime: "24 Hours",
    closingTime: "24 Hours",
  },
  {
    name: "Patan Hospital Toilet",
    address: "Lagankhel",
    tags: ["Hospital"],
    description:
      "A hospital restroom at Patan Hospital, designed for patient comfort and convenience.",
    coords: {
      latitude: 27.668539525959787,
      longitude: 85.32062194046078,
    },
    images: [],
    : generateRandom(),
    openingTime: "24 Hours",
    closingTime: "24 Hours",
  },
  {
    name: "Aerosan Public Toilet",
    address: "Patan Dhoka",
    tags: ["Public Toilet"],
    description:
      "A public toilet at Aerosan, providing essential facilities for travelers and pedestrians.",
    coords: {
      latitude: 27.678814033386434,
      longitude: 85.32087302085364,
    },
    images: [],
    : generateRandom(),
    openingTime: "06:00 AM",
    closingTime: "09:00 PM",
  },
  {
    name: "Gayatri Devi Oil Store Ekantakuna Toilet",
    address: " Ekantakuna",
    tags: ["Petrol Pump"],
    description:
      "A restroom at Gayatri Devi Oil Store Ekantakuna, suitable for customers.",
    coords: {
      latitude: 27.666612957967878,
      longitude: 85.30800507634841,
    },
    images: [],
    : generateRandom(),
    openingTime: "07:00 AM",
    closingTime: "10:00 PM",
  },
  {
    name: "Manjushree Park Toilet",
    address: "Chobar",
    tags: ["Park"],
    description:
      "A park restroom at Manjushree Park, offering a clean and pleasant experience for visitors.",
    coords: {
      latitude: 27.660675032327497,
      longitude: 85.29309499813318,
    },
    images: [],
    : generateRandom(),
    openingTime: "06:30 AM",
    closingTime: "08:30 PM",
  },
  {
    name: "Mahalaxmi Temple Toilet",
    address: "Mahalaxmisthan",
    tags: ["Religious Site"],
    description:
      "A restroom near Mahalaxmi Temple, providing facilities for worshippers.",
    coords: {
      latitude: 27.66290840590817,
      longitude: 85.3192249728326,
    },
    images: [],
    : generateRandom(),
    openingTime: "05:00 AM",
    closingTime: "07:00 PM",
  },
  {
    name: "Maitidevi Temple Toilet",
    address: "Maitidevi ",
    tags: ["Public Toilet"],
    description:
      "A public toilet at Maitidevi Temple, clean and well-maintained for all visitors.",
    coords: {
      latitude: 27.706294213624638,
      longitude: 85.33413975019828,
    },
    images: [],
    : generateRandom(),
    openingTime: "06:00 AM",
    closingTime: "08:00 PM",
  },
  {
    name: "Bagbazar Public Toilet",
    address: "Bagbazar",
    tags: ["Public Toilet"],
    description:
      "A public toilet at Bagbazar, convenient for travelers and pedestrians.",
    coords: {
      latitude: 27.705,

      longitude: 85.31706636302036,
    },
    images: [],
    : generateRandom(),
    openingTime: "24 Hours",
    closingTime: "24 Hours",
  },
  {
    name: "Park Toilet, Swayambhu",
    address: "Swayambhu",
    tags: ["Public Toilet"],
    description:
      "A public toilet at Swayambhu, providing essential facilities for visitors to the park.",
    coords: {
      latitude: 27.718416271449733,
      longitude: 85.29074080726043,
    },
    images: [],
    : generateRandom(),
    openingTime: "24 Hours",
    closingTime: "24 Hours",
  },
  {
    name: "Kamalpokhari Public Toilet",
    address: "Kamalpokhari",
    tags: ["Public Toilet"],
    description:
      "A public toilet near Kamalpokhari, offering essential facilities for travelers and pedestrians.",
    coords: {
      latitude: 27.710884905093515,
      longitude: 85.32454725864177,
    },
    images: [],
    : generateRandom(),
    openingTime: "24 Hours",
    closingTime: "24 Hours",
  },
];
