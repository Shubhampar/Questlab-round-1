import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../App.css";
import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
import { Image } from "@chakra-ui/react";
// Import the translation effect style
import amazon from "../Images/Amazon.png";
import notion from "../Images/Notion.png";
import meta from "../Images/meta.png";
import microsoft from "../Images/microsoft.png";
export default function Swiper1MainPart() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <Image src={amazon} alt="amazon" width={"60px"} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={notion} width={"60px"} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={meta} width={"60px"} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={microsoft} width={"60px"} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="data:image/webp;base64,UklGRroEAABXRUJQVlA4WAoAAAAQAAAAbgAAQAAAQUxQSOsDAAABJAFJirKIiFgOtk2GbP3hOefatm2r91zbVmTbtm1Gts3Itm0rr2dPVXVd9I1uEhEO3EZSpPQxpmFm/iDZtm3Tdmbx2TZj2znvlWLbVs22bTup2rZt27aqq5221tp73x9IiwhHbhs5EifcdqEOM/OHiIjA//fYPClcFgxz0YvqhEtramhXlW6H3LA3f2ra5PhEHUNmEP0uZpbiDn0OehwjiB6GGp0iWhj2+G8hOmiygoiqhE0HItqg1SeiL4Ev7hgion5Sgc9EdDD0zeQBEf3NZDGPOOXVobONx3aP/2AmMUdC57QY3GSgPMno4CN3mcTB0UsNrij2kooz49fGAuWX32KJl7vbago27T2eY2TnSFJNidGbL9HTg3Pr+kmbtPMh0QJWdcKOG/Rk96xCfthXT7imx7YE0e/oeJcHmEueOJAcqD35yDfyxo21vdIDqXd7RB5U0uIWiZADoUD6CUPXjaJA0c+GjJvw5VAbSU77c7qVHn3JjivJUeq1X6SbT8zjF1HxNAwo+G7M+tcUaGTwBS80+4DtVkrHgMs2hZHzp2XSguX8kxH1gQrW0kLgmGHmsEzTGpWiAmKdrJulvCLozqW4/Yq5xAXZBZyMKvHi3Tp+5j3Bz3AAh2TxTAD3hG/rJizyc8X2AzppK5BXk1Jm/KIsVyndCWmVuks5APOZ5EDelmVRUEgOjmG7Co/ZoTeQJWJGcksBF/zpIFa22Q+OaIIUrQTQSQEcYorIGYjjxp9S47eASaG2XXFVQpm4d+uBxmy6/MixhrLLXyfZozfmCG4peEJUEzhPRK/1hG8iooe/xACmpD7CePZPAd1ZPWEGC9FdH4loMyD27/vOKqbuBaKnwEUiuqvZSAkujOeJZDBTXCIbcUG9PjxhDgvSXsh99oHo1uBg06shY6OZCRjjHxZDhhWzv+JMRGMVi5hUkiFMCc1hIroI9BbPj5OXRLRbvFED5315oVgxf+9mlzvefU754lh8KE/c8eZrCP0DT+4ZGD+kbixcb8FmO50dY0PjiP2Fl1VGHTS8P+63GMMqKgkcsdHZKma04uDQX72JFztFZm/+Cy3aE090pBC2W4zEkT6gRqYDUPkA0Z2qMD6iNyhhNyXiXIcHQqGmRaT4Jv0Y6HnegE+iqwicjyty3T05dVsKVDVuFH3MVXoQmuyaau3aBHd5vxqCi62XtcV6gefojDVQXXtN+Hnx39sBHGU/eRkF64lHY6S/Zv5X1kB3zVbkhgrsSD7hkeTLqhz2R3we5XYrNhT2QyzUNj7I+JuYg8CPokPGD+9Y2VDJ7Zxzll0h51yZJNqi1IQJEyYkm7vKep5Xwf/V/5QOAFZQOCCoAAAAcAYAnQEqbwBBAD7daK5SKKWkIqSTOmkQG4lnANOB5gA+0uUQ8Ar8Oy4c5/nsdc1Clo/sUoTA3jm52mwAAP7xWZ7ePlr0sI/XSufWPvmTuFGXmx5XsaqzjJM1LDPA0zKnOMW0ogbKyqrgS6Jq5EhFS/KxiwBoDhzpmX7b9kvmtn5GhtgGr2PA/ChC8xBRvFj/6v4DgsEVmo8LuR0wOYy7msxmD0AAAAAA" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://images.ctfassets.net/xny2w179f4ki/7x42mifYCM1BdDqM82Z3Ui/c01eb409fad28ad0c8a0d3527d23974b/Logo_Spendesk_Padding-slate.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://images.ctfassets.net/xny2w179f4ki/6Ng42UjBnzp6H3sBvp330G/6a76ec4cf3600bdc72c93a046152377b/Logo_ClickTravel_Padding-slate.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://images.ctfassets.net/xny2w179f4ki/3D5v9xC65si9YvBYympwta/c7133d6c81accec57dcc71af33f80eb3/Logo_Amplitude_Padding-slate.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://images.ctfassets.net/xny2w179f4ki/7rafhWWBcIryF5YCaxLqkX/1efe9f5687f7b78cdf20f56f25f06c33/Logo_Outschool_Padding-slate.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://images.ctfassets.net/xny2w179f4ki/2rcZ8WWnTSou60ksn1sOhd/d531c065056d6d1fcabf6e8b7c21ce58/Logo_H_RBlock_Padding-slate.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://images.ctfassets.net/xny2w179f4ki/fcKpST8WSPyQUYtL1OfEZ/e7d5e7e9c3cafb4c49c91023b3f3268f/Logo_Angi_Padding-slate.svg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}