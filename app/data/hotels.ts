import { Hotel } from "../types/hotel";

export const hotels: Hotel[] = [

{
id:1,
destinationId:1,
name:"The Ritz Paris",
image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1800&q=90&auto=format",
location:"Paris, France",
price:42000,
rating:4.9,
reviews:2541,
description:"Luxury palace hotel near Place Vendôme with world-class dining and elegant suites.",
amenities:[
"Free WiFi",
"Spa",
"Pool",
"Breakfast",
"Gym",
"Airport Shuttle"
]
},

{
id:2,
destinationId:1,
name:"Hotel Regina Louvre",
image:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1800&q=90&auto=format",
location:"Paris, France",
price:31000,
rating:4.8,
reviews:1742,
description:"Beautiful luxury hotel overlooking the Louvre Museum.",
amenities:[
"Breakfast",
"Spa",
"Gym",
"Restaurant",
"WiFi"
]
},

{
id:3,
destinationId:2,
name:"Atlantis The Palm",
image:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1800&q=90&auto=format",
location:"Dubai, UAE",
price:46000,
rating:5,
reviews:5420,
description:"Iconic luxury resort with private beach and waterpark.",
amenities:[
"Private Beach",
"Pool",
"Spa",
"WiFi",
"Gym",
"Restaurant"
]
},

{
id:4,
destinationId:2,
name:"Burj Al Arab",
image:"https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1800&q=90&auto=format",
location:"Dubai, UAE",
price:78000,
rating:5,
reviews:7215,
description:"One of the world's most luxurious hotels.",
amenities:[
"Private Beach",
"Spa",
"Butler",
"Infinity Pool",
"Luxury Suites"
]
},

{
id:5,
destinationId:3,
name:"Park Hotel Tokyo",
image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1800&q=90&auto=format",
location:"Tokyo, Japan",
price:22000,
rating:4.8,
reviews:1635,
description:"Modern hotel offering panoramic Tokyo skyline views.",
amenities:[
"WiFi",
"Restaurant",
"Gym",
"Breakfast"
]
},

{
id:6,
destinationId:3,
name:"Aman Tokyo",
image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1800&q=90&auto=format",
location:"Tokyo, Japan",
price:56000,
rating:5,
reviews:1934,
description:"Luxury urban sanctuary in the heart of Tokyo.",
amenities:[
"Spa",
"Pool",
"Gym",
"Restaurant",
"Breakfast"
]
},

{
id:7,
destinationId:4,
name:"The Apurva Kempinski Bali",
image:"https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?w=1800&q=90&auto=format",
location:"Bali, Indonesia",
price:28000,
rating:4.9,
reviews:3280,
description:"Luxury beachfront resort with tropical gardens and ocean views.",
amenities:[
"Private Beach",
"Pool",
"Spa",
"Breakfast",
"WiFi",
"Restaurant"
]
},


{
id:8,
destinationId:4,
name:"Alila Seminyak",
image:"https://images.unsplash.com/photo-1582610116397-edb318620f90?w=1800&q=90&auto=format",
location:"Bali, Indonesia",
price:24000,
rating:4.8,
reviews:2140,
description:"Modern beachfront resort famous for luxury villas and sunsets.",
amenities:[
"Pool",
"Spa",
"Beach Access",
"Gym",
"WiFi"
]
},


{
id:9,
destinationId:5,
name:"Conrad Maldives Rangali Island",
image:"https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1800&q=90&auto=format",
location:"Maldives",
price:65000,
rating:5,
reviews:4890,
description:"Iconic island resort with overwater villas and crystal waters.",
amenities:[
"Overwater Villa",
"Private Beach",
"Spa",
"Diving",
"Restaurant"
]
},


{
id:10,
destinationId:5,
name:"Baros Maldives",
image:"https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1800&q=90&auto=format",
location:"Maldives",
price:52000,
rating:4.9,
reviews:3020,
description:"Romantic luxury island escape surrounded by turquoise lagoons.",
amenities:[
"Beach",
"Pool",
"Spa",
"Breakfast",
"WiFi"
]
},


{
id:11,
destinationId:6,
name:"Canaves Oia Hotel",
image:"https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1800&q=90&auto=format",
location:"Santorini, Greece",
price:42000,
rating:5,
reviews:2750,
description:"Cliffside luxury hotel with famous Santorini sunset views.",
amenities:[
"Infinity Pool",
"Spa",
"Breakfast",
"Sea View",
"WiFi"
]
},


{
id:12,
destinationId:6,
name:"Grace Hotel Santorini",
image:"https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1800&q=90&auto=format",
location:"Santorini, Greece",
price:38000,
rating:4.9,
reviews:1980,
description:"Boutique luxury stay overlooking the Aegean Sea.",
amenities:[
"Pool",
"Restaurant",
"Spa",
"Sea View"
]
},


{
id:13,
destinationId:7,
name:"The Savoy London",
image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1800&q=90&auto=format",
location:"London, UK",
price:45000,
rating:4.9,
reviews:4100,
description:"Historic luxury hotel in central London.",
amenities:[
"Restaurant",
"Spa",
"Gym",
"WiFi",
"Breakfast"
]
},


{
id:14,
destinationId:7,
name:"Shangri-La The Shard",
image:"https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1800&q=90&auto=format",
location:"London, UK",
price:39000,
rating:4.8,
reviews:2600,
description:"Luxury rooms with panoramic city views.",
amenities:[
"Sky Pool",
"Restaurant",
"Gym",
"WiFi"
]
},


{
id:15,
destinationId:8,
name:"Hotel Eden Rome",
image:"https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1800&q=90&auto=format",
location:"Rome, Italy",
price:35000,
rating:4.9,
reviews:2300,
description:"Elegant Italian luxury hotel near Rome attractions.",
amenities:[
"Restaurant",
"Spa",
"Breakfast",
"WiFi"
]
},


{
id:16,
destinationId:8,
name:"Hotel de Russie",
image:"https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1800&q=90&auto=format",
location:"Rome, Italy",
price:33000,
rating:4.8,
reviews:2100,
description:"Premium hotel combining classic design with modern comfort.",
amenities:[
"Garden",
"Spa",
"Restaurant",
"Gym"
]
},

{
id:17,
destinationId:9,
name:"Badrutt's Palace Hotel",
image:"https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=1800&q=90&auto=format",
location:"St. Moritz, Switzerland",
price:60000,
rating:5,
reviews:3500,
description:"Historic luxury hotel surrounded by the Swiss Alps.",
amenities:[
"Mountain View",
"Spa",
"Pool",
"Restaurant",
"Ski Access",
"WiFi"
]
},


{
id:18,
destinationId:9,
name:"The Chedi Andermatt",
image:"https://images.unsplash.com/photo-1544986581-efac024faf62?w=1800&q=90&auto=format",
location:"Andermatt, Switzerland",
price:55000,
rating:4.9,
reviews:2800,
description:"Luxury alpine resort with world-class wellness facilities.",
amenities:[
"Spa",
"Ski Access",
"Pool",
"Gym",
"Restaurant"
]
},


{
id:19,
destinationId:10,
name:"Ion Adventure Hotel",
image:"https://images.unsplash.com/photo-1529963183134-61a90db47eaf?w=1800&q=90&auto=format",
location:"Iceland",
price:42000,
rating:4.8,
reviews:1900,
description:"Unique Icelandic hotel surrounded by volcanoes and northern lights.",
amenities:[
"Mountain View",
"Restaurant",
"Hot Springs",
"WiFi"
]
},


{
id:20,
destinationId:10,
name:"Hotel Rangá",
image:"https://images.unsplash.com/photo-1486911278846-a81c5267e227?w=1800&q=90&auto=format",
location:"Iceland",
price:38000,
rating:4.8,
reviews:1600,
description:"Luxury countryside hotel famous for northern lights viewing.",
amenities:[
"Hot Tub",
"Restaurant",
"Breakfast",
"WiFi"
]
},


{
id:21,
destinationId:11,
name:"The Plaza Hotel",
image:"https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=1800&q=90&auto=format",
location:"New York, USA",
price:50000,
rating:4.9,
reviews:6200,
description:"Iconic luxury hotel near Central Park.",
amenities:[
"Restaurant",
"Spa",
"Gym",
"WiFi",
"Room Service"
]
},


{
id:22,
destinationId:11,
name:"The Ritz-Carlton New York",
image:"https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1800&q=90&auto=format",
location:"New York, USA",
price:45000,
rating:4.8,
reviews:3900,
description:"Elegant Manhattan hotel with premium city views.",
amenities:[
"Restaurant",
"Spa",
"Gym",
"Breakfast"
]
},


{
id:23,
destinationId:12,
name:"Marina Bay Sands",
image:"https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1800&q=90&auto=format",
location:"Singapore",
price:48000,
rating:5,
reviews:9000,
description:"World-famous luxury hotel with infinity pool skyline views.",
amenities:[
"Infinity Pool",
"Casino",
"Restaurant",
"Gym",
"WiFi"
]
},


{
id:24,
destinationId:12,
name:"Raffles Singapore",
image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1800&q=90&auto=format",
location:"Singapore",
price:43000,
rating:4.9,
reviews:4100,
description:"Historic luxury hotel with exceptional service.",
amenities:[
"Spa",
"Restaurant",
"Pool",
"Breakfast"
]
},


{
id:25,
destinationId:13,
name:"Four Seasons Hotel Seoul",
image:"https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1800&q=90&auto=format",
location:"Seoul, South Korea",
price:35000,
rating:4.9,
reviews:2500,
description:"Luxury city hotel in central Seoul.",
amenities:[
"Spa",
"Pool",
"Restaurant",
"Gym"
]
},


{
id:26,
destinationId:13,
name:"Signiel Seoul",
image:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1800&q=90&auto=format",
location:"Seoul, South Korea",
price:52000,
rating:5,
reviews:3300,
description:"High-rise luxury hotel with panoramic Seoul views.",
amenities:[
"Sky Lounge",
"Pool",
"Spa",
"Restaurant"
]
},


{
id:27,
destinationId:14,
name:"Museum Hotel Cappadocia",
image:"https://images.unsplash.com/photo-1528181304800-259b08848526?w=1800&q=90&auto=format",
location:"Cappadocia, Turkey",
price:28000,
rating:4.9,
reviews:2200,
description:"Cave luxury hotel overlooking Cappadocia valleys.",
amenities:[
"Cave Rooms",
"Pool",
"Breakfast",
"View Terrace"
]
},


{
id:28,
destinationId:14,
name:"Argos in Cappadocia",
image:"https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1800&q=90&auto=format",
location:"Cappadocia, Turkey",
price:26000,
rating:4.8,
reviews:1800,
description:"Historic cave hotel with unique architecture.",
amenities:[
"Cave Suites",
"Restaurant",
"WiFi",
"Breakfast"
]
},

{
id:29,
destinationId:15,
name:"Park Hyatt Sydney",
image:"https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1800&q=90&auto=format",
location:"Sydney, Australia",
price:42000,
rating:4.9,
reviews:3100,
description:"Luxury waterfront hotel with views of Sydney Opera House.",
amenities:[
"Harbour View",
"Pool",
"Spa",
"Restaurant",
"WiFi"
]
},


{
id:30,
destinationId:15,
name:"Four Seasons Sydney",
image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1800&q=90&auto=format",
location:"Sydney, Australia",
price:35000,
rating:4.8,
reviews:2400,
description:"Premium city hotel near Sydney attractions.",
amenities:[
"Gym",
"Pool",
"Breakfast",
"Restaurant"
]
},


{
id:31,
destinationId:16,
name:"Hotel Danieli Venice",
image:"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1800&q=90&auto=format",
location:"Venice, Italy",
price:45000,
rating:4.9,
reviews:3500,
description:"Historic Venetian palace hotel near the Grand Canal.",
amenities:[
"Canal View",
"Restaurant",
"Breakfast",
"WiFi"
]
},


{
id:32,
destinationId:16,
name:"Gritti Palace Venice",
image:"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1800&q=90&auto=format",
location:"Venice, Italy",
price:52000,
rating:5,
reviews:2900,
description:"Elegant luxury hotel with classic Italian design.",
amenities:[
"River View",
"Spa",
"Restaurant",
"Bar"
]
},


{
id:33,
destinationId:17,
name:"Majestic Hotel Barcelona",
image:"https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1800&q=90&auto=format",
location:"Barcelona, Spain",
price:32000,
rating:4.8,
reviews:2300,
description:"Luxury hotel near Barcelona landmarks.",
amenities:[
"Pool",
"Restaurant",
"Gym",
"WiFi"
]
},


{
id:34,
destinationId:17,
name:"W Barcelona",
image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1800&q=90&auto=format",
location:"Barcelona, Spain",
price:38000,
rating:4.8,
reviews:2700,
description:"Beachfront hotel with modern luxury rooms.",
amenities:[
"Beach",
"Pool",
"Spa",
"Restaurant"
]
},


{
id:35,
destinationId:18,
name:"Sri Panwa Phuket",
image:"https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1800&q=90&auto=format",
location:"Phuket, Thailand",
price:30000,
rating:4.9,
reviews:2100,
description:"Luxury villas with ocean views.",
amenities:[
"Private Pool",
"Beach",
"Spa",
"Restaurant"
]
},


{
id:36,
destinationId:18,
name:"The Nai Harn Phuket",
image:"https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1800&q=90&auto=format",
location:"Phuket, Thailand",
price:24000,
rating:4.8,
reviews:1800,
description:"Beach resort surrounded by tropical scenery.",
amenities:[
"Beach",
"Pool",
"Breakfast",
"WiFi"
]
},


{
id:37,
destinationId:19,
name:"Taj Exotica Goa",
image:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1800&q=90&auto=format",
location:"Goa, India",
price:22000,
rating:4.8,
reviews:2500,
description:"Luxury beachfront resort in Goa.",
amenities:[
"Beach",
"Pool",
"Spa",
"Restaurant"
]
},


{
id:38,
destinationId:19,
name:"W Goa",
image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&q=90&auto=format",
location:"Goa, India",
price:26000,
rating:4.7,
reviews:2200,
description:"Modern beach resort with vibrant atmosphere.",
amenities:[
"Pool",
"Beach",
"Bar",
"Gym"
]
},

];