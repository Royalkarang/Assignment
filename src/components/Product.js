import React from 'react'

function Product(data) {

    return (
        <div>
            <div className='m-[10px] justify-between flex '>
                <div className='flex'>
                    <img className='w-[100px] mr-[20px]  rounded-sm h-[60px]' src={data.img} alt="" />
                    <div>
                        <h3 className='font-bold'>{data.title}</h3>
                        <p>{data.about}</p>
                    </div>
                </div>

                <div className='flex mr-[90px] gap-9'>
                    <p>{data.stock} in stock</p>
                    <p className='font-bold'>{data.price}</p>
                    <p>{data.totalSales}</p>
                </div>



            </div>
        </div>
    )
}

export default Product