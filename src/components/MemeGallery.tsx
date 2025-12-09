import Image from "next/image";
import { MEME_DESCRIPTION, MEME_HEADER, MEMES } from "~/data";
import { TwitterTweetEmbed } from "react-twitter-embed";

const MemeGallery = () => {
  return (
    <section id="memes" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-cat-brown mb-4 font-comic">
            {MEME_HEADER}
          </h2>
          <p className="text-lg text-cat-brown-light">{MEME_DESCRIPTION}</p>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-6">
          {MEMES.map((meme, index) => (
            <div
              key={index}
              className="p-4 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-full overflow-hidden rounded-lg">
                {meme.type === "image" && (
                 <Image
  width={500}
  height={500}
  src={meme.src || "s1.png"} // fallback if undefined
  alt={meme.alt || "Meme image"}
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
/>

                )}

                {meme.type === "twitter" && meme.twitterUrl && (
                  <div className="w-full">
                    <TwitterTweetEmbed
                      tweetId={getTweetId(meme.twitterUrl)}
                      options={{ width: "100%" }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemeGallery;

// Helper function to extract Tweet ID from URL
function getTweetId(url: string) {
  const match = url.match(/status\/(\d+)/);
  return match ? match[1] : "";
}
