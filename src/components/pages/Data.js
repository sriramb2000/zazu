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
        profile_name :  "Ajey Kaushal",
        thumb_img :  "https://images-na.ssl-images-amazon.com/images/I/91X4ZCruKNL.jpg",//title image thumbnail
        title_name : "The Immortalist - Chloe Benjamin",//user who shared name
        comment : "I couldn't put it down",
        thumb_value : "4",//how many votes it has
        post_date : "2 Days Ago" //when it was posted
    },
    {
        symbol_img : googleplay,
        profile_name :  "Sriram Balachandran",
        thumb_img :  "https://images-na.ssl-images-amazon.com/images/I/81rAGURQpCL.jpg",
        title_name : "Iron Gold - Pierce Brown",
        comment : "Can't wait for the next one",
        thumb_value : "1",
        post_date : "4 Hours Ago"
    },
    {
        symbol_img : applebooks,
        profile_name :  "Kari Hill",
        thumb_img :  "https://images-na.ssl-images-amazon.com/images/I/91DFQa-KgQL.jpg",
        title_name : "Educated - Tara Westover",
        comment : "Powerful read",
        thumb_value : "7",
        post_date : "1 Day Ago"
    },
    {
        symbol_img : netflix,
        profile_name :  "Dan Ivtsan",
        thumb_img :  " https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781416590316/frederick-douglass-9781416590316_hr.jpg",
        title_name : "Freferick Douglass - David W. Blight",
        comment : "Comprehensive biography of an incredible man",
        thumb_value : "8",
        post_date : "4 Days Ago"
    }
];
const ShowData = [
    {
        symbol_img : netflix,//service logo
        profile_name :  "Ajey Kaushal",
        thumb_img :  " https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2018/02/ac_105_unit_00957r-h_2018.jpg",//title image thumbnail
        title_name : "Altered Carbon",
        comment : "Coolest show I've seen in a while!",
        thumb_value : "3",//how many votes it has
        post_date : "2 Hours Ago" //when it was posted
    },
    {
        symbol_img : hbogo,
        profile_name :  "Kari Hill",
        thumb_img :  "https://i.ytimg.com/vi/OjPYmEZxACM/maxresdefault.jpg",
        title_name : "Last Week Tonight",
        comment : "Love him!",
        thumb_value : "5",
        post_date : "20 Hours Ago"
    },
    {
        symbol_img : netflix,
        profile_name :  "Dan Ivstan",
        thumb_img :  "http://digitalspyuk.cdnds.net/18/36/980x490/landscape-1536353645-kims-convenience-5.jpg",
        title_name : "Kim's Convenience",
        comment : "Every immigrant family can relate",
        thumb_value : "2",
        post_date : "1 Day Ago"
    },
    {
        symbol_img : netflix,
        profile_name :  "Divij Damodhar",
        thumb_img :  "https://occ-0-990-987.1.nflxso.net/art/4d0b9/363f1e49f7ebba6e616b5248ec24b5d58b94d0b9.jpg",
        title_name : "Patriot Act",
        comment : "Great addition to late night shows",
        thumb_value : "10",
        post_date : "2 Days Ago"
    },
    {
        symbol_img : hbogo,
        profile_name :  "Sriram Balachandran",
        thumb_img :  " https://i.cbc.ca/1.4309262.1506624949!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/curb-your-enthusiasm.jpg",
        title_name : "Curb Your Enthusiasm",
        comment : "Better than Seinfeld!!",
        thumb_value : "7",
        post_date : "5 Days Ago"
    },
    {
        symbol_img : primevideo,
        profile_name :  "Masataka Mori",
        thumb_img :  "https://car-images.bauersecure.com/pagefiles/68099/grandtourepisode1.jpg",
        title_name : "The Grand Tour",
        comment : "They still got it",
        thumb_value : "1",
        post_date : "1 Week Ago"
    },
    {
        symbol_img : hulu,
        profile_name :  "Sriram Balachandran",
        thumb_img :  "https://assets.foxdcg.com/dpp-uploaded/images/brooklyn-nine-nine/keyart2.jpg",
        title_name : "Brooklyn Nine-Nine",
        comment : "Andy Sandberg is sooo funny!",
        thumb_value : "9",
        post_date : "3 Weeks Ago"
    },
    {
        symbol_img : hbogo,
        profile_name :  "Masataka Mori",
        thumb_img :  "https://pmcvariety.files.wordpress.com/2018/08/insecure-season-3-hbo.jpg?w=1000",
        title_name : "Insecure",
        comment : "Such a real show",
        thumb_value : "3",
        post_date : "6 Hours Ago"
    }
];
const MovieData = [
    {
        symbol_img : netflix,
        profile_name : "Divij Damodhar",
        thumb_img :  "https://images.amcnetworks.com/ifc.com/wp-content/uploads/2016/04/Troy-Pitt-2-web-e1460667624103-800x400.jpg",
        title_name : "Troy",
        comment : "Watching it for the 10th time lol",
        thumb_value : "2",
        post_date : "1 Hour Ago"
    },
    {
        symbol_img : primevideo,
        profile_name :  "Kari Hill",
        thumb_img :  "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2017/06/024a_tbs_sg_30719-h_2017.jpg",
        title_name : "The Big Sick",
        comment : "Must-watch",
        thumb_value : "4",
        post_date : "1 Day Ago"
    },
    {
        symbol_img : hulu,
        profile_name :  "Kari Hill",
        thumb_img :  "https://fgmxi4acxur9qbg31y9s3a15-wpengine.netdna-ssl.com/wp-content/uploads/sites/2/2017/10/MargotRobbieasTonyaHarding-feature-1600x900-c-default.jpg",
        title_name : "I, Tonya",
        comment : "Margot Robbie was phenomenal!",
        thumb_value : "3",
        post_date : "16 Hours Ago"
    },
    {
        symbol_img : fandango,
        profile_name :  "Dan Ivtsan",
        thumb_img :  "http://digitalspyuk.cdnds.net/18/47/980x490/landscape-1542964252-sylvester-stallone-michael-b-jordan.jpg",
        title_name : "Creed II",
        comment : "Best Rocky movie of the franchise",
        thumb_value : "5",
        post_date : "2 Days Ago"
    }
];

