const selectRandomCeleb = () => {
  const celebs: string[] = [
    "BarackObama",
    "elonmusk",
    "justinbieber",
    "rihanna",
    "Cristiano",
    "taylorswift13",
    "narendramodi",
    "KimKardashian",
    "nasa",
    "selenagomez",
    "cnnbrk",
    "jtimberlake",
    "BillGates",
    "neymarjr",
    "britneyspears",
    "shakira",
    "KingJames",
    "imVkohli",
    "PMOIndia",
    "SrBachchan",
    "BTS_twt",
    "ChampionsLeague",
    "JLo",
    "realmadrid",
    "akshaykumar",
    "BeingSalmanKhan",
    "Oprah",
    "iamsrk",
    "NiallOfficial",
    "KylieJenner",
    "Drake",
    "RepAOC",
    "SenSanders",
    "nizoomram",
    "RBReich",
    "Arsenal",
    "RishiSunak",
    "susan_daitch",
  ];

  const randomCelebHandle = celebs[Math.floor(Math.random() * celebs.length)];
  return randomCelebHandle;
};

export default selectRandomCeleb;
