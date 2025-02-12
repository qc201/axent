"use client";
import React from "react";
import QaCard from "@/components/QaCard";
import MaskText from "@/components/MaskText";

export default function Questions() {
  return (
    <div className="flex flex-col md:px-40 px-5 pt-16">
      <MaskText
        phrases={["Introducing intelligent toilets"]}
        className="font-custom text-primary sm:text-5xl text-xl font-extrabold py-10"
      />
      <QaCard
        question={"What is an intelligent toilet?"}
        answer={
          "It is a toilet system that cleans you with a gentle spray of warm water while you use it."
        }
      />
      <QaCard
        question={"What are the benefits?"}
        answer={
          "Cleaning with water after using the toilet is more hygienic and softer on your skin than paper. Reducing the amount of paper waste is good for the environment too. The lady wash function provides specific feminine hygiene benefits."
        }
      />
      <QaCard
        question={
          "How is an intelligent toilet different from a standard toilet?"
        }
        answer={
          "The water cleansing benefit is the only difference you will notice. In every other way, an intelligent toilet is the same as a standard toilet."
        }
      />
      <QaCard
        question={"Is an intelligent toilet easy to use?"}
        answer={
          "Yes, it is very easy to use. The functions are controlled by a single dial. Some models have a remote control for extra convenience."
        }
      />
      <QaCard
        question={"How does an intelligent toilet work?"}
        answer={
          "An intelligent toilet washes you while you sit on it. The warm jet of water as well as the water temperature is controlled by a single dial, which is located discreetly on the right of the toilet bowl."
        }
      />
      <QaCard
        question={"Do I need to dry myself with paper or a towel?"}
        answer={
          "This depends on the model and your personal preference. Some models have an integrated warm air dryer. The gentle air flows across your skin, leaving you feeling clean, fresh and dry. The air temperature is adjustable using an easy-to-use control dial."
        }
      />
      <QaCard
        question={"What models are available?"}
        answer={
          "Intelligent toilets provides you with all you need for a pleasant and hygienic bathroom experience. Some models have enhanced features that include an automatic odour extractor and a warm air dryer."
        }
      />

      <MaskText
        phrases={["Hygiene and health benefits"]}
        className="font-custom text-primary sm:text-5xl text-xl font-extrabold py-10"
      />
      <QaCard
        question={"Why should I clean myself with water?"}
        answer={
          "We spend a lot of time showering and bathing. It is a natural part of our lives. We can remain fresh throughout the day if we clean ourselves with water after using the bathroom."
        }
      />
      <QaCard
        question={"How do we know that this is the best way to use the toilet?"}
        answer={
          "Using water to stay fresh when visiting the bathroom is nothing new – many other cultures, both ancient and modern, have used water in this way. Water sustains and hydrates us, so it is just a small step to start cleaning ourselves with water after using the toilet."
        }
      />
      <QaCard
        question={"Can anyone use an intelligent toilet?"}
        answer={
          "Yes, an intelligent toilet is suitable for general use by most people. It may also benefit those who have skin conditions as it provides a thorough and gentle clean."
        }
      />
      <QaCard
        question={
          "Is an intelligent toilet suitable for older people or those with disabilities?"
        }
        answer={
          "An intelligent toilet may provide a degree of independence for a disabled person, depending on the nature of their disability. The single dial control makes an intelligent toilet extremely easy to use. Some models may be particularly beneficial as they provide a toilet bidet and air-drying unit all in one. Please seek advice from your healthcare provider before installing any bathroom facilities for a disabled person. Always use a qualified professional when installing a new bathroom appliance."
        }
      />
      <QaCard
        question={"Can an intelligent toilet be used during pregnancy?"}
        answer={
          "Yes, it can be used safely throughout pregnancy. The water flow is warm, gentle and relaxing. The single dial control makes the intelligent toilet extremely easy to use. The lady wash function provides feminine hygiene benefits for women at any stage of their lives."
        }
      />

      <MaskText
        phrases={["The technology behind intelligent toilets"]}
        className="font-custom text-primary sm:text-5xl text-xl font-extrabold py-10"
      />
      <QaCard
        question={"Is installing an intelligent toilet a big investment?"}
        answer={
          "The installation costs do not differ significantly from the cost of installing a conventional toilet."
        }
      />
      <QaCard
        question={"What structural alterations, if any, will be required?"}
        answer={
          "All that you need is a connection to a power supply. Check that the electrical connections in your bathroom are in the correct position before installing an intelligent toilet. Alternatively, your electrical installer will need to rerun the cable to allow the intelligent toilet to operate. Some installations will require alterations to the plumbing to connect the water supply."
        }
      />
      <QaCard
        question={"Can I take my intelligent toilet with me when I move home?"}
        answer={
          "The intelligent toilet is designed and installed for permanent use. However, the VERA and ELI e-bidet seats are designed with rented properties in mind. These can be retrofitted in any apartment and removed easily so you can take them with you when you move out."
        }
      />
      <QaCard
        question={
          "Do I need to ask my landlord for permission to install an intelligent toilet?"
        }
        answer={
          "This really depends on your rental agreement. If in doubt, check with your landlord."
        }
      />
      <QaCard
        question={"How long will it take to install?"}
        answer={
          "A qualified fitter can install the intelligent toilet in approximately one hour, provided that there are no structural modifications."
        }
      />
      <QaCard
        question={"How do the usage costs compare with a standard toilet?"}
        answer={
          "This all depends on the number of people in the household, the model you have, the functions you use and the combination of power sources used. An intelligent toilet uses about the same amount of water as a modern low-flush toilet. As with standard toilets, water charges will vary depending on the amount of usage and the prices of utility services in your area. You will also enjoy a cost saving from spending less on toilet paper."
        }
      />
      <QaCard
        question={"How do I clean the intelligent toilet?"}
        answer={
          "Very easily! The intelligent toilet has a stain-resistant surface, a rimless pan and a removable lid, making it much easier to keep clean than a standard toilet."
        }
      />
      <QaCard
        question={"What happens if my intelligent toilet stops working?"}
        answer={
          "In the rare event that a malfunction occurs and you are unable to resolve the problem, please contact the AXENT customer service team."
        }
      />
    </div>
  );
}