const PodcastData = [
    {
        symbol_img : "https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/3e/17/ed/3e17ede0-862f-88ab-e91c-610fd7ac5f0d/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-9.png/246x0w.jpg",
        profile_name :  "Divij Damodhar",
        thumb_img :  "https://secureimg.stitcher.com/feedimageswide/480x270_13180.jpg",
        title_name : "The Joe Rogan Experience",
        comment : "",
        thumb_value : "8",
        post_date : "19 Hours Ago"
    },
    {
        symbol_img : "https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/3e/17/ed/3e17ede0-862f-88ab-e91c-610fd7ac5f0d/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-9.png/246x0w.jpg",
        profile_name :  "Masataka Mori",
        thumb_img :  "http://www.tracking-board.com/wp-content/uploads/2015/11/this_american_life_header2.jpg",
        title_name : "This American Life",
        comment : "",
        thumb_value : "6",
        post_date : "5 Hours Ago"
    },
    {
        symbol_img : "https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/3e/17/ed/3e17ede0-862f-88ab-e91c-610fd7ac5f0d/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-9.png/246x0w.jpg",
        profile_name :  "Ajey Kaushal",
        thumb_img :  "https://accelerator-origin.kkomando.com/wp-content/uploads/2018/07/planet-money-970x546.jpg",
        title_name : "Planet Money",
        comment : "",
        thumb_value : "2",
        post_date : "1 Hour Ago"
    },
    {
        symbol_img : "https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/3e/17/ed/3e17ede0-862f-88ab-e91c-610fd7ac5f0d/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-9.png/246x0w.jpg",
        profile_name :  "Divij Damodhar",
        thumb_img :  "https://secureimg.stitcher.com/customfeedimages/480x270_9679.jpg",
        title_name : "Fantasy Football Today Podcast",
        comment : "",
        thumb_value : "5",
        post_date : "7 Hours Ago"
    }
];

