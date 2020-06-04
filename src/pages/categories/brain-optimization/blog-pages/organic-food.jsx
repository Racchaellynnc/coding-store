import React from 'react';
import { Link } from 'react-router-dom';
import './pages.scss';
import CustomButton from '../../../../components/buttons/buttons.component'

const BrainOptPageOne = () => (
<div> 
    <div className='header'>
        <div className='text-heading'>
        </div>
        <CustomButton as={Link} to={'/'} > 
           Back to Brain Optimization
        </CustomButton>
    </div>
<div className='about'>
    <div className='image-container2'>

    </div>
    <div>
        <div className='blog-content'>
            <div className='blog-title'>
                Why is it important to eat clean, organic, healthy, and nonGMO food?  
            </div>
            <div className='blog-intro'>
                I am going to tell you about all the secrets that I have learned over the years 
                and tips for when you just can't avoid your food cravings.'
            </div>
            <div className="blog-text">
                <div className="heading">
                    Lets start with GMOS.
                </div>
                <div className="section">
            The bottom line is that not all GMOS are terribly bad for you, but some are very dangerous for your health. 
            Lets talk about what this means. <br />When you google "Are Gmos bad for you?" You will find multiple articles stating that 
            there is no proof or scientific evidence that GMOs have negative health consequences. One reason that statement is 
            being published all over the internet
            is because Docters are making billions of money off of the diseases that are caused by the food that these large corportations are selling us. GMOs are banned 
            in other countries that did the research and found out that the evidence was enough to eliminate them.
            The problem in the United States is that Corporations do not want to loose there precious money so they continue to hide the truth.
            Like I said, Not all Gmos are terribly bad and they are extremely hard to avoid. ( Especially if you are on a budget.)
            With that being said, I am going to tell you the most important GMO to stay away from.
                </div>
                <div className="section">    
            Corn.<br></br><br></br>
            This is important because GMO corn is injected with toxins that literally break your DNA cells and cause toxic
            damage to the inside of your body. They use these toxins to instantly kill worms that eat corn. As soon as they take a bite of the toxic corn they are dead. 
            I always check the label and if does not say NON-GMO or if it has any kind of corn, don't buy it. 
            My family buys organic corn tortillas even though they 
            are more expensive. It is worth it to know that I am not eating toxic food. I have found that Organic canned corn is the same price as
            as the non-organic at my local safeway, so that is really cool. If organic corn tortillas are too expensive for your family, I recommend using flour. I know that 
            corn tortillas are amazing and if you can't avoid gmos corn I am going to suggest doing your body a favor and finding a good detox to use on a regular basis.'
            Now, most importantly, I hope you all read the research article that I am about to share with you because if I havn't changed your mind,
            then maybe the facts and statistics will.'
            </div>
        <div className="section">
            Please take the time to read all the information on this website. It will give you so much knowledge. It helped me so much. I used to suffer from Celiacs Disease and
            now I have completley changed my life for the better and it all started with me reading the information on this website. 
            
                </div>
        <div className='section'>
            <a className='button' href="https://www.responsibletechnology.org/science-guide/health-risks/">Click here to learn more.</a>
        </div> 
        <div className='section'>
            Here are some examples of my favorite organic corn products that I highly recommend. <br></br>
        </div>
            <div className="links">
            {/* Organic Doritos affiliate link */}
            <div className="link">
                <a href="https://www.amazon.com/gp/product/B0792LF5DZ/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0792LF5DZ&linkCode=as2&tag=coderality777-20&linkId=f4a3934e85f2602005dc60e96fa35013">
                <img border="0" alt="product" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B0792LF5DZ&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=coderality777-20" ></img></a>
                <img src="//ir-na.amazon-adsystem.com/e/ir?t=coderality777-20&l=am2&o=1&a=B0792LF5DZ" alt="" ></img>
                </div>
            
            {/* Organic Tortillas affiliate link */}
            <div className="link">
                <a href="https://www.amazon.com/gp/product/B07K2N4FTP/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07K2N4FTP&linkCode=as2&tag=coderality777-20&linkId=701c6e9f5d4abec0474567edbc239470">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B07K2N4FTP&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=coderality777-20" alt='product'></img></a>
                <img src="//ir-na.amazon-adsystem.com/e/ir?t=coderality777-20&l=am2&o=1&a=B07K2N4FTP"alt=""></img>
            </div>
            <div className="link">
            {/* Organic blue taco shells affiliate link */}
                <a href="https://www.amazon.com/gp/product/B00K7XVR7A/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00K7XVR7A&linkCode=as2&tag=coderality777-20&linkId=739b81adf92b9d8d73a1267d08f0863b">
                <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00K7XVR7A&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=coderality777-20" alt='product' ></img>
                </a><img src="//ir-na.amazon-adsystem.com/e/ir?t=coderality777-20&l=am2&o=1&a=B00K7XVR7A" alt="" ></img>
              </div>  
            {/* Nongmo soda affiliate link */}
        <div className="link">
            <a href="https://www.amazon.com/gp/product/B00ZK6KUUY/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00ZK6KUUY&linkCode=as2&tag=coderality777-20&linkId=e1eaf69b89c38c3225ab9ab1ec7d9e40">
            <img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00ZK6KUUY&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL160_&tag=coderality777-20" alt='product'></img></a>
            <img src="//ir-na.amazon-adsystem.com/e/ir?t=coderality777-20&l=am2&o=1&a=B00ZK6KUUY" alt='product'></img>
        </div>
    </div>
    </div>
        <div className="heading">
            Organic Lifestyle
        </div>
        <div className="section">
            I began my organic lifestyle 2 years ago after finding out about the benefits. One thing that I have noticed is that the cost of
            eating turns out to be the same as before. I think the reason alot of people don't want to eat organic is because of the price. 
            I have noticed that when I only eat organic foods, I don't get alot of extra food cravings. That alone cuts out the cost of cookies,
            ice-cream and other food that my body no longer craves. Yes, the cost of Organic Meat, Bread, and pretty much everything is a few dollars 
            more, but it the quality of what I eat keeps me fuller and happier longer. Like the old saying goes, "Quality over quantity". 

        </div>
        <div className="heading">
            Eating clean. 
        </div>
        <div className="section">
            Eating NON-GMO and Organic is great but it isn't enough. 
        </div>

        </div>
        </div>
    </div>
</div>
)

export default BrainOptPageOne;