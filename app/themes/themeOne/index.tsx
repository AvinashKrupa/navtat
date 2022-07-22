import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Header from "./components/Header";
import MenuCategorySlider from "./components/MenuCategorySlider";
import FestiveSaleBanner from "./components/FestiveSaleBanner";
import ShoppingBagBlock from "./components/ShoppingBagBlock";
import CompaignOnOutFit from "./components/CompaignOnOutFit";
import KurtisForOccassion from "./components/KurtisForOccassion";
import MustInWardrobe from "./components/MustInWardrobe";
import ShopByPrice from "./components/ShopByPrice";
import ShopVirtuallyWithExpert from "./components/ShopVirtuallyWithExpert";
import BringInEssence from "./components/BringInEssence";
import TopCollections from "./components/TopCollections";
import ShopByPreference from "./components/ShopByPreference";
import WhatsNewThisMonth from "./components/WhatsNewThisMonth";
import NavTatvaTopPicks from "./components/NavTatvaTopPicks";
import ComplimentYourOutfits from "./components/ComplimentYourOutfits";
import DesignersPick from "./components/DesignersPick";
import WhyNavTatva from "./components/WhyNavTatva";
import MostSearchedStyles from "./components/MostSearchedStyles";
import WeddingSeasonIsHere from "./components/WeddingSeasonIsHere";
import ForTheLookYouDesire from "./components/ForTheLookYouDesire";
import OurValuedCustomers from "./components/OurValuedCustomers";
import OurValuedCustomerSlider from "./components/OurValuedCustomerSlider";
import SpendMoreWinMore from "./components/SpendMoreWinMore";
import NewCollections from "./components/NewCollections";
import MoreBrandsToExplore from "./components/MoreBrandsToExplore";
import MakeYourOutfitSpecial from "./components/MakeYourOutfitSpecial";
import ForTheLookYouDesireFabric from "./components/ForTheLookYouDesireFabric";
import VideoBlock from "./components/VideoBlock";
import Footer from "../../components/common/Footer";
import FooterFixedButton from "./components/FooterFixedButton";
import { CatalogService } from "../../network/gateway/Catalog";

const ThemeOne: NextPage = () => {
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [material, setMaterial] = useState([]);
  const [occasion, setOccasion] = useState([]);
  const [categoryByOccasion, setCategoryByOccasion] = useState([]);
  useEffect(() => {
    getCatalog();
    return () => {};
  }, []);

  function getCatalog() {
    CatalogService.getInstance()
      .getAllCategory()
      .then((response: any) => {
        if (response.data) {
          setCategory(response.data.data["Category By Occasion"].children);
          setBrand(response.data.data["Brands"].children);
          setMaterial(response.data.data["Material"].children);
          setOccasion(response.data.data["Occasion"].children);
          setCategoryByOccasion(
            response.data.data["Category By Occasion"].children
          );
          console.log("category", response.data.data);
        } else {
          console.log("ERROR:", response.data);
        }
      })
      .catch((error) => {});
  }

  return (
    <div className="home">
      <div className="wrapper">
        <Header />
        {/* category start */}
        <MenuCategorySlider category={category} />
        {/* banner start */}
        <FestiveSaleBanner />
        {/*  Shopping Bag start */}
        <ShoppingBagBlock />
      </div>
      {/* Select your companion to try on your Outfit */}
      <CompaignOnOutFit />
      {/* Kurtis For Every Occassion */}
      <KurtisForOccassion />
      {/* Must haves In Your Wardrobe section */}
      <MustInWardrobe />
      <div className="wrapper">
        {/* Shop By Price */}
        <ShopByPrice />
        {/* Shop virtually  with a Product Expert. */}
        <ShopVirtuallyWithExpert />
        {/* Bring in the Essence of  Holi to your wardrobe*/}
        <BringInEssence />
        {/* Top Collections */}
        <TopCollections />
        {/* Shop By Preference */}
        <ShopByPreference />
        {/* What’s New This Month */}
        <WhatsNewThisMonth />
        {/* NavTatva’s Top Picks */}
        <NavTatvaTopPicks />
        {/* Compliment your Outfits */}
        <ComplimentYourOutfits />
      </div>
      {/* Designer’s Pick */}
      <DesignersPick />
      {/* Why NavTatva? */}
      <WhyNavTatva />
      {/* Most Searched Styles*/}
      <MostSearchedStyles />
      {/* Wedding Season Is Almost Here*/}
      <WeddingSeasonIsHere />
      {/* For the look you desire*/}
      <ForTheLookYouDesire />
      {/* Our Valued Customers*/}
      <OurValuedCustomers />
      {/* Our Valued Customer Slider*/}
      <OurValuedCustomerSlider />
      {/* Spend More, Win More*/}
      <SpendMoreWinMore />
      {/* New Collections*/}
      <NewCollections />
      {/* More Brands To Explore*/}
      <MoreBrandsToExplore brand={brand} />
      {/* Make your outfits special */}
      <MakeYourOutfitSpecial />
      {/* For the look you desire */}
      <ForTheLookYouDesireFabric />
      {/* Video Block */}
      <VideoBlock />
      {/* End Video Block */}
      {/* Footer */}
      <Footer />
      {/* End Footer */}
      {/* Fixed Button */}
      <FooterFixedButton />
      {/* End Fixed Button */}
    </div>
  );
};

export default ThemeOne;