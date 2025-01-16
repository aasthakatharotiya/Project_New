document.getElementById("submit").addEventListener("click", function() 
{
    let city_name = document.getElementById("city_name").value.toLowerCase()
    let url = `https://api.weatherapi.com/v1/current.json?key=a63d7350a40848589b191537243007&q=${city_name}`

    let state_Images = 
    {
        "rajkot": "https://www.inidesignstudio.com/wp-content/uploads/2022/12/Render_cam_1-scaled.jpg",
        "paris": "https://www.roamingparis.com/wp-content/uploads/2018/06/eiffel-tower-sunset-summer.jpg",
        
        "andaman and nicobar" : "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/05/06133426/5r4t-1.jpg",
        "andhra pradesh" : "https://s3.india.com/wp-content/uploads/2024/04/Feature-Image_-Vijayawada-2.jpg",
        "arunachal pradesh" : "https://nenews.in/wp-content/uploads/2023/09/Tawang-Marathon-2.jpg",
        // "arunachal pradesh" : "https://www.adotrip.com/public/images/state/master_images/5f182ee9538dc-Arunachal_Pradesh_Attractions.jpg",
        "assam" : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/The_Rang_Ghar_of_Assam.jpg/1280px-The_Rang_Ghar_of_Assam.jpg",
        // "assam" : "https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/cover-places-to-visit-in-Assam-in-May_22nd-Jan.jpg",
        "bihar" : "https://deih43ym53wif.cloudfront.net/mahabodhi-temple-bodh-gaya-india-bihar-shutterstock_403098046.jpg_5e9a251de7.jpg",
        "chandigarh" : "https://rajputanacabs.b-cdn.net/wp-content/uploads/2022/08/japanese-garden-in-chd.webp",
        // "chandigarh" : "https://assets-news.housing.com/news/wp-content/uploads/2022/07/16062234/Chandigarh-4.png",
        "connecticut" : "https://tobin.yale.edu/sites/default/files/styles/tobin_callout_header_1440/public/2023-03/iStock-1319339505%20%281%29.jpg?h=119335f7&itok=EMMugan6",
        // "connecticut" : "https://media.tacdn.com/media/attractions-content--1x-1/10/44/49/20.jpg",
        // "connecticut" : "https://www.meyermovers.com/wp-content/uploads/2019/12/iStock-183344109-hartford-winter.jpg",
        "new delhi" : "https://cdn.kimkim.com/files/a/images/b800e1562806aaad908e55fd079cbf6a748502c5/original-ba028f07d492aa3786851c651fe0ce60.jpg",
        // "new delhi" : "https://t3.ftcdn.net/jpg/05/97/23/40/360_F_597234068_X7uffYjbpZRtDQ0xBbZBkBSwaWP3eMWM.jpg",
        "delhi" : "https://indianexpress.com/wp-content/uploads/2019/05/taj-mahal.jpg",
        // "delhi" : "https://img.freepik.com/free-photo/mesmerizing-shot-famous-historic-taj-mahal-agra-india_181624-16028.jpg?t=st=1722517175~exp=1722520775~hmac=2a754e390e4757dd5671a9c4c32d7e1f6a52b8cb52bbeccbb7b9f7711c0626f4&w=996",
        "dadra and nagar haveli" : "https://www.adotrip.com/public/images/state/master_images/5fc77cd39ab84-Master.jpg",
        "goa" : "https://img.freepik.com/free-photo/beautiful-luxury-hotel-swimming-pool-resort_74190-1678.jpg?t=st=1722518361~exp=1722521961~hmac=67e37d2a676239c77feb3461467d2bce3f8b869200cef27b5861812903135b89&w=996",
        // "goa" : "https://e0.pxfuel.com/wallpapers/816/181/desktop-wallpaper-goa-interesting-place-in-india-background-goa-beach.jpg",
        "gujarat" : "https://images.playground.com/6a1d8a6f399a492f921c9c29da1cbe25.jpeg",
        // "gujarat" : "https://tourmyindia.com/socialimg/gujarat-tourism.jpg",
        // "gujarat" : "",
        "himachal pradesh" : "https://d2228rr16d3wie.cloudfront.net/photos/places/Manali/Manali.webp",
        // "himachal pradesh" : "https://c1.wallpaperflare.com/preview/555/932/892/himachal-landscape-scenery.jpg",
        "haryana" : "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/karnal.jpg",
        "jharkhand" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mausoleum_of_Sher_Shah_5.jpg/1200px-Mausoleum_of_Sher_Shah_5.jpg",
        // "jharkhand" : "https://cf.bstatic.com/xdata/images/hotel/max1024x768/481888450.jpg?k=c3c097187b29d5d362dfc3cfc8b58b3c94d80d75534cc473f5cd54ec3659626c&o=&hp=1",
        // "jharkhand" : "https://specialplacesofindia.com/wp-content/uploads/2024/07/2048-x-1048-5-1800x750.jpg",
        "jammu and kashmir" : "https://images.pexels.com/photos/16498513/pexels-photo-16498513.jpeg?cs=srgb&dl=pexels-soubhagya23-16498513.jpg&fm=jpg",
        "jammu" : "https://images.pexels.com/photos/16498513/pexels-photo-16498513.jpeg?cs=srgb&dl=pexels-soubhagya23-16498513.jpg&fm=jpg",
        "kashmir" : "https://images.pexels.com/photos/16498513/pexels-photo-16498513.jpeg?cs=srgb&dl=pexels-soubhagya23-16498513.jpg&fm=jpg",
        "karnataka" : "https://static.wanderon.in/wp-content/uploads/2023/08/top-min-28.jpg",
        "Maisuru" : "https://static.wanderon.in/wp-content/uploads/2023/08/top-min-28.jpg",
        // "karnataka" : "https://www.holidify.com/images/bgImages/MYSORE.jpg",
        "kerala" : "https://img.freepik.com/free-photo/view-breathtaking-beach-nature-landscape_23-2151682919.jpg?t=st=1722525111~exp=1722528711~hmac=9f5b329bf95c52d2ed8ef581fc40cc2184a3c585a0712a8708f712f177f9e2bb&w=1060",
        "Thrissur" : "https://img.freepik.com/free-photo/view-breathtaking-beach-nature-landscape_23-2151682919.jpg?t=st=1722525111~exp=1722528711~hmac=9f5b329bf95c52d2ed8ef581fc40cc2184a3c585a0712a8708f712f177f9e2bb&w=1060",
        // "kerala" : "https://img.freepik.com/premium-photo/fantasy-concept-showing-famous-bali-hotels-digital-art-painting-horizontal-side-view_743201-1345.jpg",
        "louisiana" : "https://img.freepik.com/free-photo/view-beautiful-rainbow-appearing-end-road_23-2151563004.jpg?t=st=1722527457~exp=1722531057~hmac=326204d1f34536f1335219fa6c829662bf71dac80c52c79f7f52e88cc4432f9e&w=1380",
        "missouri" : "https://www.onlyinyourstate.com/wp-content/uploads/2017/09/Zach-Werner.jpg",
        "texas" : "https://www.onlyinyourstate.com/wp-content/uploads/2017/09/Zach-Werner.jpg",
        "america" : "https://net.kidzsearch.com/wp-content/uploads/2021/12/6000.jpg",
        // "brazil" : "https://www.icicilombard.com/Webpages/Resources/images/insurance-information/christ-the-redeemer.jpg",
        // "louisiana" : "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_80,w_1200/v1/crm/neworleans/Jackson_Square_New_Orleans0-d5bedffa5056b36_d5bee3f8-5056-b365-ab1ff9665d41e638.jpg",
        "lakshadweep" : "https://yourtravelexercise.com/wp-content/uploads/2021/03/Bora-Bora-1024x683.jpg",
        // "lakshadweep" : "https://wheelchairtravel.org/wp-content/uploads/2020/09/bora-bora-header.jpg",
        // "lakshadweep" : "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjX7sQfzeqrRwrW0iCyGEcZmhqS_lmjQLR2ouaNFK-46EX6aMx1aMornL5tiW1aU8wRDMQBOfOsee9vu0OnPP3CHNcQFJXUsG5B1xjtxG7v2IN68Stm_iqjp8TdJKXxGx4tJ6hyphenhyphenua2a8Ref/s1600/162859_v6.jpeg",
        // "lakshadweep" : "https://www.fabhotels.com/blog/wp-content/uploads/2024/01/fa0e7846-bangaram-island-min.jpg",
        "maharashtra" : "https://i.pinimg.com/originals/73/2d/0d/732d0d8f5b72ace19098c48a6536e9bc.jpg",
        "mumbai": "https://cfi.co/wp-content/uploads/2020/10/India.jpg",
        // "mumbai": "https://static.toiimg.com/photo/77718645.cms",
        "meghalaya" : "https://mediaim.expedia.com/destination/2/741cf9a68e2e06e6c6c08a227a0220d5.jpg",
        // "meghalaya" : "https://www.holidify.com/images/bgImages/SHILLONG.jpg",
        // "meghalaya" : "https://www.sotc.in/blog/wp-content/uploads/2023/08/Beautiful-Hills-Of-Meghalaya.jpg",
        "madras" : "https://imgcld.yatra.com/ytimages/image/upload/v1463478528/Mahabalipuram_overview.jpg",
        "tamil nadu" : "img/tamil_nadu.jpeg",
        // "tamil nadu" : "https://upload.wikimedia.org/wikipedia/commons/5/5a/Brihadeeswarar_Temple_Chandru.jpg",
        "madhya pradesh" : "https://housing.com/news/wp-content/uploads/2022/10/shutterstock_1351065545-1-scaled.jpg",
        // "madhya pradesh" : "https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Taj-Ul-Masjid.jpg",
        // "madhya pradesh" : "https://www.goindigo.in/content/dam/skyplus6e/in/en/assets/Destinations/gwalior/Gwalior%20Fort%20Large.jpeg",
        "indore" : "https://static.wanderon.in/wp-content/uploads/2024/04/featured-indore.jpg",
        "mizoram" : "https://media.assettype.com/outlooktraveller/2024-04/10b968c1-e74c-47fa-9cc4-3d2b5134efd4/shutterstock_1740129176.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
        // "mizoram" : "https://tripsntrippers.com/wp-content/uploads/2023/12/image-3.png",
        "manipur" : "https://specialplacesofindia.com/wp-content/uploads/2024/07/states-in-west-india-1.webp",
        "nagaland" : "https://static.toiimg.com/photo.cms?photoid=108765880",
        "orissa" : "https://etimg.etb2bimg.com/photo/86611466.cms",
        // "orissa" : "https://upload.wikimedia.org/wikipedia/commons/b/be/Brahmeswara_Temple_-Bhubaneswar_-Odisha_-IMG_0902.jpg",
        "punjab" : "https://www.paradiseunexplored.com/images/destination/88968punjab-banner.jpg",
        // "punjab" : "https://vikramtravels.in/wp-content/uploads/2022/08/wp3168631.webp",
        // "punjab" : "https://static.vecteezy.com/system/resources/previews/010/325/436/non_2x/amritsar-punjab-india-november-29-2019-dukh-bhanjani-beri-in-sri-harmandir-sahib-most-important-pilgrimage-site-of-sikhism-housing-golden-temple-holly-sarovar-and-darbar-sahib-free-photo.jpg",
        "pune" : "https://i.pinimg.com/originals/f3/18/e7/f318e7d7cb2f475171e1ad37924f723d.jpg",
        "pondicherry" : "https://intheworldsjungle.com/wp-content/uploads/2019/10/20171229_162026-1024x576.jpg",
        // "pondicherry" : "https://upload.wikimedia.org/wikipedia/commons/f/fe/Auroville_Ashram_Pondicherry.jpg",
        "rajasthan" : "https://s1.1zoom.me/b4742/110/Desert_Camels_Men_Hill_Sand_547452_1920x1080.jpg",
        // "rajasthan" : "https://wallpapers.com/images/hd/rajasthan-1920-x-1080-background-szqcyb11dicz68ae.jpg",
        // "rajasthan" : "https://media1.thrillophilia.com/filestore/lswp7v8alqaihcuf1nauny5x1pt7_shutterstock_1194778744.jpg",
        "sikkim" : "https://www.tourmyindia.com/blog/wp-content/uploads/2021/05/Best-Places-to-Visit-in-Sikkim.jpg",
        // "sikkim" : "img/sikkim.jpeg",
        // "sikkim" : "https://cf-img-a-in.tosshub.com/lingo/itne/images/story/202302/sikkimf_5-sixteen_nine.jpg?size=1200:675",
        "TG": "",
        // "TG": "",
        "tripura" : "https://media2.thrillophilia.com/images/photos/000/380/989/original/1647499892_shutterstock_1151226422.jpg?gravity=center&width=1280&height=642&crop=fill&quality=auto&fetch_format=auto&flags=strip_profile&format=jpg&sign_url=true",
        // "tripura" : "https://www.incredible-northeastindia.com/images/tripura-head.jpg",
        "uttar pradesh" : "https://wallpapercave.com/wp/wp13933241.jpg",
        // "uttar pradesh" : "https://static.toiimg.com/thumb/108991343/varanasi.jpg?width=1200&height=900",
        "union territory" : "https://wallpapers.com/images/featured/travel-hd-axhrsecphqby11wk.jpg",
        // "union territory" : "https://media.licdn.com/dms/image/D4D12AQHZlPFutg988Q/article-cover_image-shrink_720_1280/0/1675229829139?e=2147483647&v=beta&t=IHm9WBxSyZOedlmgtmf948beNweeQ0801usrfBekyeY",
        // "union territory" : "",
        "west bengal" : "https://assets.zeezest.com/blogs/PROD_Banner_1659452370799.jpg",
        // "west bengal" : "https://www.akshartours.com/wp-content/uploads/2020/08/Howrah-Bridge.jpg",
        // "west bengal" : "https://www.trawell.in/images/pics/west-bengal_best_main.jpg",


        // "gujarat": "https://www.fabhotels.com/blog/wp-content/uploads/2024/01/e7237302-600x400-1.jpg",
        // "maharashtra": "https://media2.thrillophilia.com/images/photos/000/041/109/original/1584271952_shutterstock_749994316.jpg?gravity=center&width=1280&height=642&crop=fill&quality=auto&fetch_format=auto&flags=strip_profile&format=jpg&sign_url=true",
    }

    fetch(url)
    .then(res => res.json())
    .then(json => 
    {
        console.clear()
        console.log(json)
        displayData(json, state_Images, city_name)
    })
    .catch(error => 
    {
        console.log('Error Fetching The Weather Data:', error)
    })
})

