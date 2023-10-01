export const RestaurantCard = (props) => {
    const {restaurantDetail} = props;
    return (
        <div className="card-container">
            <div className="restaurant-offer">
                <img src={restaurantDetail.info?.image.url} alt={restaurantDetail?.info?.name} />
            </div>
            <div className="restaurant-details">
                <div className="name-ratings">
                    <h4>{restaurantDetail?.info?.name}</h4>
                    <div className="ratings">
                        <p>{restaurantDetail?.info?.rating?.rating_text}</p>
                    </div>
                </div>
                <div className="cuisines-price">
                    <p>
                        {restaurantDetail?.info?.cuisine.join(', ')}
                    </p>
                    <p>{restaurantDetail?.info?.costText.text}</p>
                </div>
                <div className="delivery-time">
                    <p>{restaurantDetail?.order?.deliveryTime}</p>
                </div>
            </div>
        </div>
    );
}