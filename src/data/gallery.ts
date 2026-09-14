import mountain from '@/assets/himalayan-community.jpg'; import celebration from '@/assets/community-celebration.jpg'; import aipan from '@/assets/aipan-heritage.jpg'; import leader from '@/assets/community-leader.jpg';
export type GalleryItem={src:string;alt:string;caption:string};
export const gallery:GalleryItem[]=[
 {src:celebration,alt:'Families applauding at a Uttarakhand cultural gathering',caption:'Community celebration in London'},
 {src:aipan,alt:'Traditional red and white Aipan artwork with brass lamps',caption:'Aipan workshop'},
 {src:mountain,alt:'A village gathering among green Himalayan ridges',caption:'Partners in Uttarakhand'},
 {src:leader,alt:'Uttarakhandi community leader wearing a traditional shawl',caption:'Women leading change'},
 {src:celebration,alt:'Children and adults enjoying a cultural performance',caption:'Folk arts evening'},
 {src:mountain,alt:'Sunrise over an Uttarakhand hill village',caption:'Our mountain home'}
];
