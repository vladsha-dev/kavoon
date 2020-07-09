import goodsData from '../data/goods';

const Goods = goodsData.map((goodData) => {
  return {
    name: goodData.name,
    volume: goodData.volume,
    price: goodData.price,
    image: goodData.image,
    srcSet: goodData.srcSet,
    href: goodData.href,
  };
});

export default Goods;
