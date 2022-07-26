import { cdnBase } from '../config/index';
const imgPrefix = cdnBase;

const defaultDesc = [`${imgPrefix}/goods/details-1.png`];

const allGoods = [
  {
    OwnerId: '88888888',
    OwnerName:'ODL',
    Id: '0',
    title: '梨花小猫三月大阿毛',
    primaryImage: 'https://c-ssl.duitang.com/uploads/item/202003/04/20200304095333_A3UQw.jpeg',
    tags:[],
    likeList:[]
  },
  {
    OwnerId: '88888888',
    OwnerName:'ODL',
    Id: '1',
    title: '梨花小猫三月大阿毛',
    primaryImage: 'https://c-ssl.duitang.com/uploads/item/202003/04/20200304095333_A3UQw.jpeg',
    tags:[],
    likeList:[]
  },
  {
    OwnerId: '88888888',
    OwnerName:'ODL',
    Id: '2',
    title: '梨花小猫三月大阿毛0',
    primaryImage: 'https://c-ssl.duitang.com/uploads/item/202003/04/20200304095333_A3UQw.jpeg',
    tags:[],
    likeList:[]
  },
  {
    OwnerId: '88888888',
    OwnerName:'ODL',
    Id: '3',
    title: '梨花小猫三月大阿毛1',
    primaryImage: 'https://c-ssl.duitang.com/uploads/item/202003/04/20200304095333_A3UQw.jpeg',
    tags:[],
    likeList:[]
  },
  {
    OwnerId: '88888888',
    OwnerName:'ODL',
    Id: '4',
    title: '梨花小猫三月大阿毛2',
    primaryImage: 'https://c-ssl.duitang.com/uploads/item/202003/04/20200304095333_A3UQw.jpeg',
    tags:[],
    likeList:[]
  },
  {
    OwnerId: '88888888',
    OwnerName:'ODL',
    Id: '5',
    title: '梨花小猫三月大阿毛3',
    primaryImage: 'https://c-ssl.duitang.com/uploads/item/202003/04/20200304095333_A3UQw.jpeg',
    tags:[],
    likeList:[]
  },
 
];

/**
 * @param {string} id
 * @param {number} [available] 库存, 默认1
 */
export function genGood(id, available = 1) {
  const specID = ['0', '1'];
  if (specID.indexOf(id) > -1) {
    return allGoods.filter((good) => good.Id === id)[0];
  }
  const item = allGoods[id % allGoods.length];
  return {
    ...item,
    spuId: `${id}`,
    available: available,
    desc: item?.desc || defaultDesc,
    images: item?.images || [item?.primaryImage],
  };
}
