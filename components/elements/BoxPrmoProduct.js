import Image from "next/image";
import Link from "next/link";

const BoxPrmoProduct = () => {

  const promotions = [
    {
      id: 1,
      imgSrc: '/img/s-1.jpg',
      pageUrl:'/products/under-5000',
      title: 'Gift under 5k',
      subtitle: 'Explore Collection',
    },
    {
      id: 2,
      imgSrc: '/img/s-2.jpg',
      pageUrl:'/products/under-10000',
      title: 'Gift under 10k',
      subtitle: 'Explore Collection',
    },
    {
      id: 3,
      imgSrc: '/img/s-3.jpg',
      pageUrl:'/products/above-10000',
      title: 'Above 10K',
      subtitle: 'Explore Collection',
    },
  ];






  return (
    <>
      {promotions.map((promotion) => (
        <div className="col-lg-4 col-md-6" key={promotion.id}>
          <div className="sliver-prom-box-one">
            <a href={promotion.pageUrl} >
              <Image
                src={promotion.imgSrc}
                alt="prom-banner"
                width={520}
                height={445}
              />
              <div className="flo">
              <h3>{promotion.title}</h3>
              <span>{promotion.subtitle}</span>
              </div>
            </a>
          </div>
        </div>
      ))}
    </>


  );
}

export default BoxPrmoProduct;
