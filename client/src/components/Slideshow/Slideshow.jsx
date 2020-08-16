import SimpleImageSlider from "react-simple-image-slider";
import React from 'react'


export default function Slideshow() {
    
        const images = [
            { url: "https://images.unsplash.com/photo-1486728297118-82a07bc48a28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" },
            { url: "https://cdn.pixabay.com/photo/2019/05/19/04/16/agriculture-4213197__340.jpg" },
            { url: "https://dfv6pkw99pxmo.cloudfront.net/wp-content/uploads/2018/07/colorado-moutain.jpg" },
            { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeGpUQVYoya_CmI3zkgFQlhFUrRKmtA5nQZg&usqp=CAU" },
            { url: "https://i.insider.com/5a2586ab3339b038248b45ab?width=1100&format=jpeg&auto=webp" },
            { url: "https://earth.stanford.edu/sites/default/files/styles/event_image_1000x532/public/media/image/2019-09/seth-cottle-okgxd6onkga-unsplash_mountain.jpg?itok=FjEkBqwK" },
            { url: "https://images-na.ssl-images-amazon.com/images/I/81qeMXGpNOL._AC_SL1500_.jpg" },
        ];

        return (
            <div>
                <SimpleImageSlider
                    width={896}
                    height={504}
                    images={images}
                />
            </div>
        );
    }


