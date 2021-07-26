import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'

const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <header>
    <Container>
    <Carousel pause='hover' indicators='false'>
  
        <Carousel.Item >
  
            <Image src={`https://res.cloudinary.com/drpwuzvax/image/upload/v1627234470/sujithabuilders/AdobeStock_314289432_v7ymxp.jpg`} className="d-block w-100" fluid />
      
        </Carousel.Item>
  
        <Carousel.Item >
  
            <Image src={`https://res.cloudinary.com/drpwuzvax/image/upload/v1627270032/sujithabuilders/AdobeStock_224880588_wfnbta.jpg`} className="d-block w-100" fluid />
      
        </Carousel.Item>


    </Carousel>
    </Container>
    </header>
  )
}

export default ProductCarousel
