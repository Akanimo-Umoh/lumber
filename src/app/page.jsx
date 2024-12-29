import Image from "next/image";
import Nav from "./components/nav";
import Footer from "./components/footer";

export default function Home() {
  const testimonials = [
    {
      image: "/img1.png",
      message:
        "I was skeptical at first, but Lumber’s solutions has increased my sales by 20%! It’s easy to use, and my customers feel safe",
      name: "John Carter",
      role: "E-commerce Entrepreneur",
    },
    {
      image: "/img2.png",
      message:
        "Lumber’s device was a game-changer for our event. We could accept payments quickly and easily without any technical issues.",
      name: "James D",
      role: "Event Organizer",
    },
    {
      image: "/img3.png",
      message:
        "Thanks to Lumber, I accept payment anytime, anywhere, and my customers love the convenience.",
      name: "Jerry Nathaniel",
      role: "Small business owner",
    },
  ];

  const socials = [
    {
      icon: "/Facebook.svg",
      iconUrl: "https://facebook.com",
      name: "facebook",
      width: "10",
    },
    {
      icon: "/Twitter.svg",
      iconUrl: "https://x.com",
      name: "twitter",
      width: "18",
    },
    {
      icon: "/Instagram.svg",
      iconUrl: "https://instagram.com",
      name: "instagram",
      width: "18",
    },
    {
      icon: "/LinkedIn.svg",
      iconUrl: "https://linkedin.com",
      name: "linkedin",
      width: "18",
    },
    {
      icon: "/YouTube.svg",
      iconUrl: "https://youtube.com",
      name: "youtube",
      width: "18",
    },
  ];

  const products = [
    {
      url: "Features",
    },
    {
      url: "Pricing",
    },
    {
      url: "Request a demo",
    },
    {
      url: "Reviews",
    },
    {
      url: "Updates",
    },
  ];

  const company = [
    {
      url: "About",
    },
    {
      url: "Contact us",
    },
    {
      url: "Offices",
    },
    {
      url: "Culture",
    },
    {
      url: "Blog",
    },
  ];

  const supports = [
    {
      url: "Getting started",
    },
    {
      url: "Help center",
    },
    {
      url: "Server status",
    },
    {
      url: "Report a bug",
    },
    {
      url: "Chat support",
    },
  ];

  const downloads = [
    {
      url: "iOS",
    },
    {
      url: "Android",
    },
    {
      url: "Mac",
    },
    {
      url: "Windows",
    },
    {
      url: "Chrome",
    },
  ];

  return (
    <div className="bg-black">
      <Nav />

      <section className="mt-12 lg:flex lg:items-center lg:justify-between lg:px-[110px] lg:gap-9">
        <div className="">
          <div className="px-6 lg:px-0">
            <p className="font-bold text-white text-[44px] leading-[50px] text-center lg:text-left xl:text-[56px] xl:leading-[66px]">
              Financial <br className="md:hidden" /> Solutions
              <br className="hidden lg:block" /> Tailored For You.
            </p>
          </div>

          <div className="px-6 mt-4 lg:px-0">
            <p className="text-white text-[14px] leading-6 text-center lg:text-left xl:text-lg xl:leading-[30px] xl:w-[574px]">
              Meet Lumber , the cutting-edge fintech company revolutionizing
              payments with our portable, cloud-based device.
            </p>
          </div>

          <div className="mt-[32px] flex items-center justify-center gap-3 sm:gap-6 lg:justify-start lg:mt-11">
            <a
              href=""
              className="font-bold text-white bg-links py-[18px] px-6 flex items-center justify-between gap-2 rounded-[30px] text-base leading-[18px] xl:px-9 xl:py-6 lg:bg-white lg:text-links lg:rounded-[40px]"
            >
              Get started
              <Image
                className="flex lg:hidden"
                src="/arrow.svg"
                width={18}
                height={18}
                alt="arrow"
                priority
              />
              <Image
                className="hidden lg:flex"
                src="/darkArrow.svg"
                width={18}
                height={18}
                alt="arrow"
                priority
              />
            </a>

            <a
              href=""
              className="text-links leading-[18px] text-base px-6 py-[18px] border-border rounded-[30px] bg-white lg:rounded-[40px] xl:px-9 xl:py-6 lg:bg-transparent lg:border lg:border-white lg:text-white"
            >
              Request a demo
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center mt-[50px]">
          <Image
            className="lg:hidden"
            src="/payment.png"
            width={370}
            height={382}
            alt="payments"
            priority
          />
          <Image
            className="hidden lg:flex"
            src="/payments.png"
            width={706}
            height={592}
            alt="payments"
            priority
          />
        </div>
      </section>

      <section className="mt-[80px] text-center lg:text-left lg:px-[110px] lg:flex lg:flex-row-reverse lg:gap-[100px] lg:justify-between lg:pb-[150px] xl:py-[150px]">
        <div className="flex flex-col items-center lg:items-start justify-center lg:justify-normal lg:w-[500px] lg:flex-col">
          <div className="hidden lg:flex lg:mt-[73px]">
            <Image
              src="/teddy.png"
              width={72}
              height={72}
              alt="phone"
              priority
            />
          </div>
          <p className="text-[28px] leading-[38px] font-bold text-white lg:mt-6 lg:text-links lg:text-[36px] lg:leading-[48px]">
            About Us
          </p>
          <p className="mt-[40px] leading-7 text-text px-6 lg:px-0 lg:text-2xl lg:leading-[30px] lg:mt-[62px]">
            At Lumber, we embody bravery, affordability and innovation. Our team
            of experts is dedicated to making payments easier and faster.
          </p>
          <p className="mt-[47px] text-text flex items-center justify-center gap-[6px] lg:hidden">
            Learn more{" "}
            <Image
              src="/bArrow.svg"
              width={20}
              height={20}
              alt="learn"
              priority
            />
          </p>
        </div>

        <div className="mt-[87px] flex items-center justify-center pb-[140px] lg:mt-0 lg:pb-0">
          <Image
            className="lg:hidden"
            src="/atm.png"
            width={334}
            height={275}
            alt="atm"
            priority
          />
          <Image
            className="hidden lg:flex"
            src="/atm.png"
            width={555}
            height={500}
            alt="atm"
            priority
          />
        </div>
      </section>

      <section className="hidden xl:flex lg:flex-col lg:justify-center lg:items-center lg:px-[110px] pb-[150px]">
        <div className="lg:mt-[150px]">
          <p className="lg:font-bold lg:text-4xl lg:leading-[46px] lg:text-links lg:text-center">
            What our clients say
          </p>
          <p className="lg:text-xl lg:mt-4 lg:leading-[30px] lg:text-text">
            Our clients all across the globe trust us. You too can trust us.
          </p>
        </div>

        <div className="flex mt-20 gap-[28px] items-center justify-between">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-3xl"
            >
              <Image
                src={testimonial.image}
                width={388}
                height={388}
                alt={testimonial.name}
                priority
              />

              <div className="flex flex-col mx-10 mt-10 pb-[60px] h-[270px] w-[308px] justify-between">
                <div>
                  <p className="text-lg leading-[30px] text-links">
                    {testimonial.message}
                  </p>
                </div>

                <div>
                  <p className="text-lg text-links leading-[18px] font-bold mt-3">
                    {testimonial.name}
                  </p>

                  <p className="text-lg leading-[18px] text-[#8D8BA7] mt-3">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="hidden xl:block px-[110px] pb-[132px]">
        <div className="mt-[120px] flex justify-between">
          <div className="flex flex-col justify-between gap-10">
            <div className="flex items-center gap-2">
              <Image
                src="logo.svg"
                width={22}
                height={100}
                alt="lumber logo"
                priority
              />
              <p className="text-3xl text-white md:text-4xl font-[family-name:var(--font-ribeye)] leading-[41px]">
                Lumber
              </p>
            </div>

            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col text-lg text-links">
                <a href="">Secure payments</a>
                <a href="">Cloud technology</a>
                <a href="">Portable Convenience</a>
              </div>

              <div className="flex gap-4">
                {socials.map((social, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center bg-white rounded-lg w-9 h-9"
                  >
                    <a href={social.iconUrl} className="">
                      <Image
                        src={social.icon}
                        width={social.width}
                        height={18}
                        alt={social.name}
                        priority
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-20">
            <div className="flex flex-col gap-10">
              <p className="text-xl font-bold leading-5 text-sub">Product</p>
              <div className="text-lg text-links leading-[18px] flex flex-col gap-[18px]">
                {products.map((product, index) => (
                  <a href="" key={index}>
                    {product.url}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <p className="text-xl font-bold leading-5 text-sub">Company</p>
              <div className="text-lg text-links leading-[18px] flex flex-col gap-[18px]">
                {company.map((comp, index) => (
                  <a href="" key={index}>
                    {comp.url}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <p className="text-xl font-bold leading-5 text-sub">Support</p>
              <div className="text-lg text-links leading-[18px] flex flex-col gap-[18px]">
                {supports.map((support, index) => (
                  <a href="" key={index}>
                    {support.url}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <p className="text-xl font-bold leading-5 text-sub">Downloads</p>
              <div className="text-lg text-links leading-[18px] flex flex-col gap-[18px]">
                {downloads.map((download, index) => (
                  <a href="" key={index}>
                    {download.url}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hidden">
        <Footer />
      </section>
    </div>
  );
}
