import React from "react";
import "./categoryProduct.css";
import Product from "./Product";
import ProductCategory from "./ProductCategory";
import { useStateValue } from "./StateProvider";
const CategoryProduct = () => {
  const [{ category }, dispatch] = useStateValue();
  return (
    <div className="category-product">
      {category.route === "beauty_picks" && (
        <>
          <div className="product-header">
            <h2>Beauty and Personal care</h2>
            <p>Shop makeup, skin care, hair care, fragrances and more</p>
          </div>
          <div className=" product-container">
            <ProductCategory
              id={1}
              image="https://images-na.ssl-images-amazon.com/images/I/41z2VjDm1fL.jpg"
              title="Listerine Total Care Anticavity Fluoride Mouthwash, 6 Benefit Mouthwash to Help Kill 99% of Germs that Cause Bad Breath, Prevent Cavities, Strengthen Enamel & More, Fresh Mint Flavor, 1 L"
              rating={2}
              price={14.4}
            />
            <ProductCategory
              id={2}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/41YuSwjJUIL.jpg"
              }
              title="CeraVe Hydrating Facial Cleanser | Moisturizing Non-Foaming Face Wash with Hyaluronic Acid, Ceramides & Glycerin | 16 Fluid Ounce"
              rating={4}
              price={24.5}
            />
            <ProductCategory
              id={3}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/31-CMmU39zL.jpg"
              }
              title="Olaplex Hair Perfector No 3 Repairing Treatment
by Olaplex"
              rating={4}
              price={19.5}
            />
            <ProductCategory
              na
              id={4}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/41LUyB4EOaL.jpg"
              }
              title="Jade Roller & Gua Sha, Face Roller, Facial Beauty Roller Skin Care Tools, BAIMEI Rose Quartz Massager for Face, Eyes, Neck, Body Muscle Relaxing and Relieve Fine Lines and Wrinkles"
              rating={5}
              price={33.5}
            />
            <ProductCategory
              id={5}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/41BGSSgc1KL.jpg"
              }
              title="Neutrogena Hydro Boost Hyaluronic Acid Hydrating Water Gel Daily Face Moisturizer for Dry Skin, Oil-Free, Non-Comedogenic Face Lotion, 1.7 fl. oz"
              rating={4}
              price={20}
            />
            <ProductCategory
              na
              id={6}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/41+OcSh2YsL.jpg"
              }
              title="Neutrogena Makeup Remover Cleansing Face Wipes, Daily Cleansing Facial Towelettes to Remove Waterproof Makeup and Mascara, Alcohol-Free, Value Twin Pack, 25 Count, 2 Pack"
              rating={3}
              price={11.9}
            />
            <ProductCategory
              id={7}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/41l-4yOemPL.jpg"
              }
              title="CeraVe AM Facial Moisturizing Lotion SPF 30 | Oil-Free Face Moisturizer with Sunscreen | Non-Comedogenic | 3 Ounce"
              rating={4}
              price={19.9}
            />
            <ProductCategory
              na
              id={8}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/5118XlrWwlL.jpg"
              }
              title="CeraVe Moisturizing Cream | Body and Face Moisturizer for Dry Skin | Body Cream with Hyaluronic Acid and Ceramides | 19 Ounce
