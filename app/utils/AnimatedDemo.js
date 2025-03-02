import { AnimatedTestimonials } from "./Animated";


export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Namit Singh Nirwan",
      designation: "Ceo at Vpnwan",
      src: "https://firebasestorage.googleapis.com/v0/b/vpnwan-fb3aa.appspot.com/o/Screenshot%20from%202025-02-19%2012-10-29.png?alt=media&token=4c12d30c-71aa-487b-bda7-ea57953748c8",
      profile:"https://namitsingh.netlify.app/"
    },
    {
      quote:
        "Success is not final, failure is not fatal: it is the courage to continue that counts",
      name: "Vijay Singh Nirwan",
      designation: "Head CEO at Vpnwan",
      src: "https://firebasestorage.googleapis.com/v0/b/vpnwan-fb3aa.appspot.com/o/vijaysingh.png?alt=media&token=1806e2b1-dbeb-4aba-9878-fef6d5100e43",
      profile:"/"
    },
    
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