function displayData(json, state_Images, city_name) 
{
    let div = document.createElement("div")
    document.getElementById("main").innerHTML = ""

    let city = document.createElement("p")
    city.innerHTML = `<b class = "color">City : </b> ${json.location.name}`

    let state = document.createElement("p")
    state.innerHTML = `<b class = "color">Region : </b> ${json.location.region}`

    let country = document.createElement("p")
    country.innerHTML = `<b class = "color">Country : </b> ${json.location.country}`

    let temp_c = document.createElement("p")
    temp_c.innerHTML = `<b class = "color">Temperature (C) : </b> ${json.current.temp_c}°C`

    let temp_f = document.createElement("p")
    temp_f.innerHTML = `<b class = "color">Temperature (F) : </b> ${json.current.temp_f}°F`

    let text = document.createElement("p")
    text.innerHTML = `<b class = "color">Text : </b> ${json.current.condition.text}`

    let icon = document.createElement("img")
    icon.src = `${json.current.condition.icon}`

    if(state_Images[city_name]) 
    {
        document.body.style.backgroundImage = `url(${state_Images[city_name]})`
    } 
    else 
    {
        // document.body.style.backgroundImage = 'url(https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=)'
        document.body.style.backgroundImage = `url(https://picsum.photos/seed/${city_name}/1600/900`
    }

    div.append(city, state, country, temp_c, temp_f, text, icon)
    document.getElementById("main").append(div)
    document.getElementById("main").style.background = "linear-gradient(rgb(0,0,0,0.6), rgb(0,0,0,0.6), rgb(0,0,0,0.6))"
    document.getElementById("bg_color").style.background = "none"
    document.getElementById("bg_color").style.color = "black"
    document.getElementById("bg_color").style.padding = "0px"
    document.getElementById("bg_color").style.borderRadius = "0px"
    document.getElementById("bg_color").style.marginTop = "0px"
}






