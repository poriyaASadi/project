// all let && const 
const $ = document;

import * as name from './Var-all.js';

import {post_user , mainComment , comment_icon_user_main , back_comment_icon , input_comment_post , button_creat_post_comment  , likePostValue 
, like_heart_post , save_post_icon , text_more_post , active_icon_branch , stack , openBlurAlert , prantIcon_ShowAlert ,
videoPostUser,timeSendUser_comment, moreIcon_post   } from './Var-all.js';

// ------------- post user 
post_user.addEventListener('click' , (event) => {
  //console.log(event.currentTarget);
  let parentEkm = event.currentTarget;
if (event.target.className.includes('Delet')){
  parentEkm.remove();
  close_box_infoPost()
}
if (event.target.className.includes('report')) {
  document.querySelector('.box-report').classList.remove('hidden');
  close_box_infoPost()
  setInterval(() => {
    document.querySelector('.box-report').classList.add('hidden');
  }, 3000);
}
});


// --------- btn click icon info post user
moreIcon_post.addEventListener('click' , () => {
  close_box_infoPost()
});

function close_box_infoPost () {
  $.querySelector('#box-infos-postUser').classList.toggle('hidden');
}

//  ----- icon comment open chat 
comment_icon_user_main.forEach((item) => {
item.addEventListener('click' , () => {
  $.getElementById('comment_main').classList.remove('-top-[100vh]')
})
})
// ----- icon back comment
back_comment_icon.forEach((item) => {
 item.addEventListener('click' , () => {
  $.getElementById('comment_main').classList.add('-top-[100vh]');
 })
})

button_creat_post_comment.addEventListener('click' , (e) => {
  let valueInputComment = input_comment_post.value;
   creatPostComment(valueInputComment);
   input_comment_post.value = '' 
});
function creatPostComment (value_input) {
  let data = new Date();
  const fulllData = `${data.getHours()}m`;
    mainComment.insertAdjacentHTML('beforebegin',`
    <div class="mb-2 ">
    <div class="flex justify-between items-center mb-2">
   <div class="flex justify-center items-center gap-x-2">
    <div class="w-9 h-9 rounded-full border-2 border-red-400 cursor-pointer ">
      <img src="./images/face/5904c9ce3cfb08e4c032b5a473d5648d.png"
       class="w-full h-full object-cover rounded-full" alt="">
    </div>
    <h6 class="dark:text-zinc-300">mariya</h6>
   </div>
   <div class="ml-2 w-full">
    <p
    class="text-zinc-500 dark:text-zinc-400" id="text_more_post"
    >${value_input} </p>
   </div>
    </div>
   <div>
    <div class="flex justify-start items-center gap-x-2">
      <span id="timeSendUser-comment" class="text-zinc-400 ">${fulllData}</span>
      <svg class="w-4 h-4 dark:text-white">|
        <use href="#activityfeed"></use>
      </svg>
      <span class="text-sm text-zinc-500  dark:text-zinc-400">Replay</span>
    </div>
   </div>
  </div>
    `);
};
input_comment_post.addEventListener('keydown' , (e) => {
   if (e.keyCode === 13) {
    creatPostComment(input_comment_post.value);
    input_comment_post.value = '';

   }
})
// ------------------------------
// =========== heart like post ;

let likePost = Math.floor(Math.random() * 1000);
function LikeUserPost () {


  this.LikeAdder = function () {
    likePost += 1  
    this.pushValue();
 }

 this.LikeRemover = function () {
  likePost -= 1  
   this.pushValue();
 }
 
 this.pushValue = function () {
  likePostValue.forEach(item => {
    item.innerHTML = likePost;
   })
 }

 
}

let likeUserGenariat = new LikeUserPost();

like_heart_post.forEach(function heart_like (item) {
    let changValue = false
    item.addEventListener('click' ,() => {  
    if (!changValue) {
      item.style.color = 'red';
      changValue = true; 
      likeUserGenariat.LikeAdder();
    }
    else{
        likeUserGenariat.LikeRemover();
        changValue = false;
        if (document.documentElement.classList == 'dark') {
          item.style.color = '#fff'
        }else{
          item.style.color = 'black';
        }
    }
  })
})

