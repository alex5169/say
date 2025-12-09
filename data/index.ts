// Global 
export const NAME = "SAY";
export const DESCRIPTION = `${NAME}, "Say The Word On The Beat."`;
export const SHORT_DESCRIPTION = `Say The Word On The Beat`;

export const MAIN_IMAGE = "/s1.jpg";

// CA
export const CONTRACT_ADDRESS = "HyALADvPqyn6oDNkDSnKmKKNgtYb3QTgnvVnAw4Epump";
export const CONTRACT_ADDRESS_HREF = `https://raydium.io/swap/?outputCurrency=${CONTRACT_ADDRESS}`;

// Social
export const TWITTER = "https://twitter.com/";
export const TELEGRAM = "https://t.me/";
export const DEXSCREENER = "https://dexscreener.com/solana/";
export const DEXTOOLS = "https://www.dextools.io/app/en/solana/pair-explorer";

// MEME Section
export const MEME_HEADER = `${NAME} memes`;
export const MEME_DESCRIPTION = `The infinite meme collection - "there's always a ${NAME} for that."`;

// UPDATED MEMES (supports images + Twitter videos)
export const MEMES = [
  // Images
  { type: "image", src: "/m1.png", alt: "vaping meme" },
  { type: "image", src: "/m2.png", alt: "anime Zoro meme" },
  

  // Twitter videos — ADD YOUR LINKS HERE
  {
    type: "twitter",
    twitterUrl: "https://x.com/ohlancesol/status/1997684412037898461?s=20"
  },
  {
    type: "twitter",
    twitterUrl: "https://x.com/i/status/1997682874594525480"
  },
  {
    type: "twitter",
    twitterUrl: "https://x.com/ohlancesol/status/1997752212278161895?s=20"
  },
];

// Page metadata
export const META_TITLE = "Cooker - Most Memeable Dog";
export const META_DESCRIPTION =
  "The question isn’t whether we can bring back the past. It’s whether we have the courage to rebuild the future. We are the lost, the forgotten, the disillusioned—and that’s our strength. Together, we can bring back the spirit of the Q4 bull run. Together, we can be the meme, the movement, the change. The community was always the real meme. And now, it’s time to bring it back.";
export const META_FAV_ICON = "/W.jpg";

// Carousel
export const CAROUSEL_IMAGES = [
  "/s1.jpg",
  "/s2.png",
  "/s3.png",
  "/s4.png",
  "/s42.png",
  "/s6.png",
];
export const CAROUSEL_DOTS = true;
export const CAROUSEL_SLIDE_INTERVAL = 2000;
