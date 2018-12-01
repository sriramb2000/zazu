const hulu = "https://www.hulu.com/press/wp-content/uploads/2017/05/hulu-interactive-rgb-800x600.jpg";
const netflix = "https://cdn.vox-cdn.com/thumbor/LOEXyxwl5puG7PDEQ8n9gvlufic=/39x0:3111x2048/1820x1213/filters:focal(39x0:3111x2048)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png";
const hbogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4oSjaGSTlc4zsLQy4S4-XJTKq_y6n37phe_0qyuz5dyXbVD5gw";
const primevideo = "https://www.mediaplaynews.com/wp-content/uploads/2018/04/Prime-Video-Stacked.jpg";
const googleplay = "https://www.robynandryleigh.com/wp-content/uploads/2013/02/Google-Play-logo.png";
const fandango = "https://www.underconsideration.com/brandnew/archives/fandango_icon_detail.jpg";
const kindle = "https://cerebral-overload.com/wp-content/uploads/2017/10/Amazon-Kindle-Logo.png";
const applebooks = "https://www.ianswerguy.com/wp-content/uploads/2016/03/iBooks-Icon.jpg";
const nook = "https://levelbestbooks.files.wordpress.com/2013/11/nook-logo.jpg";                  
const spotify = "https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png";
const applemusic = "http://www.chadhewittmusic.com/wp-content/uploads/2017/11/AppleMusicLogo.png";
const soundcloud = "http://www.fouroverfour.jukely.com/wp-content/uploads/2017/07/sclogo.png";
const wsj = "https://ore.wsj.net/fp/assets/images/ico/WSJ_facebook.png";
const techcrunch = "https://myvetahealth.com/wp-content/uploads/2018/10/TechCrunch-Logo.jpg";
const youtube = "https://image.freepik.com/free-icon/youtube-logo_318-49909.jpg";