// =========== end ====
// icon save post <=========
let cheangCode = false
save_post_icon.addEventListener('click' , function () {
 // save_post_icon.children.href = '#onsave'
 if (!cheangCode){
  save_post_icon.firstElementChild.setAttribute('href' , '#onsave');
  cheangCode = true
 }else{
  save_post_icon.firstElementChild.setAttribute('href' , '#save')
  cheangCode = false
 }
});
// ========== end ----
//  text_more_post =====> 
text_more_post.forEach(text_post => {
  text_post.addEventListener('click' , () =>  text_post.classList.toggle('line-clamp-2'));
});
// =========== text more post end =======

// user_acount.addEventListener('click' , () => {
//   this.window.location = 'acountUser.html';
// })
// -------------------------------
// ========like_user start 
// like_user.addEventListener('click' , () => {
  
// })
// -------------------------------
// ---------- Notification user alert show & hidden
stack.forEach((item) => {
  item.addEventListener('click' , (e) => {
   let dataValue = e.target.dataset.id
    if (dataValue == 'user') {
     active_icon_branch.classList.add('right-0');
      hidden_elm('box-stack' , 'box-user') 
    }else {
       active_icon_branch.classList.remove('right-0');
       hidden_elm('box-user' , 'box-stack')
    }
  })
})

function hidden_elm (stack,user) {
 document.getElementById(stack).classList.add('hidden');
 document.getElementById(user).classList.remove('hidden');
}
let falseValue = false

window.addEventListener('load' ,  () => {
  likeUserGenariat.pushValue();
 prantIcon_ShowAlert.firstElementChild.lastElementChild.firstElementChild.setAttribute('href' , '#bell-alert')
 $.getElementById('animation_alert').classList.remove('hidden');
 })
 
prantIcon_ShowAlert.addEventListener('click' , () => {
  if (!falseValue) {
    openBlurAlert.classList.remove('invisible');
    prantIcon_ShowAlert.parentElement.className = 'w-[85%] h-full absolute left-0 transition-all right-0 top-0 bottom-0 bg-white dark:bg-black z-30 p-1 dark:text-white';
    $.getElementById('invis_alert_box').classList.remove('invisible');
    falseValue = true;
    prantIcon_ShowAlert.firstElementChild.lastElementChild.firstElementChild.setAttribute('href' , '#bell');
    $.getElementById('animation_alert').classList.add('hidden');
  
  }else {
    openBlurAlert.classList.add('invisible');
    prantIcon_ShowAlert.parentElement.className = 'w-[85%] h-full absolute -left-[85%] transition-all right-0 top-0 bottom-0 bg-white dark:bg-black z-30 p-1 dark:text-white';
    $.getElementById('invis_alert_box').classList.add('invisible');
    falseValue = false;
  }
});
// =========================


// swiper slide post user code start


const swiper = new Swiper(".swiper", {
  loop: true,
  //direction:'vertical',   // عمودی
  navigation: {
    nexrEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
   // dynamicBullets: true,
  },
  on: { 
     slideChange: function (items) {
        
     }
  }
  });

//  swiper post style user end

    //   let swiperSlide = document.querySelectorAll('.swiper-slide');
    //   let indexSwiperSlide = items.slides[items.activeIndex].children[0]
    //   let windowUser =  window.innerHeight / 2 + window.scrollY;
         
    //   swiperSlide.forEach(slide => {
    //     let slideAbout = slide.getBoundingClientRect();
    //     if (slideAbout.top <= windowUser && slideAbout.bottom >= windowUser){
    //       if (indexSwiperSlide.tagName === 'VIDEO'){ 
    //         indexSwiperSlide.play()
    //       }else if  (indexSwiperSlide.pause){
    //         indexSwiperSlide.play();
    //       }
    //     } 
    //   })     

    
window.addEventListener('click' , (e) => {
  if (e.target.tagName  === 'VIDEO') {
    let videos =  document.querySelectorAll('video')
    videos.forEach(item => {
     let windowUser =  window.innerHeight / 2 + window.scrollY;
     let slideAbout = item.getBoundingClientRect();
     if (slideAbout.top <= windowUser && slideAbout.bottom >= windowUser){
      if (item.parentElement.className == 'swiper-slide swiper-slide-active'){
        item.play();
        item.setAttribute('loop' , 'true');
      }else {
        item.pause()
        item.removeAttribute('loop');
      }
} else{
  item.pause();
}
 item.ondblclick = () => {
 item.pause()
 item.removeAttribute('loop');
}
  })
 
  }
})

// function stop (item) {
//   item.pause();
//   item.removeAttribute('loop');   
// } 