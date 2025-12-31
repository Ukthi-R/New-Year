import React, { useState } from "react";
import bg1 from "./assets/image1.jpg";
import bg2 from "./assets/image2.jpg";

function App() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="position-relative overflow-hidden">

      {/* Background layers */}
      <div
        className={`bg-layer ${!revealed ? "visible" : "hidden"}`}
        style={{ 
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div
        className={`bg-layer ${revealed ? "visible" : "hidden"}`}
        style={{ backgroundImage: `url(${bg2})` }}
      ></div>

      <div className="fireworks"></div>

      {/* Content */}
      <div className="page text-white">
        <div className="center-wrap">
        <div
          className="card-layer text-center p-4 p-md-5 rounded shadow-lg"
          style={{ background: "rgba(0,0,0,0.65)", maxWidth: "90%" }}
        >
          {!revealed ? (
            <>
              <h1 className="display-4 fw-bold text-warning mb-3 iceland-regular">
                🎉 Happy New Year 2026 🎉
              </h1>
              <button
                className="btn btn-outline-light btn-lg mt-2"
                onClick={() => setRevealed(true)}
              >
                Reveal ✨
              </button>
            </>
          ) : (
            <p className="fs-4 fade-in show">
              Hiiee da, ena solradhu nu therile. Nalalladhe yosi, nalladhe nadakum. Yepo ena nadakanum nu iruko adhu kandipa nadanthe nadakanum. Trust the time, like it all works. Unnaku enala panna num nu thonudho just go for it with full confidence and belief, like you are going to get it in any chance. Unnoda yella depression, sorrows, yella bad thoughts put it to god and he will look after it very well. You will see how things change wen u fully trust on god and believe in his path. Aproma vera ena... Rombo tension pannikadhe. Like how ipo oru business onnu arambikrom means, the process is tuff getting the stuffs needed for the business to run, workers, money, investment, partnership and many more struggles. But adhu yella kadandhu vandhaka u will see the profits, business development. Kastama iruku and profit ila nu nenacha u won't get what you wanted. Adha naala bridge aa cross pannidu, dont be stuck in the middle of the bridge. Vera ena... Seri ok idhodha niruthikren aproma thitta pore ena advise panniye orture panra nu. Indha year unnaku yella nalla vishayam nadakatum. Nee aasa pattadhu yellame kedaikum. 🕉️ Om Nama Shivaya 🕉️ ANd once again Happiesttttttt Newwwwwwwwww Yearrrrrr ❤️✨
            </p>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
