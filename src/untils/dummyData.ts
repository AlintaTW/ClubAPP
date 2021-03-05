import {Images, Icons} from '@src/assets';

export const headerDatas = [
  {
    id: '1',
    title: '近距離 美語互動',
    banner: Images.dummy.header,
  },
  {
    id: '2',
    title: '近距離 美語互動',
    banner: Images.dummy.header,
  },
  {
    id: '3',
    title: '近距離 美語互動',
    banner: Images.dummy.header,
  },
  {
    id: '4',
    title: '近距離 美語互動',
    banner: Images.dummy.header,
  },
];

export const buttonsBarDatas = [
  {
    id: '1',
    icon: Icons.dummy.cap,
    name: 'CAP',
  },
  {
    id: '2',
    icon: Icons.dummy.phone,
    name: '電話美語',
  },
  {
    id: '3',
    icon: Icons.dummy.faceCall,
    name: 'Face Call',
  },
  {
    id: '4',
    icon: Icons.dummy.inactivitieAmerican,
    name: '美語活動',
  },
  {
    id: '5',
    icon: Icons.dummy.activitieAmerican,
    name: '線上美語活動',
  },
  {
    id: '6',
    icon: Icons.dummy.activitieAmerican,
    name: 'WFC Library',
  },
  {
    id: '7',
    icon: Icons.dummy.familyGrowthAcademy,
    name: '家庭 成長學苑',
  },
  {
    id: '8',
    icon: Icons.dummy.momDadVideo,
    name: 'Mom & Dad Video',
  },
  {
    id: '9',
    icon: Icons.dummy.point,
    name: '點數兌換',
  },
  {
    id: '10',
    icon: Icons.dummy.video,
    name: 'Director Video',
  },
  {
    id: '11',
    icon: Icons.dummy.noviceGuideline,
    name: '新手上路',
  },
];

export const capData = {
  memberNo: 'S020855 ',
  memberName: '鄭如晶',
  points: 60,
  limitPoints: 100,
  children: [
    {
      childNo: 1,
      name: '林爰希 Lucy',
      birthday: '2012/06/24',
      photoUrl: '',
      capFinishedOfThisMonth: 0,
      capRest: 0,
      graduated: true,
      c01: [
        {
          itemFinishedByPercent: 15,
          subItemFInished: '0/241',
          totalItem: 13,
          totallSubItem: 241,
        },
      ],
      c02: [
        {
          itemFinishedByPercent: 0,
          subItemFInished: '0/395',
          totalItem: 14,
          totallSubItem: 395,
        },
      ],
      c03: [
        {
          itemFinishedByPercent: 0,
          subItemFInished: '0/230',
          totalItem: 13,
          totallSubItem: 230,
        },
      ],
      c04: [
        {
          itemFinishedByPercent: 0,
          subItemFInished: '0/140',
          totalItem: 13,
          totallSubItem: 140,
        },
      ],
      c05: [
        {
          itemFinishedByPercent: 0,
          subItemFInished: '0/172',
          totalItem: 14,
          totallSubItem: 172,
        },
      ],
      dwe: [
        {
          itemFinishedByPercent: 100,
          subItemFInished: '8/8',
          totalItem: 8,
          totallSubItem: 8,
        },
      ],
    },
  ],
};

export const event = [
  {
    id: '1',
    name: 'Pompom 的生日驚喜',
    time: '2020/11/15 (日) 17:30~18:30',
    image: Images.common.eventDefault,
    aduslts: 2,
    children: 3,
  },
];