const BookData = [
    {
        symbol_img : kindle,//service logo
        profile_name :  "bob",
        thumb_img :  "https://images-na.ssl-images-amazon.com/images/I/91X4ZCruKNL.jpg",//title image thumbnail
        title_name : "The Immortalist - Chloe Benjamin",//user who shared name
        comment : "bob",
        thumb_value : "bob",//how many votes it has
        post_date : "bob" //when it was posted
    },
    {
        symbol_img : googleplay,
        profile_name :  "bob",
        thumb_img :  "https://images-na.ssl-images-amazon.com/images/I/81rAGURQpCL.jpg",
        title_name : "Iron Gold - Pierce Brown",
        comment : "bob",
        thumb_value : "bob",
        post_date : "bob"
    },
    {
        symbol_img : applebooks,
        profile_name :  "bob",
        thumb_img :  "https://images-na.ssl-images-amazon.com/images/I/91DFQa-KgQL.jpg",
        title_name : "Educated - Tara Westover",
        comment : "bob",
        thumb_value : "bob",
        post_date : "bob"
    },
    {
        symbol_img : netflix,
        profile_name :  "bob",
        thumb_img :  "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781416590316/frederick-douglass-9781416590316_hr.jpg",
        title_name : "Freferick Douglass - David W. Blight",
        comment : "bob",
        thumb_value : "bob",
        post_date : "bob"
    }
];
const ShowData = [
    {
        symbol_img : netflix,//service logo
        profile_name :  "bob",
        thumb_img :  " https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2018/02/ac_105_unit_00957r-h_2018.jpg",//title image thumbnail
        title_name : "Altered Carbon",
        comment : "This Show is Awesome!!!",
        thumb_value : "3",//how many votes it has
        post_date : "2 Hours Ago" //when it was posted
    },
    {
        symbol_img : hbogo,
        profile_name :  "bob",
        thumb_img :  "https://cdn.cinematerial.com/p/500x/065jjctj/last-week-tonight-with-john-oliver-movie-poster.jpg",
        title_name : "Last Week Tonight",
        comment : "bob",
        thumb_value : "bob",
        post_date : "bob"
    },
    {
        symbol_img : netflix,
        profile_name :  "bob",
        thumb_img :  "https://m.media-amazon.com/images/M/MV5BODQxMmI3ZGQtOGRlNy00MzI3LWE3ZmItOWRjM2I2YjQyYzgzXkEyXkFqcGdeQXVyMzI2MzYyNzI@._V1_UY1200_CR171,0,630,1200_AL_.jpg",
        title_name : "Kim's Convenience",
        comment : "bob",
        thumb_value : "bob",
        post_date : "bob"
    },
    {
        symbol_img : netflix,
        profile_name :  "bob",
        thumb_img :  "https://m.media-amazon.com/images/M/MV5BMjE2MTIxNTU5N15BMl5BanBnXkFtZTgwMDY5NjczNjM@._V1_.jpg",
        title_name : "Patriot Act",
        comment : "This Movie is Awesome",
        thumb_value : "bob",
        post_date : "bob"
    },
    {
        symbol_img : hbogo,
        profile_name :  "bob",
        thumb_img :  "https://images-na.ssl-images-amazon.com/images/I/61EH%2BjMjfEL._SX425_.jpg",
        title_name : "Curb Your Enthusiasm",
        comment : "bob",
        thumb_value : "bob",
        post_date : "bob"
    },
    {
        symbol_img : primevideo,
        profile_name :  "bob",
        thumb_img :  "https://images-na.ssl-images-amazon.com/images/I/91rjtkzrRWL._RI_.jpg",
        title_name : "The Grand Tour",
        comment : "bob",
        thumb_value : "bob",
        post_date : "bob"
    },
    {
        symbol_img : hulu,
        profile_name :  "bob",
        thumb_img :  " https://assets.foxdcg.com/dpp-uploaded/images/brooklyn-nine-nine/showcase.jpg",
        title_name : "Brooklyn Nine-Nine",
        comment : "bob",
        thumb_value : "bob",
        post_date : "bob"
    },
    {
        symbol_img : hbogo,
        profile_name :  "bob",
        thumb_img :  "https://i.ytimg.com/sh/w1TLWnXROArYscXLdozNig/market.jpg",
        title_name : "Insecure",
        comment : "bob",
        thumb_value : "bob",
        post_date : "bob"
    }
];
const MovieData = [
    {
        symbol_img : netflix,
        profile_name :  "bob",
        thumb_img :  "https://images.wolfgangsvault.com/troy/poster/memorabilia/ZZZ060836-PO.jpg",
        title_name : "Troy",
        comment : "bob",
        thumb_value : "bob",
        post_date : "bob"
    },
    {
        symbol_img : primevideo,
        profile_name :  "bob",
        thumb_img :  "https://m.media-amazon.com/images/M/MV5BZWM4YzZjOTEtZmU5ZS00ZTRkLWFiNjAtZTEwNzIzMDM5MjdmXkEyXkFqcGdeQXVyNDg2MjUxNjM@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
        title_name : "The Big Sick",
        comment : "bob",
        thumb_value : "bob",
        post_date : "bob"
    },
    {
        symbol_img : hulu,
        profile_name :  "bob",
        thumb_img :  "https://images-na.ssl-images-amazon.com/images/I/51pUwsKO5JL.jpg",
        title_name : "I, Tonya",
        comment : "bob",
        thumb_value : "bob",
        post_date : "bob"
    },
    {
        symbol_img : fandango,
        profile_name :  "bob",
        thumb_img :  "https://m.media-amazon.com/images/M/MV5BMTcxMjUwNjQ5N15BMl5BanBnXkFtZTgwNjk4MzI4NjM@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title_name : "Creed II",
        comment : "bob",
        thumb_value : "bob",
        post_date : "bob"
    }
];

