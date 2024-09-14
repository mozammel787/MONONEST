import React from 'react';

const ProductDetils = ({description}) => {
    return (
        <div className="join join-vertical w-full rounded-none">
            <div className="collapse collapse-arrow join-item border-base-300 border-b rounded-none">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">Additional Info</div>
                <div className="collapse-content">
                    <h5 className='font-semibold'>Details</h5>
                    <p>{description}</p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border-b rounded-none">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">Questions</div>
                <div className="collapse-content">
                    <h5>Details</h5>
                    <p>You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.</p>
                    <h5>Packaging</h5>
                    <p>Width: 20 " Height: 1 ½ " Length: 21 ½ "</p>
                    <p>Weight: 7 lb 8 oz</p>
                    <p>Weight: 7 lb 8 oz</p>
                </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border-b rounded-none">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">Reviews</div>
                <div className="collapse-content">
                    <h5>Details</h5>
                    <p>You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.</p>
                    <h5>Packaging</h5>
                    <p>Width: 20 " Height: 1 ½ " Length: 21 ½ "</p>
                    <p>Weight: 7 lb 8 oz</p>
                    <p>Weight: 7 lb 8 oz</p>
                </div>
            </div>

        </div>
    );
};

export default ProductDetils;