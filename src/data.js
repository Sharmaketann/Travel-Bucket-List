const data = [
  {
    id: 1,
    title: 'Mount Fuji',
    location: 'Japan',
    googleMapsUrl: 'https://goo.gl/maps/1DGM5WrWnATgkSNB8',
    startDate: '12 Jan, 2021',
    endDate: '24 Jan, 2021',
    description:
      'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.',
    imageUrl: 'https://images.unsplash.com/photo-1578637387939-43c525550085?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnQlMjBmdWppfGVufDB8fDB8fHww',
  },
  {
    id: 2,
    title: 'Rome',
    location: 'Italy',
    googleMapsUrl: 'https://goo.gl/maps/39qi4X43MbUr4n2NA',
    startDate: '12 Jan, 2021',
    endDate: '24 Jan, 2021',
    description:
      'Rome is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome, and a special comune named Comune di Roma Capitale',
    imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9tZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 3,
    title: 'Sydney Opera House',
    location: 'Australia',
    googleMapsUrl: 'https://goo.gl/maps/HG4Kaq8sdZFekYeb9',
    startDate: '12 Jan, 2021',
    endDate: '24 Jan, 2021',
    description:
      'Landmark, skyline-dominating arts centre for opera, theatre, music and dance, plus guided tours.',
    imageUrl: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3lkbmV5JTIwb3BlcmElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 4,
    title: 'Geirangerfjord',
    location: 'Norway',
    googleMapsUrl: 'https://goo.gl/maps/PHPjUtsdr6NSg2hKA',
    startDate: '12 Jan, 2021',
    endDate: '24 Jan, 2021',
    description:
      'Iconic fjord offering snowy mountain peaks, lush plant life, cascading falls & spectacular views.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1677343210638-5d3ce6ddbf85?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R2VpcmFuZ2VyZmpvcmR8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 5,
    title: 'The Great Wall of China',
    location: 'China',
    googleMapsUrl:
      'https://www.google.com/maps/place/Great+Wall+of+China/@40.4319077,116.5681862,914m/data=!3m1!1e3!4m12!1m6!3m5!1s0x35f121d7687f2ccf:0xd040259b950522df!2sGreat+Wall+of+China!8m2!3d40.4319077!4d116.5703749!3m4!1s0x35f121d7687f2ccf:0xd040259b950522df!8m2!3d40.4319077!4d116.5703749',
    startDate: '12 Jan, 2021',
    endDate: '24 Jan, 2021',
    description:
      'Ancient world wonder that winds for more than 5,500 miles across China, with towers & walkways.',
    imageUrl: 'https://images.unsplash.com/photo-1608037521244-f1c6c7635194?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGhlJTIwZ3JlYXQlMjB3YWxsJTIwb2YlMjBjaGluYXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 6,
    title: 'Preikestolen',
    location: 'Norway',
    googleMapsUrl:
      'https://www.google.com/maps/place/Pulpit+Rock/@58.9862901,6.190368,102m/data=!3m1!1e3!4m15!1m9!3m8!1s0x463bd51bf654eb09:0x4a83e6bdbfa3b78b!2sPulpit+Rock!3b1!8m2!3d58.98641!4d6.1904396!14m1!1BCgIgAQ!3m4!1s0x463bd51bf654eb09:0x4a83e6bdbfa3b78b!8m2!3d58.98641!4d6.1904396',
    startDate: '12 Jan, 2021',
    endDate: '24 Jan, 2021',
    description:
      'Popular mountainous hike to a famed 604-metre cliff with a flat top, offering panoramic views.',
    imageUrl: 'https://images.unsplash.com/photo-1536683402757-75f8d0dfa419?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UHJlaWtlc3RvbGVufGVufDB8fDB8fHww',
  },
  {
    id: 7,
    title: 'Machu Picchu',
    location: 'Peru',
    googleMapsUrl:
      'https://www.google.com/maps/place/Machu+Picchu/@-13.1631359,-72.5494476,1170m/data=!3m1!1e3!4m6!3m5!1s0x916d9a5f89555555:0x3a10370ea4a01a27!4b1!8m2!3d-13.1631412!4d-72.5449629',
    startDate: '12 Jan, 2021',
    endDate: '24 Jan, 2021',
    description:
      'Iconic hilltop ruins of a large 15th-century Inca city featuring numerous structures & terraces.',
    imageUrl: 'https://images.unsplash.com/photo-1415804941191-bc0c3bbac10d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjaHUlMjBwaWNodXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 8,
    title: 'Perito Moreno Glacier',
    location: 'Argentina',
    googleMapsUrl:
      'https://www.google.com/maps/place/Perito+Moreno+Glacier/@-50.5025092,-73.1997342,24451m/data=!3m2!1e3!4b1!4m5!3m4!1s0xbda4c963217850c3:0xa481a2efaf7479be!8m2!3d-50.4967297!4d-73.1376612',
    startDate: '12 Jan, 2021',
    endDate: '24 Jan, 2021',
    description:
      'Massive glacier with a nearby visitor center offering boat tours, boardwalks, viewpoints & a cafe.',
    imageUrl: 'https://images.unsplash.com/photo-1529414988992-52e2db9372b2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGVyaXRvJTIwTW9yZW5vJTIwR2xhY2llcnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 9,
    title: 'Northern Lights',
    location: 'Tromsø',
    googleMapsUrl:
      'https://www.google.com/maps/place/Troms%C3%B8,+Norway/@69.6652941,18.9193944,13359m/data=!3m2!1e3!4b1!4m5!3m4!1s0x45c4c4526c3b71fd:0x23dca858e6ebed3!8m2!3d69.6492047!4d18.9553239',
    startDate: '12 Jan, 2021',
    endDate: '24 Jan, 2021',
    description:
      'A classic winter getaway, the Northern Lights are a truly wonderous sight.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1675805015838-7f8b70536f0f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bm9ydGhlcm4lMjBsaWdodHN8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 10,
    title: 'Meenakshi Temple',
    location: 'India',
    googleMapsUrl:
      'https://www.google.com/maps/place/Meenakshi+Amman+Temple/@9.9195098,78.1171531,1183m/data=!3m2!1e3!4b1!4m5!3m4!1s0x3b00c58461e46987:0xf134621ce5286703!8m2!3d9.9195045!4d78.1193418',
    startDate: '12 Jan, 2021',
    endDate: '24 Jan, 2021',
    description:
      'Ancient, walled, Hindu place of worship with sacred water tank and colourful, sculpted gate towers.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1697730116501-72f5749dffce?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuYWtzaGklMjB0ZW1wbGV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 11,
    title: 'Quilotoa Lagoon',
    location: 'Ecuador',
    googleMapsUrl:
      'https://www.google.com/maps/search/Quilotoa+Lagoon/@-0.8566994,-78.9104215,4805m/data=!3m2!1e3!4b1',
    startDate: '12 Jan, 2021',
    endDate: '24 Jan, 2021',
    description:
      'Accessible by vehicle, this volcanic crater lake is 250 meters deep and 3 kilometers wide.',
    imageUrl: 'https://images.unsplash.com/photo-1587257425343-d4d7f2ee2a83?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UXVpbG90b2ElMjBMYWdvb258ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 12,
    title: 'Kedarnath Temple',
    location: 'India',
    googleMapsUrl:
      'https://www.google.com/maps/place/Kedarnath,+Uttarakhand+246445/@30.734486,79.0624505,1033m/data=!3m2!1e3!4b1!4m5!3m4!1s0x39083ee051e628b1:0x167ce4efaf440f1e!8m2!3d30.7346267!4d79.0668943',
    startDate: '12 Jan, 2021',
    endDate: '24 Jan, 2021',
    description:
      'Kedarnath is a town in Rudraprayag district in the state of Uttarakhand in India and has gained importance because of the Kedarnath Temple',
    imageUrl: 'https://images.unsplash.com/photo-1612438214708-f428a707dd4e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2VkYXJuYXRoJTIwdGVtcGxlfGVufDB8fDB8fHww',
  },
]

export default data
