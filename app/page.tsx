import Image from "next/image";
import Mobile from "./Public/Frame 50.png"
import Logo from "./Public/Logo-colored.png"
import Logo1 from "./Public/Logo-colored-1.png"
import Logo2 from "./Public/Logo-colored-2.png"
import Logo3 from "./Public/Logo-colored-3.png"
import Logo4 from "./Public/Logo-colored-4.png"
import Logo5 from "./Public/Logo-colored-5.png"
import Logo6 from "./Public/Logo-colored-6.png"
import Logo7 from "./Public/Logo-colored-7.png"
import Logo8 from "./Public/Logo-colored-8.png"
import Logo9 from "./Public/Logo-colored-9.png"
import icon from "./Public/Icon.png"
import icon2 from "./Public/Icon-1.png"
import icon3 from "./Public/Icon-2.png"
import image2 from "./Public/Col.png"
import image3 from "./Public/Col (1).png"
import image4 from "./Public/Col (2).png"
import image5 from "./Public/Screen/Desktop.png"
import screen from "./Public/Screen/Desktop.png"

export default function Home() {
  return (
    <>
    <div className="flex flex-col justify-center items-center ajajaj font-sans">
      <div className="flex flex-col section lg:flex-row text-left w-full">
        <div className="flex flex-col justify-center items-center my-4 text-center lg:text-left lg:items-start lg:p-20">
          <h1 className="text-center text-white font-bold text-4xl lg:text-left lg:text-7xl">Launch Your App</h1>
          <h2 className="text-center text-slate-500 font-bold text-3xl mb-6 lg:text-left lg:text-6xl">Grow Your Bussines</h2>
          <p className="text-center font-normal text-white text-base px-8 lg:pr-32 lg:text-2xl py-8 lg:pl-0 lg:text-left">Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar.</p>
          <button className="py-4 px-6 border-2 border-white text-white w-60 h-16 rounded-full font-bold text-2xl">Free Launch</button>
        </div>
        <div className="flex justify-center items-center lg:w-full">
          <Image src={Mobile} alt="frame"></Image>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center div w-full pb-6">
        <h2 className="my-4 text-3xl text-center font-bold">Our Top Partners</h2>
        <div className="flex my-8 justify-center w-full lg:hidden">
          <Image
          src={Logo}
          alt="Logo1"
          width={57}
          height={16}
          className="mx-2">

          </Image>
          <Image
          src={Logo1}
          alt="Logo2"
          width={48}
          height={13}
          className="mx-2">

          </Image>
          <Image
          src={Logo2}
          alt="Logo3"
          width={51}
          height={15}
          className="mx-2">

          </Image>
          <Image
          src={Logo3}
          alt="Logo4"
          width={60}
          height={19}
          className="mx-2">

          </Image>
          <Image
          src={Logo4}
          alt="Logo5"
          width={57}
          height={13}
          className="mx-2">
  
          </Image>
        </div>
        <div className="flex justify-center w-full lg:hidden">
        <Image
          src={Logo5}
          alt="Logo6"
          width={56}
          height={15}
          className="mx-2">

          </Image>
          <Image
          src={Logo6}
          alt="Logo7"
          width={33}
          height={20}
          className="mx-2">

          </Image>
          <Image
          src={Logo7}
          alt="Logo8"
          width={40}
          height={16}
          className="mx-2">

          </Image>
          <Image
          src={Logo8}
          alt="Logo9"
          width={28}
          height={18}
          className="mx-2">

          </Image>
          <Image
          src={Logo9}
          alt="Logo10"
          width={45}
          height={12}
          className="mx-2">

          </Image>
        </div>
        <div className="hidden my-8 justify-center w-full lg:flex">
          <Image
          src={Logo}
          alt="Logo1"
          width={138}
          height={39}
          className="mx-2">

          </Image>
          <Image
          src={Logo1}
          alt="Logo2"
          width={116}
          height={32}
          className="mx-2">

          </Image>
          <Image
          src={Logo2}
          alt="Logo3"
          width={124}
          height={35}
          className="mx-2">

          </Image>
          <Image
          src={Logo3}
          alt="Logo4"
          width={145}
          height={46}
          className="mx-2">

          </Image>
          <Image
          src={Logo4}
          alt="Logo5"
          width={138}
          height={32}
          className="mx-2">
  
          </Image>
        </div>
        <div className="justify-center w-full hidden lg:flex">
        <Image
          src={Logo5}
          alt="Logo6"
          width={138}
          height={36}
          className="mx-2">

          </Image>
          <Image
          src={Logo6}
          alt="Logo7"
          width={82}
          height={51}
          className="mx-2">

          </Image>
          <Image
          src={Logo7}
          alt="Logo8"
          width={99}
          height={40}
          className="mx-2">

          </Image>
          <Image
          src={Logo8}
          alt="Logo9"
          width={70}
          height={44}
          className="mx-2">

          </Image>
          <Image
          src={Logo9}
          alt="Logo10"
          width={110}
          height={29}
          className="mx-2">

          </Image>
        </div>
      </div>
      <div className="px-4 py-12">
        <h2 className="text-center text-3xl font-bold my-8">How it works</h2>
        <div className="flex flex-col lg:flex-row">
        <div className="icon-div1 m-4 p-4 rounded-2xl flex flex-col justify-center items-center">
          <Image
          src={icon}
          alt="icon"
          width={64}
          height={64}
          className="my-4">

          </Image>
          <p  className="text-center">
            Dui consectetur gravida platea ut dis diam. Enim morbi proin auctor et nisl phasellus. Ultricies pharetra, id quam facilisis urna, enim.
          </p>
        </div>
        <div className="icon-div2 m-4 p-4 rounded-2xl flex flex-col justify-center items-center">
          <Image
          src={icon2}
          alt="icon"
          width={64}
          height={64}
          className="my-4">

          </Image>
          <p  className="text-center">
          Et sit duis vestibulum proin. Sollicitudin velit, etiam a feugiat sagittis. Imperdiet ipsum urna ornare vitae tempus sed massa.
          </p>
        </div>
        <div className="icon-div3 m-4 p-4 rounded-2xl flex flex-col justify-center items-center">
          <Image
          src={icon3}
          alt="icon"
          width={64}
          height={64}
          className="my-4">

          </Image>
          <p className="text-center">
            Elit purus magna donec mattis amet, leo varius sed. Ut metus sed convallis pretium sollicitudin turpis semper vulputate.
          </p>
        </div>
        </div>
      </div>
      <div className="div lg:h-full  lg:flex lg:p-14 lg:justify-between">
        <div className="px-4 flex flex-col justify-center items-center lg:items-start">
          <h2 className="text-center lg:text-left text-3xl font-bold my-4 lg:text-5xl">Turpis risus facilisi</h2>
          <p className="text-center lg:text-left lg:pr-40 lg:text-xl">Augue feugiat mi, massa amet. Id purus aliquam bibendum purus dictum elementum nullam odio tellus. Imperdiet feugiat est odio fames magna orci. Augue purus aliquam, placerat vestibulum dictum pellentesque molestie. Facilisis pretium porta congue proin.</p>
        </div>
        <div className="flex flex-col justify-center items-center my-8 lg:w-full">
          <Image
          src={image2}
          alt="image"
          width={357}
          height={231}
          className="lg:hidden">
          </Image>
          <Image
          src={image2}
          alt="image"
          width={589}
          height={347}
          className="hidden lg:block image1">
          </Image>
        </div>
      </div>
      <div className="div lg:flex lg:flex-row-reverse lg:p-20 lg:justify-around">
        <div className="lg:flex lg:flex-col lg:justify-center lg:items-start ">
          <h2 className="text-center lg:text-left text-3xl font-bold my-4 lg:text-5xl lg:pl-40">Sagittis sapien viverra</h2>
          <p  className="text-center lg:text-left lg:pl-40 lg:text-xl">Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus bibendum risus auctor lacus tristique arcu. Arcu hac cursus faucibus id. Eu integer parturient risus magna eget massa. Risus molestie tempor, faucibus non ultricies. Nam vel mattis quis dui, condimentum mi volutpat ut aliquam.</p>
        </div>
        <div className="flex flex-col justify-center items-center w-full lg:pr-20">
          <Image
          src={image3}
          alt="image"
          width={263}
          height={410}
          className="lg:hidden mt-10">
          </Image>
          <Image
          src={image3}
          alt="image"
          className="hidden lg:block image2">
          </Image>
        </div>
      </div>
      <div className="div div lg:flex lg:flex-row lg:p-20 lg:justify-around">
        <div className="lg:flex lg:flex-col lg:justify-center lg:items-start ">
          <h2 className="text-center lg:text-left text-3xl font-bold my-4 lg:text-5xl lg:pr-40">Non commodo nec</h2>
          <p  className="text-center lg:text-left lg:pr-40 lg:text-xl">Laoreet amet, lacus sed faucibus. Nec, natoque semper rutrum dui. Curabitur in commodo pretium lacinia feugiat. A ultricies quis commodo, nisl, vestibulum, feugiat dolor. Tincidunt orci consequat, pellentesque leo dui nunc ac, amet. A proin pulvinar nec nibh bibendum. Nec mi mattis vulputate dictum platea pharetra, id id.</p>
        </div>
        <div className="flex flex-col justify-center items-center w-full lg:pl-20">
          <Image
          src={image4}
          alt="image"
          width={355}
          height={410}
          className="image3 mt-10">
          </Image>
        </div>
      </div>
      <div className="w-full lg:flex flex-col las lg:p-10">
        <div className="almost-footer flex flex-col justify-center items-center w-full">
          <Image
          src={screen}
          alt=""
          width={361}
          height={257}
          className="laas">
          </Image>
        </div>
        <div className="bg_gray px-4 pb-20 flex flex-col justify-center items-center lg:items-start lg:pl-20">
          <h2 className="text-center text-white font-bold text-4xl lg:text-left lg:text-6xl">Launch Your App Today</h2>
          <p className="text-center font-normal text-white text-base px-8 lg:pr-32 lg:text-2xl py-8 lg:pl-0 lg:text-left">Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar.</p>
          <button className="py-2 px-6 border-2 border-white text-white w-60 h-16 rounded-full font-bold text-2xl">Free Launch</button>
        </div>
      </div>
    </div>
    </>
  );
}
