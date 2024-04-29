import Image from 'next/image'

interface BannerProps {
  title: string
  image: string
}

const Banner: React.FC<BannerProps> = ({ title, image }) => {
  return (
    <>
      <div className="relative h-[363px]">
        <Image
          src={image}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          alt={title}
        />
        <h1 className="font-sans text-[56px] font-regular absolute left-0 bottom-0 pb-12 pl-[80.5px]">
          {title}
        </h1>
      </div>
    </>
  )
}

export default Banner
