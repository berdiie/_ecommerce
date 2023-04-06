import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
// import { product } from '../ProductData'
import axios from "axios"

export default function Shoppro() {
    const navigate=useNavigate()
    const [newinfo,setNew]=useState([])
    const [info,setInfo]=useState([])

    const filterdata=(details)=>{
    const filterdetails=newinfo.filter((products)=>{
      return products.category==details
    })
      console.log("oo",filterdetails)
      setInfo(filterdetails)
    }
    

useEffect(()=>{
  axios.get(`https://fakestoreapi.com/products`).then((data)=>{
    console.log("ii",data);
     setNew(data.data)
  })
},[])

useEffect(()=>{
  setInfo(newinfo)
},[newinfo])

console.log("ee",newinfo)

const edit=(id)=>{
navigate(`/detail/${id}`)
}


  return (
  
<div className="container-fluid pt-5">
 <div className="row px-xl-5"> 
    {/* Shop Sidebar Start */}
    <div className="col-lg-3 col-md-12">
      {/* Price Start */}
      <div className="border-bottom mb-4 pb-4">
        <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>
        <form>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              defaultChecked
              id="price-all"
            />
            <label className="custom-control-label" htmlFor="price-all">
              All Price
            </label>
            <span className="badge border font-weight-normal">1000</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="price-1"
            />
            <label className="custom-control-label" htmlFor="price-1">
              $0 - $100
            </label>
            <span className="badge border font-weight-normal">150</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input 
            // onClick={()=>{filterdata("Shirts")}}
              type="checkbox"
              className="custom-control-input"
              id="price-2"
            />
            <label className="custom-control-label" htmlFor="price-2">
              $100 - $200
            </label>
            <span className="badge border font-weight-normal">295</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="price-3"
            />
            <label className="custom-control-label" htmlFor="price-3">
              $200 - $300
            </label>
            <span className="badge border font-weight-normal">246</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="price-4"
            />
            <label className="custom-control-label" htmlFor="price-4">
              $300 - $400
            </label>
            <span className="badge border font-weight-normal">145</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
            <input
              type="checkbox"
              className="custom-control-input"
              id="price-5"
            />
            <label className="custom-control-label" htmlFor="price-5">
              $400 - $500
            </label>
            <span className="badge border font-weight-normal">168</span>
          </div>
        </form>
      </div>
      {/* Price End */}
      {/* Color Start */}
      <div className="border-bottom mb-4 pb-4">
        <h5 className="font-weight-semi-bold mb-4">Filter by color</h5>
        <form>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              defaultChecked
              id="color-all"
            />
            <label className="custom-control-label" htmlFor="price-all">
              All Color
            </label>
            <span className="badge border font-weight-normal">1000</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
            //  onClick={()=>{filterdata("shirts")}}
              type="checkbox"
              className="custom-control-input"
              id="color-1"
            />
            <label className="custom-control-label" htmlFor="color-1">
              Black
            </label>
            <span className="badge border font-weight-normal">150</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="color-2"
            />
            <label className="custom-control-label" htmlFor="color-2">
              White
            </label>
            <span className="badge border font-weight-normal">295</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="color-3"
            />
            <label className="custom-control-label" htmlFor="color-3">
              Red
            </label>
            <span className="badge border font-weight-normal">246</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="color-4"
            />
            <label className="custom-control-label" htmlFor="color-4">
              Blue
            </label>
            <span className="badge border font-weight-normal">145</span>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
            <input
              type="checkbox"
              className="custom-control-input"
              id="color-5"
            />
            <label className="custom-control-label" htmlFor="color-5">
              Green
            </label>
            <span className="badge border font-weight-normal">168</span>
          </div>
        </form>
      </div>
      {/* Color End */}
      {/* Size Start */}
      <div className="mb-5">
        <h5 className="font-weight-semi-bold mb-4">Filter by Categories</h5>
        <form>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
            onClick={()=>{filterdata("men's clothing")}}
              type="checkbox"
              className="custom-control-input"
              id="size-all"
            />
            <label className="custom-control-label" htmlFor="size-all">
            Men's clothing
            </label>
            {/* <span className="badge border font-weight-normal">1000</span> */}
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
            onClick={()=>{filterdata("women's clothing")}}
              type="checkbox"
              className="custom-control-input"
              id="size-1"
            />
            <label className="custom-control-label" htmlFor="size-1">
            Women's clothing
            </label>
            {/* <span className="badge border font-weight-normal">150</span> */}
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
             onClick={()=>{filterdata("jewelery")}}
              type="checkbox"
              className="custom-control-input"
              id="size-2"
            />
            <label className="custom-control-label" htmlFor="size-2">
            Jewelery
            </label>
            {/* <span className="badge border font-weight-normal">295</span> */}
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
             onClick={()=>{filterdata("electronics")}}
              type="checkbox"
              className="custom-control-input"
              id="size-3"
            />
            <label className="custom-control-label" htmlFor="size-3">
            Electronics
            </label>
            {/* <span className="badge border font-weight-normal">246</span> */}
          </div>
        </form>
      </div>
      {/* Size End */}
    </div>
    {/* Shop Sidebar End */}
    {/* Shop Product Start */}
    <div className="col-lg-9 col-md-12">
      <div className="row pb-3">
        <div className="col-12 pb-1">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <form action>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by name"
                />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search" />
                  </span>
                </div>
              </div>
            </form>
            <div className="dropdown ml-4">
              <button
                className="btn border dropdown-toggle"
                type="button"
                id="triggerId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by
              </button>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="triggerId"
              >
                <a className="dropdown-item" href="#">
                  Latest
                </a>
                <a className="dropdown-item" href="#">
                  Popularity
                </a>
                <a className="dropdown-item" href="#">
                  Best Rating
                </a>
              </div>
            </div>
          </div>
        </div>
        
  
  <div class="container-fluid pt-5 pb-3">
        <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4"><span class="bg-secondary pr-3">Featured Products</span></h2>
        <div className='row'>
         {info?.map((data0)=>
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div class="product-item bg-light mb-4">
                <div class="product-img position-relative overflow-hidden">
                     <img class="img-fluid w-100" src={data0?.image} style={{height:"400px",width:"400px"}} alt="" onClick={()=>{edit(data0.id)}} />
                     <div class="product-action">
                         <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-shopping-cart"></i></a>
                         <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
                         <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                         <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-search"></i></a>
                     </div> 
                 </div>
                 <div class="text-center py-4">
                     <a class="h6 text-decoration-none text-truncate" href=""></a>
                     <div class="d-flex align-items-center justify-content-center mt-2">
                         <h5>$123.00</h5><h6 class="text-muted ml-2"><del>$123.00</del></h6>
                     </div>
                     <div class="d-flex align-items-center justify-content-center mb-1">
                         <small class="fa fa-star text-primary mr-1"></small>
                         <small class="fa fa-star text-primary mr-1"></small>
                         <small class="fa fa-star text-primary mr-1"></small>
                         <small class="fa fa-star text-primary mr-1"></small>
                         <small class="fa fa-star text-primary mr-1"></small>
                         <small>(99)</small>
                     </div>
                 </div>
             </div>
         </div> 
         )} 
          </div></div> </div>

{/* 
             <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
               <div class="product-item bg-light mb-4">
                   <div class="product-img position-relative overflow-hidden">
                        <img class="img-fluid w-100" src={data._image} alt=""/>
                        <div class="product-action">
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-shopping-cart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-search"></i></a>
                        </div> 
                    </div>
                    <div class="text-center py-4">
                        <a class="h6 text-decoration-none text-truncate" href="">{data.product_name}</a>
                        <div class="d-flex align-items-center justify-content-center mt-2">
                            <h5>$123.00</h5><h6 class="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                        <div class="d-flex align-items-center justify-content-center mb-1">
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div> */}
         
        

    {/* Shop Product End */}
  </div>
</div>
</div>

  )
}
