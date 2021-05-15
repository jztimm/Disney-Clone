import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const ImgSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        2
      </div>
      <div>
        3
      </div>
    </Slider>
  )
}

export default ImgSlider;