import React, { useEffect } from "react";
import gsap from "gsap";

export default function MediaEffect() {
  useEffect(() => {
    // Если твой script.js просто объявляет функцию или запускает GSAP анимации,
    // он сработает автоматически при импорте.
    // Если там глобальные переменные/инициализация, можешь вызвать их здесь:
    if (window.initMediaEffect) {
      window.initMediaEffect();
    }
  }, []);

  return (
    <section className="mwg_effect000">


      <div className="medias">
        {[...Array(12)].map((_, i) => (
          <div className="media" key={i}>
            <img src={`/assets/medias/${String(i + 1).padStart(2, "0")}.png`} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}