//https://stock.adobe.com/images/the-statue-of-liberty-landmarks-of-new-york-city-with-manhattan-building-background/155449695


// let imageUrl = 'https://picsum.photos/1600/900';
// let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=b6907d289e10d714a6e88b30761fae22`;
// let imageUrl = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(city_name)},landmark&client_id=YOUR_ACCESS_KEY`;

//----------------------------------------------

// https://picsum.photos/seed/Paris/1600/900
// https://loremflickr.com/1600/900/${city_name}


//-----------------------------------------------

// Sure! Here are 20 APIs that provide images without requiring an API key:

// PlaceIMG


// URL: https://picsum.photos/seed/${seed}/1600/900
// Example: https://picsum.photos/seed/Paris/1600/900
// Placeholder.com

// URL: https://via.placeholder.com/1600x900?text=${text}
// Example: https://via.placeholder.com/1600x900?text=Paris
// DummyImage

// URL: https://dummyimage.com/1600x900/000/fff&text=${text}
// Example: https://dummyimage.com/1600x900/000/fff&text=Paris
// Lorem Picsum

// URL: https://loremflickr.com/1600/900/${query}
// Example: https://loremflickr.com/1600/900/Paris,landmark
// Placehold.it

// URL: https://placehold.it/1600x900/${color}?text=${text}
// Example: https://placehold.it/1600x900/0000FF?text=Paris
// Unsplash Wall

// URL: https://random.imagecdn.app/1600/900
// Example: https://random.imagecdn.app/1600/900
// Pexels (Non-API)

