export const movies = [
  {
    id: 1,
    name: "Interstellar",
    categories: ["Sci-Fi", "Drama"],
    poster: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
    banner: "https://external-preview.redd.it/VnuONXAMolp-S45sBs2XnPeUbuW_-TrgyGzSsmovq2g.jpg?auto=webp&s=e7be46f8ff9ffb2ca148d3627f6b7772aadd3e3e",
    durationMinutes: 169,
    rating: 5.6,
    cinemaRoom: 1,
    showDates: [
      { date: "2025-01-05", times: ["14:00", "18:30", "22:00"] },
      { date: "2025-01-06", times: ["16:00", "20:00"] }
    ],
    price: 12.5,
    availableSeats: 80,
    description: "Astronauts travel through a wormhole in space to save humanity from extinction."
  },

  {
    id: 2,
    name: "Inception",
    categories: ["Sci-Fi", "Action", "Thriller"],
    poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    banner: "https://live.staticflickr.com/4038/4686112993_efe13b4937_h.jpg",
    durationMinutes: 148,
    rating: 8.8,
    cinemaRoom: 2,
    showDates: [
      { date: "2025-01-05", times: ["15:30", "19:00"] },
      { date: "2025-01-07", times: ["17:00", "21:30"] }
    ],
    price: 11,
    availableSeats: 60,
    description: "A master thief invades dreams to steal secrets and perform an impossible heist."
  },

  {
    id: 3,
    name: "The Dark Knight",
    categories: ["Action", "Crime", "Drama"],
    poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    banner: "https://live.staticflickr.com/2222/2452159541_23ca8f2df0_b.jpg",
    durationMinutes: 152,
    rating: 9.0,
    cinemaRoom: 3,
    showDates: [{ date: "2025-01-06", times: ["14:30", "18:00", "21:45"] }],
    price: 10,
    availableSeats: 100,
    description: "Batman faces the Joker, a villain who thrives on chaos and anarchy."
  },

  {
    id: 4,
    name: "Avatar",
    categories: ["Sci-Fi", "Adventure"],
    poster: "https://m.media-amazon.com/images/M/MV5BZDYxY2I1OGMtN2Y4MS00ZmU1LTgyNDAtODA0MzAyYjI0N2Y2XkEyXkFqcGc@._V1_.jpg",
    banner: "https://patrickgblog.wordpress.com/wp-content/uploads/2011/09/avatar-banner.jpg",
    durationMinutes: 162,
    rating: 5.9,
    cinemaRoom: 4,
    showDates: [
      { date: "2025-01-05", times: ["13:00", "17:30"] },
      { date: "2025-01-08", times: ["20:00"] }
    ],
    price: 13,
    availableSeats: 90,
    description: "A soldier becomes torn between his mission and protecting an alien world."
  },

  {
    id: 5,
    name: "Joker",
    categories: ["Drama", "Crime", "Thriller"],
    poster: "https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg",
    banner: "https://w0.peakpx.com/wallpaper/700/371/HD-wallpaper-joker-movie-8k-banner.jpg",
    durationMinutes: 122,
    rating: 8.4,
    cinemaRoom: 2,
    showDates: [{ date: "2025-01-06", times: ["16:15", "19:45"] }],
    price: 10.5,
    availableSeats: 50,
    description: "A troubled man spirals into madness and becomes Gotham’s most feared criminal."
  },

  {
    id: 6,
    name: "Avengers: Endgame",
    categories: ["Action", "Adventure", "Sci-Fi"],
    poster: "https://cdn.marvel.com/content/2x/avengersendgame_lob_crd_05_0.jpg",
    banner: "https://cdn.marvel.com/content/2x/avengersendgame_lob_mas_mob_01.jpg",
    durationMinutes: 181,
    rating: 4.4,
    cinemaRoom: 1,
    showDates: [{ date: "2025-01-07", times: ["15:00", "19:00"] }],
    price: 14,
    availableSeats: 120,
    description: "The Avengers assemble one last time to undo Thanos’ catastrophic actions."
  },

  {
    id: 7,
    name: "Titanic",
    categories: ["Drama", "Romance"],
    poster: "https://m.media-amazon.com/images/I/811lT7khIrL._AC_UF1000,1000_QL80_.jpg",
    banner: "https://i0.wp.com/ucpac.org/wp-content/uploads/2023/11/Untitled-design-2023-11-27T130710.767.png?fit=1280%2C720&ssl=1",
    durationMinutes: 195,
    rating: 7.8,
    cinemaRoom: 5,
    showDates: [{ date: "2025-01-08", times: ["18:00"] }],
    price: 9,
    availableSeats: 70,
    description: "A tragic love story unfolds aboard the ill-fated Titanic."
  },

  {
    id: 8,
    name: "Gladiator",
    categories: ["Action", "Drama"],
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Gladiator_%282000_film_poster%29.png/250px-Gladiator_%282000_film_poster%29.png",
    banner: "https://flixchatter.net/wp-content/uploads/2024/11/gladiatorii-banner.jpg",
    durationMinutes: 155,
    rating: 8.5,
    cinemaRoom: 3,
    showDates: [{ date: "2025-01-09", times: ["20:30"] }],
    price: 10,
    availableSeats: 85,
    description: "A betrayed Roman general rises as a gladiator to seek revenge."
  },

  {
    id: 9,
    name: "The Matrix",
    categories: ["Sci-Fi", "Action"],
    poster: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
    banner: "https://www.whatisthematrix.com/assetsNew/images/banner_img_mobile.jpg",
    durationMinutes: 136,
    rating: 8.7,
    cinemaRoom: 4,
    showDates: [{ date: "2025-01-10", times: ["18:45"] }],
    price: 11,
    availableSeats: 95,
    description: "A hacker discovers reality is a simulation controlled by machines."
  },

  {
    id: 10,
    name: "Forrest Gump",
    categories: ["Drama", "Romance"],
    poster: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
    banner: "https://lagandragons.com/wp-content/uploads/2020/09/Forrest-Gump-Movie-Poster.jpg",
    durationMinutes: 142,
    rating: 8.8,
    cinemaRoom: 2,
    showDates: [{ date: "2025-01-11", times: ["17:00"] }],
    price: 9.5,
    availableSeats: 60,
    description: "A simple man lives an extraordinary life through love and kindness."
  },

  {
    id: 11,
    name: "The Godfather",
    categories: ["Crime", "Drama"],
    poster: "https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg",
    banner: "https://lagandragons.com/wp-content/uploads/2020/09/Forrest-Gump-Movie-Poster.jpg",
    durationMinutes: 175,
    rating: 9.2,
    cinemaRoom: 1,
    showDates: [{ date: "2025-01-12", times: ["19:00"] }],
    price: 12,
    availableSeats: 75,
    description: "The powerful story of a mafia family and its legacy of crime."
  },

  {
    id: 12,
    name: "Parasite",
    categories: ["Thriller", "Drama"],
    poster: "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    banner: "https://mcauliffebirdwatch.com/wp-content/uploads/2020/03/parasite.jpg",
    durationMinutes: 132,
    rating: 8.6,
    cinemaRoom: 5,
    showDates: [{ date: "2025-01-12", times: ["21:00"] }],
    price: 11,
    availableSeats: 55,
    description: "A poor family schemes to infiltrate a wealthy household with deadly consequences."
  },

  {
    id: 13,
    name: "Whiplash",
    categories: ["Drama", "Music"],
    poster: "https://m.media-amazon.com/images/I/914trm0WbIL._AC_UF894,1000_QL80_.jpg",
    banner: "https://www.broadway.org.uk/sites/default/files/styles/banner_crop/public/2025-02/whiplash-banner.jpg?h=8b51f0b4&itok=mUrpdLm-",
    durationMinutes: 106,
    rating: 8.5,
    cinemaRoom: 4,
    showDates: [{ date: "2025-01-13", times: ["20:00"] }],
    price: 9,
    availableSeats: 65,
    description: "A young drummer faces brutal mentorship in pursuit of musical greatness."
  },

  {
    id: 14,
    name: "Mad Max: Fury Road",
    categories: ["Action", "Adventure"],
    poster: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/288/2025/07/16150658/hA2ple9q4qnwxp3hKVNhroipsir-683x1024.jpg",
    banner: "https://www.scifinow.co.uk/wp-content/uploads/2015/04/mad_max_fury_road_ver9_xlg.jpg",
    durationMinutes: 120,
    rating: 8.1,
    cinemaRoom: 3,
    showDates: [{ date: "2025-01-14", times: ["22:00"] }],
    price: 11,
    availableSeats: 90,
    description: "Survivors flee a tyrant in a high-octane post-apocalyptic chase."
  },

  {
    id: 15,
    name: "La La Land",
    categories: ["Romance", "Music", "Drama"],
    poster: "https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png",
    banner: "https://s29288.pcdn.co/wp-content/uploads/2020/07/la-la-land-poster-750x422-1.jpg",
    durationMinutes: 128,
    rating: 8.0,
    cinemaRoom: 2,
    showDates: [{ date: "2025-01-15", times: ["19:30"] }],
    price: 10,
    availableSeats: 70,
    description: "Two dreamers fall in love while chasing success in Los Angeles."
  },

  {
    id: 16,
    name: "Dune",
    categories: ["Sci-Fi", "Adventure"],
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dune_%282021_film%29.jpg/250px-Dune_%282021_film%29.jpg",
    banner: "https://dunenewsnet.com/wp-content/uploads/2021/08/Dune-Movie-Official-Poster-banner-feature.jpg",
    durationMinutes: 155,
    rating: 8.2,
    cinemaRoom: 5,
    showDates: [{ date: "2025-01-16", times: ["18:00"] }],
    price: 13,
    availableSeats: 110,
    description: "A noble family becomes entangled in a war over the galaxy’s most valuable resource."
  },

  {
    id: 17,
    name: "Fight Club",
    categories: ["Drama", "Thriller"],
    poster: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
    banner: "https://lagandragons.com/wp-content/uploads/2020/09/Forrest-Gump-Movie-Poster.jpg",
    durationMinutes: 139,
    rating: 8.8,
    cinemaRoom: 1,
    showDates: [{ date: "2025-01-17", times: ["21:30"] }],
    price: 10,
    availableSeats: 85,
    description: "An office worker forms an underground fight club with explosive consequences."
  },

  {
    id: 18,
    name: "The Shawshank Redemption",
    categories: ["Drama", "Action", "Crime", "Romance"],
    poster: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
    banner: "https://static1.squarespace.com/static/6051097ac70efd5b35c89223/605b9a3a50f11f568fc0ab08/65de4237409d590aa6c5f83e/1714257091962/ShawshankLandscape1.jpg?format=1500w",
    durationMinutes: 142,
    rating: 9.3,
    cinemaRoom: 2,
    showDates: [{ date: "2025-01-18", times: ["20:00"] }],
    price: 10,
    availableSeats: 95,
    description: "Two imprisoned men bond over years, finding hope and redemption."
  },

  {
    id: 19,
    name: "Spider-Man: No Way Home",
    categories: ["Action", "Adventure"],
    poster: "https://m.media-amazon.com/images/I/81rEhhwbubL._AC_SY679_.jpg",
    banner: "https://i.redd.it/oqduw7io0o281.jpg",
    durationMinutes: 148,
    rating: 8.3,
    cinemaRoom: 4,
    showDates: [{ date: "2025-01-19", times: ["19:00"] }],
    price: 12,
    availableSeats: 130,
    description: "Spider-Man faces villains from across the multiverse."
  },

  {
    id: 20,
    name: "Oppenheimer",
    categories: ["Drama", "History"],
    poster: "https://m.media-amazon.com/images/M/MV5BM2RmYmVmMzctMzc5Ny00MmNiLTgxMGUtYjk1ZDRhYjA2YTU0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    banner: "https://www.thebanner.org/sites/default/files/styles/article_detail_header/public/2023-08/MM-1207%20Oppenheimer.jpg?itok=0U-jOPJC",
    durationMinutes: 180,
    rating: 8.6,
    cinemaRoom: 3,
    showDates: [{ date: "2025-01-20", times: ["18:30"] }],
    price: 14,
    availableSeats: 100,
    description: "The story of J. Robert Oppenheimer and the creation of the atomic bomb."
  }
];
