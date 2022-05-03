import React, { Component } from 'react';
import Style from './asside.module.scss';
import AssideCard from './AssideCard';
import UserProfCard from './UserProfileCard';

export default function Asside() {

     return (
          <div className={Style.asside_container}>
               {/* Curr user card x1 */}

               <UserProfCard />
               {/* Suggestions For You line - > See all */}
               <div className={Style.suggestion_text_line}>
                    <p>Suggestions For You</p>
                    <button>See all</button>
               </div>
               {/* Container suggestion followers  x5 cards */}
               <AssideCard />
               <AssideCard />
               <AssideCard />
               <AssideCard />
               <AssideCard />
               {/* insta asside footer */}
               <div className={Style.footer_container}>
                    <div className={Style.footer_links}>
                         <a>About</a>
                         <a>· Help</a>
                         <a>· Press</a>
                         <a>· Api</a>
                         <a>· Privacy</a>
                         <a>· Terms ·</a>
                         <a> Location ·</a>
                         <a> Top Accounts</a>
                         <a>· Hashtags</a>
                         <a>· Language</a>
                    </div>
                    <div className={Style.footer_copyR_text}>
                         <p>© 2022 INSTAGRAM FROM META</p>
                    </div>
               </div>

          </div>
     );

}

