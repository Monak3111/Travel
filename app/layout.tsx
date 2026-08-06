import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ChatAssistant from "./components/ChatAssistant";


export const metadata: Metadata = {
  title: "TravelBlack",
  description: "AI powered premium travel platform",
};



export default function RootLayout({

children,

}: Readonly<{

children: React.ReactNode;

}>) {


return (

<html 
  lang="en" 
  suppressHydrationWarning
  data-scroll-behavior="smooth"
>


<body className="bg-black text-white">


<Navbar />

<>
  {children}
  <Footer />
</>  

<ChatAssistant />


</body>


</html>

);

}