const LinkData = [
    {
        symbol_img : wsj,
        profile_name :  "Sriram Balachandran",
        thumb_img :  "https://c.s-microsoft.com/en-us/CMSImages/Microsoft-logo_rgb_wht.jpg?version=256EB2C3-1E17-2967-746F-3F32234EF429",
        title_name : "Microsoft shows why Big Tech has staying power",
        comment : "",
        thumb_value : "4",
        post_date : "3 Hours Ago"
    },
    {
        symbol_img : techcrunch,
        profile_name :  "Dan Ivtsan",
        thumb_img :  " https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png",
        title_name : "Nine companies compete to help astronauts return to the moon",
        comment : "",
        thumb_value : "1",
        post_date : "3 Days Ago"
    },
    {
        symbol_img : youtube,
        profile_name :  "Masataka Mori",
        thumb_img :  "https://i.ytimg.com/vi/OVBjPpUlQrE/maxresdefault.jpg",
        title_name : "Mowgli: Legend of the Jungle|Official Trailer[HD]",
        comment : "",
        thumb_value : "10",
        post_date : "1 Day Ago"
    },
    {
        symbol_img : youtube,
        profile_name :  "Divij Damodhar",
        thumb_img :  " https://i.ytimg.com/vi/OfS5MI_3_WE/hqdefault.jpg",
        title_name : "Zlatan Ibrahimovic-Top 10 Goals Ever|HD - ",
        comment : "",
        thumb_value : "6",
        post_date : "13 Hours Ago"
    }
];

const MusicData = [
    {
        symbol_img : spotify,
        profile_name :  "Kari Hill",
        thumb_img :  "https://i.ytimg.com/vi/-FijjVDsa2I/maxresdefault.jpg",
        title_name : "A Walk - Tycho",
        comment : "Serene",
        thumb_value : "7",
        post_date : "20 Hours Ago"
    },
    {
        symbol_img : applemusic,
        profile_name :  "Sriram Balachandran",
        thumb_img :  "https://i.ytimg.com/vi/d-JBBNg8YKs/maxresdefault.jpg ",
        title_name : "Sicko Mode - Travis Scott",
        comment : "Banger",
        thumb_value : "2",
        post_date : "1 Hour Ago"
    },
    {
        symbol_img : spotify,
        profile_name :  "Masataka Mori",
        thumb_img :  "https://i.ytimg.com/vi/fWjkAzZRnxI/maxresdefault.jpg",
        title_name : "Losing It - Fisher",
        comment : "Addicted",
        thumb_value : "8",
        post_date : "2 Days Ago"
    },
    {
        symbol_img : soundcloud,
        profile_name :  "Ajey Kaushal",
        thumb_img :  "https://fontmeme.com/images/Armin-van-Buuren-Logo-1.jpg",
        title_name : "Armin Van Buuren - Live",
        comment : "G.O.A.T.",
        thumb_value : "10",
        post_date : "17 Hours Ago"
    },
];

const SharedData = [
    {
        symbol_img : netflix,
        profile_name :  "You",
        thumb_img :  "https://occ-0-987-990.1.nflxso.net/art/b1455/ef462b861438ea1b2dbe29cc73a2eb67a78b1455.jpg",
        title_name : "Luther",
        comment : "Idris at his best",
        thumb_value : "1",
        post_date : "Shared Moments Ago"
    },
];

export {BookData,ShowData,PodcastData,MovieData, MusicData, LinkData, SharedData};