by CeraVe"
              rating={5}
              price={28.9}
            />
          </div>
        </>
      )}
      {category.route === "amazon_basics" && (
        <>
          <div className="product-header">
            <h2>Amazon basics and common accessories</h2>
            <p>Price and other details may vary based on size and color</p>
          </div>
          <div className=" product-container">
            <ProductCategory
              id={9}
              image={
                "https://m.media-amazon.com/images/I/71i08qnZeDL._AC_UL320_.jpg"
              }
              title="Amazon Basics Classic Puresoft PU-Padded Mid-Back Office Computer Desk Chair with Armrest - Black"
              rating={4}
              price={115.9}
            />
            <ProductCategory
              na
              id={10}
              image={
                "https://m.media-amazon.com/images/I/91-K533J3nL._AC_UL320_.jpg"
              }
              title="Amazon Basics Edge Free Projector Screen 120-Inch 16: 9, 4K"
              rating={4}
              price={499.9}
            />
            <ProductCategory
              id={11}
              image={
                "https://m.media-amazon.com/images/I/71s7HbyqzEL._AC_UL320_.jpg"
              }
              title="Amazon Basics Hardside Carry-On Spinner Suitcase Luggage - Expandable with Wheels - 21 Inch,"
              rating={4}
              price={220}
            />
            <ProductCategory
              na
              id={12}
              image={
                "https://m.media-amazon.com/images/I/81K+1MCVhML._AC_UL320_.jpg"
              }
              title="Amazon Basics Double Braided Nylon Lightning to USB Cable, Advanced Collection, MFi Certified Apple iPhone Charger, Dark Gray, 6 Foot"
              rating={5}
              price={14.9}
            />
            <ProductCategory
              id={13}
              image={
                "https://m.media-amazon.com/images/I/719JuUxcZuL._AC_UL320_.jpg"
              }
              title="Amazon Basics L-Shape Office Corner Desk, 55-Inch, Espresso"
              rating={4}
              price={69.9}
            />
            <ProductCategory
              id={14}
              image={
                "https://m.media-amazon.com/images/I/91qC+UYYwIL._AC_UL320_.jpg"
              }
              title="Amazon Basics Underseat Carry-On Rolling Travel Luggage Bag, 14 Inches, Grey"
              rating={3}
              price={79.9}
            />
            <ProductCategory
              id={15}
              image={
                "https://m.media-amazon.com/images/I/81gnyhw-npL._AC_UL320_.jpg"
              }
              title="Amazon Basics 35.5L Storage Bench Ottoman, Beige"
              rating={4}
              price={45}
            />
            <ProductCategory
              id={16}
              image={
                "https://m.media-amazon.com/images/I/719jeVMtYQL._AC_UL320_.jpg"
              }
              title="Amazon Basics Automatic Open Travel Umbrella with Wind Vent - Green"
              rating={5}
              price={28.9}
            />
          </div>
        </>
      )}

      {category.route === "home_bedding" && (
        <>
          <div className="product-header">
            <h2>Amazon basics and common accessories</h2>
            <p>Price and other details may vary based on size and color</p>
          </div>
          <div className=" product-container">
            <ProductCategory
              id={17}
              image={
                "https://m.media-amazon.com/images/I/81efXN-0QeL._AC_UL320_.jpg"
              }
              title="1500 Supreme Collection Bed Sheet Set - Extra Soft, Elastic Corner Straps, Deep Pockets, Wrinkle & Fade Resistant Hypoallergenic Sheets Set,"
              rating={4}
              price={23}
            />
            <ProductCategory
              na
              id={18}
              image={
                "https://m.media-amazon.com/images/I/911T99JjMsL._AC_UL320_.jpg"
              }
              title="Lodge Bedspread Full/Queen Size Quilt with 2 Shams. Cabin 3-Piece Reversible All Season Quilt Set. Rustic Quilt Coverlet Bed Set..."
              rating={4}
              price={189.9}
            />
            <ProductCategory
              id={19}
              image={
                "https://m.media-amazon.com/images/I/71g0htjyONL._AC_UL320_.jpg"
              }
              title="Great Bay Home Extra Soft 100% Turkish Cotton Flannel Sheet Set. Warm, Cozy, Heavyweight, Luxury Winter Deep Pocket Bed Sheets in"
              rating={4}
              price={33.5}
            />
            <ProductCategory
              id={20}
              image={
                "https://m.media-amazon.com/images/I/81uFkMprpHL._AC_UL320_.jpg"
              }
              title="Casco Bay Coastal Collection 3 Piece Quilt Set with Shams. Reversible Beach Theme Bedspread Coverlet. Machine Washable. (Full / Queen,"
              rating={5}
              price={46.8}
            />
            <ProductCategory
              id={21}
              image={
                "https://m.media-amazon.com/images/I/81RPda8XXdL._AC_UL320_.jpg"
              }
              title="Amazon Basics 8-Piece Ultra-Soft Microfiber Bed-In-A-Bag Comforter Bedding Set - Full/Queen, Navy Oversized Gingham"
              rating={4}
              price={21.7}
            />
            <ProductCategory
              na
              id={22}
              image={
                "https://m.media-amazon.com/images/I/61DpIiZA3FL._AC_UL320_.jpg"
              }
              title="100% Cotton Percale Sheets. Crisp, Breathable Combed Cotton Best-Bedding Sheets for Bed. Fits Mattress 16'' Deep Pocket. Leila Collection"
              rating={3}
              price={14.8}
            />
            <ProductCategory
              na
              id={23}
              image={
                "https://m.media-amazon.com/images/I/91Uuiwz0-nL._AC_UL320_.jpg"
              }
              title="Modern Bedspread Full/Queen Size Quilt with 2 Shams. Modern 3-Piece Reversible All Season Quilt Set. Navy and White Quilt Coverlet Bed Set."
              rating={4}
              price={74.6}
            />
            <ProductCategory
              id={24}
              image={
                "https://m.media-amazon.com/images/I/91xmmFoNhWL._AC_UL320_.jpg"
              }
              title="100% Cotton Waffle Weave Thermal Blanket. Super Soft Season Layering. Mikala Collection (Full/Queen, Blush Pink)"
              rating={5}
              price={11.4}
            />
          </div>
        </>
      )}

      {category.route === "home_fit" && (
        <>
          <div className="product-header">
            <h2>Sports and Outdoors</h2>
            <p>
              Sports and Outdoors Shop fitness and exercise, outdoor recreation,
              team gear and more
            </p>
          </div>
          <div className=" product-container">
            <ProductCategory
              id={25}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/41MXvr5tYDL.jpg"
              }
              title="DEGOL Skipping Rope with Ball Bearings Rapid Speed Jump Rope Cable and 6” Memory Foam Handles Ideal for Aerobic Exercise Like Speed Training, Extreme Jumping, Endurance Training and Fitness Gym
by DEGOL"
              rating={4}
              price={23}
            />
            <ProductCategory
              id={26}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/51OO3MXlqKL.jpg"
              }
              title="Fit Simplify Resistance Loop Exercise Bands with Instruction Guide and Carry Bag, Set of 5"
              rating={4}
              price={189.9}
            />
            <ProductCategory
              id={27}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/51N2vGDng5L.jpg"
              }
              title="Master Lock 8143D Combination Bike Lock, 4 ft long, Black
