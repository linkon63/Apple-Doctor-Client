import React, { useState } from 'react';
import './ChoiceProduct.scss'
import { ProductData } from '../../../../ProductData'

// Product image 
import desktop from '../../../../asset/product-icon/desktop.png'
import ipad from '../../../../asset/product-icon/ipad.png'
import iphone from '../../../../asset/product-icon/iphone.png'
import watch from '../../../../asset/product-icon/watch.png'
import tvhome from '../../../../asset/product-icon/tv&home.png'

import appleicon from '../../../../asset/product-icon/appleicon.png'
import star from '../../../../asset/product-icon/star.png'
import casesprotection from '../../../../asset/product-icon/casesprotection.png'
import hadphone from '../../../../asset/product-icon/hadphone.png'
import bands from '../../../../asset/product-icon/bands.png'

import { CastConnectedOutlined } from '@material-ui/icons';

const ChoiceProduct = () => {
    const [query, setQuery] = useState("");
    console.log(query);
    // console.log(ProductData.filter(product=>product.name.toLowerCase().includes("fe")));
    return (
        <div className='mt-5 mb-3'>
            <h1 className='text-center font-weight-bold heading text-success
        '>Find The Accessories You're Looking For !</h1>
            <div className='search-box'>
                <input type="text"
                    placeholder='Search....'
                    className='search'
                    onChange={e => setQuery(e.target.value)} />
            </div>
            {/* ................show data ..........  */}
            {/* <ul className='list'>
                {ProductData.filter(product => product.name.toLowerCase().includes(query)).map((product) => (
                    <li key={product._id} className='listItem'>{product.name}</li>
                ))}
            </ul> */}


            {/* .............This is tav............  */}
            <div class="tabs">
                <div className='box'>
                    <input type="radio" class="tabs__radio" name="tabs-example" id="tab1" checked />
                    <label for="tab1" class="tabs__label">Browse by Product</label>
                    <div class="tabs__content">
                        <div className='content-wrapper'>
                            {/* <div className='contentStyle'> */}
                            <div className='div-style'>
                                <div className='relative'>
                                    <div className='absolute'>
                                        <img src={desktop} alt="" />
                                        <h2>Mac</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='div-style'>
                            <img src={ipad} alt="" />
                                        <h2>ipad</h2>

                            </div>
                            <div className='div-style'>
                                <div className='relative'>
                                    <div className='absolute'>
                                        <img src={iphone} alt="" />
                                        <h2>iphone</h2>
                                    </div>
                                </div>

                            </div>
                            <div className='div-style'>
                            <img src={watch} alt="" />
                                        <h2>Watch</h2>

                            </div>
                            <div className='div-style'>
                            <img src={tvhome} alt="" />
                                        <h2>Tv&home</h2>

                            </div>
                            {/* </div> */}
                        </div>
                    </div>

                    <input type="radio" class="tabs__radio" name="tabs-example" id="tab2" />
                    <label for="tab2" class="tabs__label">Browse by Category</label>
                    <div class="tabs__content">
                        <div className='content-wrapper'>
                            {/* <div className='contentStyle'> */}
                            <div className='div-style'>
                            <img src={appleicon} alt="" />
                                        <h2>Mac</h2>

                            </div>
                            <div className='div-style'>
                            <img src={star} alt="" />
                                        <h2>ipad</h2>

                            </div>
                            <div className='div-style'>
                            <img src={casesprotection} alt="" />
                                        <h2>iphone</h2>

                            </div>
                            <div className='div-style'>
                            <img src={hadphone} alt="" />
                                        <h2>Watch</h2>

                            </div>
                            <div className='div-style'>
                            <img src={bands} alt="" />
                                        <h2>Tv&home</h2>

                            </div>
                        </div>
                        <li><a href=""></a>See All Category</li>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ChoiceProduct;