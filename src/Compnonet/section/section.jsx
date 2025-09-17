import BackGroundSlider from "./backGroundSlider";
import GridImageBox from "./gridImageBox";
import ImageAdvert from "./imageAdvert";
import ImageSlider from "./imageSlider";
import Popular from "./popular";
import ResourcesImage from "./resourcesImage";
import SliderPage from "./sliderPage";



const Section = () => {
    return(
        <section>
            <BackGroundSlider />
            <ImageSlider />
            <GridImageBox />
            <SliderPage  />
            <ImageAdvert />
            <Popular />
            <ResourcesImage />
        </section>

    )
}

export default Section;