by Master Lock"
              rating={4}
              price={33.5}
            />
            <ProductCategory
              id={28}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/51LHuTczHqL.jpg"
              }
              title="Spalding NBA Street Outdoor Basketball"
              rating={5}
              price={46.8}
            />
            <ProductCategory
              na
              id={29}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/41JHxJpyGQL.jpg"
              }
              title="SUNCOO Protective KN95 Face Mask - 20 Pack, 5 Layers Cup Dust Mask Protection Against PM2.5 Dust, Smoke and Haze-Proof, Designed for Men, Women, Essential Workers - White"
              rating={4}
              price={21.7}
            />
            <ProductCategory
              id={30}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/51JNxIyXL1L.jpg"
              }
              title="Booty 3 Resistance Bands for Legs and Butt, Exercise Fitness Bands with Video Workout for Women"
              rating={3}
              price={14.8}
            />
            <ProductCategory
              id={31}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/51N2L7QzDmL.jpg"
              }
              title="VEICK Resistance Bands Set,Workout Bands,Exercise Bands,5 Tube Fitness Bands with Door Anchor,Handles,Portable Bag,Legs Ankle Straps for Musle Training, Physical Therapy, Shape Body,Home Workouts"
              rating={4}
              price={74.6}
            />
            <ProductCategory
              na
              id={32}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/41uzlqPYOML.jpg"
              }
              title="GigaTent Pop Up Pod Changing Room Privacy Tent – Instant Portable Outdoor Shower Tent, Camp Toilet, Rain Shelter for Camping & Beach – Lightweight & Sturdy, Easy Set Up, Foldable - with Carry Bags"
              rating={5}
              price={11.4}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryProduct;