const PodcastData = [
    {
        symbol_img : hulu,
        profile_name :  "bob",
        thumb_img :  " https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/The_Joe_Rogan_Experience_logo.jpg/220px-The_Joe_Rogan_Experience_logo.jpg",
        title_name : "The Joe Rogan Experience",
        comment : "bob",
        thumb_value : "bob",
        post_date : "bob"
    },
    {
        symbol_img : hulu,
        profile_name :  "bob",
        thumb_img :  "http://mediad.publicbroadcasting.net/p/kuer/files/201705/thisamericanlife.jpg",
        title_name : "This American Life",
        comment : "bob",
        thumb_value : "bob",
        post_date : "bob"
    },
    {
        symbol_img : hulu,
        profile_name :  "bob",
        thumb_img :  "http://deow9bq0xqvbj.cloudfront.net/dir-logo/38108/38108.jpg",
        title_name : "Planet Money",
        comment : "bob",
        thumb_value : "bob",
        post_date : "bob"
    },
    {
        symbol_img : hulu,
        profile_name :  "bob",
        thumb_img :  "http://static.megaphone.fm/podcasts/98f79b5c-dc88-11e8-b84f-9740ad7ba51d/image/fantasy_football_today.jpg",
        title_name : "Fantasy Football Today Podcast",
        comment : "bob",
        thumb_value : "bob",
        post_date : "bob"
    }
];

const LinkData = [
    {
        symbol_img : wsj,
        profile_name :  "bob",
        thumb_img :  "https://cdn.vox-cdn.com/thumbor/NeSo4JAqv-fFJCIhb5K5eBqvXG4=/7x0:633x417/1200x800/filters:focal(7x0:633x417)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg",
        title_name : "Microsoft shows why Big Tech has staying power",
        comment : "bob",
        thumb_value : "bob",
        post_date : "bob"
    },
    {
        symbol_img : techcrunch,
        profile_name :  "bob",
        thumb_img :  "https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png",
        title_name : "Nine companies will compete to help NASA astronauts return to the moon",
        comment : "bob",
        thumb_value : "bob",
        post_date : "bob"
    },
    {
        symbol_img : youtube,
        profile_name :  "bob",
        thumb_img :  "https://i.ytimg.com/vi/OVBjPpUlQrE/maxresdefault.jpg",
        title_name : "Mowgli: Legend of the Jungle|Official Trailer[HD]",
        comment : "bob",
        thumb_value : "bob",
        post_date : "bob"
    },
    {
        symbol_img : youtube,
        profile_name :  "bob",
        thumb_img :  "https://i.ytimg.com/vi/OfS5MI_3_WE/hqdefault.jpg",
        title_name : "Zlatan Ibrahimovic-Top 10 Goals Ever|HD - ",
        comment : "bob",
        thumb_value : "bob",
        post_date : "bob"
    }
];

const MusicData = [
    {
        symbol_img : spotify,
        profile_name :  "bob",
        thumb_img :  "https://f4.bcbits.com/img/a0978734060_10.jpg",
        title_name : "A Walk - Tycho",
        comment : "bob",
        thumb_value : "bob",
        post_date : "bob"
    },
    {
        symbol_img : applemusic,
        profile_name :  "bob",
        thumb_img :  "https://i.ytimg.com/vi/d-JBBNg8YKs/maxresdefault.jpg",
        title_name : "Sicko Mode - Travis Scott",
        comment : "bob",
        thumb_value : "bob",
        post_date : "bob"
    },
    {
        symbol_img : spotify,
        profile_name :  "bob",
        thumb_img :  "https://geo-media.beatport.com/image/926ffad5-c656-43aa-8716-6877f27dc0cb.jpg",
        title_name : "Losing It - Fisher",
        comment : "bob",
        thumb_value : "bob",
        post_date : "bob"
    },
    {
        symbol_img : soundcloud,
        profile_name :  "bob",
        thumb_img :  "https://fontmeme.com/images/Armin-van-Buuren-Logo-1.jpg",
        title_name : "Armin Van Buuren - Live @ Tomorrowland 2016",
        comment : "bob",
        thumb_value : "bob",
        post_date : "bob"
    },
];
export {BookData,ShowData,PodcastData,MovieData, MusicData, LinkData};