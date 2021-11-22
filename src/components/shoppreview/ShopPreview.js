import React from 'react'

const ShopPreview = () => {
    return (
        <div>
             <div className="container-fluid">
                 <div className="row">
                    <div className="col-lg-4">
               <img src="./assets/emi.jpg" alt="Title" />
               <h6>My name is Kingsley Nwabunafor, <br /> I am 11 years old, I am learning react<br /> at conclase as an intern.</h6>
                </div>
            </div>

                
                 <div className="col-lg-4">
                 <img src="./assets/com.jpeg" width={250} alt="Title" />
                    </div>
                

           
            <div className="col-lg-4">
                <img src="./assets/shopping_cart_black_24dp.svg" alt="cart-icon" />
                <img src="./assets/account_circle_black_24dp.svg" alt="user-icon" />
            </div>
        </div>
        </div>
        
        
        
    )
}

export default ShopPreview
