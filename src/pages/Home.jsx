import React, { useEffect, useRef, useState } from "react";
import SwiperContainer from "../components/utility/Swiper/SwiperContainer";
import { SwiperSlide } from "swiper/react";
import TypeOfMovieHeader from "../components/utility/TypeOfMovieHeader";
import GenresNav from "../components/utility/GenresNav";
import { useTranslation } from "react-i18next";
import MovieContainer from "../components/movie/MovieContainer";
import ProgressCircle from "../components/utility/ProgressCircle";

const heroes = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg",
      genre_ids: [36, 10752, 18],
      id: 753342,
      original_language: "en",
      original_title: "Napoleon",
      overview:
        "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.",
      popularity: 2738.782,
      poster_path: "/jE5o7y9K6pZtWNNMEw3IdpHuncR.jpg",
      release_date: "2023-11-22",
      title: "Napoleon",
      video: false,
      vote_average: 6.5,
      vote_count: 1155,
    },
    {
      adult: false,
      backdrop_path: "/md848EEPm3dHZOqwGxxTVwH2vu5.jpg",
      genre_ids: [18, 36],
      id: 906126,
      original_language: "es",
      original_title: "La sociedad de la nieve",
      overview:
        "On October 13, 1972, Uruguayan Air Force Flight 571, chartered to take a rugby team to Chile, crashes into a glacier in the heart of the Andes.",
      popularity: 1568.827,
      poster_path: "/2e853FDVSIso600RqAMunPxiZjq.jpg",
      release_date: "2023-12-13",
      title: "Society of the Snow",
      video: false,
      vote_average: 2,
      vote_count: 852,
    },
    {
      adult: false,
      backdrop_path: "/dvNrgldueQciabkYmlCnyhmaPoO.jpg",
      genre_ids: [28, 9648, 53, 27],
      id: 899445,
      original_language: "en",
      original_title: "Deep Fear",
      overview:
        "A solo trip aboard a yacht takes a terrifying turn when a woman encounters three drug traffickers clinging to the shattered remains of a boat. They soon force her to dive into shark-infested waters to retrieve kilos of cocaine from the sunken wreck.",
      popularity: 1333.609,
      poster_path: "/ruujFw7J0Nd3BSjbN3QODym82Qs.jpg",
      release_date: "2023-10-18",
      title: "Deep Fear",
      video: false,
      vote_average: 4.8,
      vote_count: 44,
    },
    {
      adult: false,
      backdrop_path: "/jXJxMcVoEuXzym3vFnjqDW4ifo6.jpg",
      genre_ids: [28, 12, 14],
      id: 572802,
      original_language: "en",
      original_title: "Aquaman and the Lost Kingdom",
      overview:
        "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
      popularity: 1139.841,
      poster_path: "/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg",
      release_date: "2023-12-20",
      title: "Aquaman and the Lost Kingdom",
      video: false,
      vote_average: 6.5,
      vote_count: 500,
    },
    {
      adult: false,
      backdrop_path: "/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg",
      genre_ids: [28, 53],
      id: 866398,
      original_language: "en",
      original_title: "The Beekeeper",
      overview:
        "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
      popularity: 865.04,
      poster_path: "/A7EByudX0eOzlkQ2FIbogzyazm2.jpg",
      release_date: "2024-01-10",
      title: "The Beekeeper",
      video: false,
      vote_average: 7.4,
      vote_count: 75,
    },
    {
      adult: false,
      backdrop_path: "/rsG3b17WzUaMKCgHjMRPNaBlfcM.jpg",
      genre_ids: [28, 53],
      id: 927107,
      original_language: "en",
      original_title: "The Bricklayer",
      overview:
        "Someone is blackmailing the CIA by assassinating foreign journalists and making it look like the agency is responsible. As the world begins to unite against the U.S., the CIA must lure its most brilliant – and rebellious – operative out of retirement, forcing him to confront his checkered past while unraveling an international conspiracy.",
      popularity: 783.378,
      poster_path: "/pwOQ9lqLX1OgsJRSybS662wMcu8.jpg",
      release_date: "2023-12-14",
      title: "The Bricklayer",
      video: false,
      vote_average: 6.5,
      vote_count: 38,
    },
    {
      adult: false,
      backdrop_path: "/bmlkLCjrIWnnZzdAQ4uNPG9JFdj.jpg",
      genre_ids: [35, 10751, 14],
      id: 787699,
      original_language: "en",
      original_title: "Wonka",
      overview:
        "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
      popularity: 754.896,
      poster_path: "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
      release_date: "2023-12-06",
      title: "Wonka",
      video: false,
      vote_average: 7.1,
      vote_count: 998,
    },
    {
      adult: false,
      backdrop_path: "/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
      genre_ids: [18, 36],
      id: 872585,
      original_language: "en",
      original_title: "Oppenheimer",
      overview:
        "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
      popularity: 681.553,
      poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      release_date: "2023-07-19",
      title: "Oppenheimer",
      video: false,
      vote_average: 8.1,
      vote_count: 6135,
    },
    {
      adult: false,
      backdrop_path: "/k1KrbaCMACQiq7EA0Yhw3bdzMv7.jpg",
      genre_ids: [16, 10751, 10402, 14, 35],
      id: 901362,
      original_language: "en",
      original_title: "Trolls Band Together",
      overview:
        "When Branch's brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
      popularity: 647.677,
      poster_path: "/bkpPTZUdq31UGDovmszsg2CchiI.jpg",
      release_date: "2023-10-12",
      title: "Trolls Band Together",
      video: false,
      vote_average: 7.2,
      vote_count: 532,
    },
    {
      adult: false,
      backdrop_path: "/5a4JdoFwll5DRtKMe7JLuGQ9yJm.jpg",
      genre_ids: [18, 878, 28],
      id: 695721,
      original_language: "en",
      original_title: "The Hunger Games: The Ballad of Songbirds & Snakes",
      overview:
        "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
      popularity: 623.904,
      poster_path: "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
      release_date: "2023-11-15",
      title: "The Hunger Games: The Ballad of Songbirds & Snakes",
      video: false,
      vote_average: 7.2,
      vote_count: 1477,
    },
    {
      adult: false,
      backdrop_path: "/t9rOTMHcE26MqcTSRF1LUicsY5b.jpg",
      genre_ids: [16, 35, 10751],
      id: 1075794,
      original_language: "en",
      original_title: "Leo",
      overview:
        "Jaded 74-year-old lizard Leo has been stuck in the same Florida classroom for decades with his terrarium-mate turtle. When he learns he only has one year left to live, he plans to escape to experience life on the outside but instead gets caught up in the problems of his anxious students — including an impossibly mean substitute teacher.",
      popularity: 615.909,
      poster_path: "/pD6sL4vntUOXHmuvJPPZAgvyfd9.jpg",
      release_date: "2023-11-17",
      title: "Leo",
      video: false,
      vote_average: 7.5,
      vote_count: 820,
    },
    {
      adult: false,
      backdrop_path: "/r9oTasGQofvkQY5vlUXglneF64Z.jpg",
      genre_ids: [28, 35],
      id: 1029575,
      original_language: "en",
      original_title: "The Family Plan",
      overview:
        "Dan Morgan is many things: a devoted husband, a loving father, a celebrated car salesman. He's also a former assassin. And when his past catches up to his present, he's forced to take his unsuspecting family on a road trip unlike any other.",
      popularity: 574.333,
      poster_path: "/a6syn9qcU4a54Lmi3JoIr1XvhFU.jpg",
      release_date: "2023-12-14",
      title: "The Family Plan",
      video: false,
      vote_average: 7.4,
      vote_count: 716,
    },
    {
      adult: false,
      backdrop_path: "/rz8GGX5Id2hCW1KzAIY4xwbQw1w.jpg",
      genre_ids: [28, 35, 80],
      id: 955916,
      original_language: "en",
      original_title: "Lift",
      overview:
        "An international heist crew, led by Cyrus Whitaker, race to lift $500 million in gold from a passenger plane at 40,000 feet.",
      popularity: 568.194,
      poster_path: "/46sp1Z9b2PPTgCMyA87g9aTLUXi.jpg",
      release_date: "2024-01-10",
      title: "Lift",
      video: false,
      vote_average: 6.1,
      vote_count: 172,
    },
    {
      adult: false,
      backdrop_path: "/sRLC052ieEzkQs9dEtPMfFxYkej.jpg",
      genre_ids: [878, 18, 28],
      id: 848326,
      original_language: "en",
      original_title: "Rebel Moon - Part One: A Child of Fire",
      overview:
        "When a peaceful colony on the edge of the galaxy finds itself threatened by the armies of the tyrannical Regent Balisarius, they dispatch Kora, a young woman with a mysterious past, to seek out warriors from neighboring planets to help them take a stand.",
      popularity: 552.621,
      poster_path: "/ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg",
      release_date: "2023-12-15",
      title: "Rebel Moon - Part One: A Child of Fire",
      video: false,
      vote_average: 6.4,
      vote_count: 1228,
    },
    {
      adult: false,
      backdrop_path: "/1X7vow16X7CnCoexXh4H4F2yDJv.jpg",
      genre_ids: [80, 18, 36],
      id: 466420,
      original_language: "en",
      original_title: "Killers of the Flower Moon",
      overview:
        "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.",
      popularity: 535.607,
      poster_path: "/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
      release_date: "2023-10-18",
      title: "Killers of the Flower Moon",
      video: false,
      vote_average: 7.5,
      vote_count: 1899,
    },
    {
      adult: false,
      backdrop_path: "/15BnuDQ8pYRmLqPZKAk5vIhUu9J.jpg",
      genre_ids: [37, 53, 28],
      id: 843380,
      original_language: "en",
      original_title: "Dead for a Dollar",
      overview:
        "In 1897, veteran bounty hunter Max Borlund is deep into Mexico where he encounters professional gambler and outlaw Joe Cribbens — a sworn enemy he sent to prison years before. Max is on a mission to find and return Rachel Kidd, the wife of a wealthy businessman, who as the story is told to Max, has been abducted by Buffalo Soldier Elijah Jones. Max is ultimately faced with a showdown to save honor.",
      popularity: 529.629,
      poster_path: "/1AnXfjxFqMsQmUPSvt9YxUJhfFw.jpg",
      release_date: "2022-09-30",
      title: "Dead for a Dollar",
      video: false,
      vote_average: 5.7,
      vote_count: 186,
    },
    {
      adult: false,
      backdrop_path: "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
      genre_ids: [16, 10751, 12, 14, 35],
      id: 502356,
      original_language: "en",
      original_title: "The Super Mario Bros. Movie",
      overview:
        "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
      popularity: 486.066,
      poster_path: "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
      release_date: "2023-04-05",
      title: "The Super Mario Bros. Movie",
      video: false,
      vote_average: 7.7,
      vote_count: 7797,
    },
    {
      adult: false,
      backdrop_path: "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
      genre_ids: [28, 80, 53],
      id: 385687,
      original_language: "en",
      original_title: "Fast X",
      overview:
        "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
      popularity: 475.072,
      poster_path: "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
      release_date: "2023-05-17",
      title: "Fast X",
      video: false,
      vote_average: 7.2,
      vote_count: 4704,
    },
    {
      adult: false,
      backdrop_path: "/sLdlUypLzpQiJvO2dmqx5J7rigP.jpg",
      genre_ids: [27, 53, 9648],
      id: 1118595,
      original_language: "en",
      original_title: "The Jester",
      overview:
        "A malevolent being known as The Jester terrorizes the inhabitants of a small town on Halloween night, including two estranged sisters who must come together to find a way to defeat this evil entity.",
      popularity: 473.044,
      poster_path: "/jsOaCojcuxktg8w1UQkoFfn1y1g.jpg",
      release_date: "2023-09-20",
      title: "The Jester",
      video: true,
      vote_average: 6.2,
      vote_count: 131,
    },
    {
      adult: false,
      backdrop_path: "/9jPoyxjiEYPylUIMI3Ntixf8z3M.jpg",
      genre_ids: [16, 12, 35, 10751],
      id: 520758,
      original_language: "en",
      original_title: "Chicken Run: Dawn of the Nugget",
      overview:
        "A band of fearless chickens flock together to save poultry-kind from an unsettling new threat: a nearby farm that's cooking up something suspicious.",
      popularity: 465.193,
      poster_path: "/exNtEY8QUuQh9e23wSQjkPxKIU3.jpg",
      release_date: "2023-12-08",
      title: "Chicken Run: Dawn of the Nugget",
      video: false,
      vote_average: 7.2,
      vote_count: 460,
    },
  ],
  total_pages: 44219,
  total_results: 884367,
};
const war = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg",
      genre_ids: [36, 10752, 18],
      id: 753342,
      original_language: "en",
      original_title: "Napoleon",
      overview:
        "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.",
      popularity: 2367.318,
      poster_path: "/jE5o7y9K6pZtWNNMEw3IdpHuncR.jpg",
      release_date: "2023-11-22",
      title: "Napoleon",
      video: false,
      vote_average: 6.5,
      vote_count: 1193,
    },
    {
      adult: false,
      backdrop_path: "/oQ429AcD85ttxvOxAaYpETnAsW0.jpg",
      genre_ids: [28, 10752],
      id: 918692,
      original_language: "ru",
      original_title: "Гранит",
      overview:
        'Mozambique requests from Russia is being helped in the fight against militants of the "Islamic State" and a special group led by a commander with the call sign Granit is coming to the country.',
      popularity: 421.156,
      poster_path: "/zLJn4U2qlWIzlFP5SsyFJUDQjfs.jpg",
      release_date: "2021-12-29",
      title: "Granit",
      video: false,
      vote_average: 5,
      vote_count: 3,
    },
    {
      adult: false,
      backdrop_path: "/c12Kz0L9QDEWunXP6ZsPP0srGy0.jpg",
      genre_ids: [28, 10752],
      id: 877013,
      original_language: "en",
      original_title: "Hell Hath No Fury",
      overview:
        "Branded a traitor by her countrymen, French national Marie DuJardin is rescued by American soldiers on one condition: to survive, she must lead them to a cache of gold - before the Nazis return to claim it for themselves.",
      popularity: 296.881,
      poster_path: "/wltdRZfeKDux9yKThlGKwjWhUil.jpg",
      release_date: "2021-11-05",
      title: "Hell Hath No Fury",
      video: false,
      vote_average: 6.6,
      vote_count: 85,
    },
    {
      adult: false,
      backdrop_path: "/S3EIcOUQYxgd3QzjOo2rZJ2MN8.jpg",
      genre_ids: [28, 18, 10752],
      id: 554600,
      original_language: "hi",
      original_title: "Uri: The Surgical Strike",
      overview:
        "Following the roguish terrorist attacks at Uri Army Base camp in Kashmir, India takes the fight to the enemy, in its most successful covert operation till date with one and only one objective of avenging their fallen heroes.",
      popularity: 131.366,
      poster_path: "/yNySAgpAnWmPpYinim9E0tUzJWG.jpg",
      release_date: "2019-01-11",
      title: "Uri: The Surgical Strike",
      video: false,
      vote_average: 7.1,
      vote_count: 340,
    },
    {
      adult: false,
      backdrop_path: "/9ZlGiEKmcYrrxmiQEJDhjeT2kEW.jpg",
      genre_ids: [28, 12, 10752],
      id: 1061181,
      original_language: "ja",
      original_title: "キングダム 運命の炎",
      overview:
        "To defend their kingdom against a sudden invasion, a mighty general returns to the battlefield alongside a war orphan, now grown up, who dreams of glory.",
      popularity: 128.451,
      poster_path: "/60eYZkkksgKeeAV8fAAKQslZZnH.jpg",
      release_date: "2023-07-28",
      title: "Kingdom III: The Flame of Destiny",
      video: false,
      vote_average: 7.6,
      vote_count: 90,
    },
    {
      adult: false,
      backdrop_path: "/iaMIylLoN7Y3CvrA0pg2ZFKjk26.jpg",
      genre_ids: [10752, 18, 28],
      id: 1047925,
      original_language: "en",
      original_title: "Come Out Fighting",
      overview:
        "In WWII, a squad of U.S. African-American soldiers are sent on a rescue mission behind enemy lines to locate their lost commanding officer and a downed fighter pilot.",
      popularity: 116.945,
      poster_path: "/sERwJxz0sqsbcUoTm66l9pI6HcH.jpg",
      release_date: "2023-05-19",
      title: "Come Out Fighting",
      video: false,
      vote_average: 5.2,
      vote_count: 28,
    },
    {
      adult: false,
      backdrop_path: "/pBdQ4iorzRV2G38mdS6rzrmUfMA.jpg",
      genre_ids: [28, 10752, 37],
      id: 840326,
      original_language: "fi",
      original_title: "Sisu",
      overview:
        "Deep in the wilderness of Lapland, Aatami Korpi is searching for gold but after he stumbles upon Nazi patrol, a breathtaking and gold-hungry chase through the destroyed and mined Lapland wilderness begins.",
      popularity: 116.186,
      poster_path: "/ygO9lowFMXWymATCrhoQXd6gCEh.jpg",
      release_date: "2023-01-27",
      title: "Sisu",
      video: false,
      vote_average: 7.5,
      vote_count: 1657,
    },
    {
      adult: false,
      backdrop_path: "/yQIBS8B9l2qXoPoPtxSXvH7CfoT.jpg",
      genre_ids: [18, 36, 10752],
      id: 324786,
      original_language: "en",
      original_title: "Hacksaw Ridge",
      overview:
        "WWII American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first Conscientious Objector in American history to receive the Congressional Medal of Honor.",
      popularity: 110.877,
      poster_path: "/jcStBvbQt78tPeId5hC7a9jcDOK.jpg",
      release_date: "2016-10-07",
      title: "Hacksaw Ridge",
      video: false,
      vote_average: 8.2,
      vote_count: 12959,
    },
    {
      adult: false,
      backdrop_path: "/uSUjIzqKyebAd2wqDyb11Ya4wch.jpg",
      genre_ids: [28, 10752],
      id: 1062482,
      original_language: "en",
      original_title: "Condor's Nest",
      overview:
        "American war veteran Will Spalding has tracked the sadistic Nazi Colonel who executed his bomber crew during WWII to a remote location in South America. But he is in for more than he bargained for when he uncovers a secret Nazi headquarters known as the Condor's Nest.",
      popularity: 106,
      poster_path: "/aBAsCMzsbGlFtQFqeWsKWM6hvOE.jpg",
      release_date: "2023-01-27",
      title: "Condor's Nest",
      video: false,
      vote_average: 5.7,
      vote_count: 15,
    },
    {
      adult: false,
      backdrop_path: "/eTvN54pd83TrSEOz6wbsXEJktCV.jpg",
      genre_ids: [10752, 28, 53],
      id: 882569,
      original_language: "en",
      original_title: "Guy Ritchie's The Covenant",
      overview:
        "During the war in Afghanistan, a local interpreter risks his own life to carry an injured sergeant across miles of grueling terrain.",
      popularity: 99.316,
      poster_path: "/kVG8zFFYrpyYLoHChuEeOGAd6Ru.jpg",
      release_date: "2023-04-19",
      title: "Guy Ritchie's The Covenant",
      video: false,
      vote_average: 7.8,
      vote_count: 1999,
    },
    {
      adult: false,
      backdrop_path: "/kdbLf3aTQsEXqYlH9vA4fzmnSFz.jpg",
      genre_ids: [10752, 18, 28],
      id: 228150,
      original_language: "en",
      original_title: "Fury",
      overview:
        "In the last months of World War II, as the Allies make their final push in the European theatre, a battle-hardened U.S. Army sergeant named 'Wardaddy' commands a Sherman tank called 'Fury' and its five-man crew on a deadly mission behind enemy lines. Outnumbered and outgunned, Wardaddy and his men face overwhelming odds in their heroic attempts to strike at the heart of Nazi Germany.",
      popularity: 95.123,
      poster_path: "/pfte7wdMobMF4CVHuOxyu6oqeeA.jpg",
      release_date: "2014-10-15",
      title: "Fury",
      video: false,
      vote_average: 7.5,
      vote_count: 11259,
    },
    {
      adult: false,
      backdrop_path: "/tj7mp7uWjVw5N73G5Hwm1bkMOcD.jpg",
      genre_ids: [28, 10752],
      id: 975902,
      original_language: "en",
      original_title: "Boudica",
      overview:
        "Inspired by events in A.D. 60, Boudica follows the eponymous Celtic warrior who rules the Iceni people alongside her husband Prasutagus. When he dies at the hands of Roman soldiers, Boudica’s kingdom is left without a male heir and the Romans seize her land and property.  Driven to the edge of madness and determined to avenge her husband’s death, Boudica rallies the various tribes from the region and wages an epic war against the mighty Roman empire.",
      popularity: 81.469,
      poster_path: "/adMcxfUonnm9RvPImGHy25wYUks.jpg",
      release_date: "2023-10-26",
      title: "Boudica",
      video: false,
      vote_average: 6,
      vote_count: 98,
    },
    {
      adult: false,
      backdrop_path: "/8YURPHUqD2ODIffxPf8sG5l5UC7.jpg",
      genre_ids: [12, 36, 10752, 28],
      id: 652,
      original_language: "en",
      original_title: "Troy",
      overview:
        "In year 1250 B.C. during the late Bronze age, two emerging nations begin to clash. Paris, the Trojan prince, convinces Helen, Queen of Sparta, to leave her husband Menelaus, and sail with him back to Troy. After Menelaus finds out that his wife was taken by the Trojans, he asks his brother Agamemnon to help him get her back. Agamemnon sees this as an opportunity for power. They set off with 1,000 ships holding 50,000 Greeks to Troy.",
      popularity: 76.496,
      poster_path: "/a07wLy4ONfpsjnBqMwhlWTJTcm.jpg",
      release_date: "2004-05-13",
      title: "Troy",
      video: false,
      vote_average: 7.2,
      vote_count: 9578,
    },
    {
      adult: false,
      backdrop_path: "/csu96RxWGh2tReD9gYQRdUOSuUE.jpg",
      genre_ids: [28, 18, 10752],
      id: 1076487,
      original_language: "en",
      original_title: "Warhorse One",
      overview:
        "A gunned down Navy SEAL Master Chief must guide a child to safety through a gauntlet of hostile Taliban insurgents and survive the brutal Afghanistan wilderness.",
      popularity: 73.285,
      poster_path: "/jP2ik17jvKiV5sGEknMFbZv7WAe.jpg",
      release_date: "2023-06-30",
      title: "Warhorse One",
      video: false,
      vote_average: 7.2,
      vote_count: 215,
    },
    {
      adult: false,
      backdrop_path: "/9fOfsVHZHig6MHPHczv0zMY6cKc.jpg",
      genre_ids: [28, 53, 10752, 18],
      id: 1880,
      original_language: "en",
      original_title: "Red Dawn",
      overview:
        "It is the dawn of World War III. In mid-western America, a group of teenagers band together to defend their town—and their country—from invading Soviet forces.",
      popularity: 70.79,
      poster_path: "/a2GkHcioc2QEFJbQk1NTB85u3vD.jpg",
      release_date: "1984-08-10",
      title: "Red Dawn",
      video: false,
      vote_average: 6.3,
      vote_count: 728,
    },
    {
      adult: false,
      backdrop_path: "/ulMscezy9YX0bhknvJbZoUgQxO5.jpg",
      genre_ids: [18, 878, 10752],
      id: 281338,
      original_language: "en",
      original_title: "War for the Planet of the Apes",
      overview:
        "Caesar and his apes are forced into a deadly conflict with an army of humans led by a ruthless Colonel. After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind. As the journey finally brings them face to face, Caesar and the Colonel are pitted against each other in an epic battle that will determine the fate of both their species and the future of the planet.",
      popularity: 70.498,
      poster_path: "/mMA1qhBFgZX8O36qPPTC016kQl1.jpg",
      release_date: "2017-07-11",
      title: "War for the Planet of the Apes",
      video: false,
      vote_average: 7.2,
      vote_count: 8216,
    },
    {
      adult: false,
      backdrop_path: "/3f92DMBTFqr3wgXpfxzrb0qv8nG.jpg",
      genre_ids: [18, 36, 10752],
      id: 424,
      original_language: "en",
      original_title: "Schindler's List",
      overview:
        "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
      popularity: 69.516,
      poster_path: "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
      release_date: "1993-12-15",
      title: "Schindler's List",
      video: false,
      vote_average: 8.6,
      vote_count: 15005,
    },
    {
      adult: false,
      backdrop_path: "/1Jpkm9qZcsT0mSyVXgs4VlGjPNI.jpg",
      genre_ids: [18, 53, 10752],
      id: 16869,
      original_language: "en",
      original_title: "Inglourious Basterds",
      overview:
        'In Nazi-occupied France during World War II, a group of Jewish-American soldiers known as "The Basterds" are chosen specifically to spread fear throughout the Third Reich by scalping and brutally killing Nazis. The Basterds, lead by Lt. Aldo Raine soon cross paths with a French-Jewish teenage girl who runs a movie theater in Paris which is targeted by the soldiers.',
      popularity: 67.13,
      poster_path: "/7sfbEnaARXDDhKm0CZ7D7uc2sbo.jpg",
      release_date: "2009-08-02",
      title: "Inglourious Basterds",
      video: false,
      vote_average: 8.2,
      vote_count: 21192,
    },
    {
      adult: false,
      backdrop_path: "/kZZ9JuZ5CMvH0Y2LwboekvXIHqQ.jpg",
      genre_ids: [18, 10752],
      id: 49046,
      original_language: "de",
      original_title: "Im Westen nichts Neues",
      overview:
        "Paul Baumer and his friends Albert and Muller, egged on by romantic dreams of heroism, voluntarily enlist in the German army. Full of excitement and patriotic fervour, the boys enthusiastically march into a war they believe in. But once on the Western Front, they discover the soul-destroying horror of World War I.",
      popularity: 66.98,
      poster_path: "/2IRjbi9cADuDMKmHdLK7LaqQDKA.jpg",
      release_date: "2022-10-07",
      title: "All Quiet on the Western Front",
      video: false,
      vote_average: 7.7,
      vote_count: 3370,
    },
    {
      adult: false,
      backdrop_path: "/4B6bYj7gr5wQBvQQhDwr6tzJyGR.jpg",
      genre_ids: [10752, 28, 18],
      id: 966220,
      original_language: "uk",
      original_title: "Снайпер. Білий ворон",
      overview:
        "Mykola is an eccentric pacifist who wants to be useful to humanity. When the war begins at Donbass, Mykola’s naive world is collapsing as the militants kill his pregnant wife and burn his home to the ground. Recovered, he makes a cardinal decision and gets enlisted in a sniper company. Having met his wife’s killers, he emotionally breaks down and arranges “sniper terror” for the enemy. He’s saved from a senseless death by his instructor who himself gets mortally wounded. The death of a friend leaves a “scar” and Mykola is ready to sacrifice his life.",
      popularity: 63.873,
      poster_path: "/295gZzTXMvuiIG0U19h4M44PXxI.jpg",
      release_date: "2022-05-03",
      title: "Sniper: The White Raven",
      video: false,
      vote_average: 7.7,
      vote_count: 595,
    },
  ],
  total_pages: 499,
  total_results: 9961,
};
const Drama = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg",
      genre_ids: [36, 10752, 18],
      id: 753342,
      original_language: "en",
      original_title: "Napoleon",
      overview:
        "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.",
      popularity: 2367.318,
      poster_path: "/jE5o7y9K6pZtWNNMEw3IdpHuncR.jpg",
      release_date: "2023-11-22",
      title: "Napoleon",
      video: false,
      vote_average: 6.5,
      vote_count: 1193,
    },
    {
      adult: false,
      backdrop_path: "/md848EEPm3dHZOqwGxxTVwH2vu5.jpg",
      genre_ids: [18, 36],
      id: 906126,
      original_language: "es",
      original_title: "La sociedad de la nieve",
      overview:
        "On October 13, 1972, Uruguayan Air Force Flight 571, chartered to take a rugby team to Chile, crashes into a glacier in the heart of the Andes.",
      popularity: 1353.286,
      poster_path: "/2e853FDVSIso600RqAMunPxiZjq.jpg",
      release_date: "2023-12-13",
      title: "Society of the Snow",
      video: false,
      vote_average: 8,
      vote_count: 902,
    },
    {
      adult: false,
      backdrop_path: "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
      genre_ids: [18, 36],
      id: 872585,
      original_language: "en",
      original_title: "Oppenheimer",
      overview:
        "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
      popularity: 553.94,
      poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      release_date: "2023-07-19",
      title: "Oppenheimer",
      video: false,
      vote_average: 8.1,
      vote_count: 6150,
    },
    {
      adult: false,
      backdrop_path: "/12kuwLnMvQJAdTQQ3zGE1dbfFDh.jpg",
      genre_ids: [18, 878, 28],
      id: 695721,
      original_language: "en",
      original_title: "The Hunger Games: The Ballad of Songbirds & Snakes",
      overview:
        "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
      popularity: 512.448,
      poster_path: "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
      release_date: "2023-11-15",
      title: "The Hunger Games: The Ballad of Songbirds & Snakes",
      video: false,
      vote_average: 7.2,
      vote_count: 1490,
    },
    {
      adult: false,
      backdrop_path: "/sRLC052ieEzkQs9dEtPMfFxYkej.jpg",
      genre_ids: [878, 18, 28],
      id: 848326,
      original_language: "en",
      original_title: "Rebel Moon - Part One: A Child of Fire",
      overview:
        "When a peaceful colony on the edge of the galaxy finds itself threatened by the armies of the tyrannical Regent Balisarius, they dispatch Kora, a young woman with a mysterious past, to seek out warriors from neighboring planets to help them take a stand.",
      popularity: 490.739,
      poster_path: "/ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg",
      release_date: "2023-12-15",
      title: "Rebel Moon - Part One: A Child of Fire",
      video: false,
      vote_average: 6.4,
      vote_count: 1237,
    },
    {
      adult: false,
      backdrop_path: "/1X7vow16X7CnCoexXh4H4F2yDJv.jpg",
      genre_ids: [80, 18, 36],
      id: 466420,
      original_language: "en",
      original_title: "Killers of the Flower Moon",
      overview:
        "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.",
      popularity: 423.656,
      poster_path: "/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
      release_date: "2023-10-18",
      title: "Killers of the Flower Moon",
      video: false,
      vote_average: 7.5,
      vote_count: 1918,
    },
    {
      adult: false,
      backdrop_path: "/5cRw2QHQz5bp7W2KLdSpZoFoTTw.jpg",
      genre_ids: [18, 9648, 53, 878],
      id: 726209,
      original_language: "en",
      original_title: "Leave the World Behind",
      overview:
        "A family's getaway to a luxurious rental home takes an ominous turn when a cyberattack knocks out their devices—and two strangers appear at their door.",
      popularity: 370.25,
      poster_path: "/29rhl1xopxA7JlGVVsf1UHfYPvN.jpg",
      release_date: "2023-11-22",
      title: "Leave the World Behind",
      video: false,
      vote_average: 6.5,
      vote_count: 1616,
    },
    {
      adult: false,
      backdrop_path: "/nIiSCZvxDeCeXrOJnpbmRB8FcKH.jpg",
      genre_ids: [28, 80, 18],
      id: 79026,
      original_language: "en",
      original_title: "El padrino",
      overview:
        "In the streets of East Los Angeles, Manny is a formidable drug dealer. Impressed by his extravagant lifestyle and prowess, his young son, Kilo, yearns to follow in his footsteps. Kilo resolves to learn how to prosper in the drug world, and his new life as a dealer begins. In a world where a man wants everything, he may end up with nothing.",
      popularity: 332.375,
      poster_path: "/10J7EQ8WvMYku8lcZrLewV2Ko4I.jpg",
      release_date: "2004-09-27",
      title: "El padrino: The Latin Godfather",
      video: false,
      vote_average: 6.9,
      vote_count: 33,
    },
    {
      adult: false,
      backdrop_path: "/pGuxXuTPmpEtzEkRrYQ0rLgEJnI.jpg",
      genre_ids: [10749, 18],
      id: 1020006,
      original_language: "en",
      original_title: "Priscilla",
      overview:
        "When teenage Priscilla Beaulieu meets Elvis Presley at a party, the man who is already a meteoric rock-and-roll superstar becomes someone entirely unexpected in private moments: a thrilling crush, an ally in loneliness, a vulnerable best friend.",
      popularity: 301.519,
      poster_path: "/uDCeELWWpsNq7ErM61Yuq70WAE9.jpg",
      release_date: "2023-10-27",
      title: "Priscilla",
      video: false,
      vote_average: 6.9,
      vote_count: 232,
    },
    {
      adult: false,
      backdrop_path: "/dZzfAouqh1YOLhfF8QYbrqOhuK.jpg",
      genre_ids: [28, 18],
      id: 845861,
      original_language: "hi",
      original_title: "State of Siege: Temple Attack",
      overview:
        "Based on the true incident of the 2002 terrorist attack in Gujarat's Akshardham temple, the story revolves around the bravery of NSG commandos, who stood up for their country and their people in the worst of times.",
      popularity: 294.587,
      poster_path: "/ckghAN8FuYY2icUyJjVkKXiBrek.jpg",
      release_date: "2021-07-09",
      title: "State of Siege: Temple Attack",
      video: false,
      vote_average: 6.1,
      vote_count: 24,
    },
    {
      adult: false,
      backdrop_path: "/rrfBenawPGhkt5yvb124NSZwnAC.jpg",
      genre_ids: [18, 35, 53],
      id: 930564,
      original_language: "en",
      original_title: "Saltburn",
      overview:
        "Struggling to find his place at Oxford University, student Oliver Quick finds himself drawn into the world of the charming and aristocratic Felix Catton, who invites him to Saltburn, his eccentric family's sprawling estate, for a summer never to be forgotten.",
      popularity: 290.694,
      poster_path: "/qjhahNLSZ705B5JP92YMEYPocPz.jpg",
      release_date: "2023-11-16",
      title: "Saltburn",
      video: false,
      vote_average: 7.2,
      vote_count: 1182,
    },
    {
      adult: false,
      backdrop_path: "/lntyt4OVDbcxA1l7LtwITbrD3FI.jpg",
      genre_ids: [18, 10749],
      id: 1010581,
      original_language: "es",
      original_title: "Culpa mía",
      overview:
        "Noah must leave her city, boyfriend, and friends to move into William Leister's mansion, the flashy and wealthy husband of her mother Rafaela. As a proud and independent 17 year old, Noah resists living in a mansion surrounded by luxury. However, it is there where she meets Nick, her new stepbrother, and the clash of their strong personalities becomes evident from the very beginning.",
      popularity: 289.657,
      poster_path: "/w46Vw536HwNnEzOa7J24YH9DPRS.jpg",
      release_date: "2023-06-08",
      title: "My Fault",
      video: false,
      vote_average: 8,
      vote_count: 2140,
    },
    {
      adult: false,
      backdrop_path: "/zX9m8h33pHXcES7ttO8v0ThiYj7.jpg",
      genre_ids: [18, 28, 53],
      id: 1053592,
      original_language: "es",
      original_title: "Todos los nombres de Dios",
      overview:
        "After being implicated in a terrorist attack, Santi, a taxi driver, is taken hostage by one of the perpetrators.",
      popularity: 284.35,
      poster_path: "/n15gfcgwV0LVPSobrayZcFHcwN6.jpg",
      release_date: "2023-09-15",
      title: "All the Names of God",
      video: false,
      vote_average: 6.9,
      vote_count: 47,
    },
    {
      adult: false,
      backdrop_path: "/AprNYUAS2AJ3xVgg7Wwt00GVvsM.jpg",
      genre_ids: [16, 10751, 28, 878, 35, 18, 12],
      id: 893723,
      original_language: "en",
      original_title: "PAW Patrol: The Mighty Movie",
      overview:
        "A magical meteor crash lands in Adventure City and gives the PAW Patrol pups superpowers, transforming them into The Mighty Pups.",
      popularity: 257.787,
      poster_path: "/aTvePCU7exLepwg5hWySjwxojQK.jpg",
      release_date: "2023-09-21",
      title: "PAW Patrol: The Mighty Movie",
      video: false,
      vote_average: 7,
      vote_count: 279,
    },
    {
      adult: false,
      backdrop_path: "/3Ed9375VaD20Ko9Asf58wvP4PgT.jpg",
      genre_ids: [878, 35, 10749, 18],
      id: 889675,
      original_language: "en",
      original_title: "The Pod Generation",
      overview:
        "Set in a near future where AI is all the rage and nature is becoming a distant memory, Rachel and Alvy are a New York couple ready to take their relationship to the next level and start a family.",
      popularity: 246.168,
      poster_path: "/bJYYpb3dQUgJOavKUk8lkBFQhCS.jpg",
      release_date: "2023-08-11",
      title: "The Pod Generation",
      video: false,
      vote_average: 5.8,
      vote_count: 59,
    },
    {
      adult: false,
      backdrop_path: "/lzbrMjEnH34DzTfllRb6XxhlaZu.jpg",
      genre_ids: [35, 18],
      id: 81774,
      original_language: "fr",
      original_title: "Les Exploits d'un jeune Don Juan",
      overview:
        "It's 1914. Sixteen-year-old Roger returns home to spend his summer vacation. His initial efforts are unsuccessful, but World War I breaks out and men are seen marching off to battle. Roger goes overboard when he is presented with several amorous opportunities.",
      popularity: 241.772,
      poster_path: "/xvtRgQIRegLjsjaIkKQbh0hk3Qy.jpg",
      release_date: "1986-11-04",
      title: "Exploits of a Young Don Juan",
      video: false,
      vote_average: 5.6,
      vote_count: 175,
    },
    {
      adult: false,
      backdrop_path: "/88J6waYVTta8Qz3iX3qUeWNA5d5.jpg",
      genre_ids: [18, 10749],
      id: 447362,
      original_language: "en",
      original_title: "Life in a Year",
      overview:
        "A 17 year old finds out that his girlfriend is dying, so he sets out to give her an entire life, in the last year she has left.",
      popularity: 218.348,
      poster_path: "/bP7u19opmHXYeTCUwGjlLldmUMc.jpg",
      release_date: "2020-11-27",
      title: "Life in a Year",
      video: false,
      vote_average: 8.3,
      vote_count: 1614,
    },
    {
      adult: false,
      backdrop_path: "/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg",
      genre_ids: [28, 18],
      id: 361743,
      original_language: "en",
      original_title: "Top Gun: Maverick",
      overview:
        "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
      popularity: 207.756,
      poster_path: "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
      release_date: "2022-05-24",
      title: "Top Gun: Maverick",
      video: false,
      vote_average: 8.2,
      vote_count: 8090,
    },
    {
      adult: false,
      backdrop_path: "/v5UVi3bjHiz7T0PE6lqM2vL6Dls.jpg",
      genre_ids: [28, 18, 80],
      id: 835961,
      original_language: "en",
      original_title: "Snakehead",
      overview:
        "Sister Tse is brought to New York by a Snakehead, a human smuggler. Although she is indebted to the crime family responsible for her transport, her survival instincts help her gain favor with the matriarch, and she rises quickly in the ranks. Soon Tse must reconcile her success with her real reason for coming to America—to find the child that was taken from her. In the end, Sister Tse must draw on the strength she found in transforming her victimhood into power.",
      popularity: 207.244,
      poster_path: "/4EbeUgW9V5X4fabqWejxSZa4wtC.jpg",
      release_date: "2021-10-29",
      title: "Snakehead",
      video: false,
      vote_average: 6.2,
      vote_count: 18,
    },
    {
      adult: false,
      backdrop_path: "/X8yF6STUk5Zr5nAuLBJiio8Sxh.jpg",
      genre_ids: [18, 10749],
      id: 1143183,
      original_language: "tl",
      original_title: "Rewind",
      overview:
        "Mary loves John for as long as she can remember. But after years of marriage, John's priorities shift, leading to a strained relationship with Mary, which causes a tragic accident that takes away Mary's life. Until one day, John gets an extraordinary proposition - to rewind time and save the life of the woman he loves.",
      popularity: 204.856,
      poster_path: "/i8UjdAwezeFHHR4opNb3LxDCQWC.jpg",
      release_date: "2023-12-25",
      title: "Rewind",
      video: false,
      vote_average: 6.7,
      vote_count: 19,
    },
  ],
  total_pages: 10348,
  total_results: 206943,
};
const Horror = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/dvNrgldueQciabkYmlCnyhmaPoO.jpg",
      genre_ids: [28, 9648, 53, 27],
      id: 899445,
      original_language: "en",
      original_title: "Deep Fear",
      overview:
        "A solo trip aboard a yacht takes a terrifying turn when a woman encounters three drug traffickers clinging to the shattered remains of a boat. They soon force her to dive into shark-infested waters to retrieve kilos of cocaine from the sunken wreck.",
      popularity: 1143.446,
      poster_path: "/ruujFw7J0Nd3BSjbN3QODym82Qs.jpg",
      release_date: "2023-10-18",
      title: "Deep Fear",
      video: false,
      vote_average: 4.9,
      vote_count: 48,
    },
    {
      adult: false,
      backdrop_path: "/ktHEdqmMWC1wdfPRMRCTZe2OISL.jpg",
      genre_ids: [27, 9648, 53],
      id: 1071215,
      original_language: "en",
      original_title: "Thanksgiving",
      overview:
        "After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the holiday. Picking off residents one by one, what begins as random revenge killings are soon revealed to be part of a larger, sinister holiday plan.",
      popularity: 385.527,
      poster_path: "/f5f3TEVst1nHHyqgn7Z3tlwnBIH.jpg",
      release_date: "2023-11-16",
      title: "Thanksgiving",
      video: false,
      vote_average: 6.7,
      vote_count: 527,
    },
    {
      adult: false,
      backdrop_path: "/zqwmvcLjif1xMWiUEFMiPtojy8i.jpg",
      genre_ids: [28, 53, 27],
      id: 786573,
      original_language: "en",
      original_title: "HellKat",
      overview:
        "A fallen MMA fighter must win a netherworld no-holds-barred death tournament against man, beast and demon to save her soul.",
      popularity: 351.861,
      poster_path: "/gs8sv4M0sdJWwbedlq9XvCPFKXs.jpg",
      release_date: "2021-02-02",
      title: "HellKat",
      video: false,
      vote_average: 5.8,
      vote_count: 22,
    },
    {
      adult: false,
      backdrop_path: "/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg",
      genre_ids: [27, 9648],
      id: 507089,
      original_language: "en",
      original_title: "Five Nights at Freddy's",
      overview:
        "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
      popularity: 349.652,
      poster_path: "/7BpNtNfxuocYEVREzVMO75hso1l.jpg",
      release_date: "2023-10-25",
      title: "Five Nights at Freddy's",
      video: false,
      vote_average: 7.7,
      vote_count: 3180,
    },
    {
      adult: false,
      backdrop_path: "/bWIIWhnaoWx3FTVXv6GkYDv3djL.jpg",
      genre_ids: [878, 27, 28],
      id: 940721,
      original_language: "ja",
      original_title: "ゴジラ-1.0",
      overview:
        "In postwar Japan, a new terror rises. Will the devastated people be able to survive... let alone fight back?",
      popularity: 312.295,
      poster_path: "/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg",
      release_date: "2023-11-03",
      title: "Godzilla Minus One",
      video: false,
      vote_average: 8,
      vote_count: 271,
    },
    {
      adult: false,
      backdrop_path: "/k3VHSJzvAd40Rjx5jXeQeoEIdxh.jpg",
      genre_ids: [27, 53],
      id: 1008042,
      original_language: "en",
      original_title: "Talk to Me",
      overview:
        "When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.",
      popularity: 246.157,
      poster_path: "/kdPMUMJzyYAc4roD52qavX0nLIC.jpg",
      release_date: "2023-07-26",
      title: "Talk to Me",
      video: false,
      vote_average: 7.2,
      vote_count: 2130,
    },
    {
      adult: false,
      backdrop_path: "/5mzr6JZbrqnqD8rCEvPhuCE5Fw2.jpg",
      genre_ids: [28, 878, 27],
      id: 615656,
      original_language: "en",
      original_title: "Meg 2: The Trench",
      overview:
        "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
      popularity: 240.277,
      poster_path: "/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
      release_date: "2023-08-02",
      title: "Meg 2: The Trench",
      video: false,
      vote_average: 6.7,
      vote_count: 2828,
    },
    {
      adult: false,
      backdrop_path: "/cavK9ox37pxDg11RvJINMH63onU.jpg",
      genre_ids: [27, 53],
      id: 744857,
      original_language: "es",
      original_title: "Cuando acecha la maldad",
      overview:
        "Residents of a small rural town discover that a demon is about to be born among them. They desperately try to escape before the evil is born, but it may be too late.",
      popularity: 238.956,
      poster_path: "/2gimJ06p9tVR4P6jacZWcLcNEwA.jpg",
      release_date: "2023-10-05",
      title: "When Evil Lurks",
      video: false,
      vote_average: 7.4,
      vote_count: 387,
    },
    {
      adult: false,
      backdrop_path: "/vruRG9oFSC2QI3F6vLAsj1ND14S.jpg",
      genre_ids: [878, 28, 53, 27],
      id: 934194,
      original_language: "en",
      original_title: "Slash/Back",
      overview:
        "In a remote Arctic community, a group of Inuit girls fight off an alien invasion, all while trying to make it to the coolest party in town.",
      popularity: 231.76,
      poster_path: "/fmmRFQtsRrNOpmcfoxVIyE1LxxT.jpg",
      release_date: "2022-06-24",
      title: "Slash/Back",
      video: false,
      vote_average: 6.6,
      vote_count: 51,
    },
    {
      adult: false,
      backdrop_path: "/gvNmnvu13TPAewP54hvCyuHwNwR.jpg",
      genre_ids: [28, 27, 878],
      id: 920081,
      original_language: "en",
      original_title: "Megaboa",
      overview:
        "On a trip to Colombia, a group of college students encounter a fifty-foot boa constrictor, hungry for blood.",
      popularity: 223.239,
      poster_path: "/sAnAMv3eyQiGI1z2k8NsvH0Y6r5.jpg",
      release_date: "2021-11-26",
      title: "Megaboa",
      video: false,
      vote_average: 6.4,
      vote_count: 450,
    },
    {
      adult: false,
      backdrop_path: "/dZbLqRjjiiNCpTYzhzL2NMvz4J0.jpg",
      genre_ids: [27, 53, 9648],
      id: 951491,
      original_language: "en",
      original_title: "Saw X",
      overview:
        "Between the events of 'Saw' and 'Saw II', a sick and desperate John Kramer travels to Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his cancer, only to discover the entire operation is a scam to defraud the most vulnerable. Armed with a newfound purpose, the infamous serial killer returns to his work, turning the tables on the con artists in his signature visceral way through devious, deranged, and ingenious traps.",
      popularity: 208.305,
      poster_path: "/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg",
      release_date: "2023-09-27",
      title: "Saw X",
      video: false,
      vote_average: 7.4,
      vote_count: 1419,
    },
    {
      adult: false,
      backdrop_path: "/g8GKxnKPSRwdmrIkP2mk3xMXQnq.jpg",
      genre_ids: [28, 27],
      id: 879957,
      original_language: "en",
      original_title: "Wyrmwood: Apocalypse",
      overview:
        "In a zombie-infested Australian wasteland, soldier Rhys has dedicated his life to tracking and capturing survivors for the Surgeon General in hopes of finding a cure.",
      popularity: 202.586,
      poster_path: "/5FejR8s7E1BYkWRFZ9sPTNHKkxT.jpg",
      release_date: "2022-02-10",
      title: "Wyrmwood: Apocalypse",
      video: false,
      vote_average: 5.4,
      vote_count: 88,
    },
    {
      adult: false,
      backdrop_path: "/86ZUajqW0aSKGEIcVE51cKmIYVF.jpg",
      genre_ids: [27],
      id: 1162348,
      original_language: "en",
      original_title: "In Its Wake",
      overview:
        "Four twenty-somethings and three businessmen are hunted by a terrible monster, while a former minister prepares to do battle with the ancient evil.",
      popularity: 199.399,
      poster_path: "/uGvtZ2OuC2t4jyivuh5oZb7LCB1.jpg",
      release_date: "2023-08-08",
      title: "In Its Wake",
      video: false,
      vote_average: 3,
      vote_count: 1,
    },
    {
      adult: false,
      backdrop_path: "/vQpvNDc0AFao8BbWyXDFVVrqiZj.jpg",
      genre_ids: [27],
      id: 853387,
      original_language: "en",
      original_title: "Lord of Misrule",
      overview:
        "When the daughter of the town's new priest goes missing during the harvest festival, a desperate search begins, uncovering the town's dark history and resurfacing tales of a mysterious, malevolent spirit that demands sacrifice.",
      popularity: 195.962,
      poster_path: "/eCNJuGsCNdf2yf4F3UcDg1WZTbo.jpg",
      release_date: "2023-10-26",
      title: "Lord of Misrule",
      video: false,
      vote_average: 6.2,
      vote_count: 18,
    },
    {
      adult: false,
      backdrop_path: "/ruKNVJFViAyR4jguVboFXTskMOe.jpg",
      genre_ids: [53, 28, 27],
      id: 1028703,
      original_language: "en",
      original_title: "The OctoGames",
      overview:
        '8 contestants compete in 8 deadly, classic children\'s games. They seek fame beyond their wildest dreams, competing for the chance to take over the YouTube channel of the famous yet elusive masked YouTuber known only as "JaxPro".',
      popularity: 195.362,
      poster_path: "/qGz5rffXhegQH5PGUDiObqoOt06.jpg",
      release_date: "2022-10-07",
      title: "The OctoGames",
      video: false,
      vote_average: 3,
      vote_count: 12,
    },
    {
      adult: false,
      backdrop_path: "/36Lt4NXw5ucLDobs7dvJCIniXCp.jpg",
      genre_ids: [27],
      id: 807172,
      original_language: "en",
      original_title: "The Exorcist: Believer",
      overview:
        "When two girls disappear into the woods and return three days later with no memory of what happened to them, the father of one girl seeks out Chris MacNeil, who's been forever altered by what happened to her daughter fifty years ago.",
      popularity: 193.438,
      poster_path: "/qVKirUdmoex8SdfUk8WDDWwrcCh.jpg",
      release_date: "2023-10-04",
      title: "The Exorcist: Believer",
      video: false,
      vote_average: 6.1,
      vote_count: 755,
    },
    {
      adult: false,
      backdrop_path: "/pLm9j7o5InoWaG2tlaQABYR2cAx.jpg",
      genre_ids: [27, 9648, 53],
      id: 968051,
      original_language: "en",
      original_title: "The Nun II",
      overview:
        "In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.",
      popularity: 183.645,
      poster_path: "/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
      release_date: "2023-09-06",
      title: "The Nun II",
      video: false,
      vote_average: 6.8,
      vote_count: 1634,
    },
    {
      adult: false,
      backdrop_path: "/AucuqDaUW4z1oT5XyL71qwRY2F6.jpg",
      genre_ids: [27, 53],
      id: 983507,
      original_language: "no",
      original_title: "Meg, deg & Frank",
      overview:
        "Christian - a millionaire heir, meets Sigrid - a young student, on a dating app. They hit it off quickly, but there's only one problem: Christian lives with Frank, a man who dresses up and constantly acts like a dog.",
      popularity: 172.32,
      poster_path: "/9DPG1gxLwV2oyFdHq3SnISsWbse.jpg",
      release_date: "2022-06-03",
      title: "Good Boy",
      video: false,
      vote_average: 6.7,
      vote_count: 133,
    },
    {
      adult: false,
      backdrop_path: "/4MUfDtBqUFqotGF5RJOfNfoBTLo.jpg",
      genre_ids: [28, 27, 14],
      id: 951546,
      original_language: "en",
      original_title: "Reign of Chaos",
      overview:
        "When the world is gripped by a plague unleashed by the evil lord Chaos, and humans are turned into rabid creatures, mankind can only be saved by three young women, descendants of a Goddess, with the power to stop Chaos' evil.",
      popularity: 167.994,
      poster_path: "/nTMmpvR9TyV631tpFr4FtYxG0FC.jpg",
      release_date: "2022-04-12",
      title: "Reign of Chaos",
      video: false,
      vote_average: 5.9,
      vote_count: 34,
    },
    {
      adult: false,
      backdrop_path: "/klb3yODwKMRle19EcvdeSatEZL7.jpg",
      genre_ids: [27, 53],
      id: 1072342,
      original_language: "en",
      original_title: "Night Swim",
      overview:
        "Forced into early retirement by a degenerative illness, former baseball player Ray Waller moves into a new house with his wife and two children. He hopes that the backyard swimming pool will be fun for the kids and provide physical therapy for himself. However, a dark secret from the home's past soon unleashes a malevolent force that drags the family into the depths of inescapable terror.",
      popularity: 152.23,
      poster_path: "/gSkfBGdxdialBMM7P02V4hcI6Ij.jpg",
      release_date: "2024-01-03",
      title: "Night Swim",
      video: false,
      vote_average: 5.1,
      vote_count: 41,
    },
  ],
  total_pages: 2299,
  total_results: 45966,
};
const Home = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const { t } = useTranslation();
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setMovies(war);
    }, 2000);
  }, []);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
      <SwiperContainer
        centeredSlidesBounds={true}
        slidesPerView={1}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: false,
        }}
        freeMode={{
          enabled: true,
          momentum: true,
          momentumRatio: 0.2,
          sticky: true,
        }}
        className={"h-[500px] mb-24"}
      >
        {heroes.results.map((card, index) => {
          return (
            <SwiperSlide key={index} className=" relative overflow-hidden ">
              <SwiperContainer.SwiperHeroImage
                {...card}
                className=" h-[300px]  overflow-hidden"
              />
              <div className="absolute flex flex-col top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-black to-transparent">
                <div className="container mx-auto flex-grow gap-3 justify-end flex-col flex">
                  <div className="join flex flex-col  gap-3">
                    <ProgressCircle
                      className={"w-32 text-xl font-bold text-white join-item"}
                      percent={card.vote_average * 10}
                      steps={20}
                    />
                  </div>
                  <h1 className="text-4xl md:text-6xl text-white  bottom-12">
                    {card.title}
                  </h1>
                  <p className="text-white opacity-70 font-light">
                    {card.overview}
                  </p>
                  <span className="text-white badge-outline badge">
                    {card.release_date}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </SwiperContainer>
      <div className="container mx-auto">
        <TypeOfMovieHeader
          title={t("generic.generic")}
          className={"uppercase light_text_shadow"}
        />

        <GenresNav />
      </div>
      <div className="container mx-auto">
        <TypeOfMovieHeader
          title={t("generic.war")}
          className={"uppercase light_text_shadow"}
        />
      </div>
      <MovieContainer data={movies?.results} loading={!movies} />

      <div className=" container mx-auto">
        <TypeOfMovieHeader
          title={t("generic.drama")}
          className={"uppercase light_text_shadow"}
        />
      </div>
      <SwiperContainer
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1300: {
            slidesPerView: 5,
          },
        }}
      >
        {Drama.results.map((card, index) => {
          return (
            <SwiperSlide key={index}>
              <SwiperContainer.SwiperCard {...card} />
            </SwiperSlide>
          );
        })}
      </SwiperContainer>
      <div className="container mx-auto">
        <TypeOfMovieHeader
          title={t("generic.horror")}
          className={"uppercase light_text_shadow"}
        />
      </div>
      <SwiperContainer
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1300: {
            slidesPerView: 5,
          },
        }}
      >
        {Horror.results.map((card, index) => {
          return (
            <SwiperSlide key={index}>
              <SwiperContainer.SwiperCard {...card} />
            </SwiperSlide>
          );
        })}
      </SwiperContainer>
    </div>
  );
};

export default Home;
