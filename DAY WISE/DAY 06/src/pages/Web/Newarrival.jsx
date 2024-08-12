
const Newarrival = () => {
  const products = [
    {
      imgSrc: "https://dhb8p39s5y2g5.cloudfront.net/rib/1721836931784_FM3677-1_1.jpg",
      caption: "Rose Gold Embelleshe gown",
      price: "Rs.7,000 ",
    },
    {
      imgSrc: "https://dhb8p39s5y2g5.cloudfront.net/rib/1721836902274_FM3668-3_1.jpg",
      caption: "Yellow Lehenga",
      price: "Rs 13,450",
    },
    {
      imgSrc: "https://dhb8p39s5y2g5.cloudfront.net/rib/1721836898497_FM3665-3_1.jpg",
      caption: "Multicolour Printed Lehenga",
      price: "Rs 13,400",
    },
    {
      imgSrc: "https://dhb8p39s5y2g5.cloudfront.net/rib/1721836875887_FM3658-3_1.jpg",
      caption: "Navy Blue Lehenga Set",
      price: "Rs 6,720",
    },
    {
      imgSrc: "https://dhb8p39s5y2g5.cloudfront.net/rib/1721836871383_FM3656-3_1.jpg",
      caption: "White lehebga",
      price: "Rs 11,200",
    },
    {
      imgSrc: "https://dhb8p39s5y2g5.cloudfront.net/rib/1721836865527_FM3653-3_1.jpg",
      caption: "Uranian Blue lehenga",
      price: "Rs 33,600",
    },
    {
      imgSrc: "https://dhb8p39s5y2g5.cloudfront.net/rib/1721836851764_FM3645-1_1.jpg",
      caption: "Sparkling white gown",
      price: "Rs 5,600",
    },
    {
      imgSrc: "https://dhb8p39s5y2g5.cloudfront.net/rib/1721836677334_FM3600-5_1.jpg",
      caption: "Red velvet Bridal lehenga",
      price: "Rs 16,800",
    },
    {
      imgSrc: "https://dhb8p39s5y2g5.cloudfront.net/rib/1721836478534_FM3497-4_1.jpg",
      caption: "Heavy Embroidery Gown",
      price: "Rs 19,600",
    },
  ];
  return (
    <div className="arrival">
       <div id="columns" className="columns_5">
      {products.map((product, index) => (
        <figure key={index}>
          <img src={product.imgSrc} alt={product.caption} />
          <figcaption>{product.caption}</figcaption>
          <span className="price">{product.price}</span>
          <a className="button" href="#">Buy Now</a>
        </figure>
      ))}
    </div>
    </div>
  )
}

export default Newarrival