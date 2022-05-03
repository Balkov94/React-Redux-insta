import React, { Component } from 'react';
import Style from './postsContainer.module.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';

export default function PostCard() {

     return (
          <div className={Style.postCard}>
               {/* CARD HEADER */}
               <div className={Style.postCard_header}>
                    <div className={Style.postCard_header_prof_img}>
                         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzgbNm8ZfUF5m2f7QQRmGeTMhbbNgRRE6SyA&usqp=CAU' alt='prof_img'></img>
                    </div>
                    <div className={Style.postCard_header_prof_username}>
                         <p>some Username</p>
                    </div>
                    <div className={Style.postCard_header_icon_options}>
                         <MoreHorizIcon sx={{ fontSize: 20 }} />
                    </div>

               </div>
               {/* CARD main photo */}
               <div className={Style.postCard_img_container}>
                    <div>
                         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_DO0jQ_sLFzW6oCkJnhCAe3NnTt_wlV_QQ&usqp=CAU' alt='mountain_img'>
                         </img>
                    </div>

               </div>
               {/* icons (like / comment/send) */}
               <div className={Style.postCard_icons_container}>
                    <div className={Style.postCard_icons_like_com_shere}>
                         <FavoriteBorderIcon sx={{ fontSize: 20 }} />
                         <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: 20, }} />
                         <SendIcon sx={{ fontSize: 20 }} />
                    </div>
                    <div className={Style.postCard_icons_bookmark}>
                         <BookmarkBorderOutlinedIcon sx={{ fontSize: 20 }} />
                    </div>

               </div>
               {/* likes container */}
               <div className={Style.postCard_likes_container}>
                    <p>Liked by name, and 36 others</p>
               </div>
               {/* img text */}
               <div className={Style.postCard_img_text_container}>
                    <p>Photo made by NB 1996 ... more ( to open div</p>
                    <p>view all camments (do the same like  ...more)</p>
               </div>

               <div className={Style.postCard_write_coment}>
                    <div className={Style.postCard_emogi_Icon_container}>
                         <EmojiEmotionsOutlinedIcon sx={{ fontSize: 20 }} />
                    </div>
                    <div className={Style.postCard_write_field}>
                         <input type="text" placeholder="Add a comment..."></input>
                    </div>
                    <div className={Style.postCard_post_button_container}>
                         <button>Post</button>
                    </div>

               </div>
          </div>
     );

}

