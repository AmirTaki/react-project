import AdvertBoard from "./advertBoard";
import BackGroundSlider from "./backGroundSlider";
import ColumnSection from "./columnSection";
import GridImageBox from "./gridImageBox";
import ImageAdvert from "./imageAdvert";
import ImageSlider from "./imageSlider";
import Popular from "./popular";
import ResourcesImage from "./resourcesImage";
import SliderPage from "./sliderPage";

const Section = () => {
    return(
        <section className="sizeWidth">
            <BackGroundSlider />
            <ImageSlider />
            <GridImageBox />
            <SliderPage  />
            <ImageAdvert />
            <Popular />
            <ResourcesImage />
            <ColumnSection />
            <AdvertBoard />
        </section>

    )
}

export default Section;