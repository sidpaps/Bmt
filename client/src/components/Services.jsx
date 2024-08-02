import React from "react";
import { MdAccountBalanceWallet, MdAddCard, MdSend } from "react-icons/md";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Services that we
          <br />
          continue to improve.
        </h1>
        <p className="text-left my-2 justify-center  text-white font-light md:w-9/12 w-11/12 text-base">
          We provide low cost Crossborder payment
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-center ali items-center">
        <ServiceCard
          title="Connect Wallet"
          icon={<MdAccountBalanceWallet fontSize={26}style={{ color: "#ffa869" }} />}
          subtitle="Link your preferred payment method, such as a bank account or credit card, to set up your app wallet."
        />
        <ServiceCard
          title="Add Money to Wallet"
          icon={<MdAddCard fontSize={26} style={{ color: "#ffa869" }} />}
          subtitle="Transfer funds from your linked payment method into your wallet to ensure sufficient balance for the transaction."
        />
        <ServiceCard
          title="Select Recipient and Send"
          icon={<MdSend fontSize={26} style={{ color: "#ffa869" }} />}
          subtitle="Choose the recipient, enter the amount to send, and confirm the transaction. A confirmation message will appear once the transfer is successful."
        />
      </div>
    </div>
  </div>
);

export default Services;
