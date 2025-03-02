export async function GET() {
    const data = {
      cards: [
        {
          id: 1,
         
          image: "https://market-resized.envatousercontent.com/previews/files/578527836/01_pitnik-banner.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=a7c544b2df391eae22904814f152e3e5d950ae73d6dbdf1c8b87d7d686bf50a6",
          title: "Pitnik Online Soasdcial Networking Site",
          description: "Next.js + Firebase",
          link: "#"
        },
        {
            id: 2,
           
            image: "https://market-resized.envatousercontent.com/previews/files/578527836/01_pitnik-banner.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=a7c544b2df391eae22904814f152e3e5d950ae73d6dbdf1c8b87d7d686bf50a6",
            title: "Food Deliverasdy App",
            description: "Next.js + Firebase",
            link: "#"
          }
          ,
        {
            id: 3,
           
            image: "https://market-resized.envatousercontent.com/previews/files/578527836/01_pitnik-banner.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=a7c544b2df391eae22904814f152e3e5d950ae73d6dbdf1c8b87d7d686bf50a6",
            title: "Food Delivery App",
            description: "Next.jsasd + Firebase",
            link: "#"
          }
          ,
        {
            id: 4,
           
            image: "https://market-resized.envatousercontent.com/previews/files/578527836/01_pitnik-banner.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=a7c544b2df391eae22904814f152e3e5d950ae73d6dbdf1c8b87d7d686bf50a6",
            title: "Food Delivery App",
            description: "Next.jsasdsad + Firebase",
            link: "#"
          }
          ,
        {
            id: 5,
           
            image: "https://market-resized.envatousercontent.com/previews/files/578527836/01_pitnik-banner.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=a7c544b2df391eae22904814f152e3e5d950ae73d6dbdf1c8b87d7d686bf50a6",
            title: "Food Delivery App",
            description: "Next.js + Firebase",
            link: "#"
          }
      ]
    };
  
    return Response.json(data);
  }
  