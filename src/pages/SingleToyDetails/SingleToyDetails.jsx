import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData, useParams } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const SingleToyDetails = () => {
    useTitle("Toy's Finder" + ' - ' + 'singleToy')
    const allData = useLoaderData()
    const { id } = useParams()
    const singleData = allData && allData.find(data => data._id === id)

    // console.log(singleData);
    const { photoURL, name, quantity, price, rating, description, sellerName, sellerEmail, subCategory
    } = singleData
    return (
        <div className="card lg:card-side my-20 bg-white shadow-xl">
            <figure data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000" className='md:w-1/2 rounded-xl'><img className='w-full p-4 rounded-lg' src={photoURL} alt="Album" /></figure>
            <div data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000" className="card-body md:w-1/2">
                <h2 className="card-title"><span className='font-bold'>Toy Name:</span>{name}</h2>
                <h1><span className='font-bold'>Seller Name: </span>{sellerName}</h1>
                <h1><span className='font-bold'>Seller Email: </span>{sellerEmail}</h1>
                <p><span className='font-bold'>Description: </span>{description}</p>
                <p><span className='font-bold'>Price: </span>${price}</p>
                <p><span className='font-bold'>Available Quantity: </span>{quantity}</p>
                <p><span className='font-bold'>SubCategory:</span>{subCategory}</p>
                <p><Rating className='text-yellow-500'
                    placeholderRating={rating}
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                    readonly
                /> {rating}</p>


            </div>
        </div>
    );
};

export default SingleToyDetails;