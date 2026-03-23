// NOTE: Keep this file for future reference
// import React, { useState } from 'react';
// import { SectionHeader } from './SectionHeader';

// interface Location {
//   id: number;
//   label: string;
//   x: number; // percentage
//   y: number; // percentage
//   info: string;
// }

// const locations: Location[] = [
//   { id: 1, label: '內湖科技園區', x: 40, y: 30, info: '匯聚眾多知名科技企業，就業人口帶動周邊住宅強勁需求，是內湖房市的重點熱區。' },
//   { id: 2, label: '內湖五期重劃區', x: 60, y: 55, info: '街廓整齊、綠覆率高，採「住商分離」規劃。擁有極佳的生活品質，深受企業主及高階主管青睞。' },
//   { id: 3, label: '南港軟體園區', x: 80, y: 70, info: '三鐵共構交通優勢，加上大型商場進駐，發展潛力無窮，近年來房價屢創新高。' },
//   { id: 4, label: '大湖公園', x: 35, y: 15, info: '依山傍水，環境清幽。周邊多為高級住宅與別墅區，是重視休閒生活品質的首選。' },
//   { id: 5, label: '四期重劃區', x: 50, y: 45, info: '鄰近三軍總醫院及內湖行政中心，生活機能發展成熟，商圈完善。' },
// ];

// export const RegionGuideSection: React.FC = () => {
//   const [selectedId, setSelectedId] = useState<number>(locations[0].id);

//   const selectedLocation = locations.find(loc => loc.id === selectedId) || locations[0];

//   return (
//     <section className="py-20 bg-white px-6 lg:px-12">
//       <div className="max-w-7xl mx-auto">
//         <SectionHeader
//           eyebrow="REGION GUIDE"
//           title="內湖・南港 商圈解析"
//           subtitle="深入了解各區特色，找到最適合您的生活樣貌"
//           centered={true}
//         />

//         <div className="mt-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
//           {/* Left Column: Map */}
//           <div className="w-full lg:w-2/3 relative border border-gray-200 p-2 bg-cream rounded-sm shadow-sm">
//             <div className="relative w-full aspect-[4/3] overflow-hidden">
//               <img
//                 src="/images/region-map.png"
//                 alt="內湖/南港 地圖"
//                 className="w-full h-full object-cover"
//               />

//               {/* Overlay Dots */}
//               {locations.map((loc) => (
//                 <button
//                   key={loc.id}
//                   onClick={() => setSelectedId(loc.id)}
//                   className={`absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group transition-all`}
//                   style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
//                 >
//                   <div
//                     className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-white shadow-md transition-colors ${
//                       selectedId === loc.id ? 'bg-gold scale-125' : 'bg-navy hover:bg-gold/80'
//                     }`}
//                   />
//                   <div
//                     className={`mt-2 px-2 py-1 text-xs font-bold whitespace-nowrap bg-white/90 backdrop-blur-sm shadow-sm rounded-sm transition-opacity ${
//                       selectedId === loc.id ? 'text-navy opacity-100' : 'text-muted opacity-0 group-hover:opacity-100'
//                     }`}
//                   >
//                     {loc.label}
//                   </div>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Right Column: Info Card */}
//           <div className="w-full lg:w-1/3 bg-cream p-8 md:p-10 border-t-4 border-gold shadow-sm">
//             <h3 className="text-2xl font-serif-tc text-navy font-bold tracking-widest mb-4">
//               {selectedLocation.label}
//             </h3>
//             <div className="w-12 h-[2px] bg-gold mb-6"></div>
//             <p className="text-muted tracking-widest leading-relaxed text-sm md:text-base">
//               {selectedLocation.info}
//             </p>
//             <div className="mt-10">
//               <button className="text-navy font-bold text-sm tracking-widest border border-navy px-6 py-2 hover:bg-navy hover:text-white transition-colors">
//                 查看該區物件
//               </button>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };
