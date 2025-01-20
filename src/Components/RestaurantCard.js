export const RestaurantCard = ({resCard}) => {
    const { resName,cuisine, rating, eta } = resCard;
    return (
        <div className="res-card">
            <img className ="res-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7b1YGeYTG80V38a7shQ7z6AuFSUjv7hPU1nYTOP9BJA4i6OCUMHQBe70s17IrKo1Rt90&usqp=CAU"/>
            <h3>{resName}</h3>
            <h4>{cuisine.join(", ")}</h4>
            <h4>{rating + " star"}</h4>
            <h4>{eta}</h4>
        </div>
    )
}