import Link from "next/link";
// styles
import sass from "@/new-portfolio/styles/sections/HomePage/Hero.module.scss";

const Hero = () => {
  return (
    <section className={`${sass.Hero}`} data-scroll-container>
      <div className={`${sass.layer1}`} data-scroll>
        <h6
          className={`${sass.quote} basic-text`}
          data-scroll
          data-scroll-speed="-1"
        >
          Привет (Ассаламу алейкум)! Я Абдулхаев Хуршид, Фулл Стек Разработчик, типо
          писатель, пытающийся понять и объяснять о жизни и разработки. Итак ..
        </h6>
        <img
          src="personal/About.jpg"
          alt=""
          className={`${sass.img} top-0 -right-[10%] -z-50`}
          data-scroll
          data-scroll-speed="1"
          data-scroll-delay="1"
          data-scroll-direction="horizontal"
        />
        <img
          src="/personal/IMG_3225.JPG"
          alt=""
          className={`${sass.img} bottom-0 left-0 -z-50`}
          data-scroll
          data-scroll-speed="-1"
          data-scroll-delay="1"
          data-scroll-direction="horizontal"
        />
      </div>
      <div className={`${sass.layer2} `} data-scroll data-scroll-speed="-5">
        <h1 className={`${sass.Heading} heading-text`} data-scroll>
          <span data-scroll>ようこそ！</span>
          <br />
          <span>Xush kelibsiz!</span>
        </h1>
        <Link href={`/about`} className={`${sass.Btn} inline-block btn`}>
        E rahmat )
        </Link>
      </div>
    </section>
  );
};

export default Hero;
