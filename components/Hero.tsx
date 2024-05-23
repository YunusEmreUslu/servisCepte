import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image 
          src="/aaa.png"
          alt="servis"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Servis sonunda elinizin altında!</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Artık servisçiler ve servis şirketleriyle uğraşmak zorunda değilsiniz. Uygulamamız ile hem ödemelerinizi hem de servislerinizi takip edebilirsiniz!
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            18 Bin
            <span className="regular-16 lg:regular-20 ml-1"> Beş Yıldızlı Yorum</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Uygulamayı indirin" 
            variant="btn_green" 
          />
          <Button 
            type="button" 
            title="Nasıl Çalışır?" 
            icon="/yellowBusSvg.svg"
            variant="btn_white_text" 
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Konum</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Tunalı Hilmi Caddesi</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Mesafe</p>
              <p className="bold-20 text-white">3.28 km</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Varış Süresi</p>
              <p className="bold-20 text-white">8 dk</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero