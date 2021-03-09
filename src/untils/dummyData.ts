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
    name: 'Face',
    detail: 'FACE_CALL',
  },
  {
    id: '4',
    icon: Icons.dummy.workInAmerican,
    name: '美語活動',
  },
  {
    id: '5',
    icon: Icons.dummy.onlineAmerican,
    name: '線上美語活動',
  },
  {
    id: '6',
    icon: Icons.dummy.wfcLibrary,
    name: 'WFC Library',
  },
  {
    id: '7',
    icon: Icons.dummy.familyGrowthAcademy,
    name: '家庭成長 學苑',
  },
  {
    id: '8',
    icon: Icons.dummy.video,
    name: 'Mom&Dad Video',
  },
  {
    id: '9',
    icon: Icons.dummy.points,
    name: '點數兌換',
  },
  {
    id: '10',
    icon: Icons.dummy.director,
    name: 'Director Video',
  },
  {
    id: '11',
    icon: Icons.dummy.novice,
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
      name: '林爰希',
      birthday: '2012/06/24',
      photoUrl: Images.dummy.avatar,
      capFinishedOfThisMonth: 0,
      capRest: 4,
      graduated: true,
      c01: [
        {
          itemFinishedByPercent: 100,
          subItemFInished: '13/241',
          totalItem: 13,
          totallSubItem: 241,
          finished: false,
        },
      ],
      c02: [
        {
          itemFinishedByPercent: 3.5,
          subItemFInished: '14/395',
          totalItem: 14,
          totallSubItem: 395,
          finished: false,
        },
      ],
      c03: [
        {
          itemFinishedByPercent: 5,
          subItemFInished: '13/230',
          totalItem: 13,
          totallSubItem: 230,
          finished: false,
        },
      ],
      c04: [
        {
          itemFinishedByPercent: 0,
          subItemFInished: '0/140',
          totalItem: 13,
          totallSubItem: 140,
          finished: false,
        },
      ],
      c05: [
        {
          itemFinishedByPercent: 0,
          subItemFInished: '0/172',
          totalItem: 14,
          totallSubItem: 172,
          finished: false,
        },
      ],
      dwe: [
        {
          itemFinishedByPercent: 0,
          subItemFInished: '0/8',
          totalItem: 8,
          totallSubItem: 8,
          finished: false,
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

export const onlineEvent = [
  {
    thumnail: Images.common.onlineEvent,
    videoUrl:
      'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1',
    title: 'World Family Club Show - ABC',
  },
  {
    thumnail: Images.common.onlineEvent,
    videoUrl:
      'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1',
    title: 'World Family Club Show - ABC',
  },
  {
    thumnail: Images.common.onlineEvent,
    videoUrl:
      'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1',
    title: 'World Family Club Show - ABC',
  },
  {
    thumnail: Images.common.onlineEvent,
    videoUrl:
      'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1',
    title: 'World Family Club Show - ABC',
  },
];
